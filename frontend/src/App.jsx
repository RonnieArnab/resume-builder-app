import { Outlet } from "react-router-dom";
import "./App.css";
import { Button } from "./components/ui/button";
import Header from "./pages/Header";
function App() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
