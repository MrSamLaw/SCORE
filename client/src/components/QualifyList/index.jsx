import "../../form.scss";
import "./qualifyList.scss";

import { useQuery } from "@apollo/client";
import { QUERY_ROUND_QUALIFIERS } from "../../utils/queries";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
const QualifyList = () => {
  // console.log(qualifiers);

  const { roundId } = useParams();
  const { data } = useQuery(QUERY_ROUND_QUALIFIERS, {
    variables: { roundId: roundId },
  });
  const [qualifiers, setQualifiers] = useState([]);

  useEffect(() => {
    setQualifiers(data?.roundQualifiers.qualifiers);
  }, [data?.roundQualifiers.qualifiers]);

  // console.log(qualifiers);
  // if (!qualifiers.length)
  //   return <h3>No Competitors are entered in this round</h3>;

  const L1Click = async (event) => {
    event.preventDefault();
    console.log("L1Click");
  };

  const L2Click = async (event) => {
    event.preventDefault();
    console.log("L2Click");
  };
  return (
    <div>
      {qualifiers &&
        qualifiers.map((qualifier) => (
          <div key={qualifier._id} className="card">
            <div className="left">
              <p className="carNo">{qualifier.competitor.carNo}</p>
            </div>
            <div className="right">
              <p>{qualifier.competitor.firstName}</p>
              <p>{qualifier.competitor.lastName}</p>
            </div>
            <div className="qScores">
              <form onSubmit={L1Click}>
                <label>Lap 1</label>
                <input></input>
                <button type="submit">Confirm</button>
                {/* Submits qualOne Score  */}
              </form>
              <form onSubmit={L2Click}>
                <label>Lap 2</label>
                <input></input>
                <button type="submit">Confirm</button>
                {/* Submits qualTwo Score  */}
              </form>
            </div>
          </div>
        ))}
      <div>
        <p>
          This section holds all drivers who haven't completed 2 qualifying laps
          for judges input, ordered by Marble # (Marble still not configured in
          models) 2 Onclick buttons? onClick takes parameters
        </p>
        {/* <div className="card">
          <div className="left">
            <p className="carNo">carNo</p>
          </div>
          <div className="right">
            <p>firstName</p>
            <p>lastName</p>
          </div>
          <div className="qScores">
            <form>
              <label>Lap 1</label>
              <input></input>
              <button type="submit">Confirm</button>
              Submits qualOne Score 
            </form>
            <form>
              <label>Lap 2</label>
              <input></input>
              <button type="submit">Confirm</button>{" "}
              Submits qualTwo Score 
            </form>
          </div>
        </div> */}
      </div>
      <hr />
      <div className="wrapper">
        <button>CLOSE QUALIFYING</button>
        <p>
          Allows qualifying to be finalised. Any drivers who haven't completed
          qualifying will receive null scores and be removed from round.
        </p>
      </div>
      <hr />
      <section>
        <p>
          This section holds list of drivers who have completed qualifying, and
          orders them according to highest score.
        </p>
        <div>
          <p> Car No - Driver Name - Best - Second - Rank</p>
        </div>
      </section>
    </div>
  );
};

export default QualifyList;
