import { useMutation } from "@apollo/client";
import { useState } from "react";
import auth from "../../utils/auth";

import { ADD_ROUND } from "../../utils/mutations";
import { QUERY_SINGLE_ROUND } from "../../utils/queries";

// const RoundForm = () => {
//   const [roundNo, setRoundNo] = useState("");

//   const [addRound] = useMutation(ADD_ROUND);
//   //   update(cache, { data: { addRound } }) {
//   //     try {
//   //       // const { round } = cache.readQuery({ query: QUERY_SINGLE_ROUND });
//   //       // cache.writeQuery({
//   //       //   query: QUERY_SINGLE_ROUND,
//   //       //   data: { rounds: [addRound, ...round] },
//   //       // });
//   //     } catch (e) {
//   //       console.error(e);
//   //     }
//   //   },
//   // });

//   const handleFormSubmit = async (event) => {
//     event.preventDefault();

//     try {
//       addRound({
//         //const { data } = await
//         variables: {
//           roundNo,
//         },
//       });
//       setRoundNo("");
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   const handleChange = (event) => {
//     const { name, value } = event.target;

//     if (name === "roundNo") {
//       setRoundNo(parseInt(value));
//     }
//   };

//   return (
//     <div>
//       {auth.loggedIn() ? (
//         <div>
//           <h3>Add a Round</h3>
//           <form onSubmit={handleFormSubmit}>
//             <input
//               name="roundNo"
//               placeholder="Add your comment..."
//               value={roundNo}
//               onChange={handleChange}
//             ></input>

//             {/* <input
//               name="roundNoValue"
//               placeholder="00"
//               value={roundNo}
//               onChange={handleChange}
//             ></input> */}
//             <button type="submit">Add Round</button>
//           </form>
//         </div>
//       ) : (
//         <></>
//       )}
//     </div>
//   );
// };

const RoundForm = () => {
  const [formState, setFormState] = useState({
    roundNo: "",
  });
  const [addRound] = useMutation(ADD_ROUND, {
    variables: { roundNo: formState.roundNo },
  });

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addRound();
        }}
      >
        <div>
          <input
            value={formState.roundNo}
            onChange={(e) =>
              setFormState({ ...formState, roundNo: parseInt(e.target.value) })
            }
            type="text"
            placeholder="Round Number"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default RoundForm;
