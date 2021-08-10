import { Link } from "react-router-dom";

const RoundList = ({ rounds }) => {
  if (!rounds.length) {
    // console.log(rounds);
    return <h3>No Rounds for this season yet</h3>;
  }
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
