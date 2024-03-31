import {
  Box,
  Card,
  Image,
  CardBody,
  Text,
  Flex,
  GridItem,
  Grid,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function UserCard(props) {
  const {
    profile_picture,
    id,
    full_name,
    username,
    profile_description,
    my,
    fontSize,
    postFollow,
  } = props;
  const imageUrl = import.meta.env.VITE_CLOUDINARY_LINK_IMG;
  const [followed, setFollowed] = useState<boolean>(false);

  const onFollowed = () => {
    setFollowed(!followed);
  };

  return (
    <>
      <Box my={my} display={{ base: "none", md: "block" }}>
        <Card
          direction={{ base: "column", sm: "row" }}
          overflow="hidden"
          variant="outline"
          bg="mainBg.200"
          borderColor="mainBg.200"
          color="grey.200"
          border="none"
          boxShadow="none"
        >
          <Grid templateColumns="repeat(6, 1fr)" mx={3} w={"full"}>
            <GridItem colSpan={1}>
              <Flex justify="center" align="center" h="full">
                {" "}
                <Image
                  borderRadius="100%"
                  objectFit="cover"
                  alt="not found"
                  minW={{ base: "56px", sm: "56px" }}
                  maxW={{ base: "56px", sm: "56px" }}
                  minH={{ base: "56px", sm: "56px" }}
                  maxH={{ base: "56px", sm: "56px" }}
                  src={`${imageUrl}${profile_picture}.jpg`}
                />
              </Flex>
            </GridItem>
            <GridItem colSpan={4}>
              <CardBody>
                <Link
                  to={`/profile/${id}`}
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  <Box>
                    {/* <Heading size="md">{full_name}</Heading> */}
                    <Text fontSize={fontSize}>{full_name}</Text>
                    <Text fontSize={fontSize} color="gray.400">
                      @{username}
                    </Text>
                    <Text>{profile_description}</Text>
                  </Box>
                </Link>
              </CardBody>
            </GridItem>
            <GridItem colSpan={1}>
              <Flex justify="center" align="center" h="full">
                {" "}
                <Button
                  borderRadius="50px"
                  size="sm"
                  colorScheme={!followed ? "teal" : "red"}
                  onClick={() => postFollow(id)}
                  // onClick={onFollowed}
                  style={{
                    border: "none",
                    outline: "none",
                    borderColor: "transparent",
                  }}
                >
                  {!followed ? "Follow" : "Unfollow"}
                </Button>
              </Flex>
            </GridItem>
          </Grid>
        </Card>
      </Box>
    </>
  );
}
