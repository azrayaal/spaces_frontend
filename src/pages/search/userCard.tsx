import {
  Box,
  Card,
  Image,
  Stack,
  CardBody,
  Heading,
  Text,
  Spacer,
  Flex,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function UserCard(props) {
  const {
    profile_picture,
    id,
    full_name,
    username,
    created_at,
    profile_description,
  } = props;
  const imageUrl = import.meta.env.VITE_CLOUDINARY_LINK_IMG;
  return (
    <>
      <Box my={4} display={{ base: "none", md: "block" }}>
        <Card
          direction={{ base: "column", sm: "row" }}
          overflow="hidden"
          variant="outline"
          // bg="red.200"
          bg="mainBg.200"
          borderColor="mainBg.200"
          color="grey.200"
        >
          <Image
            borderRadius="100%"
            objectFit="cover"
            h={14}
            w={14}
            alt="not found"
            m={4}
            // marginLeft={4}
            // marginTop={4}
            minW={{ base: "56px", sm: "56px" }}
            maxW={{ base: "56px", sm: "56px" }}
            minH={{ base: "56px", sm: "56px" }}
            maxH={{ base: "56px", sm: "56px" }}
            // src={`${imageUrl}${profile_picture}.jpg`}
            src={`${imageUrl}${profile_picture}.jpg`}
          />
          <Stack>
            <CardBody w={480}>
              <Link
                to={`/spaces/${id}`}
                style={{ color: "inherit", textDecoration: "none" }}
              >
                <Box w={"550px"}>
                  {/* <Flex> */}
                  <Heading size="md">{full_name}</Heading>
                  <Text color="gray.400">@{username}</Text>
                  <Text>{profile_description}</Text>
                  {/* </Flex> */}
                  {/* <Spacer /> */}
                  {/* <Text color="gray.400">•Joined at {created_at}</Text> */}
                </Box>
                {/* <Box py="2">{content}</Box> */}
              </Link>
            </CardBody>
          </Stack>
        </Card>
      </Box>
    </>
  );
}
