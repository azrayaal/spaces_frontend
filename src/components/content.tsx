import {
  Box,
  Card,
  CardBody,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  Grid,
  Center,
  GridItem,
  Spacer,
  Button,
} from "@chakra-ui/react";
import { DataContentTypes, DetailUserTypes } from "../datas/data-types";
import { GrSettingsOption } from "react-icons/gr";
import {
  IoChatboxSharp,
  IoShareSocialSharp,
  IoChatboxOutline,
} from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useEffect, useState } from "react";
import { checkLogin, useDelete, postLike, timeAgo } from "../hooks";
import Cookies from "js-cookie";
import { API } from "../libs/api";
import { jwtDecode } from "jwt-decode";

export default function ContentSpace(props: DataContentTypes) {
  const {
    id,
    image,
    content,
    Total_Replies,
    // Total_Likes,
    created_at,
    // spacesId,
    userId,
    user: {
      full_name,
      username,
      profile_picture,
      // email,
      // userId,
    },
  } = props;
  const [openOpt, setOpenOpt] = useState<Boolean>(false);
  const [liked, setLiked] = useState<Boolean>(false);
  const [commented, setcommented] = useState<Boolean>(false);
  const imageUrl = import.meta.env.VITE_CLOUDINARY_LINK_IMG;
  const [totalLikes, setTotalLikes] = useState(0);
  const [likedData, setLikedData] = useState([]);
  // const [totalReplies, setTotalReplies] = useState(0);
  const [repliedData, setRepliedData] = useState([]);
  const { isLogin } = checkLogin();
  const token = Cookies.get("token");
  const jwtToken = token ? atob(token) : null;

  let idProfile;

  if (isLogin) {
    const payload: DetailUserTypes = jwtDecode(jwtToken);
    idProfile = payload.user.id;
  }
  const getAllLikes = async (id) => {
    try {
      const response = await API.get(`likes/${id}`);
      setTotalLikes(response.data.total_likes);
      setLikedData(response.data.likes);
      // console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const getReplies = async (id) => {
    try {
      const response = await API.get(`replies/${id}`);
      // setTotalReplies(response.data.total_Replies);
      setRepliedData(response.data.reply);
    } catch (error) {
      console.log(error);
    }
  };

  const openOption = () => {
    setOpenOpt(true);
  };

  const switchComment = () => {
    setcommented(true);
  };

  const closeOption = () => {
    setOpenOpt(false);
  };

  const { deleteContent } = useDelete();

  useEffect(() => {
    // NOT BEST PRACTICE NEED SOME UPGRADE
    const isLikedByCurrentUser = likedData.some(
      (item) => item.user.id === idProfile
    );

    const isRepliedByCurrentUser = repliedData.some(
      (item) => item.user.id === idProfile
    );

    if (isLikedByCurrentUser) {
      setLiked(true);
    } else {
      setLiked(false);
    }

    if (isRepliedByCurrentUser) {
      setcommented(true);
    } else {
      setcommented(false);
    }

    getAllLikes(id);
    getReplies(id);
  }, [likedData, idProfile]);

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
          // borderRadius={0}
        >
          {/* button option */}
          <>
            <Box position={"absolute"} right={2} top={2} onClick={openOption}>
              <Text color={"gray.600"}>
                <GrSettingsOption />
              </Text>
            </Box>

            {openOpt && (
              <>
                <Box
                  position={"absolute"}
                  right={1}
                  top={1}
                  onClick={closeOption}
                  bgColor={"mainBg.300"}
                  p={2}
                  zIndex={2}
                  borderRadius={20}
                >
                  <Text color={"gray.200"}>
                    <GrSettingsOption />
                  </Text>
                </Box>

                <Card
                  border={1}
                  borderColor={"mainBg.300"}
                  position={"absolute"}
                  right={4}
                  top={6}
                  background={"mainBg.300"}
                  p={2}
                  gap={2}
                >
                  {idProfile === userId && (
                    <Flex>
                      <Center gap={1}>
                        <Text color={"red.500"}>
                          <MdDelete />
                        </Text>
                        <Button
                          className="custom-button-delete"
                          onClick={() => deleteContent(id)}
                          variant={"link"}
                          border={"none"}
                          outline={"none"}
                          _hover={{ textDecoration: "none" }}
                        >
                          <Text color={"red.500"} cursor={"pointer"}>
                            Delete
                          </Text>
                        </Button>
                      </Center>
                    </Flex>
                  )}
                  <Link to="">
                    <Flex>
                      <Center gap={1}>
                        <Text color={"gray.200"}>
                          <IoShareSocialSharp />
                        </Text>
                        <Text color={"gray.200"}> Share</Text>
                      </Center>
                    </Flex>
                  </Link>
                </Card>
              </>
            )}
          </>
          {/* end of button option */}
          <Link
            to={`/profile/${userId}`}
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <Image
              borderRadius="100%"
              objectFit="cover"
              h={14}
              w={14}
              alt="not found"
              marginLeft={4}
              marginTop={4}
              minW={{ base: "56px", sm: "56px" }}
              maxW={{ base: "56px", sm: "56px" }}
              minH={{ base: "56px", sm: "56px" }}
              maxH={{ base: "56px", sm: "56px" }}
              // src={`${imageUrl}${profile_picture}.jpg`}
              src={`${imageUrl}${profile_picture}.jpg`}
            />
          </Link>
          <Stack>
            <CardBody w={480}>
              <Link
                to={`/profile/${userId}`}
                style={{ color: "inherit", textDecoration: "none" }}
              >
                <Box w={"550px"}>
                  <Flex justifyContent="space-between">
                    <Heading size="md">{full_name}</Heading>
                    <Text color="gray.400" px={2}>
                      @{username}
                    </Text>
                    <Spacer />
                    <Text color="gray.400">• {timeAgo(created_at)}</Text>
                  </Flex>
                </Box>
              </Link>
              <Link
                to={`/spaces/${id}`}
                style={{ color: "inherit", textDecoration: "none" }}
              >
                <Box py="2">{content}</Box>

                {image && (
                  <Image src={`${imageUrl}${image}.jpg`} borderRadius={10} />
                )}
              </Link>
              <Flex pt="2">
                <Text
                  as="label"
                  htmlFor="likes"
                  fontSize="16"
                  color={liked ? "red.500" : "inherit"}
                >
                  <Flex>
                    <Center>
                      <button
                        onClick={() => postLike(id)}
                        style={{
                          border: "none",
                          outline: "none",
                          borderColor: "transparent",
                        }}
                      >
                        {liked ? <FaHeart /> : <FaRegHeart />}
                      </button>
                      <span style={{ marginLeft: "5px" }}>{totalLikes}</span>
                    </Center>
                  </Flex>
                </Text>

                <Text
                  pl="3"
                  // fontSize="16"
                  fontSize={commented ? "16" : "17"}
                  onClick={switchComment}
                  color={commented ? "blue.500" : "inherit"}
                >
                  <Flex>
                    <Link
                      to={`/spaces/${id}`}
                      style={{ color: "inherit", textDecoration: "none" }}
                    >
                      <Center>
                        <button
                          style={{
                            border: "none",
                            outline: "none",
                            borderColor: "transparent",
                          }}
                        >
                          {commented ? (
                            <IoChatboxSharp />
                          ) : (
                            <IoChatboxOutline />
                          )}
                        </button>
                        <span style={{ marginLeft: "5px" }}>
                          {Total_Replies}
                        </span>
                      </Center>
                    </Link>
                  </Flex>
                </Text>
              </Flex>
            </CardBody>
          </Stack>
        </Card>
      </Box>

      {/* responsive content */}
      <Box m={4} display={{ base: "block", md: "none" }}>
        <Card
          direction={{ base: "column", sm: "row" }}
          overflow="hidden"
          variant="outline"
          bg="mainBg.200"
          borderColor="mainBg.200"
          color="grey.200"
        >
          <Grid h="100%" templateColumns="repeat(10, 1fr)" my={2} mr={6}>
            <GridItem colSpan={2}>
              <Image
                borderRadius="100%"
                objectFit="cover"
                h={14}
                w={14}
                marginLeft={4}
                marginTop={4}
                minW={{ base: "56px", sm: "56px" }}
                maxW={{ base: "56px", sm: "56px" }}
                minH={{ base: "56px", sm: "56px" }}
                maxH={{ base: "56px", sm: "56px" }}
                src={profile_picture}
                alt="this.src='/bx-space-bar.sv';"
              />
            </GridItem>
            <GridItem colSpan={8} pl={6}>
              <Box>
                <Flex>
                  <Heading size="md">{full_name}</Heading>
                  <Text pt="1" pl={5} color="gray.400">
                    @{username}
                  </Text>
                </Flex>
              </Box>
              <Box py="2">{content}</Box>
            </GridItem>
          </Grid>
        </Card>
        <Image
          src={`https://res.cloudinary.com/ddpo1vjim/image/upload/v1709081319/SpaceS/420493985_10168814166540727_1543298811460332584_n-1709081317356.png.jpg`}
          borderRadius={10}
        />
      </Box>
    </>
  );
}
