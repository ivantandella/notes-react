import { Button, Flex, Modal, Textarea, TextInput } from "@mantine/core";
import { PRIMARY_COLOR } from "../utils/constant";
import { useState } from "react";
import { useNotes } from "../hooks/use-notes";

type AddNoteFormPropsType = {
  opened: boolean;
  close: () => void;
};

export default function AddNoteForm(props: AddNoteFormPropsType) {
  const { opened, close } = props;
  const [body, setBody] = useState("");
  const [title, setTitle] = useState("");
  const { onCreateNote } = useNotes();

  function handleAddNote(e: any) {
    e.preventDefault();
    const data = {
      title: title,
      body: body,
    };
    onCreateNote(data);
    setTitle("");
    setBody("");
    close();
  }

  return (
    <Modal opened={opened} onClose={close} title="New Note">
      <form onSubmit={handleAddNote}>
        <Flex direction={"column"} gap={"md"}>
          <TextInput
            label="Title"
            size="md"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Textarea
            label="Body"
            size="md"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
          <Button type="submit" color={PRIMARY_COLOR}>
            Add
          </Button>
        </Flex>
      </form>
    </Modal>
  );
}
