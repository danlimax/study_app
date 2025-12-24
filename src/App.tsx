import "@mantine/core/styles.css";

import { MantineProvider } from "@mantine/core";
import { Home } from "./pages/Home";

function App() {
  // const theme = createTheme({
  //   breakpoints: {
  //     xs: "30em",
  //     sm: "48em",
  //     md: "64em",
  //     lg: "74em",
  //     xl: "90em",
  //   },
  // });

  return (
    <>
      <MantineProvider defaultColorScheme="dark">
        <Home />
      </MantineProvider>
    </>
  );
}

export default App;
