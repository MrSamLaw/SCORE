import "./qualifyList.scss";
import "../../form.scss";
const QualifyList = ({ qualifiers, qualOne, qualTwo, competitor, round }) => {
  console.log(qualifiers);
  if (!qualifiers.length) {
    return <h3>No Competitors are entered in this round</h3>;
  }

  return (
    <div>
      <button>CLOSE QUALIFYING</button>
      <p>
        Allows qualifying to be finalised. Any drivers who haven't completed
        qualifying will receive null scores and be removed from round.
      </p>
      {qualifiers &&
        qualifiers.map((qualifier) => (
          <div key={qualifier._id} className="card">
            EMPTY
          </div>
        ))}
      <div>
        <p>
          This section holds all drivers who haven't completed 2 qualifying laps
          for judges input, ordered by Marble # (Marble still not configured in
          models)
        </p>
        <div className="card">
          <div className="left">
            <p className="carNo">carNo</p>
          </div>
          <div className="right">
            <p>firstName</p>
            <p>lastName</p>
          </div>
          <div className="qScores">
            <form>
              <label>Lap 1</label>
              <input></input>
              <button type="submit">Confirm</button>
              {/* Submits qualOne Score  */}
            </form>
            <form>
              <label>Lap 2</label>
              <input></input>
              <button type="submit">Confirm</button>{" "}
              {/* Submits qualTwo Score  */}
            </form>
          </div>
        </div>
      </div>
      <hr />
      <section>
        <p>
          This section holds list of drivers who have completed qualifying, and
          orders them according to highest score.
        </p>
        <div>
          <p> Car No - Driver Name - Best - Second - Rank</p>
        </div>
      </section>
    </div>
  );
};

export default QualifyList;
