import { Button, Flex, TextInput } from "@mantine/core";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";

interface ISearchProps {
  searchTheme(theme: string): void;
}
export function Search({ searchTheme }: ISearchProps) {
  const [theme, setTheme] = useState("");
  const [loaded, setLoaded] = useState(false);

  function handleClickButton() {
    setLoaded(true);
    setTimeout(() => setLoaded(false), 3000);
    searchTheme(theme);
  }

  return (
    <Flex w={{ base: 300, sm: 250, lg: 400 }} align="center" gap={8}>
      <BsSearch />
      <TextInput
        radius="xl"
        value={theme}
        onChange={(e) => setTheme(e.target.value)}
        placeholder="Digite seu tema de estudo"
        flex={1}
      />
      <Button onClick={handleClickButton} disabled={loaded}>
        Enviar
      </Button>
    </Flex>
  );
}
