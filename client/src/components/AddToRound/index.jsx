import "./addToRound.scss";

import { useState } from "react";

const AddToRound = ({ competitors, competing }) => {
  const [roundCompetitors, setRoundCompetitors] = useState([]);

  if (!competitors.length) {
    return <h3>No Registered Competitors Yet</h3>;
  }
  console.log(competing);
  console.log(roundCompetitors);
  return (
    <div>
      {competitors &&
        competitors.map((competitor) => (
          <div
            key={competitor._id}
            className="card"
            onClick={() =>
              setRoundCompetitors([...roundCompetitors, competitor._id])
            }
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
