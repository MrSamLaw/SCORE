import { useQuery } from "@apollo/client";
import { QUERY_SEASONS } from "../utils/queries";
import SeasonList from "../components/SeasonList";
import PageTitle from "../components/PageTitle";

export default function Seasons() {
  const { data } = useQuery(QUERY_SEASONS);
  const seasons = data?.seasons || [];

  return (
    <div>
      <PageTitle heading="SEASONS" />
      <div className="container">
        <h2>Current</h2>
        <SeasonList seasons={seasons} current={false} />
        <h3>Previous</h3>
        <SeasonList seasons={seasons} current={true} />
      </div>
    </div>
  );
}
