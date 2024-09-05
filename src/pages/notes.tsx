import { useAuth } from "../hooks/use-auth";
import { useEffect } from "react";
import Navbar from "../components/navbar";
import { Flex, Loader, Title } from "@mantine/core";
import NotesCard from "../components/notes-card";
import { useNotes } from "../hooks/use-notes";

export default function NotesPage() {
  const { checkLogin } = useAuth();
  const { notes, isLoading, getAllNotes } = useNotes();

  useEffect(() => {
    checkLogin();
    getAllNotes();
  }, []);

  return (
    <div>
      <Navbar />
      {isLoading && (
        <Flex justify={"center"} align={"center"} h={"100vh"}>
          <Loader />
        </Flex>
      )}

      {notes.length === 0 && (
        <Flex justify={"center"} align={"center"} h={"100vh"}>
          <Title order={2}>No notes found</Title>
        </Flex>
      )}
      <NotesCard notes={notes} />
    </div>
  );
}
