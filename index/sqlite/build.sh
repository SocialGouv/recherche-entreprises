#!/bin/sh

# exit when any command fails
set -e

# download files, convert to SQLite and export to CSV

DATA_DIR=${DATA_DIR:-"./data"}

mkdir -p "$DATA_DIR" || true

echo "-- Working in $(dirname "$0")"
cd "$(dirname "$0")" || exit

echo "-- Download datasets"

GEO_SIREN_VERSION="last"

# geo siret par département
for d in $(seq -w 1 19) 2A 2B $(seq 21 74) $(seq 76 95) 98 ""; do
  wget --progress=bar:force:noscroll -q --show-progress "https://files.data.gouv.fr/geo-sirene/$GEO_SIREN_VERSION/dep/geo_siret_$d.csv.gz" --directory-prefix="$DATA_DIR"
  gunzip "${DATA_DIR}/geo_siret_$d.csv.gz"
done

# Cas particulier Paris 75101-75120
for d in $(seq -w 1 20); do
  wget --progress=bar:force:noscroll -q --show-progress "https://files.data.gouv.fr/geo-sirene/$GEO_SIREN_VERSION/dep/geo_siret_751$d.csv.gz" --directory-prefix="$DATA_DIR"
  gunzip "${DATA_DIR}/geo_siret_751$d.csv.gz"
done

# Cas particulier DOM 971->978
for d in $(seq -w 1 8); do
  wget --progress=bar:force:noscroll -q --show-progress "https://files.data.gouv.fr/geo-sirene/$GEO_SIREN_VERSION/dep/geo_siret_97$d.csv.gz" --directory-prefix="$DATA_DIR"
  gunzip "${DATA_DIR}/geo_siret_97$d.csv.gz"
done

# SIRET data
# NOTE: historical SIRENE files have been migrated away from files.data.gouv.fr
# See: https://files.data.gouv.fr/insee-sirene/migration-fichiers-sirene.txt
STOCK_UNITE_LEGALE_URL="https://object.files.data.gouv.fr/data-pipeline-open/siren/stock/StockUniteLegale_utf8.zip"
wget --progress=bar:force:noscroll -q --show-progress "$STOCK_UNITE_LEGALE_URL" -O "${DATA_DIR}/StockUniteLegale_utf8.zip"
unzip -o "${DATA_DIR}/StockUniteLegale_utf8.zip" -d "${DATA_DIR}"

# Fail fast if the expected CSV is not present (required by import.sql)
test -f "${DATA_DIR}/StockUniteLegale_utf8.csv"

# WEEZ data
wget --progress=bar:force:noscroll -q --show-progress https://www.data.gouv.fr/fr/datasets/r/a22e54f7-b937-4483-9a72-aad2ea1316f1 -O "${DATA_DIR}/WEEZ.csv"

echo "-- Data files md5 : "
for file in "$DATA_DIR"/*.csv; do
   md5sum "$file";
done

echo "-- Import CSV datasets to sqlite"

sqlite3 -echo "${DATA_DIR}/db.sqlite" ".read import.sql"

echo "-- Export sqlite data to ${DATA_DIR}/assembly.csv"

sqlite3 -header -csv "${DATA_DIR}/db.sqlite" ".read export.sql" > "${DATA_DIR}/assembly.csv"

echo "-- Total lines in assembly.csv : "
wc -l "${DATA_DIR}/assembly.csv"
md5sum "${DATA_DIR}/assembly.csv"
