import { useQuery } from "@apollo/client";
import CompetitorForm from "../components/CompetitorForm";
import CompetitorList from "../components/CompetitorList";
import PageTitle from "../components/PageTitle/PageTitle";
import { QUERY_COMPETITORS } from "../utils/queries";
import "./home.scss";

export default function Competitors() {
  const { loading, data } = useQuery(QUERY_COMPETITORS);
  const competitors = data?.competitors || [];

  return (
    <main className="sections">
      <PageTitle heading="COMPETITORS" />
      <div className="container">
        {loading ? (
          <div>Loading...</div>
        ) : (
          <CompetitorList competitors={competitors} />
        )}
      </div>
      <div>Add Competitor</div>
      <CompetitorForm />
    </main>
  );
}
