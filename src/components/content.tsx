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
// import { useState } from "react";
// import { FaHeart } from "react-icons/fa";
// import { IoChatboxSharp } from "react-icons/io5";
import { ContentSpaceProps } from "../datas/data-types";

export default function ContentSpace(props: ContentSpaceProps) {
  const { avatar, profileName, userName, content, image_content } = props;

  // const [liked, setLiked] = useState(false);
  // const [commented, setCommented] = useState(false);
  // const [image, setImage] = useState(false);

  // const switchLike = () => {
  //   setLiked(!liked);
  // };

  // const switchComment = () => {
  //   setCommented(!commented);
  // };

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
          <Stack>
            <CardBody>
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
