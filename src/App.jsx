import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./routers/AppRouter.jsx";
import "./styles/styles.scss";

export const App = () => {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
};
