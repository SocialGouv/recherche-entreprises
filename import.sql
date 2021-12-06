--- sqlite3 -echo db.sqlite ".read import.sql"
---
--- import local CSVs to sqlite database
---

PRAGMA synchronous = OFF;

DROP TABLE IF EXISTS weez;
DROP TABLE IF EXISTS geo_siret;
DROP TABLE IF EXISTS stock;

.mode csv
.import data/WEEZ.csv weez
.import data/StockUniteLegale_utf8.csv stock
.import data/geo_siret_.csv geo_siret
.import data/geo_siret_01.csv geo_siret
.import data/geo_siret_02.csv geo_siret
.import data/geo_siret_03.csv geo_siret
.import data/geo_siret_04.csv geo_siret
.import data/geo_siret_05.csv geo_siret
.import data/geo_siret_06.csv geo_siret
.import data/geo_siret_07.csv geo_siret
.import data/geo_siret_08.csv geo_siret
.import data/geo_siret_09.csv geo_siret
.import data/geo_siret_10.csv geo_siret
.import data/geo_siret_11.csv geo_siret
.import data/geo_siret_12.csv geo_siret
.import data/geo_siret_13.csv geo_siret
.import data/geo_siret_14.csv geo_siret
.import data/geo_siret_15.csv geo_siret
.import data/geo_siret_16.csv geo_siret
.import data/geo_siret_17.csv geo_siret
.import data/geo_siret_18.csv geo_siret
.import data/geo_siret_19.csv geo_siret
.import data/geo_siret_21.csv geo_siret
.import data/geo_siret_22.csv geo_siret
.import data/geo_siret_23.csv geo_siret
.import data/geo_siret_24.csv geo_siret
.import data/geo_siret_25.csv geo_siret
.import data/geo_siret_26.csv geo_siret
.import data/geo_siret_27.csv geo_siret
.import data/geo_siret_28.csv geo_siret
.import data/geo_siret_29.csv geo_siret
.import data/geo_siret_2A.csv geo_siret
.import data/geo_siret_2B.csv geo_siret
.import data/geo_siret_30.csv geo_siret
.import data/geo_siret_31.csv geo_siret
.import data/geo_siret_32.csv geo_siret
.import data/geo_siret_33.csv geo_siret
.import data/geo_siret_34.csv geo_siret
.import data/geo_siret_35.csv geo_siret
.import data/geo_siret_36.csv geo_siret
.import data/geo_siret_37.csv geo_siret
.import data/geo_siret_38.csv geo_siret
.import data/geo_siret_39.csv geo_siret
.import data/geo_siret_40.csv geo_siret
.import data/geo_siret_41.csv geo_siret
.import data/geo_siret_42.csv geo_siret
.import data/geo_siret_43.csv geo_siret
.import data/geo_siret_44.csv geo_siret
.import data/geo_siret_45.csv geo_siret
.import data/geo_siret_46.csv geo_siret
.import data/geo_siret_47.csv geo_siret
.import data/geo_siret_48.csv geo_siret
.import data/geo_siret_49.csv geo_siret
.import data/geo_siret_50.csv geo_siret
.import data/geo_siret_51.csv geo_siret
.import data/geo_siret_52.csv geo_siret
.import data/geo_siret_53.csv geo_siret
.import data/geo_siret_54.csv geo_siret
.import data/geo_siret_55.csv geo_siret
.import data/geo_siret_56.csv geo_siret
.import data/geo_siret_57.csv geo_siret
.import data/geo_siret_58.csv geo_siret
.import data/geo_siret_59.csv geo_siret
.import data/geo_siret_60.csv geo_siret
.import data/geo_siret_61.csv geo_siret
.import data/geo_siret_62.csv geo_siret
.import data/geo_siret_63.csv geo_siret
.import data/geo_siret_64.csv geo_siret
.import data/geo_siret_65.csv geo_siret
.import data/geo_siret_66.csv geo_siret
.import data/geo_siret_67.csv geo_siret
.import data/geo_siret_68.csv geo_siret
.import data/geo_siret_69.csv geo_siret
.import data/geo_siret_70.csv geo_siret
.import data/geo_siret_71.csv geo_siret
.import data/geo_siret_72.csv geo_siret
.import data/geo_siret_73.csv geo_siret
.import data/geo_siret_74.csv geo_siret
.import data/geo_siret_75101.csv geo_siret
.import data/geo_siret_75102.csv geo_siret
.import data/geo_siret_75103.csv geo_siret
.import data/geo_siret_75104.csv geo_siret
.import data/geo_siret_75105.csv geo_siret
.import data/geo_siret_75106.csv geo_siret
.import data/geo_siret_75107.csv geo_siret
.import data/geo_siret_75108.csv geo_siret
.import data/geo_siret_75109.csv geo_siret
.import data/geo_siret_75110.csv geo_siret
.import data/geo_siret_75111.csv geo_siret
.import data/geo_siret_75112.csv geo_siret
.import data/geo_siret_75113.csv geo_siret
.import data/geo_siret_75114.csv geo_siret
.import data/geo_siret_75115.csv geo_siret
.import data/geo_siret_75116.csv geo_siret
.import data/geo_siret_75117.csv geo_siret
.import data/geo_siret_75118.csv geo_siret
.import data/geo_siret_75119.csv geo_siret
.import data/geo_siret_75120.csv geo_siret
.import data/geo_siret_76.csv geo_siret
.import data/geo_siret_77.csv geo_siret
.import data/geo_siret_78.csv geo_siret
.import data/geo_siret_79.csv geo_siret
.import data/geo_siret_80.csv geo_siret
.import data/geo_siret_81.csv geo_siret
.import data/geo_siret_82.csv geo_siret
.import data/geo_siret_83.csv geo_siret
.import data/geo_siret_84.csv geo_siret
.import data/geo_siret_85.csv geo_siret
.import data/geo_siret_86.csv geo_siret
.import data/geo_siret_87.csv geo_siret
.import data/geo_siret_88.csv geo_siret
.import data/geo_siret_89.csv geo_siret
.import data/geo_siret_90.csv geo_siret
.import data/geo_siret_91.csv geo_siret
.import data/geo_siret_92.csv geo_siret
.import data/geo_siret_93.csv geo_siret
.import data/geo_siret_94.csv geo_siret
.import data/geo_siret_95.csv geo_siret
.import data/geo_siret_971.csv geo_siret
.import data/geo_siret_972.csv geo_siret
.import data/geo_siret_973.csv geo_siret
.import data/geo_siret_974.csv geo_siret
.import data/geo_siret_975.csv geo_siret
.import data/geo_siret_976.csv geo_siret
.import data/geo_siret_977.csv geo_siret
.import data/geo_siret_978.csv geo_siret
.import data/geo_siret_98.csv geo_siret

CREATE INDEX 'geo_siret_idx' ON 'geo_siret' ('siret');
CREATE INDEX 'geo_siren_idx' ON 'geo_siret' ('siren');
CREATE INDEX 'weez_siret_idx' ON 'weez' ('SIRET');
CREATE INDEX 'stock_siren_idx' ON 'stock' ('siren');

SELECT "weez", count(*) from weez;
SELECT "stock", count(*) from stock;
SELECT "geo_siret", count(*) from geo_siret;