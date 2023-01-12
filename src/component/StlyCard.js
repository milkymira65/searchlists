import Card from "./Card";
import { data } from "./MockDaTa";

function StlyCard(props) {
  console.log(props.query);

  const searchedData = data.filter(
    (data) =>
      data.first_name.toLowerCase().includes(props.query.toLowerCase()) ||
      data.last_name.toLowerCase().includes(props.query.toLowerCase()) ||
      data.gender.toLowerCase().includes(props.query.toLowerCase()) ||
      data.email.toLowerCase().includes(props.query.toLowerCase()) ||
      data.country.toLowerCase().includes(props.query.toLowerCase())
  );
  console.log(searchedData);

  return searchedData.map((property) => {
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
