import "./round.scss";

import { useState } from "react";
import { useQuery } from "@apollo/client";
import CompetitorList from "../components/CompetitorList";
import {
  QUERY_COMPETITORS,
  QUERY_ROUND_QUALIFIERS,
  QUERY_ROUNDS,
} from "../utils/queries";
import QualifyList from "../components/QualifyList";
import RoundForm from "../components/RoundForm";
import RoundList from "../components/RoundList";

export default function Round() {
  const [currentSection, setCurrentSection] = useState("");
  const { data: compData } = useQuery(QUERY_COMPETITORS);
  const { data: roundsData } = useQuery(QUERY_ROUNDS);
  const { data: qualifyData } = useQuery(QUERY_ROUND_QUALIFIERS);
  const competitors = compData?.competitors || [];
  const rounds = roundsData?.rounds || [];
  const qualifiers = qualifyData?.qualifiers || [];

  const renderSection = () => {
    if (currentSection === "Competitors") {
      return <CompetitorList competitors={competitors} />;
    }
    if (currentSection === "Qualifying") {
      console.log(qualifyData);
      return <QualifyList qualifiers={qualifiers} />;
    }
    // if (currentSection === "Battles") {
    //   console.log("Battles"); //   return <Battles />;
    // }
  };

  const handleSectionChange = (section) => setCurrentSection(section);

  return (
    <main>
      Round Section
      <RoundList rounds={rounds} />
      <RoundForm />
      <hr />
      <div className="sectionNav">
        <ul>
          <li
            className={"Competitors" ? "section-link active" : "section-link"}
            onClick={() => handleSectionChange("Competitors")}
          >
            Competitors
          </li>
          <li
            className={"Qualifying" ? "section-link active" : "section-link"}
            onClick={() => handleSectionChange("Qualifying")}
          >
            Qualifying
          </li>
          {/* <li
            className={"Battles" ? "section-link active" : "section-link"}
            onClick={() => handleSectionChange("Battles")}
          >
            Battles
          </li> */}
        </ul>
      </div>
      <div className="roundSections">{renderSection()}</div>
    </main>
  );
}
