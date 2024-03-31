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
import {
  DataContentTypes,
  FollowerTypes,
  FollowingTypes,
  RootState,
} from "../../datas/data-types";
import { useDispatch, useSelector } from "react-redux";
import ContentSpace from "../../components/content";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { fetchFollowing } from "../../features/following";
import UserCard from "../search/userCard";
import { fetchFollower } from "../../features/follower";
import { timeAgo, useFollow } from "../../hooks";
import fetchContent from "../../features/asyncThunk/fetchSuggest";

export default function MyProfile() {
  const [activeContent, setActiveContent] = useState<Boolean>(true);
  const [activeFollowing, setActiveFollowing] = useState<Boolean>(false);
  const [activeFollower, setActiveFollower] = useState<Boolean>(false);

  const imageUrl = import.meta.env.VITE_CLOUDINARY_LINK_IMG;

  const navigate = useNavigate();

  const editProfile = () => {
    navigate(`/edit-profile/${userDetail.id}`);
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
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const userDetail = useSelector(
    (state: RootState) => state.userDetail.userDetail
  );

  const allContent = useSelector((state: RootState) => state.content.data);
  // console.log("allContent", allContent);

  const allFollowing = useSelector(
    (state: RootState) => state.allFollowing.data
  );
  const allFollower = useSelector((state: RootState) => state.allFollower.data);

  const filteredContentByuserId = allContent.filter(
    (i) => i.user.id === userDetail.id
  );
  const { postFollow } = useFollow();
  // console.log(filteredContentByuserId);

  useEffect(() => {
    dispatch(fetchFollowing());
    dispatch(fetchFollower());
    // dispatch(fetchContent());
  }, []);

  return (
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
            Joined {timeAgo(userDetail.created_at)}
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

      {activeContent &&
        filteredContentByuserId.map((data: DataContentTypes) => (
          <ContentSpace
            key={data.id}
            id={data.id}
            content={data.content}
            image={data.image}
            Total_Likes={data.Total_Likes}
            Total_Replies={data.Total_Replies}
            created_at={data.created_at}
            userId={data.user.id}
            profile_picture={data.user.profile_picture}
            full_name={data.user.full_name}
            username={data.user.username}
            email={data.user.email}
            user={data.user}
            spacesId={data.spacesId}
          />
        ))}

      {activeFollowing &&
        allFollowing.map((data: FollowingTypes) => (
          <UserCard
            postFollow={postFollow}
            my={4}
            fontSize={"md"}
            id={data.follower.id}
            key={data.follower.id}
            username={data.follower.username}
            profile_description={data.follower.profile_description}
            profile_picture={data.follower.profile_picture}
            full_name={data.follower.full_name}
            created_at={data.follower.created_at}
          />
        ))}

      {activeFollower &&
        allFollower.map((data) => (
          <UserCard
            postFollow={postFollow}
            my={4}
            fontSize={"md"}
            id={data.following.id}
            key={data.following.id}
            username={data.following.username}
            profile_description={data.following.profile_description}
            profile_picture={data.following.profile_picture}
            full_name={data.following.full_name}
            created_at={data.following.created_at}
          />
        ))}
    </>
    // </Box>
  );
}
