import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";
import { AppDispatch } from "../store/store";
import { accessPermission } from "../store/info.slice";

const PrivateRoutes = () => {
  const dispatch = useDispatch<AppDispatch>();
  const token: string | null = localStorage.getItem("accessToken");

  useEffect(() => {
    dispatch(accessPermission(token));
  });

  return token ? <Outlet /> : <Navigate to="/welcomePage" />;
};

export default PrivateRoutes;
