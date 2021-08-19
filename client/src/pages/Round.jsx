import "./round.scss";

// import { useState } from "react";
import { useQuery } from "@apollo/client";
import { QUERY_ROUNDS } from "../utils/queries";
import RoundForm from "../components/RoundForm";
import RoundList from "../components/RoundList";
import PageTitle from "../components/PageTitle";

export default function Round() {
  // const { data: roundsData } = useQuery(QUERY_ROUNDS);
  // const rounds = roundsData?.rounds || [];
  return (
    <main>
      <PageTitle heading="Rounds" />
      <RoundList />
      <RoundForm />

      <hr />
    </main>
  );
}
