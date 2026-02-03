import "@mantine/core/styles.css";

import { MantineProvider } from "@mantine/core";
import { Home } from "./pages/Home";

function App() {
  return (
    <>
      <MantineProvider defaultColorScheme="dark">
        <Home />
      </MantineProvider>
    </>
  );
}

export default App;
