import {
  Box,
  Card,
  CardBody,
  Grid,
  Heading,
  Image,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";

// function truncateText(text, limit) {
//   const words = text.split(" ");
//   const truncated = words.slice(0, limit).join(" ");

//   if (words.length > limit) {
//     return truncated + " ....";
//   }

//   return truncated;
// }

export default function MainBody() {
  const [shoes, setShoe] = useState([
    {
      id: 1,

      image:
        "https://images.pexels.com/photos/2385477/pexels-photo-2385477.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Jordan 1 ",
      price: "100$",
    },
    {
      id: 1,

      image:
        "https://images.pexels.com/photos/2385477/pexels-photo-2385477.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Jordan 1 ",
      price: "100$",
    },
    {
      id: 1,

      image:
        "https://images.pexels.com/photos/2385477/pexels-photo-2385477.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Jordan 1 ",
      price: "100$",
    },
    {
      id: 1,

      image:
        "https://images.pexels.com/photos/2385477/pexels-photo-2385477.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Jordan 1 ",
      price: "100$",
    },
    {
      id: 1,

      image:
        "https://images.pexels.com/photos/2385477/pexels-photo-2385477.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Jordan 1 ",
      price: "100$",
    },
    {
      id: 1,

      image:
        "https://images.pexels.com/photos/2385477/pexels-photo-2385477.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Jordan 1 ",
      price: "100$",
    },

    // Add more blog posts as needed
  ]);

  return (
    <>
      <Box minH="100vh" m="2">
        <Box width="100%">
          <Grid
            p="4"
            marginLeft={{ base: "10px", md: "50px", lg: "100px" }}
            marginRight={{ base: "10px", md: "50px", lg: "100px" }}
            templateColumns={{
              base: "1fr",
              sm: "repeat(2, 1fr)",
              lg: "repeat(3, 1fr)",
              xl: "repeat(4, 1fr)",
            }}
            gap={12}
          >
            {shoes.map((Shoes) => (
              <Card key={Shoes.id} maxW="lg" p="0">
                <CardBody>
                  <Image
                    width="100%"
                    height="400px"
                    src={Shoes.image}
                    alt="Shoes image"
                    // borderRadius="lg"
                  />
                  <Stack mt="6" spacing="3">
                    <Link>
                      <Heading
                        size={{ base: "sm", md: "md", lg: "md" }}
                        fontSize={{ base: "xs", md: "3xl", lg: "4xl" }}
                      >
                        {/* {truncateText(Shoes.name, 12)} */}
                        {Shoes.name}
                      </Heading>
                    </Link>
                    <Link>
                      <Text
                        fontSize={{ base: "xs", md: "xl", lg: "xl" }}
                        size={{ base: "sm", md: "md", lg: "md" }}
                      >
                        {/* {truncateText(Shoes.content, 30)} */}
                        Price: {Shoes.price}
                      </Text>
                    </Link>
                  </Stack>
                </CardBody>
              </Card>
            ))}
          </Grid>
        </Box>
      </Box>
    </>
  );
}
