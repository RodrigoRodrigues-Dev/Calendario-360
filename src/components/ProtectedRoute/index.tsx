import { Navigate } from 'react-router-dom';

type Prop = {
  isLoggedIn: boolean;
  redirectPath: string;
  children?: React.ReactNode;
};

const ProtectedRoute = ({ isLoggedIn, redirectPath, children }: Prop) => {
  return isLoggedIn ? <>{children}</> : <Navigate to={redirectPath} replace />;
};

export default ProtectedRoute;
