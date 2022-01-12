#!/bin/bash

# exit when any command fails
set -e

# download files, convert to SQLite and export to CSV

DATA_DIR=${DATA_DIR:-"./data"}

mkdir -p "$DATA_DIR" || true

echo "-- Working in $(dirname "$0")"
cd "$(dirname "$0")" || exit

echo "-- Download datasets"

if command -v apt-get &> /dev/null
then
  apt-get update -y
fi

# install sqlite3 if not exists
if ! command -v sqlite3 &> /dev/null
then
    echo "sqlite3 could not be found"
    apt-get install -y sqlite3
fi
# install wget if not exists
if ! command -v wget &> /dev/null
then
    echo "wget could not be found"
    apt-get install -y wget
fi
# install unzip if not exists
if ! command -v unzip &> /dev/null
then
    echo "unzip could not be found"
    apt-get install -y unzip
fi
# install md5 if not exists
if ! command -v md5 &> /dev/null
then
    echo "md5 could not be found"
    apt-get install -y md5
fi

# geo siret par département
for d in $(seq -w 1 19) 2A 2B $(seq 21 74) $(seq 76 95) 98 ""; do
  wget --progress=bar:force:noscroll -q --show-progress "https://files.data.gouv.fr/geo-sirene/last/dep/geo_siret_$d.csv.gz" --directory-prefix="$DATA_DIR"
  gunzip "${DATA_DIR}/geo_siret_$d.csv.gz"
done

# Cas particulier Paris 75101-75120
for d in $(seq -w 1 20); do
  wget --progress=bar:force:noscroll -q --show-progress "https://files.data.gouv.fr/geo-sirene/last/dep/geo_siret_751$d.csv.gz" --directory-prefix="$DATA_DIR"
  gunzip "${DATA_DIR}/geo_siret_751$d.csv.gz"
done

# Cas particulier DOM 971->978
for d in $(seq -w 1 8); do
  wget --progress=bar:force:noscroll -q --show-progress "https://files.data.gouv.fr/geo-sirene/last/dep/geo_siret_97$d.csv.gz" --directory-prefix="$DATA_DIR"
  gunzip "${DATA_DIR}/geo_siret_97$d.csv.gz"
done

# SIRET data
wget --progress=bar:force:noscroll -q --show-progress https://files.data.gouv.fr/insee-sirene/StockUniteLegale_utf8.zip --directory-prefix="$DATA_DIR"
unzip "${DATA_DIR}/StockUniteLegale_utf8.zip" -d "${DATA_DIR}"

# WEEZ data
wget --progress=bar:force:noscroll -q --show-progress https://www.data.gouv.fr/fr/datasets/r/bfc3a658-c054-4ecc-ba4b-22f3f5789dc7 -O "${DATA_DIR}/WEEZ.csv"

echo "-- Data files md5 : "
for file in "$DATA_DIR"/*.csv; do
   md5 "$file";
done

echo "-- Import CSV datasets to sqlite"

sqlite3 -echo "${DATA_DIR}/db.sqlite" ".read import.sql"

echo "-- Export sqlite data to ${DATA_DIR}/assembly.csv"

sqlite3 -header -csv "${DATA_DIR}/db.sqlite" ".read export.sql" > "${DATA_DIR}/assembly.csv"

echo "-- Total lines in assembly.csv : "
wc -l "${DATA_DIR}/assembly.csv"
md5 "${DATA_DIR}/assembly.csv"