import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ element: Element, ...rest }) => {
  const { accessToken } = useSelector((state) => state.login);
  const isAuthenticated = accessToken !== null;
  return isAuthenticated ? < Element /> : <Navigate to="/login" />;
};

export default PrivateRoute;
