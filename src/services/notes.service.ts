import axios from "axios";
import { BASE_URL } from "../utils/constant";

export async function getNotes() {
  const accessToken = localStorage.getItem("token");
  const res = axios.get(`${BASE_URL}/notes`, {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
  return res;
}
