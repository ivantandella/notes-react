import { useState } from "react";
import {
  AuthDataType,
  getUser,
  login,
  register,
} from "../services/auth.service";
import {
  DANGER_COLOR,
  LOGIN_PATH,
  NOTES_PATH,
  PRIMARY_COLOR,
} from "../utils/constant";
import { useNavigate } from "react-router-dom";
import { notifications } from "@mantine/notifications";
import { getToken } from "../utils/token";

export function useAuth() {
  const [name, setName] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  async function executeLogin(data: AuthDataType) {
    try {
      setIsLoading(true);
      const masuk = await login(data);

      if (masuk.status === "success") {
        localStorage.setItem("token", masuk.data.accessToken);
        navigate(NOTES_PATH);

        notifications.show({
          title: masuk.status.toUpperCase(),
          message: masuk.message,
          position: "top-right",
          autoClose: 5000,
          color: PRIMARY_COLOR,
        });
      }
    } catch (error: any) {
      notifications.show({
        title: error.response.data.status.toUpperCase(),
        message: error.response.data.message,
        position: "top-right",
        autoClose: 5000,
        color: DANGER_COLOR,
      });
    } finally {
      setIsLoading(false);
    }
  }

  async function executeRegister(data: AuthDataType) {
    try {
      setIsLoading(true);
      const regis = await register(data);

      if (regis.status === "success") {
        navigate(LOGIN_PATH);

        notifications.show({
          title: regis.status.toUpperCase(),
          message: `${regis.message}, Please login!`,
          position: "top-right",
          autoClose: 5000,
          color: PRIMARY_COLOR,
        });
      }
    } catch (error: any) {
      notifications.show({
        title: error.response.data.status.toUpperCase(),
        message: error.response.data.message,
        position: "top-right",
        autoClose: 5000,
        color: DANGER_COLOR,
      });
    } finally {
      setIsLoading(false);
    }
  }

  function checkLogin() {
    const token = getToken();
    if (!token) {
      navigate(LOGIN_PATH);

      notifications.show({
        title: "ERROR",
        message: "Please login first!",
        position: "top-right",
        autoClose: 5000,
        color: DANGER_COLOR,
      });
    }
  }

  function handleLogout() {
    localStorage.removeItem("token");
    navigate(LOGIN_PATH);

    notifications.show({
      title: "SUCCESS",
      message: "You are logged out",
      position: "top-right",
      autoClose: 5000,
      color: PRIMARY_COLOR,
    });
  }

  async function getUserData() {
    try {
      const res = await getUser();
      setName(res.data.name);
    } catch (error) {
      console.log(error);
    }
  }

  return {
    name,
    isLoading,
    navigate,
    executeLogin,
    executeRegister,
    checkLogin,
    handleLogout,
    getUserData,
  };
}
