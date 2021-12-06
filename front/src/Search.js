import * as React from "react";
import useSWR from "swr";
import { Row, Col, Spinner, Form, Alert } from "react-bootstrap";
import { useDebounce } from "use-debounce";

import { Result } from "./Result";

const API_URL =
  process.env.REACT_APP_API_URL ||
  "https://api-recherche-entreprises.fabrique.social.gouv.fr/api/v1";

// make the API call and show results accordingly
// using SWR magic https://swr.vercel.app
const Results = ({ query, address, open, convention, employer }) => {
  const { data, error } = useSWR(
    `${API_URL}/search?query=${encodeURIComponent(
      query
    )}&address=${encodeURIComponent(
      address
    )}&open=${open}&convention=${convention}&employer=${employer}`
  );
  if (error)
    return (
      <div>
        <br />
        <Alert variant="danger">Impossible de charger les résultats...</Alert>
      </div>
    );
  if (!data)
    return (
      <div>
        <br />
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Recherche...</span>
        </Spinner>
      </div>
    );
  return (
    <div style={{ marginTop: 20 }}>
      {(data &&
        data.entreprises &&
        data.entreprises.length &&
        data.entreprises.map((entreprise) => (
          <Result key={entreprise.siren} {...entreprise} />
        ))) || (
        <div>
          <br />
          Aucun résultat avec cette recherche 😢
        </div>
      )}
    </div>
  );
};

// handle form state
export const Search = () => {
  // const [query, setQuery] = React.useState("");
  // const [location, setLocation] = React.useState("");
  const [searchParams, setSearchParams] = React.useState({
    query: "",
    address: "",
    open: false,
    convention: false,
    employer: false,
  });

  //  const [debouncedQuery] = useDebounce(query, 250);
  // const [debouncedLocation] = useDebounce(location, 250);
  const [debouncedParams] = useDebounce(searchParams, 250);

  const onQueryChange = (e) => {
    const newQuery = e.target.value;
    if (searchParams.query !== newQuery) {
      //setQuery(newQuery);
      setSearchParams({
        ...searchParams,
        query: newQuery,
      });
    }
  };
  const onLocationChange = (e) => {
    const newLocation = e.target.value;
    if (searchParams.address !== newLocation) {
      //  setLocation(newLocation);
      setSearchParams({
        ...searchParams,
        address: newLocation,
      });
    }
  };
  const onCheckBoxChange = (radio) => (e) => {
    const newStatus = e.target.checked;
    setSearchParams({
      ...searchParams,
      [radio]: newStatus,
    });
  };
  return (
    <div>
      <Row>
        <Col lg={12}>
          <Form.Control
            style={{ flex: "1 0 50%" }}
            size="lg"
            onChange={onQueryChange}
            type="text"
            placeholder="Recherchez votre entreprise"
          />
          <div
            style={{
              margin: "0 10px",
              fontSize: "1.3rem",
              lineHeight: "3rem",
              display: "inline-block",
            }}
          />
        </Col>
        <Col sm={12} lg={12}>
          <Form.Control
            style={{ flex: "1 0 50%" }}
            size="lg"
            onChange={onLocationChange}
            type="text"
            placeholder="Précisez une ville ou code postal"
          />
          <br />
        </Col>
        <Col sm={12}>
          <Form.Check
            type="checkbox"
            id="open"
            onChange={onCheckBoxChange("open")}
            label="Uniquement les entreprises encore ouvertes"
          />
          <Form.Check
            type="checkbox"
            id="employer"
            onChange={onCheckBoxChange("employer")}
            label="Uniquement les entreprises avec des employés"
          />

          <Form.Check
            type="checkbox"
            id="convention"
            onChange={onCheckBoxChange("convention")}
            label="Uniquement les entreprises avec une convention collective connue"
          />
        </Col>
      </Row>
      {searchParams.query && <Results {...debouncedParams} />}
    </div>
  );
};
