import PropTypes from 'prop-types';
import {Navigate} from 'react-router';
import {useUserContext} from '../hooks/contextHooks';

const ProtectedRoute = ({children}) => {
  const {user} = useUserContext();
  return user ? children : <Navigate to="/login" replace />;
};

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProtectedRoute;
