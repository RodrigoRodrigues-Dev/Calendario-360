// React and ReactDOM imports
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';

// Redux imports
import { Provider, useSelector, useDispatch } from 'react-redux';
import store from './store';
import { setLoginStatus } from './store/reducers/user';

// React Router imports
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Firebase imports
import { getAuth, onAuthStateChanged } from 'firebase/auth';

// Global styles and performance reporting
import { Reset } from './styles/GlobalStyles';
import reportWebVitals from './reportWebVitals';

// Page and component imports
import AuthLanding from './pages/AuthLanding';
import Home from './pages/Home';
import App from './App';
import ProtectedRoute from './components/ProtectedRoute';
import UserView from './views/UserView/Index';
import CalendarHome from './views/CalendarHome';

// Define RootState type
type RootState = {
  user: {
    isLogin: boolean;
  };
};

const AppRouter = () => {
  const dispatch = useDispatch();
  const auth = getAuth();

  // Handle authentication state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      dispatch(setLoginStatus(!!user));
    });
    return () => unsubscribe();
  }, [dispatch, auth]);

  // Select login status from the store
  const isLogin = useSelector((state: RootState) => state.user.isLogin);

  console.log('isLogin', isLogin);

  // Define application routes
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/AuthLanding',
      element: isLogin ? (
        <ProtectedRoute isLoggedIn={!isLogin} redirectPath="/Calendario" />
      ) : (
        <AuthLanding />
      ),
      children: [
        {
          index: true,
          element: <AuthLanding />
        }
      ]
    },
    {
      path: '/Calendario',
      element: (
        <ProtectedRoute isLoggedIn={isLogin} redirectPath="/AuthLanding">
          <App />
        </ProtectedRoute>
      ),
      children: [
        {
          index: true,
          element: <CalendarHome />
        },
        {
          path: 'User',
          element: <UserView />
        }
      ]
    }
  ]);

  return <RouterProvider router={router} />;
};

// Render the application
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Reset />
      <AppRouter />
    </Provider>
  </React.StrictMode>
);

// Measure performance
reportWebVitals();
