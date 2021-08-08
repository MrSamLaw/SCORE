const SeasonList = ({ seasons, current }) => {
  console.log(current);
  if (!seasons.length) {
    return <h4>No season available</h4>;
  }

  return (
    <div>
      <p>Seasons</p>
      {seasons &&
        seasons
          .filter((seasons) => seasons.archived === current)
          .map((season) => <div key={season._id}>{season.year} season</div>)}
    </div>
  );
};

export default SeasonList;
