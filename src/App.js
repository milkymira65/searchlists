import * as React from "react";

import { ChakraProvider } from "@chakra-ui/react";
import ToDo from "./component/ToDo";

function App() {
  return (
    <ChakraProvider>
      <ToDo />
    </ChakraProvider>
  );
}
export default App;
