import { useState } from "react";
import { getUser } from "../services/auth.service";
import { LOGIN_PATH } from "../utils/constant";

export function useAuth() {
  const [name, setName] = useState();

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

  return { name, checkLogin, handleLogout, getUserData };
}
