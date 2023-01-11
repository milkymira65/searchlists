import Card from "./Card";
import { data } from "./MockDaTa";
import { Box, Flex, Wrap } from "@chakra-ui/react";

function StlyCard() {
  return data.map((property) => {
    return (
      <Card
        image={property.image}
        first_name={property.first_name}
        last_name={property.last_name}
        gender={property.gender}
        email={property.email}
        country={property.country}
      />
    );
  });
}

export default StlyCard;
