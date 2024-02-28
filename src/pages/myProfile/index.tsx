import {
  Card,
  Box,
  Heading,
  Image,
  Center,
  Button,
  Flex,
  Text,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { RootState, UserFromPayloadRedux } from "../../datas/data-types";
import { useSelector } from "react-redux";
import { useImgUrl } from "../../hooks";

export default function MyProfile() {
  const [activeContent, setActiveContent] = useState<Boolean>(false);
  const [activeFollowing, setActiveFollowing] = useState<Boolean>(false);
  const [activeFollower, setActiveFollower] = useState<Boolean>(false);

  const { imageUrl } = useImgUrl();
  const { id } = useParams();
  const navigate = useNavigate();

  const editProfile = () => {
    navigate("/edit-profile");
  };

  const handleActiveContent = () => {
    setActiveFollowing(false);
    setActiveFollower(false);
    setActiveContent(true);
  };
  const handleActiveFollowing = () => {
    setActiveFollower(false);
    setActiveContent(false);
    setActiveFollowing(true);
  };
  const handleActiveFollower = () => {
    setActiveFollowing(false);
    setActiveContent(false);
    setActiveFollower(true);
  };

  const userDetail = useSelector(
    (state: RootState) => state.userDetail.userDetail
  );

  useEffect(() => {}, [id]);
  return (
    // <Box pb={4}>
    <>
      <Box bg="mainBg.200" borderRadius="lg">
        <Image
          mt={4}
          zIndex={1}
          borderColor="gray.200"
          objectFit="cover"
          borderTopRadius={"md"}
          h={200}
          w="100%"
          src={`${imageUrl}${userDetail.header}.jpg`}
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
                src={`${imageUrl}${userDetail.profile_picture}.jpg`}
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
            {userDetail.full_name}
          </Heading>
          <Text fontSize="md" color={"gray.400"}>
            @{userDetail.username}
          </Text>
          <Text fontSize="md" py={2}>
            {userDetail.profile_description}
          </Text>
          <Text fontSize="md" color={"gray.400"} pb={3}>
            Joined {userDetail.created_at}
          </Text>
        </Box>
      </Box>

      <Card bg="mainBg.200" borderRadius="lg" color={"gray.100"}>
        <Grid
          h="100%"
          templateColumns="repeat(6, 1fr)"
          position={"relative"}
          mb={{ base: "50px", md: "0px" }}
        >
          <GridItem colSpan={{ base: 0, md: 2 }}>
            <Button
              onClick={handleActiveContent}
              bgColor={activeContent ? "teal" : "mainBg.200"}
              w={"100%"}
              borderLeftRadius={"lg"}
              borderRightRadius={"none"}
              color={"gray.100"}
              _hover={{ bg: "teal" }}
              _focus={{ outline: "none" }}
              border="none"
              outline={"none"}
            >
              <Center>
                <Text
                  fontSize="sm"
                  py={2}
                  as="b"
                  color={activeContent ? "inherit" : "gray.400"}
                >
                  Space
                </Text>
              </Center>
            </Button>
          </GridItem>
          <GridItem colSpan={{ base: 0, md: 2 }}>
            <Button
              onClick={handleActiveFollowing}
              bgColor={activeFollowing ? "teal" : "mainBg.200"}
              w={"100%"}
              borderRadius={"none"}
              color={"gray.100"}
              _hover={{ bg: "teal" }}
              _focus={{ outline: "none" }}
              border="none"
              outline={"none"}
            >
              <Center>
                <Box>
                  <Flex>
                    <Text fontSize="sm" py={2} as="b">
                      {userDetail.followingTotal}
                    </Text>
                    <Text
                      fontSize="sm"
                      py={2}
                      pl={1}
                      color={activeFollowing ? "inherit" : "gray.400"}
                    >
                      Following
                    </Text>
                  </Flex>
                </Box>
              </Center>
            </Button>
          </GridItem>
          <GridItem colSpan={{ base: 0, md: 2 }}>
            <Button
              onClick={handleActiveFollower}
              bgColor={activeFollower ? "teal" : "mainBg.200"}
              w={"100%"}
              borderLeftRadius={"none"}
              borderRightRadius={"lg"}
              color={"gray.100"}
              _hover={{ bg: "teal" }}
              _active={{ bg: "teal" }}
              _focus={{ outline: "none" }}
              border="none"
              outline={"none"}
            >
              <Center>
                <Box>
                  <Flex pl={4}>
                    <Text fontSize="sm" py={2} as="b">
                      {userDetail.followerTotal}
                    </Text>
                    <Text
                      fontSize="sm"
                      py={2}
                      pl={1}
                      color={activeFollower ? "inherit" : "gray.400"}
                    >
                      Followers
                    </Text>
                  </Flex>
                </Box>
              </Center>
            </Button>
          </GridItem>
        </Grid>
      </Card>
    </>
    // </Box>
  );
}
