import { useState } from "react";
import {
  getUser,
  login,
  LoginDataType,
  register,
  RegisterDataType,
} from "../services/auth.service";
import { LOGIN_PATH, NOTES_PATH } from "../utils/constant";

export function useAuth() {
  const [name, setName] = useState();
  const [isLoading, setIsLoading] = useState(false);

  async function executeLogin(data: LoginDataType) {
    try {
      setIsLoading(true);
      const masuk = await login(data);
      window.location.href = NOTES_PATH;
      localStorage.setItem("token", masuk.data.accessToken);
    } catch (error: any) {
      alert(error.response.data.message);
    } finally {
      setIsLoading(false);
    }
  }

  async function executeRegister(data: RegisterDataType) {
    try {
      setIsLoading(true);
      const regis = await register(data);
      window.location.href = LOGIN_PATH;
      alert(`${regis.message}, Please login!`);
    } catch (error: any) {
      alert(error.response.data.message);
    } finally {
      setIsLoading(false);
    }
  }

  function checkLogin() {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Please login first!");
      window.location.href = LOGIN_PATH;
    }
  }

  function handleLogout() {
    localStorage.removeItem("token");
    window.location.href = LOGIN_PATH;
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
    executeLogin,
    executeRegister,
    checkLogin,
    handleLogout,
    getUserData,
  };
}
