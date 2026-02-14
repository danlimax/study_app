import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";

import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { Home } from "./pages/Home";

function App() {
  return (
    <>
      <MantineProvider defaultColorScheme="dark">
        <Notifications />
        <Home />
      </MantineProvider>
    </>
  );
}

export default App;
