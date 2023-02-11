import { ChakraProvider } from "@chakra-ui/react";
import Form from "./Component/Form";
import { Routes, Route } from "react-router-dom";
import Display from "./Component/Display";

function App() {
  return (
    <>
      <ChakraProvider>
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/about/:id" element={<Display />} />
        </Routes>
      </ChakraProvider>
    </>
  );
}

export default App;
