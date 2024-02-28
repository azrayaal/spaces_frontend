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
import { useNavigate } from "react-router-dom";
import { useImgUrl } from "../hooks";

export default function SideProfile(props: any) {
  const {
    full_name,
    username,
    profile_description,
    id,
    header,
    profile_picture,
    followingTotal,
    followerTotal,
  } = props;
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/my-profile`);
  };
  const { imageUrl } = useImgUrl();

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
              src={`${imageUrl}${header}.jpg`}
              alt="Caffe Latte"
            />
            <Center>
              <Image
                position="absolute"
                zIndex={2}
                border="2px"
                borderColor="mainBg.200"
                borderRadius="100%"
                objectFit="cover"
                h={14}
                w={14}
                left={2}
                maxW={{ base: "100%", sm: "200px" }}
                src={`${imageUrl}${profile_picture}.jpg`}
                alt="Caffe Latte"
              />
            </Center>
            <Box pt={4}>
              <Button
                colorScheme="teal"
                size="xs"
                borderRadius="md"
                float={"right"}
                onClick={handleClick}
              >
                My Profile
              </Button>
            </Box>
          </Box>
          <Heading size="sm" mt={2}>
            {full_name}
          </Heading>
          <Text fontSize="xs" color={"gray.400"}>
            @{username}
          </Text>
          <Text fontSize="sm" py={2}>
            {profile_description}
          </Text>
          <Box>
            <Flex>
              <Box>
                <Flex>
                  <Text fontSize="sm" py={2} as="b">
                    {followingTotal}
                  </Text>
                  <Text fontSize="sm" py={2} pl={1}>
                    Following
                  </Text>
                </Flex>
              </Box>
              <Box>
                <Flex pl={4}>
                  <Text fontSize="sm" py={2} as="b">
                    {followerTotal}
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
