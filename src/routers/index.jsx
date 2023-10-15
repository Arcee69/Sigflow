import React from 'react'
import { Route, Routes} from "react-router-dom";

import AuthLayout from '../layouts/authLayout';
import Login from '../pages/auth/login';

import { AuthProtectRoutes, ProtectRoutes } from './protectRoutes';

import BoardLayout from '../layouts/boardLayout';
import Dashboard from '../pages/board/dashboard';
import Error404 from '../pages/NotFound';


export default function Routers () {

    return (
      <div>
          <Routes>

              <Route element={<ProtectRoutes />}>
                <Route path='/dashboard' element={<Dashboard />} />
              </Route>

              <Route element={<AuthProtectRoutes />}>
                <Route path='/' element={<Login />} />
              </Route>
              <Route path='/*' element={<Error404 />} />
             
          </Routes>
      </div>
    )
  }

// export default function Routers () {
    

// }