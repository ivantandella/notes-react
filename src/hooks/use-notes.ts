import { useState } from "react";
import { deleteNote, getDetail, getNotes } from "../services/notes.service";
import { NOTES_PATH } from "../utils/constant";
import { useParams } from "react-router-dom";

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
      setNotes(res.data.data);
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

  function handleClickDelete(id: string) {
    async function execute() {
      try {
        const res = await deleteNote(id);
        console.log(res);
        alert(res.message);
        window.location.href = NOTES_PATH;
      } catch (error) {
        console.log(error);
      }
    }
    execute();
  }

  return {
    note,
    notes,
    isLoading,
    getAllNotes,
    getDetailNote,
    handleClickDelete,
  };
}
