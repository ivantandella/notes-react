import { Button, Flex, Group, TextInput, Title } from "@mantine/core";
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
import SearchIcon from "./icons/search-icon";
import { useContext } from "react";
import { SearchContext } from "../context/search-context";
import { useResponsive } from "../hooks/use-responsive";
import ArchiveIcon from "./icons/archive-icon";
import UnarchiveIcon from "./icons/unarchive-icon";

export type HeaderPropsType = {
  pageTitle: string;
  type: "active" | "archive";
};

export default function Header(props: HeaderPropsType) {
  const { pageTitle, type } = props;
  const [opened, { open, close }] = useDisclosure(false);
  const { search, setSearch } = useContext(SearchContext);
  const { mdScreen } = useResponsive();
  const searchIcon = <SearchIcon />;

  return (
    <Flex
      justify={"space-between"}
      p={20}
      align={"center"}
      wrap={"wrap"}
      gap={"md"}
    >
      <Title order={1}>{pageTitle}</Title>
      {mdScreen ? (
        <>
          <Group>
            {type === "active" && (
              <>
                <Button color={PRIMARY_COLOR} onClick={open}>
                  <PlusIcon />
                </Button>

                <Link to={ARCHIVED_NOTES_PATH}>
                  <Button color={SECONDARY_COLOR}>
                    <ArchiveIcon />
                  </Button>
                </Link>
              </>
            )}
            {type === "archive" && (
              <Link to={NOTES_PATH}>
                <Button color={SECONDARY_COLOR}>
                  <UnarchiveIcon />
                </Button>
              </Link>
            )}
          </Group>
          <TextInput
            w={"100%"}
            placeholder="Search"
            rightSection={searchIcon}
            rightSectionPointerEvents="none"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </>
      ) : (
        <>
          <TextInput
            placeholder="Search"
            rightSection={searchIcon}
            rightSectionPointerEvents="none"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
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
        </>
      )}

      <AddNoteForm opened={opened} close={close} />
    </Flex>
  );
}
