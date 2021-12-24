import SideBarContext from "contexts/SidebarContext";
import { useState, useCallback, useMemo } from "react";
import { Routes, Route } from "react-router-dom";

import routesByName from "constants/routesByName";

import NavigationHeader from "modules/NavigationHeader";
import HomePage from "modules/HomePage";
import SideBar from "modules/SideBar";
import MainArea from "modules/MainArea";

const MainDashboard = () => {
  return (
    <div className="flex">
      <SideBar />
      <MainArea />
    </div>
  );
};

const App = () => {
  const [sideBarOpen, setSideBarOpen] = useState(false);

  const toggleSideBar = useCallback(() => {
    setSideBarOpen((prev) => !prev);
  }, []);

  const sideBar = useMemo(
    () => ({ sideBarOpen, toggleSideBar }),
    [sideBarOpen, toggleSideBar]
  );

  return (
    <SideBarContext.Provider value={sideBar}>
      <div className="App">
        <NavigationHeader />
        <Routes>
          <Route path="*" element={<MainDashboard />} />
        </Routes>
      </div>
    </SideBarContext.Provider>
  );
};

export default App;
