//     <Center py={12}>
//     <Box
//       role={"group"}
//       p={6}
//       maxW={"330px"}
//       w={"full"}
//       bg={useColorModeValue("white", "gray.800")}
//       boxShadow={"2xl"}
//       rounded={"lg"}
//       pos={"relative"}
//       zIndex={1}
//     >
//       <Box
//         rounded={"lg"}
//         //   mt={-12}
//         pos={"relative"}
//         height={"230px"}
//         _after={{
//           transition: "all .3s ease",
//           content: '""',
//           w: "full",
//           h: "full",
//           pos: "absolute",
//           top: 5,
//           left: 0,
//           // backgroundImage: `url(${IMAGE})`,
//           filter: "blur(15px)",
//           zIndex: -1,
//         }}
//         _groupHover={{
//           _after: {
//             filter: "blur(20px)",
//           },
//         }}
//       >
//         <Image
//           rounded={"lg"}
//           height={230}
//           width={282}
//           objectFit={"cover"}
//           src={property.image}
//           alt={property.imageAlt}
//         />
//       </Box>
//       <Stack pt={10} align={"center"}>
//         <Text color={"gray.500"} fontSize={"sm"} textTransform={"uppercase"}>
//           Fristname
//         </Text>
//         <Text fontSize={"xl"} fontFamily={"body"} fontWeight={500}>
//           Gender
//         </Text>
//         <Stack direction={"row"} align={"center"}>
//           <Text fontWeight={500} fontSize={"xl"}>
//             E-mail
//           </Text>
//         </Stack>
//         <Stack direction={"row"} align={"center"}>
//           <Text fontWeight={500} fontSize={"xl"}>
//             country
//           </Text>
//         </Stack>
//       </Stack>
//     </Box>
//   </Center>
// );
// }
