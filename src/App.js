import { Routes, Route } from "react-router-dom";

import routesByName from "constants/routesByName";

import NavigationHeader from "modules/NavigationHeader";
import HomePage from "modules/HomePage";
import SideBar from "modules/SideBar";
import Community from "modules/Community";
import Whitepaper from "modules/Whitepaper";
import Developers from "modules/Developers";

const MainDashboard = () => {
  return (
    <div className="flex">
      <SideBar />
      <div className="mainArea">
        <Routes>
          <Route path={routesByName.community} element={<Community />} />
          <Route path={routesByName.whitepaper} element={<Whitepaper />} />
          <Route path={routesByName.developers} element={<Developers />} />
        </Routes>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="App">
      <NavigationHeader />
      <Routes>
        <Route path={routesByName.home} element={<HomePage />} exact />
        <Route path="*" element={<MainDashboard />} />
      </Routes>
    </div>
  );
};

export default App;
