import axios from "axios";
import { BASE_URL } from "../utils/constant";
import { getToken } from "../utils/token";

export type AuthDataType = {
  name?: string;
  email: string;
  password: string;
};

export async function login(data: AuthDataType) {
  const res = await axios.post(`${BASE_URL}/login`, data);
  return res.data;
}

export async function register(data: AuthDataType) {
  const res = await axios.post(`${BASE_URL}/register`, data);
  return res.data;
}

export async function getUser() {
  const res = await axios.get(`${BASE_URL}/users/me`, {
    headers: { Authorization: `Bearer ${getToken()}` },
  });
  return res.data;
}
