import {
  Card,
  Box,
  Heading,
  Image,
  Center,
  Button,
  Flex,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function MyProfile() {
  const navigate = useNavigate();
  const editProfile = () => {
    navigate("/edit-profile");
  };
  return (
    // <Box pb={4}>
    <Box bg="mainBg.200" borderRadius="lg">
      <Image
        mt={4}
        zIndex={1}
        borderColor="gray.200"
        objectFit="cover"
        borderTopRadius={"md"}
        h={200}
        w="100%"
        src="https://source.unsplash.com/EvZZ_68sQwM"
        alt="Caffe Latte"
      />
      <Box m={4} color="gray.100">
        <Box my={3} mb={6} position="relative">
          <Center>
            <Image
              position="absolute"
              zIndex={2}
              border="4px"
              borderColor="mainBg.200"
              borderRadius="100%"
              objectFit="cover"
              h={28}
              w={28}
              left={2}
              maxW={{ base: "100%", sm: "200px" }}
              // src={`${profilePict}.jpg`}
              src={`https://source.unsplash.com/EvZZ_68sQwM`}
              alt="Caffe Latte"
            />
          </Center>
          <Box pt={0}>
            <Button
              colorScheme="teal"
              size="md"
              borderRadius="md"
              float={"right"}
              onClick={editProfile}
            >
              Edit Profile
            </Button>
          </Box>
        </Box>
        <Heading size="md" mt={62}>
          full name
        </Heading>
        <Text fontSize="md" color={"gray.400"}>
          username
        </Text>
        <Text fontSize="md" py={2}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
          obcaecati voluptatum sed aliquid reiciendis alias cum aliquam
          necessitatibus, soluta officiis!
        </Text>
        <Text fontSize="md" color={"gray.400"}>
          Joined may 2020
        </Text>
        <Box py={3}>
          <Flex>
            <Box>
              <Flex>
                <Text fontSize="sm" py={2} as="b">
                  291
                </Text>
                <Text fontSize="sm" py={2} pl={1} color={"gray.400"}>
                  Following
                </Text>
              </Flex>
            </Box>
            <Box>
              <Flex pl={4}>
                <Text fontSize="sm" py={2} as="b">
                  100
                </Text>
                <Text fontSize="sm" py={2} pl={1} color={"gray.400"}>
                  Followers
                </Text>
              </Flex>
            </Box>
          </Flex>
        </Box>
      </Box>
    </Box>
    // </Box>
  );
}
