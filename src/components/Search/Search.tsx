import { Button, Flex, TextInput } from "@mantine/core";
import { useRef, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { Results } from "../Results/Results";

export function Search() {
  const themeRef = useRef<HTMLInputElement>(null);
  const [theme, setTheme] = useState("");

  function handleClickButton() {
    if (!themeRef.current) {
      return;
    }
    setTheme(themeRef.current.value);
  }

  return (
    <Flex
      w={{ base: 350, sm: 600, lg: 800 }}
      bg="#343a40"
      direction="column"
      align="center"
      p={16}
      gap={16}
    >
      <Flex w={{ base: 300, sm: 250, lg: 400 }} align="center" gap={8}>
        <BsSearch />
        <TextInput
          ref={themeRef}
          radius="xl"
          placeholder="Digite seu tema de estudo"
          flex={1}
        />
        <Button onClick={handleClickButton}>Enviar</Button>
      </Flex>
      {theme ? <Results theme={theme} /> : ""}
    </Flex>
  );
}
