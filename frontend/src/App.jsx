import "./App.css";
import Signup from "./pages/Signup";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Signin from "./pages/Signin";
import Dashboard from "./pages/Dashboard";
import Redirect from "./pages/Redirect";
import Explore from "./pages/Explore";
import GatedRoutes from "./pages/GatedRoutes";
import NewBlog from "./pages/NewBlog";
import EditBlog from "./pages/EditBlog";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route
            path="/dashboard"
            element={
              <GatedRoutes>
                <Dashboard />
              </GatedRoutes>
            }
          />
          <Route path="/" element={<Redirect />} />
          <Route
            path="/explore"
            element={
              <GatedRoutes>
                <Explore />
              </GatedRoutes>
            }
          />
          <Route
            path="/create"
            element={
              <GatedRoutes>
                <NewBlog />
              </GatedRoutes>
            }
          />
          <Route
            path={`edit/:blogId`}
            element={
              <GatedRoutes>
                <EditBlog />
              </GatedRoutes>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
