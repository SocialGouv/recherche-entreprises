#!/bin/sh

set -e

#
# This creates two tokens for a given ES instance
#


ELASTICSEARCH_URL=${ELASTICSEARCH_URL:-""}
ELASTICSEARCH_USER=${ELASTICSEARCH_USER:-"elastic"}
ELASTICSEARCH_PASSWORD=${ELASTICSEARCH_PASSWORD:-"password"}

read_payload()
{
  cat <<EOF
{
  "name": "recherche-entreprises-read",
  "role_descriptors": {
    "role-update": {
      "cluster": ["all"],
      "index": [
        {
          "names": ["recherche-entreprises*"],
          "privileges": ["read"]
        }
      ]
    }
  }
}
EOF
}

ingest_payload()
{
  cat <<EOF
{
  "name": "recherche-entreprises-write",
  "role_descriptors": {
    "role-update": {
      "cluster": ["all"],
      "index": [
        {
          "names": ["recherche-entreprises*"],
          "privileges": ["create", "create_index", "delete_index", "manage"]
        }
      ]
    }
  }
}
EOF
}


echo ""
echo "Creating tokens with user $ELASTICSEARCH_USER on $ELASTICSEARCH_URL"
echo ""


echo "Read token -----------------------------------------------------"

RES=$(curl --silent  -u "$ELASTICSEARCH_USER:$ELASTICSEARCH_PASSWORD" -H "Content-Type: application/json" -X POST --data "$(read_payload)" "$ELASTICSEARCH_URL/_security/api_key")
echo "API result: $RES"
TOKEN=$(echo "$RES" | jq '.id + ":" + .api_key' | xargs echo -n | base64)
echo "TOKEN: $TOKEN"

echo ""

echo "Write token -----------------------------------------------------"

RES=$(curl --silent -u "$ELASTICSEARCH_USER:$ELASTICSEARCH_PASSWORD" -H "Content-Type: application/json" -X POST --data "$(ingest_payload)" "$ELASTICSEARCH_URL/_security/api_key")
echo "API result: $RES"
TOKEN=$(echo "$RES" | jq '.id + ":" + .api_key' | xargs echo -n | base64)
echo "TOKEN: $TOKEN"
