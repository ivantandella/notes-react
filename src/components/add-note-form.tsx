import { Button, Flex, Modal, Textarea, TextInput } from "@mantine/core";
import { PRIMARY_COLOR } from "../utils/constant";
import { useNotes } from "../hooks/use-notes";
import * as Yup from "yup";
import { useForm, yupResolver } from "@mantine/form";
import { AddNoteType } from "../services/notes.service";

type AddNoteFormPropsType = {
  opened: boolean;
  close: () => void;
};

export default function AddNoteForm(props: AddNoteFormPropsType) {
  const { opened, close } = props;
  const { onCreateNote } = useNotes();

  const form = useForm({
    initialValues: {
      title: "",
      body: "",
    },
    validate: yupResolver(
      Yup.object({
        title: Yup.string().required("Title is required"),
        body: Yup.string().required("Body is required"),
      })
    ),
  });

  function handleAddNote(values: AddNoteType) {
    onCreateNote(values);
    form.reset();
    close();
  }

  return (
    <Modal opened={opened} onClose={close} title="New Note">
      <form onSubmit={form.onSubmit((values) => handleAddNote(values))}>
        <Flex direction={"column"} gap={"md"}>
          <TextInput
            label="Title"
            size="md"
            key={form.key("title")}
            {...form.getInputProps("title")}
          />
          <Textarea
            label="Body"
            size="md"
            key={form.key("body")}
            {...form.getInputProps("body")}
          />
          <Button type="submit" color={PRIMARY_COLOR}>
            Add
          </Button>
        </Flex>
      </form>
    </Modal>
  );
}
