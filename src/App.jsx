import "./App.css";
import SideNavbar from "./navbar/SideNavbar";
import Navbar from "./navbar/SideNavbar";
import Pages from "./pages/Pages";
import RoutingList from "./routes/RoutingList";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="flex theme">
        <div className="h-screen">
          <SideNavbar />
        </div>
        <div className="flex-grow p-4 ml-60">
          <RoutingList />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
