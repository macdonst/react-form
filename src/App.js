import { Link } from "react-router-dom";

export default function App() {
  return (
    <div>
      <h1>Do you need a form library?</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem"
        }}
      >
        <Link to="/hooks">React-Hooks</Link> |{" "}
        <Link to="/formik">Formik</Link> |{" "}
        <a href="form.html">VanillaJS</a>
      </nav>
    </div>
  );
}
