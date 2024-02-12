import {
  Box,
  Button,
  Card,
  Center,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { JWTPayloadsTypes } from "../datas/data-types";
import { jwtDecode } from "jwt-decode";

export default function SideProfile() {
  const [dataUser, setDataUser] = useState<JWTPayloadsTypes | null>(null);

  const onLogout = () => {
    Cookies.remove("token");
    location.reload();
  };

  useEffect(() => {
    const token = Cookies.get("token");

    if (token) {
      const jwtToken = atob(token);
      const payload: JWTPayloadsTypes = jwtDecode(jwtToken);
      const userFromPayload = payload;

      // console.log(userFromPayload.obj);
      setDataUser(userFromPayload);
    }
  }, []);
  return (
    <Box m={4}>
      <Card bg="mainBg.200" borderRadius="lg">
        <Box m={4} color="gray.100">
          <Heading size="sm">My Profile</Heading>
          <Box my={3} mb={6} position="relative">
            <Image
              zIndex={1}
              borderColor="gray.200"
              objectFit="cover"
              borderRadius="md"
              h={20}
              w="100%"
              src="https://source.unsplash.com/EvZZ_68sQwM"
              alt="Caffe Latte"
            />
            <Center>
              <Image
                position="absolute"
                zIndex={2}
                border="2px"
                borderColor="gray.200"
                borderRadius="100%"
                objectFit="cover"
                h={14}
                w={14}
                left={2}
                maxW={{ base: "100%", sm: "200px" }}
                src={`${dataUser?.user.profile_picture}`}
                alt="Caffe Latte"
              />
            </Center>
            <Box pt={4}>
              <Button
                colorScheme="red"
                size="xs"
                borderRadius="md"
                float={"right"}
                ml={3}
                onClick={onLogout}
              >
                logout
              </Button>
              <Button
                colorScheme="teal"
                size="xs"
                borderRadius="md"
                float={"right"}
              >
                Edit Profile
              </Button>
            </Box>
          </Box>
          <Heading size="sm" mt={2}>
            {dataUser?.user.full_name}
          </Heading>
          <Text fontSize="xs" color={"gray.400"}>
            @{dataUser?.user.username}
          </Text>
          <Text fontSize="sm" py={2}>
            {dataUser?.user.profile_description}
          </Text>
          <Box>
            <Flex>
              <Box>
                <Flex>
                  <Text fontSize="sm" py={2} as="b">
                    291
                  </Text>
                  <Text fontSize="sm" py={2} pl={1}>
                    Following
                  </Text>
                </Flex>
              </Box>
              <Box>
                <Flex pl={4}>
                  <Text fontSize="sm" py={2} as="b">
                    100
                  </Text>
                  <Text fontSize="sm" py={2} pl={1}>
                    Followers
                  </Text>
                </Flex>
              </Box>
            </Flex>
          </Box>
        </Box>
      </Card>
    </Box>
  );
}
