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
import routerConstants from "../constants/routerConstants";
import MyDsr from "../app/modules/dsr/my-dsr/MyDsr";
import AddDsr from "../app/modules/dsr/my-dsr/AddDsr";
import ViewDsr from "../app/modules/dsr/my-dsr/ViewDsr";
import EmployeeDSR from "../app/modules/dsr/employee-dsr/EmployeeDSR";
import NonSubmittedDsr from "../app/modules/dsr/non-submitted-dsr/NonSubmittedDsr";
import ViewEmployeeDsr from "../app/modules/dsr/employee-dsr/ViewEmployeeDsr";

function MainRoute() {
  return (
    <Routes>
      {/* public router  */}
      <Route path="/" element={<PublicRouter />}>
        <Route path={routerConstants?.loginRoute} element={<Login />} />
        <Route path={routerConstants?.forgotRoute} element={<Forgot />} />
        <Route path={routerConstants?.resetPasswordRoute} element={<ResetPassword />} />
        <Route path="*" element={<Navigate to={'/'} />} />
      </Route>

      {/* private router  */}
      <Route path="/" element={<PrivateRouter />}>
        <Route index element={<Dashboard />} />
        <Route path={routerConstants?.profileSubRoute} element={<Profile />} />
        <Route path={routerConstants?.employeeManagementRoute} element={<EmployeeManagement />} />
        <Route path={`${routerConstants?.employeeManagementRoute}/${routerConstants?.addEmployeeManagementRoute}`} element={<AddEmployee />} />
        <Route path={`${routerConstants?.employeeManagementRoute}/${routerConstants?.editEmployeeManagementSubRoute}`} element={<ViewEditEmployee />} />
        <Route path={routerConstants?.roleManagementRoute} element={<RoleManagement />} />
        <Route path={`${routerConstants?.roleManagementRoute}/${routerConstants?.addRoleRoute}`} element={<AddNewRole type={'add'} />} />
        <Route path={`${routerConstants?.roleManagementRoute}/${routerConstants?.editRoleRoute}`} element={<AddNewRole type={'edit'} />} />
        <Route path={routerConstants?.companyPolicyRoute} element={<CompanyPolicy />} />
        <Route path={`${routerConstants?.companyPolicyRoute}/${routerConstants?.addCompanyPolicyRoute}`} element={<AddCompanyPolicy type={'add'} />} />
        <Route path={`${routerConstants?.companyPolicyRoute}/${routerConstants?.editCompanyPolicyRoute}`} element={<AddCompanyPolicy type={'edit'} />} />
        <Route path={routerConstants?.departmentRoute} element={<Department />} />
        <Route path={`${routerConstants?.departmentRoute}/${routerConstants?.addDepartmentRoute}`} element={<AddDepartment type={'add'} />} />
        <Route path={`${routerConstants?.departmentRoute}/${routerConstants?.editDepartmentRoute}`} element={<AddDepartment type={'edit'} />} />
        <Route path={routerConstants?.designationRoute} element={<Designation />} />
        <Route path={`${routerConstants?.designationRoute}/${routerConstants?.addDesignationRoute}`} element={<AddDesigantion type={'add'} />} />
        <Route path={`${routerConstants?.designationRoute}/${routerConstants?.editDesignationRoute}`} element={<AddDesigantion type={'edit'} />} />
        <Route path={routerConstants?.locationRoute} element={<Location />} />
        <Route path={`${routerConstants?.locationRoute}/${routerConstants?.viewLocationRoute}`} element={<ViewLocation />} />
        <Route path={`${routerConstants?.locationRoute}/${routerConstants?.addLocationRoute}`} element={<AddLocation type={'add'} />} />
        <Route path={`${routerConstants?.locationRoute}/${routerConstants?.addLocationRoute}`} element={<AddLocation type={'edit'} />} />
        <Route path={routerConstants?.myAttendanceRoute} element={<MyAttendance />} />
        <Route path={routerConstants?.attendanceManagementRoute} element={<AttendanceManagement />} />
        <Route path={`${routerConstants?.attendanceManagementRoute}/${routerConstants?.addAttendanceRoute}`} element={<AddAttendance type={'add'} />} />
        <Route path={`${routerConstants?.attendanceManagementRoute}/${routerConstants?.editAttendanceRoute}`} element={<AddAttendance type={'edit'} />} />
        <Route path={routerConstants?.shiftManagementRoute} element={<ShiftManagement />} />
        <Route path={`${routerConstants?.shiftManagementRoute}/${routerConstants?.addShiftRoute}`} element={<AddShift type={'add'} />} />
        <Route path={`${routerConstants?.shiftManagementRoute}/${routerConstants?.editShiftRoute}`} element={<AddShift type={'edit'} />} />
        <Route path={routerConstants?.holidayManagementRoute} element={<HolidayManagement />} />
        <Route path={`${routerConstants?.holidayManagementRoute}/${routerConstants?.addHolidayRoute}`} element={<AddHoliday type={'add'} />} />
        <Route path={`${routerConstants?.holidayManagementRoute}/${routerConstants?.editHolidayRoute}`}  element={<AddHoliday type={'edit'} />} />
        <Route path={routerConstants?.myLeavesRoute} element={<MyLeave />} />
        <Route path={`${routerConstants?.myLeavesRoute}/${routerConstants?.addLeaveRoute}`} element={<AddLeave type={'add'} />} />
        <Route path={`${routerConstants?.myLeavesRoute}/${routerConstants?.leaveDetailsRoute}`} element={<ViewLeave type={'leave'} />} />
        <Route path={routerConstants?.restrictedLeavesRoute} element={<RestrictedLeave />} />
        <Route path={routerConstants?.compOffManagementRoute} element={<CompOffManagement />} />
        <Route path={`${routerConstants?.compOffManagementRoute}/${routerConstants?.addCompOffRoute}`} element={<AddCompOff type={'add'} />} />
        <Route path={`${routerConstants?.compOffManagementRoute}/${routerConstants?.editCompOffRoute}`}  element={<AddCompOff type={'edit'} />} />
        <Route path={routerConstants?.leavesToAcknowledgeRoute} element={<LeavesToAcknowledge />} />
        <Route path={`${routerConstants?.leavesToAcknowledgeRoute}/${routerConstants?.leaveDetailsRoute}`} element={<ViewLeave type={'leave'} />} />
        <Route path={routerConstants?.leavesToApproveRoute} element={<LeavesToApprove />} />
        <Route path={`${routerConstants?.leavesToApproveRoute}/${routerConstants?.leaveDetailsRoute}`}
          element={<ViewLeave type={'leave'}
            approveRejectAction={true}
            rejectPromptMSg={'Do you want to reject this leave?'}
            approvePromptMSg={'Do you want to approve this leave?'}
          />} />
        <Route path={routerConstants?.myWfhRoute} element={<MyWFH />} />
        <Route path={`${routerConstants?.myWfhRoute}/${routerConstants?.addWfhRoute}`} element={<AddWFH />} />
        <Route path={`${routerConstants?.myWfhRoute}/${routerConstants?.viewWfhDetailsRoute}`} element={<ViewLeave type={'wfh'} />} />
        <Route path={routerConstants?.wfhToApproveRoute} element={<WFHApprove />} />
        <Route path={`${routerConstants?.wfhToApproveRoute}/${routerConstants?.viewWfhDetailsRoute}`}
          element={<ViewLeave
            type={'wfh'}
            approveRejectAction={true}
            rejectPromptMSg={'Do you want to add comment for Work From Home rejection ?'}
            approvePromptMSg={'Do you want to add comment for Work From Home approval ?'}
          />}
        />
        <Route path={routerConstants?.wfhToAcknowledgeRoute} element={<WFHAcknowledge />} />
        <Route path={`${routerConstants?.wfhToAcknowledgeRoute}/${routerConstants?.viewWfhDetailsRoute}`} element={<ViewLeave type={'wfh'} />}
        />
        <Route path={routerConstants?.myDSRRoute} element={<MyDsr/>}/>
        <Route path={routerConstants?.addDSRRoute} element={<AddDsr type={'add'}/>}/>
        <Route path={routerConstants?.editDSRRoute} element={<AddDsr type={'edit'}/>}/>
        <Route path={routerConstants?.viewDSRRoute} element={<ViewDsr/>}/>
        <Route path={routerConstants?.employeeDSRRoute} element={<EmployeeDSR/>}/>
        <Route path={routerConstants?.viewEmployeeDSRRoute} element={<ViewEmployeeDsr/>}/>
        <Route path={routerConstants?.nonSubmittedDSRRoute} element={<NonSubmittedDsr/>}/>


        <Route path="*" element={<Navigate to={routerConstants?.dashboardRoute} />} />

      </Route>
    </Routes>
  );
}

export default memo(MainRoute);
