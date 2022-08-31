import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

// const PrivateRoute = ({children, ...rest}) => {
//   const isUser = true;
//   return (
//     <Routes>
//  <Route {...rest} 
//  render={()=>{
//       return isUser ? children : <Navigate to='/login' />
//     }}></Route>
//     </Routes>
//   )
// }

const PrivateRoute = ({children}) => {
const {isAuthenticated, user} = useAuth0();
 const isUser = isAuthenticated && user;
 if(!isUser){
  return <Navigate to='/login'/>;
 }
 return children
}
export default PrivateRoute;

//we're accessing children because the dashboard will be a child of private route
//...rest: here we're spreading all the props that we'll set up in the private route

// in the firat ...rest, we're collecting the rest of the props that we're on the private route
//in the second ...rest, we're placing the collected props in the routes that we're returning