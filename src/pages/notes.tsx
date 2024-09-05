import { useAuth } from "../hooks/use-auth";
import { useEffect } from "react";
import Navbar from "../components/navbar";
import { Flex, Loader, Title } from "@mantine/core";
import NotesCard from "../components/notes-card";
// import { useNotes } from "../hooks/use-notes";
import Header from "../components/header";
import { PRIMARY_COLOR } from "../utils/constant";
import { Notifications } from "@mantine/notifications";
import { useNotes } from "../hooks/use-notes";

type NotesPagePropsType = {
  type: "active" | "archive";
};

export default function NotesPage(props: NotesPagePropsType) {
  const { type } = props;
  const { checkLogin } = useAuth();
  const { notes, isLoading, getAllNotes, getArchivedNotes, number } =
    useNotes();

  useEffect(() => {
    checkLogin();
    if (type === "active") {
      getAllNotes();
    } else {
      getArchivedNotes();
    }
  }, [type, number]);

  return (
    <>
      <Navbar />
      <Notifications />
      <Header
        pageTitle={type === "active" ? "All Notes" : "Archived Notes"}
        type={type}
      />
      {isLoading && (
        <Flex justify={"center"} align={"center"} min-h={"100vh"}>
          <Loader color={PRIMARY_COLOR} />
        </Flex>
      )}

      {notes.length === 0 && (
        <Flex justify={"center"} align={"center"} h={"100vh"}>
          <Title order={2}>No notes found</Title>
        </Flex>
      )}
      {notes && notes.length > 0 && <NotesCard notes={notes} type={type} />}
    </>
  );
}
