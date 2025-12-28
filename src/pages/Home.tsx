import { Center, Flex } from "@mantine/core";
import { Search } from "../components/Search/Search";
import { useState } from "react";
import { Results } from "../components/Results/Results";

export function Home() {
  const [searchedTheme, setSearchedTheme] = useState("");
  function handelReciveTheme(data: string) {
    setSearchedTheme(data);
  }
  return (
    <>
      <Center style={{ width: "100vw", height: "100vh" }}>
        <Flex
          w={{ base: 350, sm: 600, lg: 800 }}
          bg="#343a40"
          direction="column"
          align="center"
          p={16}
          gap={16}
        >
          <Search searchTheme={handelReciveTheme} />
          <Results theme={searchedTheme} />
        </Flex>
      </Center>
    </>
  );
}
