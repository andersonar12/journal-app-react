import Swal from "sweetalert2";
import { Route, Routes, Outlet, Navigate, useLocation } from "react-router-dom";
import { LayoutAuth } from "./LayoutAuth.jsx";
import { JournalScreen } from "../views/journal/JournalScreen.jsx";
import { RegisterScreen } from "../views/auth/RegisterScreen.jsx";
import { LoginScreen } from "../views/auth/LoginScreen.jsx";
import { PageNotFound } from "../views/page-not-found/PageNotFound.jsx";

export function AppRouter() {
  const { pathname } = useLocation();
  const RedirectToLogin = () => (pathname === "/" ? <Navigate to="/auth/login" /> : <Outlet />);
  return (
    <Routes>
      <Route path="/" element={<RedirectToLogin />}>
        <Route path="auth" element={<LayoutAuth />}>
          <Route path="login" element={<LoginScreen />} />
          <Route path="register" element={<RegisterScreen />} />
        </Route>
        <Route path="journal" element={<JournalScreen />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
}

/* function PrivateRoute({ user }) {
  if (!user.logged) {
    Swal.fire({
      icon: "error",
      title: "Acceso no Autorizado",
      text: "Debes iniciar sesion en la plataforma!",
    });
    return <Navigate to="/" />; //Si no esta logueado redirige al usuario al login
  }

  return <LayoutJournalApp />;
}

function PublicRoute({ user }) {
  return user.logged ? <Navigate to="/dashboard/marvel" /> : <LoginScreen />;
} */
