import { LOGIN_PATH } from "../utils/constant";

export function useAuth() {
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

  return { checkLogin, handleLogout };
}
