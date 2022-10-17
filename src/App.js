import { Provider } from "react-redux";
import { store } from "./Component/UserStore";
import "./App.css";
import UserContainer from "./Component/UserContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserDetails from "./Component/UserDetails";
import NoMatchFound from "./Component/NoMatchFound";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="App">
        <Routes>
          <Route path="/" element={<UserContainer />}/>
            <Route path="userdetails" element={<UserDetails />} />
            <Route path="*" element= {<NoMatchFound />} />
        </Routes>
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
