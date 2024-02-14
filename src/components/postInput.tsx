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
  Spacer,
  GridItem,
  Text,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { RiImageAddFill } from "react-icons/ri";
import { useEffect, useRef, useState } from "react";
import { JWTPayloadsTypes } from "../datas/data-types";
import axios from "axios";
import API from "../libs/api";

export default function PostInput() {
  const [isLogin, setIsLogIn] = useState<Boolean>(false);
  const [postImage, setPostImage] = useState<any>();
  const [postContent, setPostContent] = useState<string>("");
  const [imagePreview, setImagePreview] = useState<any>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
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
      const headers = {
        Authorization: `Bearer ${jwtToken}`,
        "Content-type": "multipart/form-data",
      };

      // try {
      //   const data = {
      //     content: postContent,
      //     image: postImage,
      //     posted_at: Date.now(),
      //     userId: dataUser?.user.id,
      //   };
      //   await API.post("spaces", data);
      //   console.log("data post", data);
      // } catch (error) {
      //   console.log(error);
      // }

      const data = {
        content: postContent,
        image: postImage,
        posted_at: Date.now(),
        userId: dataUser?.user.id,
      };
      axios
        .post(`http://localhost:3000/api/v1/spaces`, data, {
          headers,
        })
        .then((response) => {
          console.log("register", response.data);
          console.log("register status", response.status);
        })
        .catch((error) => {
          console.error("Error post:", error);
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

      setDataUser(userFromPayload);
    }

    const textarea = textareaRef.current;
    if (textarea) {
      textarea.addEventListener("input", function () {
        this.style.height = "auto";
        this.style.height = this.scrollHeight + "px";
      });
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
                <Flex color="gray.600" gap={4}>
                  {/* input text */}
                  <textarea
                    ref={textareaRef}
                    id="myTextarea"
                    style={{
                      color: "#CBD5E0",
                      backgroundColor: "#262626",
                      padding: "0.1rem 0.1rem",
                      width: "100%",
                      fontSize: "1.1rem",
                      lineHeight: "1.5",
                      resize: "none",
                      outline: "none",
                    }}
                    rows={1}
                    placeholder="What's Happening?!"
                    value={postContent}
                    onChange={(event) => setPostContent(event.target.value)}
                  ></textarea>
                </Flex>
                {/* input IMG */}
                <label htmlFor="image">
                  {imagePreview ? (
                    <Image
                      width={200}
                      height={200}
                      src={imagePreview}
                      className="img-upload"
                      alt="upload"
                    />
                  ) : (
                    <></>
                  )}
                </label>
                <Box mt={2}>
                  <div
                    style={{
                      marginBottom: "10px",
                      borderBottom: "2px solid #319795",
                    }}
                  />
                  <Flex>
                    <Box className="input img">
                      <Box
                        as="label"
                        htmlFor="image"
                        cursor="pointer"
                        display="inline-block"
                        margin="auto"
                      >
                        <Center>
                          <Text color={"teal"} fontSize={20}>
                            <RiImageAddFill />
                          </Text>
                        </Center>
                      </Box>
                      <Input
                        type="file"
                        id="image"
                        accept="image/png, image/jpeg"
                        name="image"
                        formEncType="multipart/form-data"
                        onChange={(event) => {
                          const img = event.target.files![0];
                          setImagePreview(URL.createObjectURL(img));
                          return setPostImage(img);
                        }}
                        display={"none"}
                      />
                    </Box>
                    <Spacer />
                    <Box className="post button">
                      <Button
                        borderRadius="50px"
                        size="sm"
                        colorScheme="teal"
                        onClick={onSubmit}
                      >
                        post
                      </Button>
                    </Box>
                  </Flex>
                </Box>
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
