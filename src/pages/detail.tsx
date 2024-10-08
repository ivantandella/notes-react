import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Button, Card, Flex, Loader, Text, Title } from "@mantine/core";
import Navbar from "../components/navbar";
import { convertDate } from "../utils/date";
import {
  ARCHIVED_NOTES_PATH,
  DANGER_COLOR,
  NOTES_PATH,
  PRIMARY_COLOR,
} from "../utils/constant";
import ArrowLeftIcon from "../components/icons/arrow-left-icon";
import { useNotes } from "../hooks/use-notes";
import TrashIcon from "../components/icons/trash-icon";
import { modals } from "@mantine/modals";

export default function DetailPage() {
  const { id } = useParams();
  const { handleClickDelete, isLoading, note, getDetailNote } = useNotes();

  useEffect(() => {
    getDetailNote(id);
  }, [id]);

  function openDeleteModal(id: string) {
    modals.openConfirmModal({
      title: "Delete note",
      centered: true,
      children: (
        <Text size="sm">Are you sure you want to delete this note?</Text>
      ),
      labels: { confirm: "Delete", cancel: "Cancel" },
      confirmProps: { color: "red" },
      onCancel: () => console.log("Cancel"),
      onConfirm: () => {
        handleClickDelete(id);
      },
    });
  }

  return (
    <>
      <Navbar />
      {isLoading && (
        <Flex justify={"center"} align={"center"} h={"100vh"}>
          <Loader />
        </Flex>
      )}
      {note && (
        <Card withBorder shadow="sm" p="lg" m={50}>
          <Title mb={40}>
            Detail Notes {note.archived ? <i>(archived)</i> : ""}
          </Title>
          <Card withBorder mb={20}>
            <Flex direction={"column"} gap={"md"}>
              <Title order={2}>{note.title}</Title>
              <Text size="lg">{note.body}</Text>
              <Text fs={"italic"}>
                Created at {convertDate(note.createdAt)}
              </Text>
            </Flex>
          </Card>
          <Flex direction={"row"} justify={"space-between"}>
            <Link to={note.archived ? ARCHIVED_NOTES_PATH : NOTES_PATH}>
              <Button color={PRIMARY_COLOR}>
                <ArrowLeftIcon />
              </Button>
            </Link>
            <Button
              color={DANGER_COLOR}
              onClick={() => openDeleteModal(note.id)}
            >
              <TrashIcon />
            </Button>
          </Flex>
        </Card>
      )}
    </>
  );
}
