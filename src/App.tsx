import React from "react";
import EditPage from "./pages/Edit";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <EditPage />
      </Provider>
    </div>
  );
}

export default App;
