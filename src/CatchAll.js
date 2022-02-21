import { Link } from "react-router-dom";

function CatchAll() {
  return (
    <>
      <h1> You should not be here</h1>
      <Link to="/">Go Home</Link>
    </>
  );
}

export default CatchAll;
