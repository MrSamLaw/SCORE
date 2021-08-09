import PageTitle from "../PageTitle";

const SeasonList = ({ seasons, current }) => {
  if (!seasons.length) {
    return <h4>No season available</h4>;
  }

  return (
    <div>
      <PageTitle heading="seasons" />
      {seasons &&
        seasons
          .filter((seasons) => seasons.archived === current)
          .map((season) => <div key={season._id}>{season.year} season</div>)}
    </div>
  );
};

export default SeasonList;
