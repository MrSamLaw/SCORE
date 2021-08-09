import { useMutation } from "@apollo/client";
import { useState } from "react";
import { ADD_COMPETITOR } from "../../utils/mutations";
import SubTitle from "../SubTitle";

export default function CompetitorForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [carNo, setCarNo] = useState("");
  const [addCompetitor] = useMutation(ADD_COMPETITOR);

  const handleChange = (event) => {
    const { name, value } = event.target;
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      addCompetitor({
        variables: { firstName, lastName, carNo },
      });
      setFirstName("");
      setLastName("");
      setCarNo("");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      {/* {auth.loggedIn() ? ( */}
      <div>
        <SubTitle heading="Register a Competitor" />
        <form onSubmit={handleFormSubmit}>
          <input
            name="firstName"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          ></input>
          <input
            name="lastName"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          ></input>
          <input
            name="carNo"
            placeholder="Car Number"
            value={carNo}
            onChange={(e) => setCarNo(parseInt(e.target.value))}
          ></input>

          <button type="submit">SUBMIT</button>
        </form>
      </div>
      {/* ) : (
            <></>
          )} */}
    </div>
  );
}
