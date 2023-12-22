import { Outlet } from "react-router-dom";

import NavigationBar from "../components/NavigationBar/NavigationBar";

const PrimaryRoute = () => {
  return (
    <>
      <NavigationBar />
      <Outlet />
    </>
  );
};

export default PrimaryRoute;
