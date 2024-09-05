import axios from "axios";
import { ACCESS_TOKEN, BASE_URL } from "../utils/constant";

export type LoginDataType = {
  email: string;
  password: string;
};

export type RegisterDataType = {
  name: string;
  email: string;
  password: string;
};

export async function login(data: LoginDataType) {
  const res = await axios.post(`${BASE_URL}/login`, data);
  return res.data;
}

export async function register(data: RegisterDataType) {
  const res = await axios.post(`${BASE_URL}/register`, data);
  return res.data;
}

export async function getUser() {
  const res = await axios.get(`${BASE_URL}/users/me`, {
    headers: { Authorization: `Bearer ${ACCESS_TOKEN}` },
  });
  return res.data;
}
