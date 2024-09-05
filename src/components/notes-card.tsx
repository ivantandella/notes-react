import {
  Button,
  Card,
  CardSection,
  Flex,
  Group,
  Text,
  Title,
} from "@mantine/core";
import { convertDate } from "../utils/date";
import { NotesType } from "../pages/notes";
import { DANGER_COLOR, PRIMARY_COLOR, WARNING_COLOR } from "../utils/constant";
import TrashIcon from "./icons/trash-icon";
import EditIcon from "./icons/edit-icon";
import InfoIcon from "./icons/info-icon";

export type NotesCardPropsType = {
  notes: NotesType[];
};

export default function NotesCard(props: NotesCardPropsType) {
  const { notes } = props;

  return (
    <Flex direction={"row"} gap={"md"} p={"lg"}>
      {notes.map((note) => (
        <Card
          key={note.id}
          withBorder
          shadow="md"
          radius={"md"}
          style={{ width: "300px", minHeight: "200px" }}
        >
          <Title order={3}>{note.title}</Title>
          <Text size="md" fs={"italic"}>
            {convertDate(note.createdAt)}
          </Text>
          <Text size="lg" h={"100%"}>
            {note.body.substring(0, 100) + "..."}
          </Text>

          <Group mt={20}>
            <Button color={PRIMARY_COLOR}>
              <InfoIcon />
            </Button>
            <Button color={WARNING_COLOR}>
              <EditIcon />
            </Button>
            <Button color={DANGER_COLOR}>
              <TrashIcon />
            </Button>
          </Group>
        </Card>
      ))}
    </Flex>
  );
}
