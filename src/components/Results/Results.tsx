import { ScrollArea, Table } from "@mantine/core";
import { getAll } from "../../services/task.service";
import { useEffect, useState } from "react";
interface Props {
  theme: string;
}

interface TaskData {
  id: number;
  name: string;
  level: string;
  theme: string;
  sugestion: number;
}
export function Results({ theme }: Props) {
  const [data, setData] = useState<TaskData[]>([]);
  //Fazer validação para quando tiver erro ou dados vazios e não renderizar a tabela.
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAll(theme);

        setData(response);
      } catch (err) {
        console.log("teste", err);
      }
    };

    fetchData();
  }, [theme]);

  return (
    <ScrollArea w={{ base: 300, sm: 500, lg: 700 }} h={400}>
      <Table.ScrollContainer minWidth={700} type="native">
        <Table withTableBorder>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Tema</Table.Th>
              <Table.Th>Tarefas</Table.Th>
              <Table.Th>Nível</Table.Th>
              <Table.Th>Sugestão</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {data.map((item) => {
              return (
                <Table.Tr key={item.id}>
                  <Table.Td>{item.theme}</Table.Td>
                  <Table.Td>{item.name}</Table.Td>
                  <Table.Td>{item.level}</Table.Td>
                  <Table.Td>{item.sugestion}</Table.Td>
                </Table.Tr>
              );
            })}
          </Table.Tbody>
        </Table>
      </Table.ScrollContainer>
    </ScrollArea>
  );
}
