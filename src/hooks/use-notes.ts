import { useContext, useState } from "react";
import {
  AddNoteType,
  archiveNote,
  createNote,
  deleteNote,
  getArchived,
  getDetail,
  getNotes,
  unarchiveNote,
} from "../services/notes.service";
import { PRIMARY_COLOR } from "../utils/constant";
import { notifications } from "@mantine/notifications";
import { ReloadContext } from "../context/reload-context";

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
  const [isLoading, setIsLoading] = useState(false);
  const { reload, setReload } = useContext(ReloadContext);

  async function onCreateNote(data: AddNoteType) {
    try {
      setIsLoading(true);
      const res = await createNote(data);
      if (res.status === "success") {
        notifications.show({
          title: res.status.toUpperCase(),
          message: res.message,
          position: "top-right",
          autoClose: 5000,
          color: PRIMARY_COLOR,
        });
      }
      setReload(reload + 1);
    } catch (error: any) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  async function getAllNotes() {
    try {
      setIsLoading(true);
      const res = await getNotes();
      setNotes(res.data);
    } catch (error: any) {
      // alert(error.response.data.message);
      console.log(error);
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
      setIsLoading(true);
      const res = await deleteNote(id);
      if (res.status === "success") {
        notifications.show({
          title: res.status.toUpperCase(),
          message: res.message,
          position: "top-right",
          autoClose: 5000,
          color: PRIMARY_COLOR,
        });
      }
      setReload(reload + 1);
      // window.location.href = NOTES_PATH;
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  async function handleClickArchive(id: string) {
    try {
      setIsLoading(true);
      const res = await archiveNote(id);
      if (res.status === "success") {
        notifications.show({
          title: res.status.toUpperCase(),
          message: res.message,
          position: "top-right",
          autoClose: 5000,
          color: PRIMARY_COLOR,
        });
      }
      setReload(reload + 1);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  async function handleClickUnarchive(id: string) {
    try {
      setIsLoading(true);
      const res = await unarchiveNote(id);
      if (res.status === "success") {
        notifications.show({
          title: res.status.toUpperCase(),
          message: res.message,
          position: "top-right",
          autoClose: 5000,
          color: PRIMARY_COLOR,
        });
      }
      setReload(reload + 1);
      // window.location.href = NOTES_PATH;
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  return {
    note,
    notes,
    isLoading,
    reload,
    getAllNotes,
    onCreateNote,
    getDetailNote,
    getArchivedNotes,
    handleClickDelete,
    handleClickArchive,
    handleClickUnarchive,
  };
}
