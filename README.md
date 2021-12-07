# recherche-entreprises

Ce projet permet de générer un index Elastic Search qui regroupe toutes les informations utiles pour rechercher une entreprise par établissement, raison sociale, code postal, ville, siret/siren, effectif, convention collective...

Les données sont issues de [plusieurs jeux de données data.gouv.fr](./assembly/scripts/get-data.sh) et de [kali-data](https://github.com/SocialGouv/kali-data).

Le dossier [`api`](./api) présente un exemple d'implémentation d'API NodeJS qui exploite cet index Elastic Search avec différentes requêtes.

Un frontend de démo est disponible ici : https://recherche-entreprises.fabrique.social.gouv.fr

Et vous pouvez utiliser librement l'API disponible sur https://api-recherche-entreprises.fabrique.social.gouv.fr cf [documentation API](./api/README.md)

Exemple : [/api/v1/search?q=plume&a=paris](https://api-recherche-entreprises.fabrique.social.gouv.fr/api/v1/search?q=plume&a=paris)

## Étapes :

[![](https://mermaid.ink/img/eyJjb2RlIjoiZ3JhcGggTFJcblxuU3RvY2tVbml0ZUxlZ2FsZS5jc3YtLT5TUUxpdGVcbmdlb19zaXJldC5jc3YtLT5TUUxpdGVcbnNpcmV0MmlkY2MuY3N2LS0-U1FMaXRlXG5TUUxpdGUtLT5hc3NlbWJseS5jc3ZcbmFzc2VtYmx5LmNzdi0tPmluZGV4LS0-RWxhc3RpY1NlYXJjaC0tPkFQSVtBUEkgSFRUUDFdXG5FbGFzdGljU2VhcmNoLS0-QVBJMltBUEkgSFRUUDJdXG5FbGFzdGljU2VhcmNoLS0-Q2xpZW50W0NsaWVudCBFU10iLCJtZXJtYWlkIjp7fSwidXBkYXRlRWRpdG9yIjpmYWxzZSwiYXV0b1N5bmMiOnRydWUsInVwZGF0ZURpYWdyYW0iOmZhbHNlfQ)](https://mermaid-js.github.io/mermaid-live-editor/edit#eyJjb2RlIjoiZ3JhcGggTFJcblxuU3RvY2tVbml0ZUxlZ2FsZS5jc3YtLT5TUUxpdGVcbmdlb19zaXJldC5jc3YtLT5TUUxpdGVcbnNpcmV0MmlkY2MuY3N2LS0-U1FMaXRlXG5TUUxpdGUtLT5hc3NlbWJseS5jc3ZcbmFzc2VtYmx5LmNzdi0tPmluZGV4LS0-RWxhc3RpY1NlYXJjaC0tPkFQSVtBUEkgSFRUUDFdXG5FbGFzdGljU2VhcmNoLS0-QVBJMltBUEkgSFRUUDJdXG5FbGFzdGljU2VhcmNoLS0-Q2xpZW50W0NsaWVudCBFU10iLCJtZXJtYWlkIjoie30iLCJ1cGRhdGVFZGl0b3IiOmZhbHNlLCJhdXRvU3luYyI6dHJ1ZSwidXBkYXRlRGlhZ3JhbSI6ZmFsc2V9)

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
- wget
- sqlite3

### Assemblage des données

Le script `sqlite.sh` permet de permet de télécharger les CSV puis aggréger les données pour les re-exporter dans CSV "plat".

Le fichier `./data/assembly.csv` fait +6Go avec plus de 30 millions de lignes.

Cette opération dure environ 45 minutes.

### Indexation dans Elastic Search

Cette étape permet de mettre à jour les données dans l'index ElasticSearch à partir du fichier `assembly.csv` généré à l'étape précédente.

Cette étape se déroule dans le répertoire `index`.

La mise à jour exploite la fonctionnalité [alias](https://www.elastic.co/guide/en/elasticsearch/reference/6.8/indices-aliases.html) d'ElasticSearch pour éviter les downtimes.

Pour lancer une indexation :

```sh
yarn
ELASTICSEARCH_URL=https://elastic_url:9200 ELASTICSEARCH_API_KEY=key_with_writing_rights ASSEMBLY_FILE=./data/assembly.csv yarn start
```

Le temps d'indexation est d'environ 1h.

Le script `scripts/create-es-keys.sh` permet de créer des tokens pour lire/écrire sur ces index. **Cette étape n'est pas nécessaire pour le développement local.**

### Lancement de l'API

Cette étape permet de lancer l'API de démo qui va servir les requêtes jusqu'à ElasticSearch.

```sh
# En partant de la racine du projet
cd api

yarn install
yarn build

ELASTICSEARCH_URL=http://localhost:9200 yarn dev
```

### Lancement du front de démo

Cette étape permet de lancer l'interface de démo

```sh
# En partant de la racine du projet
cd front

yarn install

# pour mettre l'URL de votre API en local
REACT_APP_API_URL=http://localhost:3000 yarn start
```

Le temps d'indexation est d'environ 1h.

## Projets relatifs

- Annuaire-entreprises : https://annuaire-entreprises.data.gouv.fr
- API Entreprise : https://entreprise.api.gouv.fr/catalogue/
