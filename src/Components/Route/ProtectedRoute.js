import React, { Fragment, useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate, Route, useNavigate } from "react-router-dom";
import Loader from "../Layout/Loader/Loader";

const ProtectedRoute = ({ isAdmin=false,Component }) => {
  const { loading, isAuthenticated, user } = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    
    if(loading === false && isAuthenticated === false){
      navigate("/login")
      console.log(1)
    }
    if(loading === false && isAdmin === true && user.role !== "admin"){
      navigate("/login");
      console.log(1)
    }
  },[loading,isAuthenticated,user,isAdmin])

  return (
    <Fragment>
      {isAuthenticated === true && <Component />}
    </Fragment>
  );
};

export default ProtectedRoute;