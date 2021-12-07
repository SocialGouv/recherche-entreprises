import * as React from "react";
import { SWRConfig } from "swr";
import { Container } from "react-bootstrap";

import "github-fork-ribbon-css/gh-fork-ribbon.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Search } from "./Search";

const API_URL =
  process.env.REACT_APP_API_URL ||
  "https://api-recherche-entreprises.fabrique.social.gouv.fr/api/v1";

const Hero = () => (
  <div className="px-4 py-5 my-5 text-center">
    <h1 className="display-5 fw-bold">Démo API recherche-entreprises</h1>
    <div className="col-lg-6 mx-auto">
      <p className="lead mb-4">Recherche rapide d'entreprises Françaises</p>
    </div>
  </div>
);

const ForkRibbon = () => (
  <a
    className="github-fork-ribbon"
    href="https://github.com/socialgouv/recherche-entreprises"
    data-ribbon="Code source"
    title="Code source du projet"
  >
    Code source
  </a>
);

export default function App() {
  const apiUrl = API_URL && API_URL.replace(/(https?:\/\/[^/]+).*/, "$1");
  return (
    <Container className="App">
      <SWRConfig value={{ revalidateOnMount: false, dedupingInterval: 30000 }}>
        <ForkRibbon />
        <Hero />
        <Search />
        <br />
        <br />
        <br />
        <br />
        <br />
        Cette démo utilise l'API disponible à cette URL :{" "}
        <a target="_blank" rel="noopener noreferrer" href={apiUrl}>
          {apiUrl}
        </a>
      </SWRConfig>
    </Container>
  );
}
