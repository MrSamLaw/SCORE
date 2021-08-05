import "./competitorlist.scss";

const CompetitorList = ({ competitors, firstName, lastName, carNo }) => {
  if (!competitors.length) {
    return <h3>No Registered Competitors Yet</h3>;
  }

  return (
    <div onClick={() => console.log("Click")}>
      {competitors &&
        competitors.map((competitor) => (
          <div key={competitor._id} className="card">
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

export default CompetitorList;
