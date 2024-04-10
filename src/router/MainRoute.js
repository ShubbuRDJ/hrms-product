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
import RoleManagement from "../app/modules/staff-management/role-management/RoleManagement";
import AddNewRole from "../app/modules/staff-management/role-management/AddNewRole";
import Department from "../app/modules/organisation/department/Department";
import AddDepartment from "../app/modules/organisation/department/AddDepartment";
import Designation from "../app/modules/organisation/designation/Designation";
import AddDesigantion from "../app/modules/organisation/designation/AddDesignation";
import Location from "../app/modules/organisation/location/Location";
import AddLocation from "../app/modules/organisation/location/AddLocation";
import ViewLocation from "../app/modules/organisation/location/ViewLocation";
import CompanyPolicy from "../app/modules/organisation/company-policy/CompanyPolicy";
import MyAttendance from "../app/modules/timesheet/myAttendance/MyAttendance";
import AttendanceManagement from "../app/modules/timesheet/attendanceManagement/AttendanceManagement";
import ShiftManagement from "../app/modules/timesheet/shiftManagement/ShiftManagement";
import HolidayManagement from "../app/modules/timesheet/holidayManagement/HolidayManagement";
import AddCompanyPolicy from "../app/modules/organisation/company-policy/AddCompanyPolicy";
import AddAttendance from "../app/modules/timesheet/attendanceManagement/AddAttendance";
import AddShift from "../app/modules/timesheet/shiftManagement/AddShift";
import AddHoliday from "../app/modules/timesheet/holidayManagement/AddHoliday";
import MyLeave from "../app/modules/leaves/myleaves/MyLeaves";
import AddLeave from "../app/modules/leaves/myleaves/AddLeave";
import CompOffManagement from "../app/modules/leaves/comp off management/CompOffManagement";
import LeavesToAcknowledge from "../app/modules/leaves/leaves to acknowledge/LeavesToAcknowledge";
import LeavesToApprove from "../app/modules/leaves/leaves to approve/LeavesToApprove";
import AddCompOff from "../app/modules/leaves/comp off management/AddCompOff";
import ViewLeave from "../app/components/view-leave-common/ViewLeave";
import MyWFH from "../app/modules/wfh/my-wfh/MyWFH";
import AddWFH from "../app/modules/wfh/my-wfh/AddWFH";
import RestrictedLeave from "../app/modules/leaves/restricted leaves/RestrictedLeave";
import WFHApprove from "../app/modules/wfh/wfh-to-approve/WFHApprove";
import WFHAcknowledge from "../app/modules/wfh/wfh-to-acknowledge/WFHAcknowledge";

function MainRoute() {
  return (
    <Routes>
      {/* public router  */}
      <Route path="/" element={<PublicRouter />}>
        <Route path='/login' element={<Login />} />
        <Route path='/forgot' element={<Forgot />} />
        <Route path='/reset-password' element={<ResetPassword />} />
        <Route path="*" element={<Navigate to={'/'} />} />
      </Route>

      {/* private router  */}
      <Route path="/" element={<PrivateRouter />}>
        <Route index element={<Dashboard />} />
        <Route path="profile/*" element={<Profile />} />
        <Route path="employee-management" element={<EmployeeManagement />} />
        <Route path="employee-management/add-employee" element={<AddEmployee />} />
        <Route path="employee-management/edit-employee/*" element={<ViewEditEmployee />} />
        <Route path="role-management" element={<RoleManagement />} />
        <Route path="role-management/add-role" element={<AddNewRole type={'add'} />} />
        <Route path="role-management/edit-role" element={<AddNewRole type={'edit'} />} />
        <Route path="company-policy" element={<CompanyPolicy />} />
        <Route path="company-policy/add-company-policy" element={<AddCompanyPolicy type={'add'} />} />
        <Route path="company-policy/edit-company-policy" element={<AddCompanyPolicy type={'edit'} />} />
        <Route path="department" element={<Department />} />
        <Route path="department/add-department" element={<AddDepartment type={'add'} />} />
        <Route path="department/edit-department" element={<AddDepartment type={'edit'} />} />
        <Route path="designation" element={<Designation />} />
        <Route path="designation/add-designation" element={<AddDesigantion type={'add'} />} />
        <Route path="designation/edit-designation" element={<AddDesigantion type={'edit'} />} />
        <Route path="location" element={<Location />} />
        <Route path="location/view-location" element={<ViewLocation />} />
        <Route path="location/add-location" element={<AddLocation type={'add'} />} />
        <Route path="location/edit-location" element={<AddLocation type={'edit'} />} />
        <Route path="my-attendance" element={<MyAttendance />} />
        <Route path="attendance-management" element={<AttendanceManagement />} />
        <Route path="attendance-management/add-attendance" element={<AddAttendance type={'add'} />} />
        <Route path="attendance-management/edit-attendance" element={<AddAttendance type={'edit'} />} />
        <Route path="shift-management" element={<ShiftManagement />} />
        <Route path="shift-management/add-shift" element={<AddShift type={'add'} />} />
        <Route path="shift-management/edit-shift" element={<AddShift type={'edit'} />} />
        <Route path="holiday-management" element={<HolidayManagement />} />
        <Route path="holiday-management/add-holiday" element={<AddHoliday type={'add'} />} />
        <Route path="holiday-management/edit-holiday" element={<AddHoliday type={'edit'} />} />
        <Route path="my-leaves" element={<MyLeave />} />
        <Route path="my-leaves/add-leave" element={<AddLeave type={'add'} />} />
        <Route path="my-leaves/leave-details" element={<ViewLeave type={'leave'} />} />
        <Route path="restricted-leaves" element={<RestrictedLeave />} />
        <Route path="comp-off-management" element={<CompOffManagement />} />
        <Route path="comp-off-management/add-comp-off" element={<AddCompOff type={'add'} />} />
        <Route path="comp-off-management/edit-comp-off" element={<AddCompOff type={'edit'} />} />
        <Route path="leaves-to-acknowledge" element={<LeavesToAcknowledge />} />
        <Route path="leaves-to-acknowledge/leave-details" element={<ViewLeave type={'leave'} />} />
        <Route path="leaves-to-approve" element={<LeavesToApprove />} />
        <Route path="leaves-to-approve/leave-details"
          element={<ViewLeave type={'leave'}
            approveRejectAction={true}
            rejectPromptMSg={'Do you want to reject this leave?'}
            approvePromptMSg={'Do you want to approve this leave?'}
          />} />
        <Route path="my-wfh" element={<MyWFH />} />
        <Route path="my-wfh/add-wfh" element={<AddWFH />} />
        <Route path="my-wfh/view-wfh-details" element={<ViewLeave type={'wfh'} />} />
        <Route path="wfh-to-approve" element={<WFHApprove />} />
        <Route path="wfh-to-approve/view-wfh-details"
          element={<ViewLeave
            type={'wfh'}
            approveRejectAction={true}
            rejectPromptMSg={'Do you want to add comment for Work From Home rejection ?'}
            approvePromptMSg={'Do you want to add comment for Work From Home approval ?'}
          />}
        />
        <Route path="wfh-to-acknowledge" element={<WFHAcknowledge />} />
        <Route path="wfh-to-acknowledge/view-wfh-details" element={<ViewLeave type={'wfh'} />}
        />

        <Route path="*" element={<Navigate to={'/dashboard'} />} />

      </Route>
    </Routes>
  );
}

export default memo(MainRoute);
