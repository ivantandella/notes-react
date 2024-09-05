import { Button, Flex, Group, Title } from "@mantine/core";
import PlusIcon from "./icons/plus-icon";
import {
  ARCHIVED_NOTES_PATH,
  NOTES_PATH,
  PRIMARY_COLOR,
  SECONDARY_COLOR,
} from "../utils/constant";
import { Link } from "react-router-dom";

export type HeaderPropsType = {
  title: string;
  type: "active" | "archive";
};

export default function Header(props: HeaderPropsType) {
  const { title, type } = props;
  return (
    <Flex justify={"space-between"} p={20}>
      <Title order={1}>{title}</Title>
      <Group>
        {type === "active" && (
          <>
            <Button color={PRIMARY_COLOR}>
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
    </Flex>
  );
}
