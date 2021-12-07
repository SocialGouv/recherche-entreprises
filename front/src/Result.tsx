import * as React from "react";
import { Badge, Card } from "react-bootstrap";
import { Map, ExternalLink } from "react-feather";

type ConventionCollective = { idcc: string; url: string; shortTitle: string };

// todo : move to API
type ApiResult = {
  activitePrincipale: string;
  label: string;
  simpleLabel: string;
  highlightLabel: string;
  conventions: ConventionCollective[];
  siren: string;
  matchingEtablissement: {
    address: string;
    siret: string;
  };
  etablissements: number;
};

// Exemple d'implementation d'affichade d'un résultat
export const Result = ({
  activitePrincipale,
  label,
  simpleLabel,
  highlightLabel,
  conventions,
  siren,
  matchingEtablissement,
  etablissements,
}: ApiResult) => {
  const otherEtablissements = etablissements > 1;
  return (
    <Card style={{ minHeight: 250 }}>
      <Card.Header
        style={{ fontSize: "1.5em" }}
        dangerouslySetInnerHTML={{ __html: simpleLabel }}
      />
      <Card.Body>
        {simpleLabel !== label && (
          <div dangerouslySetInnerHTML={{ __html: highlightLabel }} />
        )}
        {activitePrincipale && <div>{activitePrincipale}</div>}
        {otherEtablissements &&
          `${etablissements} établissement${etablissements >= 2 ? "s" : ""}`}
        <br />
        <br />
        {matchingEtablissement && (
          <div>
            <a
              href={`https://nominatim.openstreetmap.org/ui/search.html?q=${encodeURIComponent(
                matchingEtablissement.address
              )}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Map style={{ marginRight: 5 }} />
            </a>
            {matchingEtablissement.address}
          </div>
        )}
        {(conventions.length && (
          <div>
            <br />
            <b>Conventions collectives :</b>
            <br />
            {conventions.map((convention) => (
              <li key={convention.idcc}>
                <a
                  href={convention.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {convention.shortTitle || convention.idcc}
                </a>
              </li>
            ))}
          </div>
        )) ||
          null}
      </Card.Body>
      <Card.Footer style={{ textAlign: "right" }}>
        <a
          title="Ouvrir la fiche sur Annuaire Entreprises"
          target="_blank"
          rel="noopener noreferrer"
          href={`https://annuaire-entreprises.data.gouv.fr/entreprise/${siren}`}
          style={{ fontSize: "1.4em" }}
        >
          <Badge bg="primary">
            SIREN: {siren}{" "}
            <ExternalLink
              size={20}
              style={{ verticalAlign: "bottom", marginLeft: 5 }}
            />
          </Badge>
        </a>
        {matchingEtablissement && (
          <a
            title="Ouvrir la fiche sur Annuaire Entreprises"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: "1.4em" }}
            href={`https://annuaire-entreprises.data.gouv.fr/etablissement/${matchingEtablissement.siret}`}
          >
            <Badge bg="info">
              SIRET : {matchingEtablissement.siret} <ExternalLink />
            </Badge>
            &nbsp;
          </a>
        )}
      </Card.Footer>
    </Card>
  );
};
