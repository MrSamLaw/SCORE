import "./lapscore.scss";
import { useReducer, useState } from "react";

const formReducer = (state, event) => {
  return {
    ...state,
    [event.name]: event.value,
  };
};

function LapScore({ lapNo }) {
  const [formData, setFormData] = useReducer(formReducer, { score: 0 });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);

    // setTimeout(() => {
    //   setSubmitting(false);
    //   setFormData({ reset: true })
    // }, 3000
    // )
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
              Lap {lapNo} {value.toString()}
            </p>
          ))}
        </div>
      )}
      {!submitted && (
        <form onSubmit={handleSubmit}>
          <label>Lap {lapNo}</label>
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
