import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

export default function PublicRouter() {
  const isLoggedIn = localStorage.getItem("ACCESS_TOKEN");
  return (
    <>
      {
        !isLoggedIn ? (
          <Outlet />
        ) : (<Navigate to={"/dashboard"} />)
      }
    </>
  )
}
