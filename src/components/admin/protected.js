import { Navigate } from "react-router-dom";

export const AdminProtected = ({ children }) => {
  if (localStorage.getItem("isLoggedIn") === "true") {
    return children;
  }
  return <Navigate to="/admin/login" replace />;
};
