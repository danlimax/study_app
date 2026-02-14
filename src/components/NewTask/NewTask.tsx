import { Button, Center, Group, Modal, Radio, TextInput } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { PiListPlusBold } from "react-icons/pi";
import { useForm } from "@mantine/form";
import { create } from "../../services/task.service";

export function NewTask() {
  const [opened, { open, close }] = useDisclosure(false);

  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      name: "",
      level: "BEGINNER",
      sugestion: "",
      theme: "",
    },
    validate: {
      name: (value) => (value === "" ? "O nome da tarefa é obrigatório" : null),
      theme: (value) =>
        value === "" ? "O tema do estudo é obrigatório" : null,
      sugestion: (value) =>
        value === "" ? "A sugestão de estudo é obrigatório" : null,
    },
  });

  return (
    <>
      <Modal opened={opened} onClose={close} title="Criar nova tarefa">
        <form
          onSubmit={form.onSubmit(async (values) => {
            const response = await create(values);
            close();
            console.log(response);
          })}
        >
          <TextInput
            withAsterisk
            label="Tema"
            key={form.key("theme")}
            {...form.getInputProps("theme")}
          />
          <TextInput
            withAsterisk
            label="Tarefa"
            key={form.key("name")}
            {...form.getInputProps("name")}
          />
          <Radio.Group
            name="level"
            label="Selecione o nível da tarefa"
            withAsterisk
            key={form.key("level")}
            {...form.getInputProps("level")}
          >
            <Group mt="xs" mb="xs">
              <Radio value="BEGINNER" label="Iniciante" />
              <Radio value="INTERMADIATE" label="Intermediário" />
              <Radio value="AVANCED" label="Avançado" />
            </Group>
          </Radio.Group>
          <TextInput
            withAsterisk
            label="Sugestão"
            key={form.key("sugestion")}
            {...form.getInputProps("sugestion")}
          />
          <Center mt={8}>
            <Button type="submit">Enviar</Button>
          </Center>
        </form>
      </Modal>

      <Button
        leftSection={<PiListPlusBold size={24} />}
        variant="subtle"
        color="gray"
        onClick={open}
      >
        Nova tarefa
      </Button>
    </>
  );
}
