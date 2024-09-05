import axios from "axios";
import { BASE_URL } from "../utils/constant";

const accessToken = localStorage.getItem("token");

export async function getNotes() {
  const res = await axios.get(`${BASE_URL}/notes`, {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
  return res;
}

export async function getDetailNotes(id?: string) {
  const res = await axios.get(`${BASE_URL}/notes/${id}`, {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
  return res;
}
