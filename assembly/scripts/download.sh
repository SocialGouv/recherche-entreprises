#!/bin/bash

# borrowed from annuaire entreprise  :
# https://github.com/etalab/api-annuaire-entreprises/tree/master/db/init

dir="data/"
geodir=$dir"geo/"

wget https://files.data.gouv.fr/insee-sirene/StockUniteLegale_utf8.zip --directory-prefix=$dir

for d in `seq -w 1 19` 2A 2B `seq 21 74` `seq 76 95` 98 ""; do
  wget https://files.data.gouv.fr/geo-sirene/last/dep/geo_siret_$d.csv.gz --directory-prefix=$geodir
  gunzip {$geodir}geo_siret_$d.csv.gz
done

#Cas particulier Paris
for d in `seq -w 1 20`; do
  wget https://files.data.gouv.fr/geo-sirene/last/dep/geo_siret_751$d.csv.gz --directory-prefix=$geodir
  gunzip {$geodir}geo_siret_751$d.csv.gz
done

#Cas particulier DOM
for d in `seq -w 1 8`; do
  wget https://files.data.gouv.fr/geo-sirene/last/dep/geo_siret_97$d.csv.gz --directory-prefix=$geodir
  gunzip {$geodir}geo_siret_97$d.csv.gz
done

# WEEZ data
wget https://github.com/SocialGouv/siret2idcc/blob/master/data/WEEZ.csv?raw=true --directory-prefix=$dir