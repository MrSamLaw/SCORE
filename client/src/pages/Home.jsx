import { useQuery } from "@apollo/client";
import CompetitorList from "../components/CompetitorList";
import { QUERY_COMPETITORS } from "../utils/queries";
import "./home.scss";

export default function Home() {
  const { loading, data } = useQuery(QUERY_COMPETITORS);
  const competitors = data?.competitors || [];

  return (
    <main className="sections">
      Home Section
      <div className="container">
        {loading ? (
          <div>Loading...</div>
        ) : (
          <CompetitorList competitors={competitors} />
        )}
      </div>
    </main>
  );
}
