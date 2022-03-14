import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { startLoginEmailPassword, startLoginGoogleLogin } from "setup/redux/actions/auth.js";
import { logout } from "setup/redux/reducers/authReducer.js";
import { setError, setLoading, setTheme } from "setup/redux/reducers/uiReducer.js";
import * as Yup from "yup";

const initialValues = {
  email: "aromero@mail.com",
  password: "123456",
};

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .min(3, "Minimo 3")
    .max(50, "Maximo 50")
    .email("Formato de correo electrónico incorrecto")
    .required("Correo electronico es requerido"),
  password: Yup.string().min(3, "minimo 3").max(50, "maximo 50").required("Se requiere contraseña"),
});

export const LoginScreen = () => {
  // const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading } = useSelector((state) => state.ui);

  useEffect(() => {
    return () => dispatch(setLoading(false));
  }, []);

  //OnClick Functions

  const formik = useFormik({
    initialValues,
    validationSchema: loginSchema,
    onSubmit: (values, { setStatus, setSubmitting }) => {
      dispatch(setLoading(true));

      console.log(values);

      // dispatch(startLoginEmailPassword(email, password));
      // setLoading(false)
      // setSubmitting(false)
      // setStatus('The login detail is incorrect')
    },
  });

  const handleGoogleButton = () => {
    dispatch(startLoginGoogleLogin());
    // navigate("/journal");
  };
  return (
    <div>
      <h3 className="auth__title">
        <strong>Login</strong>
      </h3>

      <form onSubmit={formik.handleSubmit} noValidate>
        <input
          autoComplete="off"
          type="text"
          {...formik.getFieldProps("email")}
          className="auth__input"
          placeholder="Email"
          name="email"
        ></input>
        {formik.touched.email && formik.errors.email && (
          <strong className="text-danger">{formik.errors.email}</strong>
        )}
        <input
          autoComplete="off"
          type="password"
          {...formik.getFieldProps("password")}
          className="auth__input"
          placeholder="Password"
        ></input>
        {formik.touched.password && formik.errors.password && (
          <strong className="text-danger">{formik.errors.password}</strong>
        )}

        <button
          type="submit"
          className="btn btn-primary w-100"
          disabled={formik.isSubmitting || !formik.isValid}
        >
          {!loading ? (
            <span className="text-white">Login</span>
          ) : (
            <>
              <span
                className="spinner-border spinner-border-sm"
                role="status"
                aria-hidden="true"
              ></span>
              <span className="text-white ml-2">Loading...</span>
            </>
          )}
        </button>

        <hr />
        <div className="auth__social-networks">
          <p>Login - Social Networks</p>
          <div className="google-btn" onClick={handleGoogleButton}>
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
      {/* <button className="btn btn-success" onClick={() => dispatch(setTheme("light"))}>
        Set Theme
      </button> */}
    </div>
  );
};
