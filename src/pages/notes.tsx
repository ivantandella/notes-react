import { useAuth } from "../hooks/use-auth";
import { useContext, useEffect } from "react";
import Navbar from "../components/navbar";
import { Flex, Loader, Title } from "@mantine/core";
import NotesCard from "../components/notes-card";
import Header from "../components/header";
import { PRIMARY_COLOR } from "../utils/constant";
import { useNotes } from "../hooks/use-notes";
import { SearchContext } from "../context/search-context";

type NotesPagePropsType = {
  type: "active" | "archive";
};

export default function NotesPage(props: NotesPagePropsType) {
  const { type } = props;
  const { checkLogin } = useAuth();
  const { notes, isLoading, getAllNotes, getArchivedNotes, reload } =
    useNotes();
  const { search } = useContext(SearchContext);

  useEffect(() => {
    checkLogin();
    if (type === "active") {
      getAllNotes();
    } else {
      getArchivedNotes();
    }
  }, [type, reload]);

  // useEffect(() => {
  //   searchNotes(search);
  // }, [search]);

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Navbar />
      <Header
        pageTitle={type === "active" ? "All Notes" : "Archived Notes"}
        type={type}
      />
      {isLoading ? (
        <Flex justify={"center"} align={"center"} min-h={"100vh"}>
          <Loader color={PRIMARY_COLOR} />
        </Flex>
      ) : filteredNotes.length === 0 ? (
        <Flex justify={"center"} align={"center"} h={"100vh"}>
          <Title order={2}>No notes found</Title>
        </Flex>
      ) : (
        filteredNotes &&
        filteredNotes.length > 0 && (
          <Flex direction={"row"} gap={"md"} p={"lg"} wrap={"wrap"}>
            {filteredNotes.map((note) => (
              <NotesCard key={note.id} note={note} type={type} />
            ))}
          </Flex>
        )
      )}
    </>
  );
}
