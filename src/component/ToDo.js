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

function ToDo() {
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
          >
            Netherlands
          </Center>
        </WrapItem>
      </Wrap>
      <Center>
        <Flex w="50%" m="5%">
          <Input w="80%" placeholder="Search" />
          <Button colorScheme="teal" variant="ghost" Text="teal">
            CLEAR
          </Button>
        </Flex>
      </Center>
      <Wrap justify="center">
        <StlyCard />
      </Wrap>
    </Box>
  );
}

export default ToDo;
