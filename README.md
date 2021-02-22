# CDTN : Company search index

Tooling to create an Elastic index for company search.

## Stages :

### Assembly

The assembly CSV file is generated in two steps, from the `assembly/` directory :

- First we download the different datasets (8GB)

  `DATA_DIR=./data2/ scripts/get-data.sh`

- Then we execute a Python script to assemble the different sources into a unified dataset. It will be availble in the `OUTPUT_DIR`.
  Finally, this Python scripts requires several dependencies (numpy & pandas) that might require OS dependencies. Please use the docker version to avoid system specific configuration.

  `pip install -r requirements.txt`

  `DATA_DIR=./data2/ OUTPUT_DIR=./ scripts/assemble.sh`

### Index

Now we use the assembled CSV file to populate an Elastic index. Within the `index/` directory :

`yarn install`

`yarn build`

`ELASTICSEARCH_URL=https://elastic_url:9200 API_KEY=key_with_writing_rights ASSEMBLY_FILE=/path_to/assembly.csv node dist/index.js`
