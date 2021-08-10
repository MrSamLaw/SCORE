import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { useState } from "react";

import { QUERY_ROUND_QUALIFIERS } from "../utils/queries";
import { QUERY_SINGLE_ROUND } from "../utils/queries";
import PageTitle from "../components/PageTitle";
import SubTitle from "../components/SubTitle";
import AddToRound from "../components/AddToRound";
import QualifyList from "../components/QualifyList";

const SingleRound = () => {
  const [currentSection, setCurrentSection] = useState("");
  const { roundId } = useParams();

  const { data: qualifyData } = useQuery(QUERY_ROUND_QUALIFIERS, {
    variables: { roundId: roundId },
  });

  const qualifiers = qualifyData?.roundQualifiers.qualifiers || [];
  // console.log(qualifiers);
  const { data } = useQuery(QUERY_SINGLE_ROUND, {
    variables: { roundId: roundId },
  });

  const round = data?.round || {};
  // console.log(round);
  const renderSection = () => {
    if (currentSection === "Competitors") {
      return <AddToRound competing={round} roundId={roundId} />;
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
    <div>
      <PageTitle heading="Round" />

      <div className="sectionNav">
        <ul>
          <li
            className={"Competitors" ? "section-link active" : "section-link"}
            onClick={() => handleSectionChange("Competitors")}
          >
            Add Competitors
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

      <section>
        <SubTitle heading="Edit Round details" />
      </section>
    </div>
  );
};
export default SingleRound;
