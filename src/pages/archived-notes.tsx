import { Flex, Loader, Title } from "@mantine/core";
import Navbar from "../components/navbar";
import NotesCard from "../components/notes-card";
import { useAuth } from "../hooks/use-auth";
import { useNotes } from "../hooks/use-notes";
import { useEffect } from "react";
import Header from "../components/header";

export function ArchivedNotesPage() {
  const { checkLogin } = useAuth();
  const { notes, isLoading, getArchivedNotes } = useNotes();

  useEffect(() => {
    checkLogin();
    getArchivedNotes();
  }, []);

  return (
    <>
      <Navbar />
      {isLoading && (
        <Flex justify={"center"} align={"center"} h={"100vh"}>
          <Loader />
        </Flex>
      )}
      <Header title="Archived Notes" type="archive" />
      {notes.length === 0 && (
        <Flex justify={"center"} align={"center"} h={"100vh"}>
          <Title order={2}>No notes found</Title>
        </Flex>
      )}
      <NotesCard notes={notes} type="archive" />
    </>
  );
}
