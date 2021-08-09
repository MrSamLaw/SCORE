import { useQuery } from "@apollo/client";
import CompetitorForm from "../components/CompetitorForm";
import CompetitorList from "../components/CompetitorList";
import PageTitle from "../components/PageTitle";
import { QUERY_COMPETITORS } from "../utils/queries";
import "./home.scss";

export default function Competitors() {
  const { loading, data } = useQuery(QUERY_COMPETITORS);
  const competitors = data?.competitors || [];
  console.log(data);
  return (
    <main className="sections">
      <PageTitle heading="COMPETITORS" />
      <div className="compContainer">
        {loading ? (
          <div>Loading...</div>
        ) : (
          <CompetitorList competitors={competitors} />
        )}
      </div>
      <hr />
      <CompetitorForm />
    </main>
  );
}
