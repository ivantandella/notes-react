import { useState } from "react";
import {
  archiveNote,
  deleteNote,
  getArchived,
  getDetail,
  getNotes,
  unarchiveNote,
} from "../services/notes.service";
import { ARCHIVED_NOTES_PATH, NOTES_PATH } from "../utils/constant";

export type NotesType = {
  id: string;
  title: string;
  body: string;
  owner: string;
  createdAt: string;
  archived: boolean;
};

export function useNotes() {
  const [notes, setNotes] = useState<NotesType[]>([]);
  const [note, setNote] = useState<NotesType>();
  const [isLoading, setIsLoading] = useState(true);

  async function getAllNotes() {
    try {
      setIsLoading(true);
      const res = await getNotes();
      setNotes(res.data);
    } catch (error: any) {
      alert(error.response.data.message);
    } finally {
      setIsLoading(false);
    }
  }

  async function getDetailNote(id?: string) {
    try {
      setIsLoading(true);
      const res = await getDetail(id);
      setNote(res.data);
    } catch (error: any) {
      alert(error.response.data.message);
    } finally {
      setIsLoading(false);
    }
  }

  async function getArchivedNotes() {
    try {
      setIsLoading(true);
      const res = await getArchived();
      setNotes(res.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  async function handleClickDelete(id: string) {
    try {
      const res = await deleteNote(id);
      window.location.href = NOTES_PATH;
      alert(res.message);
    } catch (error) {
      console.log(error);
    }
  }

  async function handleClickArchive(id: string) {
    try {
      const res = await archiveNote(id);
      window.location.href = ARCHIVED_NOTES_PATH;
      alert(res.message);
    } catch (error) {
      console.log(error);
    }
  }

  async function handleClickUnarchive(id: string) {
    try {
      const res = await unarchiveNote(id);
      window.location.href = NOTES_PATH;
      alert(res.message);
    } catch (error) {
      console.log(error);
    }
  }

  return {
    note,
    notes,
    isLoading,
    getAllNotes,
    getDetailNote,
    getArchivedNotes,
    handleClickDelete,
    handleClickArchive,
    handleClickUnarchive,
  };
}
