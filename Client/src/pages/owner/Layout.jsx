import { Outlet, Navigate } from "react-router-dom";
import NavbarOwner from "../../components/owner/NavbarOwner";
import Sidebar from "../../components/owner/Sidebar";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const Layout = () => {
  const { isOwner } = useContext(AppContext);

  if (isOwner === false) return <Navigate to="/" replace />;

  return (
    <div className="flex flex-col">
      <NavbarOwner />
      <div className="flex">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
