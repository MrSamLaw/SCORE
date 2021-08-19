import "./lapscore.scss";
import { useReducer, useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_LAP_ONE, ADD_LAP_TWO } from "../../utils/mutations";

const formReducer = (state, event) => {
  return {
    ...state,
    [event.name]: event.value,
  };
};

function LapScore(props) {
  const [addLapOne, { data, loading, error }] = useMutation(ADD_LAP_ONE);
  const [addLapTwo] = useMutation(ADD_LAP_TWO);

  const [formData, setFormData] = useReducer(formReducer, { score: 0 });
  const [submitted, setSubmitted] = useState(false);

  if (error) {
    console.log({ error });
    return `Error ${error.message}`;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    switch (props.lapNo) {
      case "1":
        addLapOne({
          variables: {
            qualifierId: props.qId,
            qualOne: parseInt(formData.score),
          },
        });
        break;

      case "2":
        addLapTwo({
          variables: {
            qualifierId: props.qId,
            qualTwo: parseInt(formData.score),
          },
        });

        break;
      default:
        console.log("Default");
    }
  };

  const handleChange = (event) => {
    setFormData({
      name: event.target.name,
      value: event.target.value,
    });
  };

  return (
    <div className="lapscore">
      {submitted && (
        <div className="lapResult">
          {Object.entries(formData).map(([name, value]) => (
            <p key={name}>
              Lap {props.lapNo} {value.toString()}
            </p>
          ))}
        </div>
      )}
      {!submitted && (
        <form onSubmit={handleSubmit}>
          <label>Lap {props.lapNo}</label>
          <input
            name="score"
            onChange={handleChange}
            value={formData.score || ""}
          />

          <button type="submit">Confirm</button>
        </form>
      )}
    </div>
  );
}

export default LapScore;
