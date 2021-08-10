import { useQuery, useMutation } from "@apollo/client";
import { useState } from "react";
// import auth from "../../utils/auth";

import { ADD_ROUND } from "../../utils/mutations";
import { QUERY_SEASONS } from "../../utils/queries";

const RoundForm = () => {
  const [roundNo, setRoundNo] = useState("");
  const [seasonYear, setSeasonYear] = useState("");
  const [addRound] = useMutation(ADD_ROUND);
  const { data: seasonsData } = useQuery(QUERY_SEASONS);
  // const { data: compData } = useQuery(QUERY_COMPETITORS);
  const seasons = seasonsData?.seasons || [];
  // const competitors = compData?.competitors || [];
  //   update(cache, { data: { addRound } }) {
  //     try {
  //       // const { round } = cache.readQuery({ query: QUERY_SINGLE_ROUND });
  //       // cache.writeQuery({
  //       //   query: QUERY_SINGLE_ROUND,
  //       //   data: { rounds: [addRound, ...round] },
  //       // });
  //     } catch (e) {
  //       console.error(e);
  //     }
  //   },
  // });

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(roundNo);
    console.log(seasonYear);
    try {
      const { data } = await addRound({
        variables: {
          roundNo: roundNo,
          season: seasonYear,
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
      setRoundNo(parseInt(value));
    }
  };
  const handleSeasonChange = (event) => {
    const { name, value } = event.target;
    if (name === "seasonYear") {
      setSeasonYear(value);
    }
    console.log(value);
  };

  return (
    <div>
      {/* {auth.loggedIn() ? ( */}
      <div>
        <h3>Add a Round</h3>
        <form onSubmit={handleFormSubmit}>
          <input
            name="roundNo"
            placeholder="Round Number"
            value={roundNo}
            onChange={handleChange}
          ></input>

          <select name="seasonYear" onChange={handleSeasonChange}>
            {seasons.map((season) => (
              <option
                key={season._id}
                value={season._id}
                defaultValue={{ value: season._id }}
              >
                {season.year}
              </option>
            ))}
          </select>
          {/* <input
              name="roundNoValue"
              placeholder="00"
              value={roundNo}
              onChange={handleChange}
            ></input> */}
          <button type="submit">Add Round</button>
        </form>
      </div>
      {/* ) : (
        <></>
      )} */}
    </div>
  );
};

// const RoundForm = () => {
//   const [formState, setFormState] = useState({
//     roundNo: "",
//   });
//   const [addRound] = useMutation(ADD_ROUND, {
//     variables: { roundNo: formState.roundNo },
//   });

//   return (
//     <div>
//       <form
//         onSubmit={(e) => {
//           e.preventDefault();
//           addRound();
//         }}
//       >
//         <div>
//           <input
//             value={formState.roundNo}
//             onChange={(e) =>
//               setFormState({ ...formState, roundNo: parseInt(e.target.value) })
//             }
//             type="text"
//             placeholder="Round Number"
//           />
//         </div>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

export default RoundForm;
