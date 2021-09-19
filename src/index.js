import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "redux/configureStore";
import CssBaseline from "@material-ui/core/CssBaseline";
const store = configureStore();
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <CssBaseline />
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
