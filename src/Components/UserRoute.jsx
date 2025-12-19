import { Navigate } from "react-router-dom";

const UserRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  // Not logged in
  if (!token) {
    return <Navigate to="/login" />;
  }

  // Logged in but not user
  if (role !== "user") {
    return <Navigate to="/admin/dashboard" />;
  }

  return children;
};

export default UserRoute;
