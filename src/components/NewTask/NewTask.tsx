import { Button, Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { PiListPlusBold } from "react-icons/pi";
export function NewTask() {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <>
      <Modal opened={opened} onClose={close} title="Criar nova tarefa">
        {/* Modal content */}
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
