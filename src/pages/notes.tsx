import { useAuth } from "../hooks/use-auth";
import { useEffect } from "react";
import Navbar from "../components/navbar";
import { Flex, Loader, Title } from "@mantine/core";
import NotesCard from "../components/notes-card";
import { useNotes } from "../hooks/use-notes";
import Header from "../components/header";
import { PRIMARY_COLOR } from "../utils/constant";

type NotesPagePropsType = {
  type: "active" | "archive";
};

export default function NotesPage(props: NotesPagePropsType) {
  const { type } = props;
  const { checkLogin } = useAuth();
  const { notes, isLoading, getAllNotes, getArchivedNotes } = useNotes();

  useEffect(() => {
    checkLogin();
    if (type === "active") {
      getAllNotes();
    } else {
      getArchivedNotes();
    }
  }, [type]);

  return (
    <>
      <Navbar />
      {isLoading && (
        <Flex justify={"center"} align={"center"} h={"100vh"}>
          <Loader color={PRIMARY_COLOR} />
        </Flex>
      )}
      <Header
        pageTitle={type === "active" ? "All Notes" : "Archived Notes"}
        type={type}
      />
      {notes.length === 0 && (
        <Flex justify={"center"} align={"center"} h={"100vh"}>
          <Title order={2}>No notes found</Title>
        </Flex>
      )}
      <NotesCard notes={notes} type={type} />
    </>
  );
}
