import React, { cloneElement } from "react";
import useAuth from "../hooks/auth";
import Loader from "../components/Loader";

const Protected = (props) => {
  const [user, loading] = useAuth();
  return <>{loading ? <Loader /> : cloneElement(props.children, { user })}</>;
};

export default Protected;
