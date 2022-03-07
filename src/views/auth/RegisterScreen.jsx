import { Link } from "react-router-dom";

export const RegisterScreen = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <h3 className="auth__title">
        <strong>Register</strong>
      </h3>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          className="auth__input"
          placeholder="Name"
          autoComplete="off"
          name="name"
        ></input>
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
        <input
          type="password"
          className="auth__input"
          placeholder="Confirm Password"
          name="password2"
          autoComplete="off"
        ></input>

        <button
          type="submit"
          className="btn btn-primary w-100 mb-3"
          onClick={(e) => handleSubmit(e)}
        >
          Login
        </button>
        <Link className="link mt-5" to="/auth/login">
          Already register?
        </Link>
      </form>
    </div>
  );
};
