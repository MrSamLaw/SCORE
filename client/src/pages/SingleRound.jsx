import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import React from "react";
import { QUERY_SINGLE_ROUND } from "../utils/queries";

export default function SingleRound() {
  const { roundId } = useParams();
  console.log(roundId);
  const { data } = useQuery(QUERY_SINGLE_ROUND, {
    variables: { roundId: roundId },
  });

  const round = data?.round || {};
  console.log(round);
  return (
    <div>
      <h3>
        Round {round.roundNo} of the {round.season} Season
      </h3>

      <section>
        <h5>Edit Round details</h5>

        <h5>Qualifying</h5>
      </section>
    </div>
  );
}
