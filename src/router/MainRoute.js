import React, { memo } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import PublicRouter from "./PublicRouter";
import Login from "../app/modules/authentication/Login";
import PrivateRouter from "./PrivateRouter";
import Dashboard from "../app/modules/dashboard/Dashboard";
import Forgot from "../app/modules/authentication/Forgot";
import ResetPassword from "../app/modules/authentication/ResetPassword";

function MainRoute() {
  return (
    <Routes>
      {/* public router  */}
      <Route path="/" element={<PublicRouter />}>
        <Route path ='/login' element={<Login />} />
        <Route path ='/forgot' element={<Forgot />} />
        <Route path ='/reset-password' element={<ResetPassword />} />
        <Route path="*" element={<Navigate to={'/'}/>} />
      </Route>

      {/* private router  */}
      <Route path="/" element={<PrivateRouter />}>
        <Route index element={<Dashboard/>} />
        <Route path="*" element={<Navigate to={'/dashboard'} />} />

      </Route>
    </Routes>
  );
}

export default memo(MainRoute);
