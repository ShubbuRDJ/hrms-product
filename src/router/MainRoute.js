import React, { memo } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import PublicRouter from "./PublicRouter";
import Login from "../app/modules/authentication/login-page/Login";
import PrivateRouter from "./PrivateRouter";
import Dashboard from "../app/modules/dashboard/Dashboard";

function MainRoute() {
  return (
    <Routes>
      {/* public router  */}
      <Route path="/" element={<PublicRouter />}>
        <Route path ='/login' element={<Login />} />
        <Route path="*" element={<Navigate to={'/'}/>} />
      </Route>

      {/* private router  */}
      <Route path="/" element={<PrivateRouter />}>
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="*" element={<Navigate to={'/dashboard'} />} />

      </Route>
    </Routes>
  );
}

export default memo(MainRoute);
