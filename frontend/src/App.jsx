import "./App.css";
import Signup from "./pages/Signup";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Signin from "./pages/Signin";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          {/* <Route path="/dashboard" />
          <Route path="" /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
