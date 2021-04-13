# cdtn-entreprises : recherche d'entreprises

Ce projet permet de générer un index Elastic Search qui regroupe toutes les informations utiles pour rechercher un établissement ou une entreprise par établissement, raison sociale, code postal, ville, siret/siren, effectif, convention collective...

Les données sont issues de [plusieurs jeux de données data.gouv.fr](./assembly/scripts/get-data.sh) et de [kali-data](https://github.com/SocialGouv/kali-data).

Le dossier [`api`](./api) présente un exemple d'implémentation d'API NodeJS qui exploite cet index Elastic Search avec différentes requêtes.

Un frontend de démo est disponible ici : https://p8dyl.csb.app/

Et vous pouvez utiliser librement l'API disponible sur https://api-recherche-entreprises.fabrique.social.gouv.fr

## Étapes :

![](https://mermaid.ink/svg/eyJjb2RlIjoiZ3JhcGggTFJcblxuU3RvY2tVbml0ZUxlZ2FsZS5jc3YtLT5QeUFzc2VtYmx5wqBcbmdlb19zaXJldC5jc3YtLT5QeUFzc2VtYmx5wqBcbnNpcmV0MmlkY2MuY3N2LS0-UHlBc3NlbWJsecKgXG5QeUFzc2VtYmx5LS0-YXNzZW1ibHkuY3N2LS0-aW5kZXgtLT5FbGFzdGljU2VhcmNoIiwibWVybWFpZCI6e30sInVwZGF0ZUVkaXRvciI6ZmFsc2V9)

## Assemblage

Le CSV est généré en deux étapes dans le dossier `assembly/` :

- Téléchargement des datasets (8GB)

  `DATA_DIR=./data2/ scripts/get-data.sh`

- Assemblage des fichiers avec Python (numpy & pandas)

  `pip install -r requirements.txt`

  `DATA_DIR=./data2/ OUTPUT_DIR=./ scripts/assemble.sh`

Au final, le fichier CSV fait environ 600Mo

| Dataset                                                                                                                                                                        | usage                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------- |
| [geo-sirene](https://www.data.gouv.fr/fr/datasets/base-sirene-des-entreprises-et-de-leurs-etablissements-siren-siret/#resource-community-c6006b4d-0b4b-4504-a762-1efe69c7ed18) | Version géocodée du stock des établiseement              |
| [insee-sirene](https://www.data.gouv.fr/fr/datasets/base-sirene-des-entreprises-et-de-leurs-etablissements-siren-siret/)                                                       | Base Sirene des entreprises et de leurs établissements   |
| [siret2idcc](https://www.data.gouv.fr/fr/datasets/liste-des-conventions-collectives-par-entreprise-siret/#_)                                                                   | Lien vers la convention collective                       |
| [kali-data](https://github.com/SocialGouv/kali-data)                                                                                                                           | Informations sur les conventions collectives             |
| [codes-naf](https://github.com/SocialGouv/codes-naf)                                                                                                                           | Liste des codes NAF (Nomenclature d’activités française) |

## Indexation Elastic Search

Le dossier `index/` contient les scripts qui injectent le fichier `assembly.csv` dans un index `recherche-entreprises` ElasticSearch.

La mise à jour exploite la fonctionnalité [alias](https://www.elastic.co/guide/en/elasticsearch/reference/6.8/indices-aliases.html) d'ElasticSearch pour éviter les downtimes.

Le script `scripts/create-es-keys.sh` permet de créer des token pour lire/écrire sur ces index.

Pour lancer une indexation :

```sh
yarn install

ELASTICSEARCH_URL=https://elastic_url:9200 ELASTICSEARCH_API_KEY=key_with_writing_rights ASSEMBLY_FILE=/path_to/assembly.csv yarn start
```

The default `ELASTICSEARCH_INDEX_NAME` is `recherche-entreprises`

