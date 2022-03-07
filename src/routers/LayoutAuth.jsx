import { Outlet } from "react-router-dom";

export function LayoutAuth() {
  return (
    <div className="auth__main">
      <div className="container h-100">
        <div className="row d-flex align-items-center justify-content-center h-100">
          <div className="col-4 auth__box-container">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
