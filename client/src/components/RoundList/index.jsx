import { useQuery } from "@apollo/client";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { QUERY_ROUNDS } from "../../utils/queries";

const RoundList = () => {
  const { data, loading, error } = useQuery(QUERY_ROUNDS);
  const [rounds, setRounds] = useState([]);

  useEffect(() => {
    setRounds(data?.rounds);
  }, [data?.rounds]);

  // if (!rounds.length) {
  //   // console.log(rounds);
  //   return <h3>No Rounds for this season yet</h3>;
  // }
  return (
    <div className="wrapper">
      {rounds &&
        rounds.map((round) => (
          <div key={round._id}>
            <p>
              <Link to={`/round/${round._id}`}>Round {round.roundNo}</Link>
            </p>
          </div>
        ))}
    </div>
  );
};

export default RoundList;
