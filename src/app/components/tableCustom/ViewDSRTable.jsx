import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import "./view-dsr-table.scss";
import { useNavigate } from "react-router-dom";
import { Grid, IconButton } from "@mui/material";

export default function ViewDSRTable({
    columns,
    datas,
    dataKey,
    actionKey,
    align,
    tableContainerMaxHeight,
}) {
    const handleActionButton = (action, data) => {
        if (action?.navigateAddress) {
            navigate(action?.navigateAddress);
        } else {
            action?.setOpen(!action?.open);
            action?.setCallback(data);
        }
    };

    const handleDeleteAction = (action) => {
        if (action?.navigateAddress) {
            navigate(action?.navigateAddress);
        } else {
            action?.setOpen(!action?.open);
        }
    };

    const navigate = useNavigate();
    let serialNumber = 0;
    return (
        <>
            <TableContainer sx={{ maxHeight: tableContainerMaxHeight, alignItems: 'flex-start' }}>
                <Table stickyHeader>
                    <TableHead>
                        <TableRow sx={{ fontWeight: 600 }} className="table-head-row">
                            {columns?.map((column, index) => (
                                <TableCell
                                    key={index}
                                    align={align}
                                    style={{ minWidth: column?.minWidth }}
                                >
                                    <Grid className="view-dsr-table-head-container">
                                        <span>{column?.label}</span>
                                        <svg
                                            style={{ display: `${column?.filter ? "" : "none"}` }}
                                            width="12"
                                            height="12"
                                            viewBox="0 0 12 12"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M11.8232 7.79224C12.0729 8.14008 12.0561 8.68236 11.7855 9.00345L9.45222 11.7727C9.19684 12.0758 8.80322 12.0758 8.54784 11.7727L6.21449 9.00346C5.94394 8.68237 5.92706 8.14009 6.1768 7.79224C6.42653 7.4444 6.8483 7.4227 7.11885 7.74379L8.33336 9.18517L8.33336 0.857143C8.33336 0.383756 8.63184 -4.50477e-08 9.00003 -1.31133e-07C9.36821 -2.17218e-07 9.66669 0.383756 9.66669 0.857143L9.66669 9.18514L10.8811 7.7438C11.1517 7.42271 11.5735 7.44439 11.8232 7.79224Z"
                                                fill="#B6B7BC"
                                            />
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M5.8232 4.20776C6.07293 3.85992 6.05607 3.31764 5.78552 2.99655L3.45222 0.227315C3.19684 -0.0757695 2.80322 -0.0757723 2.54784 0.227308L0.214486 2.99654C-0.0560626 3.31763 -0.0729355 3.85991 0.176798 4.20776C0.426532 4.5556 0.848304 4.5773 1.11885 4.25621L2.33336 2.81483L2.33336 11.1429C2.33336 11.6162 2.63184 12 3.00002 12C3.36821 12 3.66669 11.6162 3.66669 11.1429L3.66669 2.81486L4.88114 4.2562C5.15169 4.57729 5.57346 4.55561 5.8232 4.20776Z"
                                                fill="#B6B7BC"
                                            />
                                        </svg>
                                    </Grid>
                                </TableCell>
                            ))}
                            {actionKey?.length ? (
                                <TableCell align={align} style={{ minWidth: 170 }}>
                                    Actions
                                </TableCell>
                            ) : null}
                        </TableRow>
                    </TableHead>
                    <TableBody className="view-dsr-table-body" style={{ backgroundColor: "white" }}>
                        {datas?.map((data, inn) => {
                            serialNumber++;
                            return (
                                <TableRow hover role="checkbox" tabIndex={-1} key={data.Id}>
                                    {dataKey?.map((key, index) => {
                                        if (key === "serialNum") {
                                            return (
                                                <TableCell align={align} key={index + 1000}>
                                                    {serialNumber}
                                                </TableCell>
                                            );
                                        }

                                        if (key in data) {
                                            if (key === "rm_status") {
                                                return (
                                                    <TableCell align={align} key={index + 1000}>
                                                        <Grid className="view-dsr-table-status-container-wrapper">
                                                            <Grid className={`view-dsr-table-status-container ${data[key] ? "approved" : "pending"}`}>
                                                                <span>
                                                                    {data[key] ? "Approved" : "Pending"}
                                                                </span>
                                                            </Grid>
                                                        </Grid>
                                                    </TableCell>
                                                );
                                            }
                                            else if (key === "pm_status") {
                                                return (
                                                    <TableCell align={align} key={index + 1000}>
                                                        <Grid className="view-dsr-table-status-container-wrapper">
                                                            <Grid className={`view-dsr-table-status-container ${data[key] ? "approved" : "pending"}`}>
                                                                <span>
                                                                    {data[key] ? "Approved" : "Pending"}
                                                                </span>
                                                            </Grid>
                                                        </Grid>
                                                    </TableCell>
                                                );
                                            }
                                            else if (key === "prj_name") {
                                                return (
                                                    <TableCell align={align} key={index + 1000}>
                                                        <Grid className="view-dsr-table-project-name">
                                                            <p>{data[key] ? data[key]?.name : "-"}</p>
                                                            <p>{data[key] ? data[key]?.date : "-"}</p>
                                                        </Grid>
                                                    </TableCell>
                                                );
                                            }
                                            else if (key === "dsr") {
                                                return (
                                                    <TableCell
                                                        style={{ textAlign: 'justify' }}
                                                        key={index + 1000}
                                                    >
                                                        <p className="view-dsr-table-dsr-para">
                                                            {data[key] ? data[key] : "-"}
                                                        </p>
                                                    </TableCell>
                                                );
                                            }

                                            else {
                                                return (
                                                    <TableCell
                                                        style={{ maxHeight: "100px", overflow: "auto" }}
                                                        align={align}
                                                        key={index + 1000}
                                                    >
                                                        {data[key] ? data[key] : "-"}
                                                    </TableCell>
                                                );
                                            }
                                        } else {
                                            return null;
                                        }
                                    })}
                                    {actionKey?.length ? (
                                        <TableCell align={align}>
                                            <Grid
                                                className="view-dsr-table-action-btn-container"
                                                style={{
                                                    display: "flex",
                                                    width: "100%",
                                                    justifyContent: "center",
                                                    gap: "7px",
                                                }}
                                            >
                                                {actionKey?.map((action) => {
                                                    if (action?.actionName === "welcome") {
                                                        return (
                                                            <svg
                                                                style={{ cursor: "pointer" }}
                                                                width="24"
                                                                height="24"
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <rect
                                                                    width="24"
                                                                    height="24"
                                                                    rx="4"
                                                                    fill="#5E436E"
                                                                    fill-opacity="0.1"
                                                                />
                                                                <path
                                                                    d="M12.0673 18C11.8784 18 11.7202 17.936 11.5927 17.808C11.4651 17.68 11.4011 17.5218 11.4007 17.3333C11.4007 17.2556 11.4173 17.1749 11.4507 17.0913C11.484 17.0078 11.534 16.9329 11.6007 16.8667L14.684 13.7833L14.2007 13.3L11.134 16.3833C11.0673 16.45 10.9951 16.5 10.9173 16.5333C10.8395 16.5667 10.7562 16.5833 10.6673 16.5833C10.4784 16.5833 10.3202 16.5196 10.1927 16.392C10.0651 16.2644 10.0011 16.106 10.0007 15.9167C10.0007 15.8056 10.0173 15.7138 10.0507 15.6413C10.084 15.5689 10.1284 15.5051 10.184 15.45L13.2673 12.3667L12.8007 11.9L9.71732 14.9667C9.65065 15.0333 9.57843 15.0833 9.50065 15.1167C9.42287 15.15 9.33398 15.1667 9.23398 15.1667C9.05621 15.1667 8.90065 15.1 8.76732 14.9667C8.63398 14.8333 8.56732 14.6778 8.56732 14.5C8.56732 14.4111 8.58398 14.3278 8.61732 14.25C8.65065 14.1722 8.70065 14.1 8.76732 14.0333L11.8507 10.95L11.3673 10.4833L8.30065 13.5667C8.2451 13.6222 8.17843 13.6667 8.10065 13.7C8.02287 13.7333 7.92843 13.75 7.81732 13.75C7.62843 13.75 7.46998 13.686 7.34198 13.558C7.21398 13.43 7.15021 13.2718 7.15065 13.0833C7.15065 12.9944 7.16732 12.9111 7.20065 12.8333C7.23398 12.7556 7.28398 12.6833 7.35065 12.6167L11.0673 8.9L13.5673 11.4167C13.6895 11.5389 13.834 11.6362 14.0007 11.7087C14.1673 11.7811 14.334 11.8171 14.5007 11.8167C14.8562 11.8167 15.1673 11.6918 15.434 11.442C15.7007 11.1922 15.834 10.8727 15.834 10.4833C15.834 10.3278 15.8062 10.1667 15.7507 10C15.6951 9.83334 15.5951 9.67778 15.4507 9.53334L12.4673 6.55C12.6562 6.37223 12.8673 6.23623 13.1007 6.142C13.334 6.04778 13.5673 6.00045 13.8007 6C14.0895 6 14.3562 6.04734 14.6007 6.142C14.8451 6.23667 15.0673 6.38378 15.2673 6.58334L18.084 9.41667C18.284 9.61667 18.4313 9.83889 18.526 10.0833C18.6207 10.3278 18.6678 10.6111 18.6673 10.9333C18.6673 11.1556 18.6173 11.3807 18.5173 11.6087C18.4173 11.8367 18.2729 12.0449 18.084 12.2333L12.534 17.8C12.4451 17.8889 12.3673 17.9444 12.3007 17.9667C12.234 17.9889 12.1562 18 12.0673 18ZM6.35065 12.6667L5.91732 12.2333C5.72843 12.0556 5.58398 11.8444 5.48398 11.6C5.38398 11.3556 5.33398 11.1 5.33398 10.8333C5.33398 10.5444 5.38954 10.2778 5.50065 10.0333C5.61176 9.78889 5.75065 9.58334 5.91732 9.41667L8.73398 6.58334C8.91176 6.40556 9.12287 6.26378 9.36732 6.158C9.61176 6.05223 9.85065 5.99956 10.084 6C10.384 6 10.6507 6.04178 10.884 6.12534C11.1173 6.20889 11.3451 6.36156 11.5673 6.58334L14.984 10C15.0507 10.0667 15.1007 10.1389 15.134 10.2167C15.1673 10.2944 15.184 10.3778 15.184 10.4667C15.184 10.6444 15.1173 10.8 14.984 10.9333C14.8507 11.0667 14.6951 11.1333 14.5173 11.1333C14.4173 11.1333 14.334 11.1196 14.2673 11.092C14.2007 11.0644 14.1284 11.0116 14.0507 10.9333L11.0507 7.96667L6.35065 12.6667Z"
                                                                    fill="#5E436E"
                                                                />
                                                            </svg>
                                                        );
                                                    }
                                                    else if (action?.actionName === "birthday") {
                                                        return (
                                                            <svg
                                                                width="24"
                                                                height="24"
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <rect
                                                                    width="24"
                                                                    height="24"
                                                                    rx="4"
                                                                    fill="#C8C000"
                                                                    fill-opacity="0.1"
                                                                />
                                                                <g clip-path="url(#clip0_776_50966)">
                                                                    <path
                                                                        d="M12.4 5.46732C12.2846 5.38077 12.1442 5.33398 12 5.33398C11.8558 5.33398 11.7154 5.38077 11.6 5.46732C11.3221 5.67985 11.0659 5.91947 10.8353 6.18265C10.4867 6.57532 10 7.23732 10 8.00065C10 8.53108 10.2107 9.03979 10.5858 9.41486C10.9609 9.78994 11.4696 10.0007 12 10.0007H8C7.46957 10.0007 6.96086 10.2114 6.58579 10.5864C6.21071 10.9615 6 11.4702 6 12.0007V13.334C6 14.158 6.94067 14.6287 7.6 14.134L8.04467 13.8007C8.16006 13.7141 8.30042 13.6673 8.44467 13.6673C8.58891 13.6673 8.72927 13.7141 8.84467 13.8007L9.022 13.934C9.36819 14.1936 9.78926 14.334 10.222 14.334C10.6547 14.334 11.0758 14.1936 11.422 13.934L11.6 13.8007C11.7154 13.7141 11.8558 13.6673 12 13.6673C12.1442 13.6673 12.2846 13.7141 12.4 13.8007L12.578 13.934C12.9242 14.1936 13.3453 14.334 13.778 14.334C14.2107 14.334 14.6318 14.1936 14.978 13.934L15.1553 13.8007C15.2707 13.7141 15.4111 13.6673 15.5553 13.6673C15.6996 13.6673 15.8399 13.7141 15.9553 13.8007L16.4 14.134C17.0593 14.6287 18 14.158 18 13.334V12.0007C18 11.4702 17.7893 10.9615 17.4142 10.5864C17.0391 10.2114 16.5304 10.0007 16 10.0007H12C12.5304 10.0007 13.0391 9.78994 13.4142 9.41486C13.7893 9.03979 14 8.53108 14 8.00065C14 7.23732 13.5133 6.57532 13.1647 6.18265C12.934 5.92265 12.678 5.67598 12.4 5.46732ZM6.66667 15.6107V17.334C6.66667 17.6876 6.80714 18.0267 7.05719 18.2768C7.30724 18.5268 7.64638 18.6673 8 18.6673H16C16.3536 18.6673 16.6928 18.5268 16.9428 18.2768C17.1929 18.0267 17.3333 17.6876 17.3333 17.334V15.6107C17.1782 15.6669 17.0114 15.6832 16.8484 15.6582C16.6853 15.6331 16.5311 15.5675 16.4 15.4673L15.9553 15.134C15.8399 15.0474 15.6996 15.0007 15.5553 15.0007C15.4111 15.0007 15.2707 15.0474 15.1553 15.134L14.978 15.2673C14.6318 15.527 14.2107 15.6673 13.778 15.6673C13.3453 15.6673 12.9242 15.527 12.578 15.2673L12.4 15.134C12.2846 15.0474 12.1442 15.0007 12 15.0007C11.8558 15.0007 11.7154 15.0474 11.6 15.134L11.422 15.2673C11.0758 15.527 10.6547 15.6673 10.222 15.6673C9.78926 15.6673 9.36819 15.527 9.022 15.2673L8.84467 15.134C8.72927 15.0474 8.58891 15.0007 8.44467 15.0007C8.30042 15.0007 8.16006 15.0474 8.04467 15.134L7.6 15.4673C7.4689 15.5675 7.31472 15.6331 7.15164 15.6582C6.98855 15.6832 6.82179 15.6669 6.66667 15.6107Z"
                                                                        fill="#C8C000"
                                                                    />
                                                                </g>
                                                                <defs>
                                                                    <clipPath id="clip0_776_50966">
                                                                        <rect
                                                                            width="16"
                                                                            height="16"
                                                                            fill="white"
                                                                            transform="translate(4 4)"
                                                                        />
                                                                    </clipPath>
                                                                </defs>
                                                            </svg>
                                                        );
                                                    }
                                                    else if (action?.actionName === "chat") {
                                                        return (
                                                            <svg
                                                                width="24"
                                                                height="24"
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <rect
                                                                    width="24"
                                                                    height="24"
                                                                    rx="4"
                                                                    fill="#F4EFFF"
                                                                />
                                                                <path
                                                                    d="M6.8393 15.0613C6.09384 13.8046 5.83277 12.319 6.10512 10.8835C6.37747 9.44796 7.1645 8.16123 8.31843 7.26492C9.47235 6.3686 10.9138 5.92437 12.3721 6.01562C13.8304 6.10688 15.2052 6.72735 16.2384 7.76053C17.2715 8.7937 17.892 10.1685 17.9833 11.6268C18.0745 13.0851 17.6303 14.5265 16.734 15.6805C15.8377 16.8344 14.551 17.6214 13.1154 17.8938C11.6799 18.1661 10.1943 17.9051 8.93766 17.1596L8.93767 17.1596L6.86539 17.7516C6.77965 17.7761 6.68892 17.7773 6.6026 17.7549C6.51629 17.7325 6.43752 17.6875 6.37447 17.6244C6.31142 17.5614 6.26637 17.4826 6.24401 17.3963C6.22164 17.31 6.22276 17.2192 6.24726 17.1335L6.83934 15.0612L6.8393 15.0613Z"
                                                                    stroke="#007BFF"
                                                                    stroke-width="1.5"
                                                                    stroke-linecap="round"
                                                                    stroke-linejoin="round"
                                                                />
                                                                <path
                                                                    d="M12 12.75C12.4142 12.75 12.75 12.4142 12.75 12C12.75 11.5858 12.4142 11.25 12 11.25C11.5858 11.25 11.25 11.5858 11.25 12C11.25 12.4142 11.5858 12.75 12 12.75Z"
                                                                    fill="#007BFF"
                                                                />
                                                                <path
                                                                    d="M9 12.75C9.41421 12.75 9.75 12.4142 9.75 12C9.75 11.5858 9.41421 11.25 9 11.25C8.58579 11.25 8.25 11.5858 8.25 12C8.25 12.4142 8.58579 12.75 9 12.75Z"
                                                                    fill="#007BFF"
                                                                />
                                                                <path
                                                                    d="M15 12.75C15.4142 12.75 15.75 12.4142 15.75 12C15.75 11.5858 15.4142 11.25 15 11.25C14.5858 11.25 14.25 11.5858 14.25 12C14.25 12.4142 14.5858 12.75 15 12.75Z"
                                                                    fill="#007BFF"
                                                                />
                                                            </svg>
                                                        );
                                                    }
                                                    else if (action?.actionName === 'approve') {
                                                        return (<svg onClick={() => handleDeleteAction(action)} style={{ cursor: 'pointer' }} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <rect width="24" height="24" rx="4" fill="#10B981" fill-opacity="0.1" />
                                                            <path d="M19.3337 12.0007L17.707 10.1473L17.9337 7.69401L15.527 7.14734L14.267 5.02734L12.0003 6.00068L9.73366 5.02734L8.47366 7.14734L6.06699 7.68734L6.29366 10.1407L4.66699 12.0007L6.29366 13.854L6.06699 16.314L8.47366 16.8607L9.73366 18.9807L12.0003 18.0007L14.267 18.974L15.527 16.854L17.9337 16.3073L17.707 13.854L19.3337 12.0007ZM10.667 15.334L8.00033 12.6673L8.94033 11.7273L10.667 13.4473L15.0603 9.05401L16.0003 10.0007L10.667 15.334Z" fill="#10B981" />
                                                        </svg>)
                                                    }
                                                    else if (action?.actionName === 'reject') {
                                                        return (<svg onClick={() => handleDeleteAction(action)} style={{ cursor: 'pointer' }} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <rect width="24" height="24" rx="4" fill="#FF0000" fill-opacity="0.1" />
                                                            <path d="M8.50586 15.4946L12.0012 11.9992L15.4965 15.4946M15.4965 8.50391L12.0005 11.9992L8.50586 8.50391" stroke="#FF0000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                        </svg>)
                                                    }
                                                    else if (action?.actionName === "back") {
                                                        return (
                                                            <IconButton
                                                                disableRipple
                                                                disabled={
                                                                    data["final_approval"]?.rollback
                                                                        ? true
                                                                        : false
                                                                }
                                                            >
                                                                <svg
                                                                    onClick={() => handleDeleteAction(action)}
                                                                    width="24"
                                                                    height="24"
                                                                    viewBox="0 0 24 24"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <rect
                                                                        width="24"
                                                                        height="24"
                                                                        rx="4"
                                                                        fill="#006D84"
                                                                        fill-opacity="0.1"
                                                                    />
                                                                    <path
                                                                        d="M17.9526 13.3333C17.792 14.444 17.2366 15.4597 16.3882 16.1944C15.5397 16.929 14.4549 17.3333 13.3326 17.3333H7.66597V16H13.3326C14.2167 16 15.0645 15.6488 15.6897 15.0236C16.3148 14.3985 16.666 13.5507 16.666 12.6666C16.666 11.7826 16.3148 10.9347 15.6897 10.3096C15.0645 9.68448 14.2167 9.33329 13.3326 9.33329H8.60864L10.2753 11L9.33264 11.9426L6.05664 8.66662L9.33264 5.39062L10.2753 6.33329L8.60864 7.99996H13.3326C14.5703 7.99996 15.7573 8.49162 16.6325 9.36679C17.5076 10.242 17.9993 11.4289 17.9993 12.6666V13.3333H17.9526Z"
                                                                        fill="#006D84"
                                                                    />
                                                                </svg>
                                                            </IconButton>
                                                        );
                                                    }
                                                    else if (action?.actionName === "view") {
                                                        return (
                                                            <svg
                                                                onClick={() => handleActionButton(action, data)}
                                                                width="24"
                                                                height="24"
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <rect
                                                                    width="24"
                                                                    height="24"
                                                                    rx="4"
                                                                    fill="#1565C0"
                                                                    fill-opacity="0.1"
                                                                />
                                                                <path
                                                                    d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z"
                                                                    stroke="#1565C0"
                                                                />
                                                                <path
                                                                    d="M17.4596 11.2893C17.7183 11.604 17.8476 11.7607 17.8476 12C17.8476 12.2393 17.7183 12.396 17.4596 12.7107C16.513 13.86 14.425 16 12.001 16C9.57696 16 7.48896 13.86 6.5423 12.7107C6.28363 12.396 6.1543 12.2393 6.1543 12C6.1543 11.7607 6.28363 11.604 6.5423 11.2893C7.48896 10.14 9.57696 8 12.001 8C14.425 8 16.513 10.14 17.4596 11.2893Z"
                                                                    stroke="#1565C0"
                                                                />
                                                            </svg>
                                                        );
                                                    }
                                                    else if (action?.actionName === "edit") {
                                                        return (
                                                            <svg
                                                                onClick={() => handleActionButton(action, data)}
                                                                width="24"
                                                                height="24"
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <rect
                                                                    width="24"
                                                                    height="24"
                                                                    rx="4"
                                                                    fill="#F4EFFF"
                                                                />
                                                                <path
                                                                    d="M12.8396 6.40006L7.36624 12.1934C7.15958 12.4134 6.95958 12.8467 6.91958 13.1467L6.67291 15.3067C6.58624 16.0867 7.14624 16.6201 7.91958 16.4867L10.0662 16.1201C10.3662 16.0667 10.7862 15.8467 10.9929 15.6201L16.4662 9.82673C17.4129 8.82673 17.8396 7.68673 16.3662 6.2934C14.8996 4.9134 13.7862 5.40006 12.8396 6.40006Z"
                                                                    stroke="#8C62FF"
                                                                    stroke-width="1.2"
                                                                    stroke-miterlimit="10"
                                                                    stroke-linecap="round"
                                                                    stroke-linejoin="round"
                                                                />
                                                                <path
                                                                    d="M11.9258 7.3667C12.2124 9.2067 13.7058 10.6134 15.5591 10.8"
                                                                    stroke="#8C62FF"
                                                                    stroke-width="1.2"
                                                                    stroke-miterlimit="10"
                                                                    stroke-linecap="round"
                                                                    stroke-linejoin="round"
                                                                />
                                                                <path
                                                                    d="M6 18.6667H18"
                                                                    stroke="#8C62FF"
                                                                    stroke-width="1.2"
                                                                    stroke-miterlimit="10"
                                                                    stroke-linecap="round"
                                                                    stroke-linejoin="round"
                                                                />
                                                            </svg>
                                                        );
                                                    }
                                                    else if (action?.actionName === "delete") {
                                                        return (
                                                            <svg
                                                                onClick={() => handleDeleteAction(action)}
                                                                width="24"
                                                                height="24"
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <rect
                                                                    width="24"
                                                                    height="24"
                                                                    rx="4"
                                                                    fill="#FF0000"
                                                                    fill-opacity="0.1"
                                                                />
                                                                <path
                                                                    d="M16.6673 6.66667H14.334L13.6673 6H10.334L9.66732 6.66667H7.33398V8H16.6673M8.00065 16.6667C8.00065 17.0203 8.14113 17.3594 8.39118 17.6095C8.64122 17.8595 8.98036 18 9.33398 18H14.6673C15.0209 18 15.3601 17.8595 15.6101 17.6095C15.8602 17.3594 16.0007 17.0203 16.0007 16.6667V8.66667H8.00065V16.6667Z"
                                                                    fill="#FF0000"
                                                                />
                                                            </svg>
                                                        );
                                                    }
                                                    else if (action?.actionName === "work") {
                                                        return (
                                                            <svg
                                                                width="24"
                                                                height="24"
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <rect
                                                                    width="24"
                                                                    height="24"
                                                                    rx="4"
                                                                    fill="#4880FF"
                                                                    fill-opacity="0.1"
                                                                />
                                                                <path
                                                                    d="M5.33398 18.0007V8.00065H9.33398V5.33398H14.6673V8.00065H18.6673V18.0007H5.33398ZM10.6673 8.00065H13.334V6.66732H10.6673V8.00065Z"
                                                                    fill="#4880FF"
                                                                />
                                                            </svg>
                                                        );
                                                    } else return null;
                                                })}
                                            </Grid>
                                        </TableCell>
                                    ) : null}
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}
