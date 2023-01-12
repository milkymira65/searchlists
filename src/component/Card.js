import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  Spacer,
  Flex,
} from "@chakra-ui/react";

export default function Card(property) {
  return (
    <Center py={10}>
      <Box
        role={"group"}
        p={6}
        maxW={"330px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"lg"}
        pos={"relative"}
        zIndex={1}
      >
        <Box
          rounded={"lg"}
          pos={"relative"}
          height={"230px"}
          _after={{
            transition: "all .3s ease",
            content: '""',
            w: "full",
            h: "full",
            pos: "absolute",
            top: 5,
            left: 0,

            filter: "blur(15px)",
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: "blur(20px)",
            },
          }}
        >
          <Image
            rounded={"lg"}
            height={230}
            width={282}
            objectFit={"cover"}
            src={property.image}
          />
        </Box>
        <Stack pt={5} align={"center"}>
          <Text color={"gray.500"} fontSize={"sm"} textTransform={"uppercase"}>
            {property.first_name} {property.last_name}
          </Text>

          <Text fontSize={"xl"} fontFamily={"body"} fontWeight={500}>
            {property.gender}
          </Text>
          <Stack direction={"row"} align={"center"}>
            <Text fontWeight={500} fontSize={"xl"}>
              {property.email}
            </Text>
          </Stack>
          <Stack direction={"row"} align={"center"}>
            <Text fontWeight={500} fontSize={"xl"}>
              {property.country}
            </Text>
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
}
