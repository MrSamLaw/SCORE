import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import React from "react";
import { QUERY_SINGLE_ROUND } from "../utils/queries";
import PageTitle from "../components/PageTitle";
import SubTitle from "../components/SubTitle";

const SingleRound = () => {
  const { roundId } = useParams();

  const { data } = useQuery(QUERY_SINGLE_ROUND, {
    variables: { roundId: roundId },
  });

  const round = data?.round || {};

  return (
    <div>
      <PageTitle heading="Round" />

      <section>
        <SubTitle heading="Edit Round details" />

        <h5>Qualifying</h5>
      </section>
    </div>
  );
};
export default SingleRound;
