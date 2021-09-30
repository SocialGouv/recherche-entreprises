# recherche-entreprises

Ce projet permet de générer un index Elastic Search qui regroupe toutes les informations utiles pour rechercher une entreprise par établissement, raison sociale, code postal, ville, siret/siren, effectif, convention collective...

Les données sont issues de [plusieurs jeux de données data.gouv.fr](./assembly/scripts/get-data.sh) et de [kali-data](https://github.com/SocialGouv/kali-data).

Le dossier [`api`](./api) présente un exemple d'implémentation d'API NodeJS qui exploite cet index Elastic Search avec différentes requêtes.

Un frontend de démo est disponible ici : https://p8dyl.csb.app/

Et vous pouvez utiliser librement l'API disponible sur https://api-recherche-entreprises.fabrique.social.gouv.fr cf [doc API](./api/README.md)

Exemple : [/api/v1/search?q=plume&a=paris](https://api-recherche-entreprises.fabrique.social.gouv.fr/api/v1/search?q=plume&a=paris)

## Étapes :

![](https://mermaid.ink/svg/eyJjb2RlIjoiZ3JhcGggTFJcblxuU3RvY2tVbml0ZUxlZ2FsZS5jc3YtLT5QeUFzc2VtYmx5wqBcbmdlb19zaXJldC5jc3YtLT5QeUFzc2VtYmx5wqBcbnNpcmV0MmlkY2MuY3N2LS0-UHlBc3NlbWJsecKgXG5QeUFzc2VtYmx5LS0-YXNzZW1ibHkuY3N2LS0-aW5kZXgtLT5FbGFzdGljU2VhcmNoLS0-QVBJW0FQSSBIVFRQMV1cbkVsYXN0aWNTZWFyY2gtLT5BUEkyW0FQSSBIVFRQMl1cbkVsYXN0aWNTZWFyY2gtLT5DbGllbnRbQ2xpZW50IEVTXSIsIm1lcm1haWQiOnt9LCJ1cGRhdGVFZGl0b3IiOmZhbHNlfQ)

## Données :

| Dataset                                                                                                                                                                        | usage                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------- |
| [geo-sirene](https://www.data.gouv.fr/fr/datasets/base-sirene-des-entreprises-et-de-leurs-etablissements-siren-siret/#resource-community-c6006b4d-0b4b-4504-a762-1efe69c7ed18) | Version géocodée du stock des établiseement              |
| [insee-sirene](https://www.data.gouv.fr/fr/datasets/base-sirene-des-entreprises-et-de-leurs-etablissements-siren-siret/)                                                       | Base Sirene des entreprises et de leurs établissements   |
| [siret2idcc](https://www.data.gouv.fr/fr/datasets/liste-des-conventions-collectives-par-entreprise-siret/#_)                                                                   | Lien vers la convention collective                       |
| [kali-data](https://github.com/SocialGouv/kali-data)                                                                                                                           | Informations sur les conventions collectives             |
| [codes-naf](https://github.com/SocialGouv/codes-naf)                                                                                                                           | Liste des codes NAF (Nomenclature d’activités française) |

## Lancer le projet

### Pré-requis

Pour lancer les différentes parties du projet, un certain nombre d'outil doivent être présent sur la machine:

- node
- yarn
- docker et docker-compose
- python3 et pip
- wget

### Assemblage des données

Cette étape génère un fichier CSV qui aggrège les différentes sources de données.

Cette étape doit être réalisée dans le répertoire `assembly`

```sh
cd assembly

# Téléchargement des datasets (8GB)
DATA_DIR=./data scripts/get-data.sh

# installation des dépendance
python3 -m pip install -r requirements.txt

# Création du répertoire qui va recevoir le fichier assemblé
mkdir output

# Assemblage des fichiers avec Python (numpy & pandas)
DATA_DIR=./data/ OUTPUT_DIR=./output scripts/assemble.sh
```

Au final, le fichier `./output/assembly.csv` fait environ 600Mo

### Indexation dans Elastic Search

Cette étape permet de mettre à jour les données dans l'index ElasticSearch à partir du fichier `assembly.csv` généré à l'étape précédente.

Cette étape se déroule dans le répertoire `index`.

La mise à jour exploite la fonctionnalité [alias](https://www.elastic.co/guide/en/elasticsearch/reference/6.8/indices-aliases.html) d'ElasticSearch pour éviter les downtimes.

Le script `scripts/create-es-keys.sh` permet de créer des tokens pour lire/écrire sur ces index. **Cette étape n'est pas nécessaire pour le développement local.**

Pour lancer le serveur :

```sh
# en partant de la racine du projet

# Lancement avec logs
docker-compose up

# ou pour lancer le serveur en mode démon
docker-compose up --detach
```

Pour lancer une indexation :

```sh
# en partant de la racine du projet
cd assembly

yarn install
yarn start
```

Le script lancé avec `yarn start` peut être configuré avec des variables d'énvironements :

| Nom                      | Description                      | Valeur par défaut                 |
| ------------------------ | -------------------------------- | --------------------------------- |
| ELASTICSEARCH_URL        | URL d'ES                         | http://localhost:92000            |
| ELASTICSEARCH_API_KEY    | API avec droit d'écriture        | '' _ne pas utiliser en local_     |
| ELASTICSEARCH_INDEX_NAME | Nom de l'index                   | 'recherche-entreprises'           |
| ASSEMBLY_FILE            | chemin vers le fichier consolidé | `../assembly/output/assembly.csv` |

### Lancement de l'API

Cette étape permet de lancer l'API qui va servir les requêtes jusqu'à ElasticSearch.

Cette étape s'effectue dans le dossier `api` et le serveur doit être préalablement lancé (voir étape précédente)

```sh
# En partant de la racine du projet
cd api

yarn install
yarn build

ELASTICSEARCH_URL=http://localhost:9200 yarn start
```
