import { Navigate } from "react-router-dom";

const parseJwt  = (token: any) => {
  const base64Url = token?.split('.')[1];
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  const jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));

  return JSON.parse(jsonPayload);
}

export const ProtectedRoute = ({ children }: any) => {

    let tokenExistAndStillValue = localStorage?.getItem('token') == null ? false : (parseJwt(localStorage?.getItem('token')).exp * 1000 > Date.now());
  
    if (!tokenExistAndStillValue) {
        // user is not authenticated
        return ( <Navigate to="/login" /> );
    }
  return children;
};

