import {
  Box,
  Card,
  Image,
  CardBody,
  Flex,
  Input,
  Center,
  Button,
  Grid,
  GridItem,
  Text,
} from "@chakra-ui/react";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { RiImageAddFill } from "react-icons/ri";
import { useEffect, useState } from "react";
import { JWTPayloadsTypes } from "../datas/data-types";
import axios from "axios";

export default function PostInput() {
  const [isLogin, setIsLogIn] = useState<Boolean>(false);
  const [postImage, setPostImage] = useState<string>("");
  const [postContent, setPostContent] = useState<string>("");

  const [dataUser, setDataUser] = useState<JWTPayloadsTypes | null>(null);

  const checkLogin = () => {
    const token = Cookies.get("token");
    if (token) {
      setIsLogIn(true);
    }
  };

  const onSubmit = async () => {
    const token = Cookies.get("token");
    if (token) {
      const jwtToken = atob(token);
      const payload: JWTPayloadsTypes = jwtDecode(jwtToken);
      const userFromPayload = payload;
      const headers = { Authorization: `Bearer ${jwtToken}` };
      // console.log("datatoken", userFromPayload.user.id);

      const data = {
        content: postContent,
        image: "https://source.unsplash.com/dZqgoqa1css",
        // image: "img",
        posted_at: Date.now(),
        userId: userFromPayload.user.id,
      };

      console.log("data post", data);

      axios
        .post(`http://localhost:3000/api/v1/spaces`, data, { headers })
        .then((response) => {
          console.log("register", response.data);
          console.log("register status", response.status);
        })
        .catch((error) => {
          console.error("Error registering:", error);
        });
      location.reload();
    }
  };

  useEffect(() => {
    checkLogin();
    const token = Cookies.get("token");

    if (token) {
      const jwtToken = atob(token);
      const payload: JWTPayloadsTypes = jwtDecode(jwtToken);
      const userFromPayload = payload;

      // console.log("data string", userFromPayload);
      setDataUser(userFromPayload);
    }
  }, []);
  return (
    <>
      {isLogin ? (
        <>
          <Box m={4} display={{ base: "none", md: "block" }}>
            <Card
              direction={{ base: "column", sm: "row" }}
              overflow="hidden"
              variant="outline"
              bg="mainBg.200"
              borderColor="mainBg.200"
            >
              <Image
                borderRadius="100%"
                objectFit="cover"
                h={14}
                w={14}
                marginLeft={4}
                marginTop={4}
                maxW={{ base: "100%", sm: "200px" }}
                src={`${dataUser?.user.profile_picture}`}
                alt="this.src='/bx-space-bar.sv';"
              />
              <CardBody>
                <Flex color="gray.600">
                  <Input
                    color="gray.100"
                    borderColor={"mainBg.200"}
                    border={"2px"}
                    placeholder="What's Happening?!"
                    size="lg"
                    marginX="auto"
                    borderRadius="50px"
                    value={postContent}
                    onChange={(event) => setPostContent(event.target.value)}
                  />
                  <Center>
                    <Text mx={3} fontSize={"30px"}>
                      <RiImageAddFill color="teal" />
                    </Text>
                    <Button
                      borderRadius="50px"
                      size="md"
                      colorScheme="teal"
                      onClick={onSubmit}
                    >
                      post
                    </Button>
                  </Center>
                </Flex>
              </CardBody>
            </Card>
          </Box>
          {/* input responsive aka mobile version */}
          <Box m={4} display={{ base: "block", md: "none" }}>
            <Card
              direction={{ base: "column", sm: "row" }}
              overflow="hidden"
              variant="outline"
              bg="mainBg.200"
              borderColor="main.Bg.200"
              border="1px"
            >
              <CardBody>
                <Grid h="100%" templateColumns="repeat(10, 1fr) " gap={6}>
                  <GridItem colSpan={2}>
                    <Center>
                      <Image
                        borderRadius="100%"
                        objectFit="cover"
                        h={14}
                        w={14}
                        minH={{ base: "56px", sm: "56px" }}
                        minW={{ base: "56px", sm: "56px" }}
                        src={`${dataUser?.user.profile_picture}`}
                        alt="this.src='/bx-space-bar.sv';"
                      />
                    </Center>
                  </GridItem>
                  <GridItem colSpan={8}>
                    <Center>
                      <Input
                        color="gray.100"
                        borderColor={"gray.100"}
                        border={"2px"}
                        placeholder="What's Happening?!"
                        size="lg"
                        marginX="auto"
                        borderRadius="50px"
                      />
                    </Center>
                  </GridItem>
                </Grid>
              </CardBody>
            </Card>
          </Box>
        </>
      ) : (
        <Box></Box>
      )}
    </>
  );
}
