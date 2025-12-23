import { Center } from "@mantine/core";
import { Search } from "../components/Search/Search";

export function Home() {
  return (
    <>
      <Center style={{ width: "100vw", height: "100vh" }}>
        <Search />
      </Center>
    </>
  );
}
