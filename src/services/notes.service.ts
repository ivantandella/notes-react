import axios from "axios";
import { BASE_URL } from "../utils/constant";

const accessToken = localStorage.getItem("token");

export async function getNotes() {
  const res = await axios.get(`${BASE_URL}/notes`, {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
  return res;
}

export async function getDetail(id?: string) {
  const res = await axios.get(`${BASE_URL}/notes/${id}`, {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
  return res.data;
}

export async function deleteNote(id?: string) {
  const res = await axios.delete(`${BASE_URL}/notes/${id}`, {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
  return res.data;
}
