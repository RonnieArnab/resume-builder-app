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

function App() {
  const { authUser } = useAuthContext();

  return (
    <div>
      {/* <Header /> */}
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
          path="/dashboard/resume/:resumeId/edit"
          element={<EditResume />}></Route>
        {/* // element={authUser ? <DashBoard /> : <Navigate to="/auth/login" />} */}
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;


