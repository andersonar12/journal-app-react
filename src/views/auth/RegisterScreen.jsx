import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startRegisterWithEmailPasswordName } from "setup/redux/actions/auth.js";
import { setLoading } from "setup/redux/reducers/uiReducer.js";

const initialValues = {
  name: "",
  email: "",
  password: "",
  password2: "",
};

const registerSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Mínimo 3 símbolos")
    .max(50, "Máximo 50 símbolos")
    .required("Nombre es requerido"),
  email: Yup.string()
    .email("Formato de correo electrónico incorrecto")
    .min(3, "Mínimo 3 símbolos")
    .max(50, "Máximo 50 símbolos")
    .required("Correo electronico es requerido"),
  password: Yup.string()
    .min(6, "Mínimo 6 símbolos")
    .max(50, "Máximo 50 símbolos")
    .required("Contraseña es requerida"),
  password2: Yup.string()
    .required("Confirmacion de contraseña es requerida")
    .when("password", {
      is: (val) => (val && val.length > 0 ? true : false),
      then: Yup.string().oneOf(
        [Yup.ref("password")],
        "La contraseña y la confirmacion de la contraseña no son las mismas"
      ),
    }),
});

export const RegisterScreen = () => {
  /* const [loading, setLoading] = useState(false); */
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.ui);

  const formik = useFormik({
    initialValues,
    validationSchema: registerSchema,
    onSubmit: (values, { setStatus, setSubmitting }) => {
      console.log(values);
      dispatch(setLoading(true));

      const { email, password, name } = values;
      dispatch(startRegisterWithEmailPasswordName(email, password, name));
      dispatch(setLoading(false));
      setSubmitting(false);
      // dispatch(startLoginEmailPassword(email, password));
      // setLoading(false)
      // setSubmitting(false)
      // setStatus('The login detail is incorrect')
    },
  });

  return (
    <div>
      <h3 className="auth__title">
        <strong>Register</strong>
      </h3>
      <form onSubmit={formik.handleSubmit} noValidate>
        <input
          type="text"
          className="auth__input"
          placeholder="Name"
          autoComplete="off"
          name="name"
          {...formik.getFieldProps("name")}
        ></input>
        {formik.touched.name && formik.errors.name && (
          <strong className="text-danger">{formik.errors.name}</strong>
        )}
        <input
          type="text"
          className="auth__input"
          placeholder="Email"
          autoComplete="off"
          name="email"
          {...formik.getFieldProps("email")}
        ></input>
        {formik.touched.email && formik.errors.email && (
          <strong className="text-danger">{formik.errors.email}</strong>
        )}
        <input
          type="password"
          className="auth__input"
          placeholder="Password"
          name="password"
          autoComplete="off"
          {...formik.getFieldProps("password")}
        ></input>
        {formik.touched.password && formik.errors.password && (
          <strong className="text-danger">{formik.errors.password}</strong>
        )}
        <input
          type="password"
          className="auth__input"
          placeholder="Confirm Password"
          name="password2"
          autoComplete="off"
          {...formik.getFieldProps("password2")}
        ></input>

        {formik.touched.password2 && formik.errors.password2 && (
          <strong className="text-danger">{formik.errors.password2}</strong>
        )}

        <button
          type="submit"
          className="btn btn-primary w-100"
          disabled={formik.isSubmitting || !formik.isValid}
        >
          {!loading ? (
            <span className="text-white">Sign Up</span>
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
        <Link className="link mt-5" to="/auth/login">
          Already register?
        </Link>
      </form>
    </div>
  );
};
