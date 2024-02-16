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
} from "@chakra-ui/react";
import { ContentSpaceProps } from "../datas/data-types";
import { GrSettingsOption } from "react-icons/gr";
import { IoShareSocialSharp } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ContentSpace(props: ContentSpaceProps) {
  const { avatar, profileName, userName, content, image_content, id } = props;
  const [openOpt, setOpenOpt] = useState<Boolean>(false);

  const openOption = () => {
    setOpenOpt(true);
  };
  const closeOption = () => {
    setOpenOpt(false);
  };

  return (
    <>
      <Box m={4} display={{ base: "none", md: "block" }}>
        <Card
          direction={{ base: "column", sm: "row" }}
          overflow="hidden"
          variant="outline"
          bg="mainBg.200"
          borderColor="mainBg.200"
          color="grey.200"
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
                  <a href={`http://localhost:3000/api/v1/${id}`}>
                    <Flex>
                      <Center gap={1}>
                        <Text color={"red.500"}>
                          <MdDelete />
                        </Text>
                        <Text color={"red.500"}>Delete</Text>
                      </Center>
                    </Flex>
                  </a>
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
            // src={`https://res.cloudinary.com/ddpo1vjim/image/upload/v1707986444/${avatar}`}
            src={`/`}
          />
          <Stack>
            <CardBody w={480}>
              <Link to={`/spaces/${id}`}>
                <Box>
                  <Flex>
                    <Center>
                      <Heading size="md">{profileName}</Heading>
                      <Text pt="1" color="gray.400" px={2}>
                        @{userName}
                      </Text>
                      <Text pt="1" color="gray.400">
                        •12h
                      </Text>
                    </Center>
                  </Flex>
                </Box>
                <Text py="2">{content}</Text>

                <Image src={image_content} borderRadius={10}></Image>
                {/* <Flex pt="2">
                <Text
                  fontSize="16"
                  onClick={switchLike}
                  color={liked ? "red.500" : "inherit"}
                >
                  <Flex>
                    <Center>
                      <FaHeart />
                      100
                    </Center>
                  </Flex>
                </Text>
                <Text
                  pl="3"
                  fontSize="16"
                  onClick={switchComment}
                  color={commented ? "blue.500" : "inherit"}
                >
                  <Flex>
                    <Center>
                      <IoChatboxSharp />1
                    </Center>
                  </Flex>
                </Text>
              </Flex> */}
              </Link>
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
                src={avatar}
                alt="this.src='/bx-space-bar.sv';"
              />
            </GridItem>
            <GridItem colSpan={8} pl={6}>
              <Box>
                <Flex>
                  <Heading size="md">{profileName}</Heading>
                  <Text pt="1" pl={5} color="gray.400">
                    @{userName}
                  </Text>
                </Flex>
                <Image src={image_content} borderRadius={10} />
              </Box>

              <Text py="2">{content}</Text>
              {/* <Flex pt="2">
                <Text
                  fontSize="16"
                  onClick={switchLike}
                  color={liked ? "red.500" : "inherit"}
                >
                  <FaHeart />
                </Text>
                <Link>
                  <Text
                    pl="3"
                    fontSize="16"
                    onClick={switchComment}
                    color={commented ? "blue.500" : "inherit"}
                  >
                    <IoChatboxSharp />
                  </Text>
                </Link>
              </Flex> */}
            </GridItem>
          </Grid>
        </Card>
      </Box>
    </>
  );
}
