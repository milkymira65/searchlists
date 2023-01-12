import {
  Box,
  Wrap,
  WrapItem,
  Center,
  Input,
  Button,
  Heading,
  Flex,
} from "@chakra-ui/react";
import StlyCard from "./StlyCard";
import { useEffect, useState } from "react";
// import { data } from "./MockDaTa";

function ToDo() {
  const [query, setQuery] = useState("");

  return (
    <Box w="80%" mt="3%" ml="8%">
      <Center>
        <Heading m="5%">Test</Heading>
      </Center>
      <Wrap spacing="30px" justify="center">
        <WrapItem>
          <Center
            w="180px"
            h="80px"
            bg="blackAlpha.100"
            rounded={"full"}
            _hover={{
              textDecoration: "none",
              bg: "#3D6356",
            }}
            onClick={() => {
              setQuery("Male");
            }}
          >
            Male
          </Center>
        </WrapItem>
        <WrapItem>
          <Center
            w="180px"
            h="80px"
            bg="blackAlpha.100"
            rounded={"full"}
            _hover={{
              textDecoration: "none",
              bg: "#3D6356",
            }}
            onClick={() => {
              setQuery("Female");
            }}
          >
            Female
          </Center>
        </WrapItem>
        <WrapItem>
          <Center
            w="180px"
            h="80px"
            bg="blackAlpha.100"
            rounded={"full"}
            _hover={{
              textDecoration: "none",
              bg: "#3D6356",
            }}
            onClick={() => {
              setQuery("Bigender");
            }}
          >
            Bigender
          </Center>
        </WrapItem>
        <WrapItem>
          <Center
            w="180px"
            h="80px"
            bg="blackAlpha.100"
            rounded={"full"}
            _hover={{
              textDecoration: "none",
              bg: "#3D6356",
            }}
            onClick={() => {
              setQuery("Non-binary");
            }}
          >
            Non-binary
          </Center>
        </WrapItem>
        <WrapItem>
          <Center
            w="180px"
            h="80px"
            bg="blackAlpha.100"
            rounded={"full"}
            _hover={{
              textDecoration: "none",
              bg: "#3D6356",
            }}
            onClick={() => {
              setQuery("Agender");
            }}
          >
            Agender
          </Center>
        </WrapItem>

        <WrapItem>
          <Center
            w="180px"
            h="80px"
            bg="blackAlpha.100"
            rounded={"full"}
            _hover={{
              textDecoration: "none",
              bg: "#3D6356",
            }}
            onClick={() => {
              setQuery("Polygender");
            }}
          >
            Polygender
          </Center>
        </WrapItem>
        <WrapItem>
          <Center
            w="180px"
            h="80px"
            bg="blackAlpha.100"
            rounded={"full"}
            _hover={{
              textDecoration: "none",
              bg: "#3D6356",
            }}
            onClick={() => {
              setQuery("Genderfluid");
            }}
          >
            Genderfluid
          </Center>
        </WrapItem>
        <WrapItem>
          <Center
            w="180px"
            h="80px"
            bg="blackAlpha.100"
            rounded={"full"}
            _hover={{
              textDecoration: "none",
              bg: "#3D6356",
            }}
            onClick={() => {
              setQuery("Genderqueer");
            }}
          >
            Genderqueer
          </Center>
        </WrapItem>
        <WrapItem>
          <Center
            w="180px"
            h="80px"
            bg="blackAlpha.100"
            rounded={"full"}
            _hover={{
              textDecoration: "none",
              bg: "#3D6356",
            }}
            onClick={() => {
              setQuery("BraZil");
            }}
          >
            BraZil
          </Center>
        </WrapItem>
        <WrapItem>
          <Center
            w="180px"
            h="80px"
            bg="blackAlpha.100"
            rounded={"full"}
            _hover={{
              textDecoration: "none",
              bg: "#3D6356",
            }}
            onClick={() => {
              setQuery("Thailand");
            }}
          >
            Thailand
          </Center>
        </WrapItem>
        <WrapItem>
          <Center
            w="180px"
            h="80px"
            bg="blackAlpha.100"
            rounded={"full"}
            _hover={{
              textDecoration: "none",
              bg: "#3D6356",
            }}
            onClick={() => {
              setQuery("Sweden");
            }}
          >
            Sweden
          </Center>
        </WrapItem>
        <WrapItem>
          <Center
            w="180px"
            h="80px"
            bg="blackAlpha.100"
            rounded={"full"}
            _hover={{
              textDecoration: "none",
              bg: "#3D6356",
            }}
            onClick={() => {
              setQuery("Japan");
            }}
          >
            Japan
          </Center>
        </WrapItem>
        <WrapItem>
          <Center
            w="180px"
            h="80px"
            bg="blackAlpha.100"
            rounded={"full"}
            _hover={{
              textDecoration: "none",
              bg: "#3D6356",
            }}
            onClick={() => {
              setQuery("Netherlands");
            }}
          >
            Netherlands
          </Center>
        </WrapItem>
      </Wrap>
      <Center>
        <Flex w="50%" m="5%">
          <Input
            w="80%"
            value={query}
            placeholder="Search"
            onChange={(e) => {
              setQuery(e.target.value);

              console.log(query);
            }}
          />

          <Button
            colorScheme="teal"
            variant="ghost"
            Text="teal"
            onClick={() => {
              setQuery("");
            }}
          >
            CLEAR
          </Button>
        </Flex>
      </Center>
      <Wrap justify="center">
        <StlyCard query={query} />
      </Wrap>
    </Box>
  );
}

export default ToDo;
