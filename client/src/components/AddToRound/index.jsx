import "./addToRound.scss";

import { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_QUALIFIER } from "../../utils/mutations";

const AddToRound = ({ competitors, competing, roundId }) => {
  const [roundCompetitors, setRoundCompetitors] = useState([]);
  const [addQualifier] = useMutation(ADD_QUALIFIER);
  if (!competitors.length) {
    return <h3>No Registered Competitors Yet</h3>;
  }
  // console.log(roundId);
  // console.log(competing);
  // console.log(roundCompetitors);

  // OnClick
  const compClick = (ThisShouldBeCompetitorID) => {
    console.log(ThisShouldBeCompetitorID);
    //  -> CreateQualifier with Competitor
    // addQualifier({variables: ThisShouldBeCompetitorId, roundId})

    //  -> AddQualifier to Round
    setRoundCompetitors([...roundCompetitors, ThisShouldBeCompetitorID]);

    //  -> Remove Competitor from List
    //  This should be able to be done with a filter below.
  };

  return (
    <div>
      {/* Can I change this map to some kind of filter that filters out IDs that are in the round/roundCompetitors  */}
      {competitors &&
        competitors.map((competitor) => (
          <div
            key={competitor._id}
            className="card"
            onClick={() => compClick("ThisShouldBeCompetitorID")}
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
  );
};

export default AddToRound;
