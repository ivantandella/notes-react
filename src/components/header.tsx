import { Button, Flex, Group, Title } from "@mantine/core";
import PlusIcon from "./icons/plus-icon";
import {
  ARCHIVED_NOTES_PATH,
  NOTES_PATH,
  PRIMARY_COLOR,
  SECONDARY_COLOR,
} from "../utils/constant";
import { Link } from "react-router-dom";
import { useDisclosure } from "@mantine/hooks";
import AddNoteForm from "./add-note-form";

export type HeaderPropsType = {
  pageTitle: string;
  type: "active" | "archive";
};

export default function Header(props: HeaderPropsType) {
  const { pageTitle, type } = props;
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <Flex justify={"space-between"} p={20}>
      <Title order={1}>{pageTitle}</Title>
      <Group>
        {type === "active" && (
          <>
            <Button color={PRIMARY_COLOR} onClick={open}>
              <PlusIcon />
            </Button>

            <Link to={ARCHIVED_NOTES_PATH}>
              <Button color={SECONDARY_COLOR}>See Archive</Button>
            </Link>
          </>
        )}
        {type === "archive" && (
          <Link to={NOTES_PATH}>
            <Button color={SECONDARY_COLOR}>See All Notes</Button>
          </Link>
        )}
      </Group>

      <AddNoteForm opened={opened} close={close} />
    </Flex>
  );
}
