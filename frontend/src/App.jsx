// App.jsx
import "./App.css";
import Header from "./pages/Header";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import SignInPage from "./auth/sign-in";
import Login from "./auth/login";
import DashBoard from "./pages/DashBoard";
import { useAuthContext } from "./context/AuthContext";
import EditResume from "./pages/DashBoard/resume/[resumeId]";
import { Toaster } from "./components/ui/toaster";
import Navbar from "./components/NavBar/NavBar";
import ResumeUpload from "./pages/ResumeUpload/ResumeUpload";
import ValidateParsedData from "./pages/ValidateParsedData/ValidateParsedData";
import PortfolioDisplay from "./pages/PortfolioDisplay/PortfolioDisplay";
import PageNotFound from "./pages/PageNotFound/PageNotFound";

function App() {
  const { authUser } = useAuthContext();

  return (
    <div>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/auth/sign-in"
          element={authUser ? <Navigate to="/dashboard" /> : <SignInPage />}
        />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route
          path="/auth/login"
          element={authUser ? <Navigate to="/dashboard" /> : <Login />}
        />
        <Route
          path="/portfolio/create"
          element={authUser ? <ResumeUpload/> : <Login />}
        />
        <Route
          path="/portfolio/validate"
          element={authUser ? <ValidateParsedData reqType={"validate"}/> : <Login />}
        />
        <Route
          path="/dashboard/edit/:portfolioId"
          element={authUser ? <ValidateParsedData reqType={"edit"}/> : <Login />}
        />
        <Route
          path="/dashboard/resume/:resumeId/edit"
          element={<EditResume />}></Route>
        {/* // element={authUser ? <DashBoard /> : <Navigate to="/auth/login" />} */}
        <Route
          path="/:portfolioId"
          element={authUser ? <PortfolioDisplay/> : <Login />}
        />
        <Route
          path="*"
          element={<PageNotFound />}
        />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;


