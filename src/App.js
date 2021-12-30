import SideBarContext from "contexts/SidebarContext";
import { useState, useCallback, useMemo, useEffect } from "react";

import NavigationHeader from "modules/NavigationHeader";
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
    () => ({ sideBarOpen, toggleSideBar, setSideBarOpen }),
    [sideBarOpen, toggleSideBar]
  );

  return (
    <SideBarContext.Provider value={sideBar}>
      <div className="App">
        <NavigationHeader />
        <MainDashboard />
      </div>
    </SideBarContext.Provider>
  );
};

export default App;
