import "./round.scss";

import { useState } from "react";
import { useQuery } from "@apollo/client";
import CompetitorList from "../components/CompetitorList";
import { QUERY_COMPETITORS } from "../utils/queries";
import QualifyList from "../components/QualifyList";

export default function Round() {
  const [currentSection, setCurrentSection] = useState("Competitors");
  const { data } = useQuery(QUERY_COMPETITORS);
  const competitors = data?.competitors || [];

  //   const { data2 } = useQuery(QUERY_QUALIFY);
  //   const qualifiers = data2?.qualifiers || [];

  const renderSection = () => {
    if (currentSection === "Competitors") {
      return <CompetitorList competitors={competitors} />;
    }
    if (currentSection === "Qualifying") {
      //   console.log("Qualifying");
      return <QualifyList />; // qualifiers={qualifiers}
    }
    if (currentSection === "Battles") {
      console.log("Battles"); //   return <Battles />;
    }
  };

  const handleSectionChange = (section) => setCurrentSection(section);

  return (
    <main>
      Round Section
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
          <li
            className={"Battles" ? "section-link active" : "section-link"}
            onClick={() => handleSectionChange("Battles")}
          >
            Battles
          </li>
        </ul>
      </div>
      <div className="roundSections">{renderSection()}</div>
    </main>
  );
}
