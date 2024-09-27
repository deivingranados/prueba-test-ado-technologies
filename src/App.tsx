import { BrowserRouter } from "react-router-dom";
import store from "../src/application/redux/store";
import { Provider } from "react-redux";
import MainApp from "./mainApp";
import "./global.css";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <MainApp />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
