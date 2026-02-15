import { notifications } from "@mantine/notifications";
import { Center, Flex, Loader, Table } from "@mantine/core";
import { useEffect, useState } from "react";
import { Search } from "../components/Search/Search";
import { Results } from "../components/Results/Results";
import { NewTask } from "../components/NewTask/NewTask";
import { getAll } from "../services/task.service";

interface TaskData {
  id: number;
  name: string;
  level: string;
  theme: string;
  sugestion: number;
}

interface ApiErrorMessage {
  message: string;
}

export function Home() {
  const [searchedTheme, setSearchedTheme] = useState("");
  const [loaded, setLoaded] = useState(false);

  function handelReciveTheme(data: string) {
    setSearchedTheme(data);
  }
  const [data, setData] = useState<TaskData[]>([]);

  useEffect(() => {
    const fetchDataWhenSearched = async () => {
      try {
        const response = await getAll(searchedTheme);

        setData(response);
        setTimeout(() => setLoaded(true), 3000);
      } catch (error) {
        const err = error as ApiErrorMessage;

        notifications.show({
          title: "Erro:",
          color: "red",
          message: err.message,
          position: "bottom-right",
        });
      }
    };

    fetchDataWhenSearched();
  }, [searchedTheme]);

  return (
    <>
      <Center w="100vw" h="100vh">
        <Flex
          w={{ base: 350, sm: 600, lg: 800 }}
          bg="#343a40"
          direction="column"
          align="center"
          p={16}
          gap={16}
        >
          {!loaded ? "" : <Search searchTheme={handelReciveTheme} />}

          {!loaded ? "" : <NewTask />}
          {!loaded ? (
            <Loader color="blue" type="dots" m="auto" />
          ) : (
            <Results>
              <Table.ScrollContainer minWidth={700} type="native">
                <Table withTableBorder>
                  <Table.Thead>
                    <Table.Tr>
                      <Table.Th></Table.Th>
                      <Table.Th>Tema</Table.Th>
                      <Table.Th>Tarefas</Table.Th>
                      <Table.Th>Nível</Table.Th>
                      <Table.Th>Sugestão</Table.Th>
                    </Table.Tr>
                  </Table.Thead>
                  <Table.Tbody>
                    {data.map((item, index) => {
                      let level;

                      if (item.level === "BEGINNER") {
                        level = "Iniciante";
                      } else if (item.level === "INTERMADIATE") {
                        level = "Intermediário";
                      } else {
                        level = "Avançado";
                      }

                      return (
                        <Table.Tr key={item.id}>
                          <Table.Td>{index + 1}</Table.Td>
                          <Table.Td>{item.theme}</Table.Td>
                          <Table.Td>{item.name}</Table.Td>
                          <Table.Td>{level}</Table.Td>
                          <Table.Td>{item.sugestion}</Table.Td>
                        </Table.Tr>
                      );
                    })}
                  </Table.Tbody>
                </Table>
              </Table.ScrollContainer>
            </Results>
          )}
        </Flex>
      </Center>
    </>
  );
}
