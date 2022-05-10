import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import SignIn from './pages/SignIn'
import { AuthProvider } from './Auth/auth'
import ProtectedRoute from './components/ProtectedRoute';
import AdminProtectedRoute from './components/AdminProtectedRoute';
import Dashboard from './pages/Dashboard'
import UploadImages from './pages/UploadImages'
import { Helmet } from "react-helmet";


ReactDOM.render(
  <AuthProvider>
    {/* <Helmet>
      <head> 
          <title>SLAYMASTER - Create Beauty Content That Slays, Hair Tutorial</title>
          <meta 
              name="description" 
              content="Build an empowering community for #EVERYONES beauty journey through video, blogging, and other forms of media. CREATE BEAUTY CONTENT THAT SLAYS!"
              data-react-helmet="true" 
          />
      </head>  
    </Helmet> */}
    <BrowserRouter>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path={"sign-in"} element={<SignIn/>}/>
        <Route path={"dashboard"} element={<ProtectedRoute> <Dashboard/> </ProtectedRoute>}/>
        <Route path={"upload-images"} element={<ProtectedRoute> <UploadImages/> </ProtectedRoute>}/>
      </Routes>
    </BrowserRouter>
  </AuthProvider>,
  document.getElementById('root')
);