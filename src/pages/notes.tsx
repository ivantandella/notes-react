import { useAuth } from "../hooks/use-auth";
import { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import { Card, Flex, Loader, Text, Title } from "@mantine/core";
import { getNotes } from "../services/notes.service";
import { convertDate } from "../utils/date";
import NotesCard from "../components/notes-card";

export type NotesType = {
  id: string;
  title: string;
  body: string;
  owner: string;
  createdAt: string;
  archived: boolean;
};

export default function NotesPage() {
  const { checkLogin } = useAuth();
  const [notes, setNotes] = useState<NotesType[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    checkLogin();
  }, []);

  useEffect(() => {
    async function execute() {
      try {
        setIsLoading(true);
        const res = await getNotes();
        setNotes(res.data.data);
      } catch (error: any) {
        alert(error.response.data.message);
      } finally {
        setIsLoading(false);
      }
    }
    execute();
  }, []);

  return (
    <div>
      <Navbar />
      {isLoading && (
        <Flex justify={"center"} align={"center"} h={"100vh"}>
          <Loader />
        </Flex>
      )}
      <NotesCard notes={notes} />
    </div>
  );
}
