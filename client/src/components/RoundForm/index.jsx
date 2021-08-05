import { useMutation } from "@apollo/client";
import { useState } from "react";
import auth from "../../utils/auth";

import { ADD_ROUND } from "../../utils/mutations";
import { QUERY_SINGLE_ROUND } from "../../utils/queries";

const RoundForm = () => {
  const [roundNo, setRoundNo] = useState("");

  const [addRound, { error }] = useMutation(ADD_ROUND, {
    update(cache, { data: { addRound } }) {
      try {
        // const { round } = cache.readQuery({ query: QUERY_SINGLE_ROUND });
        // cache.writeQuery({
        //   query: QUERY_SINGLE_ROUND,
        //   data: { rounds: [addRound, ...round] },
        // });
      } catch (e) {
        console.error(e);
      }
    },
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addRound({
        variables: {
          roundNo,
        },
      });
      setRoundNo("");
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "roundNo") {
      setRoundNo(value);
    }
  };

  return (
    <div>
      <h3>Add a Round</h3>

      {auth.loggedIn() ? (
        <form onSubmit={handleFormSubmit}>
          <input
            name="roundNo"
            placeholder="00"
            value={roundNo}
            onChange={handleChange}
          ></input>
          <button type="submit">Add Round</button>
        </form>
      ) : (
        <p>You need to be logged in to add rounds.</p>
      )}
    </div>
  );
};

export default RoundForm;
