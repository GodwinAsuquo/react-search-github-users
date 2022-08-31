import React from 'react';
import { Dashboard, Login, PrivateRoute, AuthWrapper, Error } from './pages';
//I did not type ./pages/filename because Everything is imported in the index and by default, index is the one that is first hit when searching in a folder.
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <AuthWrapper>
    <Router>
      <Routes>       
      <Route
       path='/' 
       element={
        <PrivateRoute>
      <Dashboard />
      </PrivateRoute>
      }/>
      <Route path='/login' element={<Login />}/>
      <Route path='*' element={<Error />}/>
      </Routes>
    </Router>
    </AuthWrapper>
  );
}

export default App;


//Note that Routes alwasy displays the first <Route> that mathes the path you typed in. That's why the error page is always displayed