import React from 'react'
import { Route, Routes} from "react-router-dom";

import Login from '../pages/auth/login';

import { AuthProtectRoutes, ProtectRoutes } from './protectRoutes';

import Dashboard from '../pages/board/dashboard';
import Error404 from '../pages/NotFound';
import Event from '../pages/board/event';
import Pipeline from '../pages/board/pipeline';
import Source from '../pages/board/source';
import Destination from '../pages/board/destination';


export default function Routers () {

    return (
      <div>
          <Routes>

              <Route element={<ProtectRoutes />}>
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/event' element={<Event />} />
                <Route path='/pipeline' element={<Pipeline />} />
                <Route path='/source' element={<Source />} />
                <Route path='/destination' element={<Destination />} />

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