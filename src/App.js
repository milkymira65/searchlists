import * as React from "react";

import { ChakraProvider } from "@chakra-ui/react";
import ToDo from "./component/ToDo";
// import Search from "./component/Fetch";

function App() {
  return (
    <ChakraProvider>
      <ToDo />
      {/* <Search /> */}
    </ChakraProvider>
  );
}
export default App;
