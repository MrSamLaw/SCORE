import "./addToRound.scss";

import { useState, useEffect } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_COMPETITORS } from "../../utils/queries";
import { ADD_QUALIFIER, ADD_ROUND_QUALIFIERS } from "../../utils/mutations";

const AddToRound = ({ competing, roundId }) => {
  const { data: compData } = useQuery(QUERY_COMPETITORS);
  const [competitors, setCompetitors] = useState([]);

  const [roundCompetitors, setRoundCompetitors] = useState([]);
  const [addQualifier] = useMutation(ADD_QUALIFIER);
  const [addRoundQualifiers] = useMutation(ADD_ROUND_QUALIFIERS);

  // if (!competitors.length) {
  //   return <h3>No Registered Competitors Yet</h3>;
  // }
  // console.log(roundId);
  // console.log(competing);
  console.log(roundCompetitors);

  useEffect(() => {
    setCompetitors(compData?.competitors);
  }, [compData?.competitors]);

  //Query Competitors

  // OnClick
  const compClick = (competitorId) => {
    //  -> CreateQualifier with Competitor
    setRoundCompetitors([...roundCompetitors, competitorId]);
    let filteredCompetitors = competitors.filter(
      (competitor) => competitor._id !== competitorId
    );
    console.log("Filtered");
    console.log(filteredCompetitors);
    console.log("removed");
    console.log(competitorId);
    console.log("round");
    console.log(roundCompetitors);
    setCompetitors(filteredCompetitors);
    addQualifier({
      variables: { competitor: competitorId, round: roundId },
    });

    //  -> AddQualifier to Round
    //    -> Put Qualifiers into Array

    console.log(roundCompetitors);
    //    -> Put Array into Round/Qualifiers

    //  -> Remove Competitor from List
    //  This should be able to be done with a filter below.
  };
  const finalClick = (roundCompetitors) => {
    console.log("finalClick");
    console.log(roundId);
    console.log(roundCompetitors);
    addRoundQualifiers({
      variables: {
        roundId: roundId,
        qualifiers: roundCompetitors,
      },
    });
  };
  return (
    <div>
      <div>
        {competitors &&
          competitors.map((competitor) => (
            <div
              key={competitor._id}
              className="card"
              onClick={() => compClick(competitor._id)}
            >
              <div className="left">
                <p className="carNo">{competitor.carNo}</p>
              </div>
              <div className="right">
                <p>{competitor.firstName}</p>
                <p>{competitor.lastName}</p>
              </div>
            </div>
          ))}
      </div>
      <div>
        <button onClick={() => finalClick(roundCompetitors)}>
          Finalise Competitors
        </button>
      </div>
    </div>
  );
};

export default AddToRound;
