import React, { memo } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import PublicRouter from "./PublicRouter";
import Login from "../app/modules/authentication/Login";
import PrivateRouter from "./PrivateRouter";
import Dashboard from "../app/modules/dashboard/Dashboard";
import Forgot from "../app/modules/authentication/Forgot";
import ResetPassword from "../app/modules/authentication/ResetPassword";
import Profile from "../app/modules/profile/Profile";
import EmployeeManagement from "../app/modules/staff-management/employee-management/EmployeeManagement";
import AddEmployee from "../app/modules/staff-management/employee-management/AddEmployee";
import ViewEditEmployee from "../app/modules/staff-management/employee-management/ViewEditEmployee";

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
        <Route path="profile/*" element={<Profile/>} />
        <Route path="employee-management" element={<EmployeeManagement/>} />
        <Route path="employee-management/add-employee" element={<AddEmployee/>} />
        <Route path="employee-management/edit-employee/*" element={<ViewEditEmployee/>} />
        <Route path="*" element={<Navigate to={'/dashboard'} />} />

      </Route>
    </Routes>
  );
}

export default memo(MainRoute);
