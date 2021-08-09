import "./pageTitle.scss";

export default function PageTitle({ heading }) {
  return (
    <div className="pageTitle">
      <h1>{heading}</h1>
    </div>
  );
}
