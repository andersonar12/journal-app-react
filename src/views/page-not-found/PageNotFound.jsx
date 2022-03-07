import { Link } from "react-router-dom";

export const PageNotFound = () => {
  return (
    <div
      style={{ height: "100vh" }}
      className="text-center d-flex align-items-center justify-content-center"
    >
      <div>
        <h2>
          <strong>Page not Found</strong>
        </h2>
        <Link to="/auth/login" className="btn btn-success">
          Regresar
        </Link>
      </div>
    </div>
  );
};
