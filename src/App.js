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
        <Link to="/formik2">Formik Take Two</Link> |{" "}
        <Link to="/formik3">Formik Numero Trois</Link> |{" "}
        <Link to="/formik4">Formik Final</Link> |{" "}
        <Link to="/form">React with Form tag</Link> |{" "}
        <a href="form.html">VanillaJS</a>
      </nav>
    </div>
  );
}
