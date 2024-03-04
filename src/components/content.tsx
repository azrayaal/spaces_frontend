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
  Input,
} from "@chakra-ui/react";
import { DataContentTypes, RootState } from "../datas/data-types";
import { GrSettingsOption } from "react-icons/gr";
import { IoChatboxSharp, IoShareSocialSharp } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { useState } from "react";
import { checkLogin, useLike } from "../hooks";
import { useSelector } from "react-redux";

export default function ContentSpace(props: DataContentTypes) {
  const {
    id,
    image,
    content,
    Total_Replies,
    Total_Likes,
    created_at,
    user: { full_name, username, profile_picture, email },
  } = props;
  const [openOpt, setOpenOpt] = useState<Boolean>(false);
  const [liked, setLiked] = useState<Boolean>(false);
  const [commented, setcommented] = useState<Boolean>(false);
  const imageUrl = import.meta.env.VITE_CLOUDINARY_LINK_IMG;

  // const { id } = useParams();
  // const spacesId = id
  const { postLike } = useLike(id);
  // const { isLogin } = checkLogin();
  // // let loginEmail = ''
  // // if (isLogin) {
  // const loginEmail = useSelector(
  //   (state: RootState) => state.userDetail.userDetail.email
  // );
  // // }

  // const openOption = () => {
  //   if (loginEmail === email) {
  //     setOpenOpt(true);
  //   }
  // };
  const openOption = () => {
    // if (loginEmail === email) {
    setOpenOpt(true);
    // }
  };

  const switchComment = () => {
    setcommented(true);
  };
  const switchLike = () => {
    setLiked(true);
  };

  const closeOption = () => {
    setOpenOpt(false);
  };

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

            {openOpt ? (
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
                  <Link to={`http://localhost:3000/api/v1/${id}`}>
                    <Flex>
                      <Center gap={1}>
                        <Text color={"red.500"}>
                          <MdDelete />
                        </Text>
                        <Text color={"red.500"}>Delete</Text>
                      </Center>
                    </Flex>
                  </Link>
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
            ) : (
              <></>
            )}
          </>
          {/* end of button option */}
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
          <Stack>
            <CardBody w={480}>
              <Link
                to={`/spaces/${id}`}
                style={{ color: "inherit", textDecoration: "none" }}
              >
                <Box w={"550px"}>
                  <Flex justifyContent="space-between">
                    <Heading size="md">{full_name}</Heading>
                    <Text color="gray.400" px={2}>
                      @{username}
                    </Text>
                    <Spacer />
                    <Text color="gray.400">• {created_at}</Text>
                  </Flex>
                </Box>
                <Box py="2">{content}</Box>

                {image && (
                  <Image src={`${imageUrl}${image}.jpg`} borderRadius={10} />
                )}
              </Link>

              <form
                action=""
                onSubmit={postLike}
                // onSubmit={(e) => postContent(e)}
              >
                <Flex pt="2">
                  <button type="submit">
                    <Input
                      type="text"
                      display={"none"}
                      id="likes"
                      name="likes"
                      onChange={switchLike}
                    />
                    <Text
                      as="label"
                      htmlFor="likes"
                      fontSize="16"
                      color={liked ? "red.500" : "inherit"}
                    >
                      <Flex>
                        <Center>
                          <FaHeart />{" "}
                          <span style={{ marginLeft: "5px" }}>
                            {Total_Likes}
                          </span>
                        </Center>
                      </Flex>
                    </Text>
                  </button>
                  <Text
                    pl="3"
                    fontSize="16"
                    onClick={switchComment}
                    color={commented ? "blue.500" : "inherit"}
                  >
                    <Flex>
                      <Center>
                        <IoChatboxSharp />{" "}
                        <span style={{ marginLeft: "5px" }}>
                          {Total_Replies}
                        </span>
                      </Center>
                    </Flex>
                  </Text>
                </Flex>
              </form>
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
                {/* <Image
                  src={`https://res.cloudinary.com/ddpo1vjim/image/upload/v1709088253/SpaceS/hcjqoaztmmi2ykok6wpi.png`}
                  borderRadius={10}
                /> */}
                {/* <Image src={`${imageUrl}${image}.jpg`} borderRadius={10} /> */}
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
