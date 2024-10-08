// App.jsx
import "./App.css";
import Header from "./pages/Header";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import SignInPage from "./auth/sign-in";
import Login from "./auth/login";
import { useAuthContext } from "./context/AuthContext";
import { Toaster } from "./components/ui/toaster";
import Navbar from "./components/NavBar/NavBar";
import ResumeUpload from "./pages/ResumeUpload/ResumeUpload";
import ValidateParsedData from "./pages/ValidateParsedData/ValidateParsedData";
import PortfolioDisplay from "./pages/PortfolioDisplay/PortfolioDisplay";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import EditResume from "./pages/EditResume/EditResume";
import ViewResume from "./pages/ViewResume/ViewResume";
import AddResume from "./pages/AddResume/AddResume";
import DashBoard from "./pages/dashboard/DashBoard";

function App() {
  const { authUser } = useAuthContext();

  return (
    <div className="min-h-screen pb-4">
      {authUser == undefined || authUser == null || authUser == "" ? (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth">
            <Route path="sign-in" element={<SignInPage />} />
            <Route path="login" element={<Login />} />
          </Route>
          <Route path="/portfolio">
            <Route path="create" element={<Navigate to="/auth/login" />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth">
            <Route path="sign-in" element={<Navigate to="/" />} />
            <Route path="login" element={<Navigate to="/" />} />
          </Route>
          <Route path="/dashboard">
            <Route path="" element={<DashBoard />} />
            <Route
              path="edit/:portfolioId"
              element={<ValidateParsedData reqType={"edit"} />}
            />
          </Route>
          <Route path="/portfolio">
            <Route path="create" element={<ResumeUpload />} />
            <Route
              path="validate"
              element={<ValidateParsedData reqType={"validate"} />}
            />
          </Route>
          <Route path="/resume">
            <Route path=":resumeId/edit" element={<EditResume />} />
            <Route path=":resumeId/view" element={<ViewResume />} />
          </Route>
          <Route path="/:portfolioId" element={<PortfolioDisplay />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      )}
      <Toaster />
    </div>
  );
}

export default App;
