import { Navigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function ProtectedRoute({ children }) {
  if (localStorage.getItem("tkn")) {
    return <>{children}</>;
  } else {
    return <Navigate to="/login" />;
  }
};

