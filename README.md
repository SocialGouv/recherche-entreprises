# CDTN : Company search index

Tooling to create an Elastic index for company search.

## Stages :

### Assembly

- bash script to download CSV data
- python script to assemble the different sources into a unified dataset

### Index

- typescript code to parse this dataset and insert companies into Elastic
