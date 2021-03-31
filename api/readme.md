# API recherche d'entreprises

## **Search**

---

Returns json data about companies matching search parameters

- **URL**

  /api/v1/search

- **Method:**

  `GET`

- **Query Params**

  **Required:**

  `q=[string]` query used to perform the search on company names

  **Optional:**

  `a=[string]` city or postal code

  `l=[integer]` result limit

- **Success Response:**

  - **Code:** 200 <br />
    **Content:**

    ```javascript
    {
    entreprises: [
        {
        activitePrincipale: "Fabrication et rechapage de pneumatiques",
        address: "16 Rue de Toutlemonde 49300 Cholet",
        conventions: [
            {
            num: 45,
            shortTitle: "Caoutchouc",
            }
        ],
        etablissements: 28,
        highlightLabel: "MANUF FRANC PNEUMATIQ <b><u>MICHELIN</b></u>",
        id: "855200507",
        label: "MANUF FRANC PNEUMATIQ MICHELIN",
        matching: 18,
        simpleLabel: "MANUF FRANC PNEUMATIQ MICHELIN",
        siren: "855200507",
        siret: "85520050700710",
        },
        ...
    ]
    }
    ```

- **Sample Call:**

  ```sh
  curl --request GET --url 'http://localhost:3000/api/v1/search?q=michelin'
  ```

## **Entreprise**

---

Returns entreprise details for a given **siren**

- **URL**

  /api/v1/entreprise/:siren

- **Method:**

  `GET`

- **URL Params**

  **Required:**

  `siren=[string]` company SIREN (9 digits)

- **Success Response:**

  - **Code:** 200 <br />
    **Content:**

    ```javascript
    {
        activitePrincipale: "Fabrication et rechapage de pneumatiques",
        address: "16 Rue de Toutlemonde 49300 Cholet",
        conventions: [
            {
            num: 45,
            shortTitle: "Caoutchouc",
            }
        ],
        etablissements: 28,
        highlightLabel: "MANUF FRANC PNEUMATIQ <b><u>MICHELIN</b></u>",
        id: "855200507",
        label: "MANUF FRANC PNEUMATIQ MICHELIN",
        matching: 18,
        simpleLabel: "MANUF FRANC PNEUMATIQ MICHELIN",
        siren: "855200507",
        siret: "85520050700710",
    }
    ```

- **Sample Call:**

  ```sh
  curl --request GET --url 'http://localhost:3000/api/v1/entreprise/855200507'
  ```

## **Etablissement**

---

Returns etablissement details for a given **siret**

- **URL**

  /api/v1/etablissement/:siret

- **Method:**

  `GET`

- **URL Params**

  **Required:**

  `siret=[string]` company SIRET (14 digits)

- **Success Response:**

  - **Code:** 200 <br />
    **Content:**

    ```javascript
    {
        activitePrincipale: "Fabrication et rechapage de pneumatiques",
        address: "16 Rue de Toutlemonde 49300 Cholet",
        conventions: [
            {
            num: 45,
            shortTitle: "Caoutchouc",
            }
        ],
        etablissements: 28,
        highlightLabel: "MANUF FRANC PNEUMATIQ <b><u>MICHELIN</b></u>",
        id: "855200507",
        label: "MANUF FRANC PNEUMATIQ MICHELIN",
        matching: 18,
        simpleLabel: "MANUF FRANC PNEUMATIQ MICHELIN",
        siren: "855200507",
        siret: "85520050700710",
    }
    ```

- **Sample Call:**

  ```sh
  curl --request GET --url 'http://localhost:3000/api/v1/etablissement/85520050700710'
  ```
