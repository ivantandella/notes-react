import { useEffect, useState } from "react";
import { getDetailNotes } from "../services/notes.service";
import { Link, useParams } from "react-router-dom";
import { Button, Card, Flex, Loader, Text, Title } from "@mantine/core";
import Navbar from "../components/navbar";
import { NotesType } from "./notes";
import { convertDate } from "../utils/date";
import { NOTES_PATH, PRIMARY_COLOR } from "../utils/constant";
import ArrowLeftIcon from "../components/icons/arrow-left-icon";

export default function DetailPage() {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [note, setNote] = useState<NotesType>();

  useEffect(() => {
    async function execute() {
      try {
        setIsLoading(true);
        const res = await getDetailNotes(id);
        setNote(res.data.data);
        // console.log(note);
        // console.log(res.data.data);
      } catch (error: any) {
        alert(error.response.data.message);
      } finally {
        setIsLoading(false);
      }
    }
    execute();
  }, [id]);

  return (
    <>
      <Navbar />
      {isLoading && (
        <Flex justify={"center"} align={"center"} h={"100vh"}>
          <Loader />
        </Flex>
      )}
      {note && (
        <Card withBorder shadow="sm" p="lg" m={100}>
          <Title mb={40}>Detail Notes</Title>
          <Card withBorder mb={20}>
            <Flex direction={"column"} gap={"md"}>
              <Title order={2}>{note.title}</Title>
              <Text size="lg">{note.body}</Text>
              <Text fs={"italic"}>
                Created at {convertDate(note.createdAt)}
              </Text>
            </Flex>
          </Card>
          <Link to={NOTES_PATH}>
            <Button color={PRIMARY_COLOR}>
              <ArrowLeftIcon />
            </Button>
          </Link>
        </Card>
      )}
    </>
  );
}
