# cdtn-entreprises : recherche d'entreprises

Ces scripts permettent de générer un index Elastic Search qui regroupe toutes les informations utiles pour rechercher un établissement ou une entreprise.

Exemple de requête par : établissement, raison sociale, code postal, ville, siret/siren, groupé par SIREN et trié par effectif

## Stages :

[![](https://mermaid.ink/svg/eyJjb2RlIjoiZ3JhcGggTFJcblxuU3RvY2tVbml0ZUxlZ2FsZS5jc3YtLT5QeUFzc2VtYmx5wqBcbmdlb19zaXJldC5jc3YtLT5QeUFzc2VtYmx5wqBcbndlZXouY3N2LS0-UHlBc3NlbWJsecKgXG5QeUFzc2VtYmx5LS0-YXNzZW1ibHkuY3N2LS0-aW5kZXgtLT5FbGFzdGljU2VhcmNoIiwibWVybWFpZCI6e30sInVwZGF0ZUVkaXRvciI6ZmFsc2V9)](https://mermaid-js.github.io/mermaid-live-editor/#/edit/eyJjb2RlIjoiZ3JhcGggTFJcblxuU3RvY2tVbml0ZUxlZ2FsZS5jc3YtLT5QeUFzc2VtYmx5wqBcbmdlb19zaXJldC5jc3YtLT5QeUFzc2VtYmx5wqBcbndlZXouY3N2LS0-UHlBc3NlbWJsecKgXG5QeUFzc2VtYmx5LS0-YXNzZW1ibHkuY3N2LS0-aW5kZXgtLT5FbGFzdGljU2VhcmNoIiwibWVybWFpZCI6e30sInVwZGF0ZUVkaXRvciI6ZmFsc2V9)

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