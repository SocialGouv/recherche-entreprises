import * as React from "react";
import useSWR from "swr";
import { Row, Col, Spinner, Form } from "react-bootstrap";
import { useDebounce } from "use-debounce";

import { Result } from "./Result";

const API_URL =
  process.env.REACT_APP_API_URL ||
  "https://api-recherche-entreprises.fabrique.social.gouv.fr/api/v1";

// make the API call and show results accordingly
// using SWR magic https://swr.vercel.app
const Results = ({ query, location }) => {
  const { data, error } = useSWR(
    `${API_URL}/search?query=${encodeURIComponent(
      query
    )}&address=${encodeURIComponent(location)}`
  );
  if (error) return <div>failed to load</div>;
  if (!data)
    return (
      <div>
        <br />
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
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
  const [query, setQuery] = React.useState("");
  const [location, setLocation] = React.useState("");
  const [debouncedQuery] = useDebounce(query, 250);
  const [debouncedLocation] = useDebounce(location, 250);

  const onQueryChange = (e) => {
    const newQuery = e.target.value;
    if (query !== newQuery) {
      setQuery(newQuery);
    }
  };
  const onLocationChange = (e) => {
    const newLocation = e.target.value;
    if (location !== newLocation) {
      setLocation(newLocation);
    }
  };
  return (
    <div>
      <Row>
        <Col sm={12} lg={6}>
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
        <Col sm={12} lg={6}>
          <Form.Control
            style={{ flex: "1 0 50%" }}
            size="lg"
            onChange={onLocationChange}
            type="text"
            placeholder="Précisez une ville ou code postal"
          />
        </Col>
      </Row>
      {query && <Results query={debouncedQuery} location={debouncedLocation} />}
    </div>
  );
};
