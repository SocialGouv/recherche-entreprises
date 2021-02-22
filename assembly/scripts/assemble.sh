#!/bin/bash

echo "-- Run Python assembler"
python3 src/assemble_data.py ${DATA_DIR}/StockUniteLegale_utf8.zip  ${DATA_DIR}/geo/ ${DATA_DIR}/WEEZ.csv ${OUTPUT_DIR}/assembly.csv