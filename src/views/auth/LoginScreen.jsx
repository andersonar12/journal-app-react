import { Link, useNavigate } from "react-router-dom";

export const LoginScreen = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/journal");
  };
  return (
    <div>
      <h3 className="auth__title">
        <strong>Login</strong>{" "}
      </h3>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          className="auth__input"
          placeholder="Email"
          autoComplete="off"
          name="email"
        ></input>
        <input
          type="password"
          className="auth__input"
          placeholder="Password"
          name="password"
          autoComplete="off"
        ></input>

        <button type="submit" className="btn btn-primary w-100" onClick={(e) => handleSubmit(e)}>
          Login
        </button>
        <hr />
        <div className="auth__social-networks">
          <p>Login - Social Networks</p>
          <div className="google-btn">
            <div className="google-icon-wrapper">
              <img
                className="google-icon"
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="google button"
              />
            </div>
            <p className="btn-text text-center">
              <b>Sign in with Google</b>
            </p>
          </div>
        </div>

        <Link className="link" to="/auth/register">
          Create new account
        </Link>
      </form>
    </div>
  );
};
