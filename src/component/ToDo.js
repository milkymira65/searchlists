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
        <Heading
          m="5%"
          // onClick={() => {
          //   handleAddCounter(counter);
          // }}
        >
          Test
        </Heading>
      </Center>
      <Wrap spacing="30px" justify="center">
        <WrapItem>
          <Center w="180px" h="80px" bg="blackAlpha.100">
            Male
          </Center>
        </WrapItem>
        <WrapItem>
          <Center w="180px" h="80px" bg="blackAlpha.100">
            Female
          </Center>
        </WrapItem>
        <WrapItem>
          <Center w="180px" h="80px" bg="blackAlpha.100">
            Bigender
          </Center>
        </WrapItem>
        <WrapItem>
          <Center w="180px" h="80px" bg="blackAlpha.100">
            Non-binary
          </Center>
        </WrapItem>
        <WrapItem>
          <Center w="180px" h="80px" bg="blackAlpha.100">
            Agender
          </Center>
        </WrapItem>

        <WrapItem>
          <Center w="180px" h="80px" bg="blackAlpha.100">
            Polygender
          </Center>
        </WrapItem>
        <WrapItem>
          <Center w="180px" h="80px" bg="blackAlpha.100">
            Genderfluid
          </Center>
        </WrapItem>
        <WrapItem>
          <Center w="180px" h="80px" bg="blackAlpha.100">
            Genderqueer
          </Center>
        </WrapItem>
        <WrapItem>
          <Center w="180px" h="80px" bg="blackAlpha.100">
            BraZil
          </Center>
        </WrapItem>
        <WrapItem>
          <Center w="180px" h="80px" bg="blackAlpha.100">
            Thailand
          </Center>
        </WrapItem>
        <WrapItem>
          <Center w="180px" h="80px" bg="blackAlpha.100">
            Sweden
          </Center>
        </WrapItem>
        <WrapItem>
          <Center w="180px" h="80px" bg="blackAlpha.100">
            Japan
          </Center>
        </WrapItem>
        <WrapItem>
          <Center w="180px" h="80px" bg="blackAlpha.100">
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
