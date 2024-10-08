import axios from "axios";
import { BASE_URL } from "../utils/constant";
import { getToken } from "../utils/token";

export type AddNoteType = {
  title: string;
  body: string;
};

export async function getNotes() {
  const res = await axios.get(`${BASE_URL}/notes`, {
    headers: { Authorization: `Bearer ${getToken()}` },
  });
  return res.data;
}

export async function createNote(data: AddNoteType) {
  const res = await axios.post(`${BASE_URL}/notes`, data, {
    headers: { Authorization: `Bearer ${getToken()}` },
  });
  return res.data;
}

export async function getDetail(id?: string) {
  const res = await axios.get(`${BASE_URL}/notes/${id}`, {
    headers: { Authorization: `Bearer ${getToken()}` },
  });
  return res.data;
}

export async function deleteNote(id?: string) {
  const res = await axios.delete(`${BASE_URL}/notes/${id}`, {
    headers: { Authorization: `Bearer ${getToken()}` },
  });
  return res.data;
}

export async function archiveNote(id?: string) {
  const res = await axios.post(
    `${BASE_URL}/notes/${id}/archive`,
    {},
    {
      headers: { Authorization: `Bearer ${getToken()}` },
    }
  );
  return res.data;
}

export async function unarchiveNote(id?: string) {
  const res = await axios.post(
    `${BASE_URL}/notes/${id}/unarchive`,
    {},
    {
      headers: { Authorization: `Bearer ${getToken()}` },
    }
  );
  return res.data;
}

export async function getArchived() {
  const res = await axios.get(`${BASE_URL}/notes/archived`, {
    headers: { Authorization: `Bearer ${getToken()}` },
  });
  return res.data;
}
