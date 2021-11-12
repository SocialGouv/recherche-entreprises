import * as React from "react";
import { SWRConfig } from "swr";
import { Container } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";

import { Search } from "./Search";

const API_URL =
  process.env.REACT_APP_API_URL ||
  "https://api-recherche-entreprises.fabrique.social.gouv.fr/api/v1";

export default function App() {
  return (
    <Container className="App">
      <SWRConfig value={{ revalidateOnMount: false, dedupingInterval: 30000 }}>
        <br />
        <br />
        <h2>
          demo recherche-entreprises{" "}
          <a
            href="https://github.com/socialgouv/recherche-entreprises"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: "1rem" }}
          >
            github
          </a>
        </h2>
        API :{" "}
        <a target="_blank" rel="noopener noreferrer" href={API_URL}>
          {API_URL}
        </a>
        <br />
        <br />
        <Search />
      </SWRConfig>
    </Container>
  );
}
