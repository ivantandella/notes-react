import { Button, Card, Flex, Group, Text, Title } from "@mantine/core";
import { convertDate } from "../utils/date";
import {
  DANGER_COLOR,
  PRIMARY_COLOR,
  SECONDARY_COLOR,
} from "../utils/constant";
import TrashIcon from "./icons/trash-icon";
import InfoIcon from "./icons/info-icon";
import { Link } from "react-router-dom";
import { NotesType, useNotes } from "../hooks/use-notes";
import ArchiveIcon from "./icons/archive-icon";
import UnarchiveIcon from "./icons/unarchive-icon";

export type NotesCardPropsType = {
  notes: NotesType[];
  type: "active" | "archive";
};

export default function NotesCard(props: NotesCardPropsType) {
  const { notes, type } = props;
  const { handleClickDelete, handleClickArchive, handleClickUnarchive } =
    useNotes();

  return (
    <Flex direction={"row"} gap={"md"} p={"lg"} wrap={"wrap"}>
      {notes.map((note) => (
        <Card
          key={note.id}
          withBorder
          shadow="md"
          radius={"md"}
          style={{ width: "290px", minHeight: "200px" }}
        >
          <Title order={3}>{note.title}</Title>
          <Text size="sm" fs={"italic"}>
            {convertDate(note.createdAt)}
          </Text>
          <Text size="lg" h={"100%"}>
            {note.body}
          </Text>

          <Group mt={20}>
            <Link to={`/notes/${note.id}`}>
              <Button color={PRIMARY_COLOR}>
                <InfoIcon />
              </Button>
            </Link>

            {type === "active" && (
              <Button
                color={SECONDARY_COLOR}
                onClick={() => {
                  handleClickArchive(note.id);
                }}
              >
                <ArchiveIcon />
              </Button>
            )}

            {type === "archive" && (
              <Button
                color={SECONDARY_COLOR}
                onClick={() => {
                  handleClickUnarchive(note.id);
                }}
              >
                <UnarchiveIcon />
              </Button>
            )}

            <Button
              color={DANGER_COLOR}
              onClick={() => {
                handleClickDelete(note.id);
              }}
            >
              <TrashIcon />
            </Button>
          </Group>
        </Card>
      ))}
    </Flex>
  );
}
