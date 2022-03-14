import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "setup/redux/store/store.js";
import { AppRouter } from "./routers/AppRouter.jsx";
import "./styles/styles.scss";

export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </Provider>
  );
};
