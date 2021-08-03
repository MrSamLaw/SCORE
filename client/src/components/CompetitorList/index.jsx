const CompetitorList = ({ competitors, firstName, lastName, carNo }) => {
  if (!competitors.length) {
    return <h3>No Registered Competitors Yet</h3>;
  }

  return (
    <div>
      {competitors &&
        competitors.map((competitor) => (
          <div key={competitor._id} className="card"></div>
        ))}
    </div>
  );
};

export default CompetitorList;
