import "./round.scss";

import { useState } from "react";
import { useQuery } from "@apollo/client";
import CompetitorList from "../components/CompetitorList";
import { QUERY_COMPETITORS, QUERY_ROUNDS } from "../utils/queries";
import QualifyList from "../components/QualifyList";
import RoundForm from "../components/RoundForm";
import RoundList from "../components/RoundList";

export default function Round() {
  const [currentSection, setCurrentSection] = useState("");
  const { data } = useQuery(QUERY_ROUNDS);
  const rounds = data?.rounds || [];

  const renderSection = () => {
    if (currentSection === "Competitors") {
      return <CompetitorList />;
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
      <RoundList rounds={rounds} />
      <RoundForm />
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
