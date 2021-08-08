import { useQuery } from "@apollo/client";
import { QUERY_SEASONS } from "../utils/queries";
import SeasonList from "../components/SeasonList";

export default function Seasons() {
  const { data } = useQuery(QUERY_SEASONS);
  const seasons = data?.seasons || [];
  console.log(seasons);
  return (
    <div>
      <h2>Current Season</h2>
      <SeasonList seasons={seasons} current={false} />
      <h3>Previous Seasons</h3>
      <SeasonList seasons={seasons} current={true} />
    </div>
  );
}