import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { useCrrAccContext } from '../context/CrrAccContext';

const ProtectedRoutes = () => {
    const {currentAcc} = useCrrAccContext();

    const useAuth = () => {
        const user = { loggedIn: currentAcc != null};
        return user && user.loggedIn;
    };

  const isAuth = useAuth();
  return isAuth ? <Outlet /> : <Navigate to='/login' />
};

export default ProtectedRoutes
