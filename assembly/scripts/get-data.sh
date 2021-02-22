#!/bin/bash

# borrowed from annuaire entreprise  :
# https://github.com/etalab/api-annuaire-entreprises/tree/master/db/init

geodir=${DATA_DIR}/geo

mkdir -p $geodir

echo "-- Download datasets"

for d in `seq -w 1 19` 2A 2B `seq 21 74` `seq 76 95` 98 ""; do
  wget --progress=bar:force:noscroll -q --show-progress https://files.data.gouv.fr/geo-sirene/last/dep/geo_siret_$d.csv.gz --directory-prefix=$geodir
  gunzip ${geodir}/geo_siret_$d.csv.gz
done

#Cas particulier Paris
for d in `seq -w 1 20`; do
  wget --progress=bar:force:noscroll -q --show-progress https://files.data.gouv.fr/geo-sirene/last/dep/geo_siret_751$d.csv.gz --directory-prefix=$geodir
  gunzip ${geodir}/geo_siret_751$d.csv.gz
done

#Cas particulier DOM
for d in `seq -w 1 8`; do
  wget --progress=bar:force:noscroll -q --show-progress https://files.data.gouv.fr/geo-sirene/last/dep/geo_siret_97$d.csv.gz --directory-prefix=$geodir
  gunzip ${geodir}/geo_siret_97$d.csv.gz
done

# SIRET data
wget --progress=bar:force:noscroll -q --show-progress https://files.data.gouv.fr/insee-sirene/StockUniteLegale_utf8.zip --directory-prefix=$DATA_DIR

# WEEZ data
wget --progress=bar:force:noscroll -q --show-progress https://github.com/SocialGouv/siret2idcc/blob/master/data/WEEZ.csv?raw=true -O ${DATA_DIR}/WEEZ.csv