import { Link } from "react-router-dom";

const RoundList = ({ rounds }) => {
  if (!rounds.length) {
    // console.log(rounds);
    return <h3>No Rounds for this season yet</h3>;
  }
  return (
    <div>
      {rounds &&
        rounds.map((round) => (
          <div key={round._id}>
            <Link to={`/round/${round._id}`}>Round {round.roundNo}</Link>
          </div>
        ))}
    </div>
  );
};

export default RoundList;
