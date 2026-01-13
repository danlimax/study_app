import { Button, Group, Modal, Radio, TextInput } from "@mantine/core";
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
      level: 0,
      sugestion: "",
      theme: "",
    },

    validate: {},
  });

  return (
    <>
      <Modal opened={opened} onClose={close} title="Criar nova tarefa">
        <form onSubmit={form.onSubmit((values) => create(values))}>
          <TextInput withAsterisk label="Tema" />
          <TextInput withAsterisk label="Tarefa" />
          <Radio.Group
            name="level"
            label="Selecione o nível da tarefa"
            withAsterisk
          >
            <Group mt="xs">
              <Radio value={0} label="Iniciante" />
              <Radio value={1} label="Intermediário" />
              <Radio value={2} label="Avançado" />
            </Group>
          </Radio.Group>
          <TextInput withAsterisk label="Sugestão" />
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
