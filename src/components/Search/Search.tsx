import { Button, Flex, TextInput } from "@mantine/core";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
  searchTheme(theme: string): void;
}
export function Search({ searchTheme }: Props) {
  const [theme, setTheme] = useState("");

  function handleClickButton() {
    searchTheme(theme);
  }

  return (
    <>
      <Flex w={{ base: 300, sm: 250, lg: 400 }} align="center" gap={8}>
        <BsSearch />
        <TextInput
          radius="xl"
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
          placeholder="Digite seu tema de estudo"
          flex={1}
        />
        <Button onClick={handleClickButton}>Enviar</Button>
      </Flex>
    </>
  );
}
