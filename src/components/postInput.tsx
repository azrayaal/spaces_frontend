import {
  Box,
  Card,
  Image,
  CardBody,
  Flex,
  Input,
  Center,
  Button,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { RiImageAddFill } from "react-icons/ri";
import { useEffect, useRef, useState } from "react";
import { APIPOST } from "../libs/api";
import { Cloudinary } from "cloudinary-core";

export default function PostInput(dataUserLogin: any) {
  const [isLogin, setIsLogIn] = useState<Boolean>(false);
  const [postImage, setPostImage] = useState<any>();
  const [postContent, setPostContent] = useState<string>("");
  const [imagePreview, setImagePreview] = useState<any>(null);
  const [imageUrl, setImageUrl] = useState<string>("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  console.log("dari input", dataUserLogin);

  const checkLogin = () => {
    if (dataUserLogin.email) {
      setIsLogIn(true);
    }
  };

  const onSubmit = async () => {
    try {
      const data = {
        content: postContent,
        image: postImage,
        userId: dataUserLogin.id,
      };
      await APIPOST.post("spaces", data);
      console.log("data post", data);
    } catch (error) {
      console.log(error);
    }
    location.reload();
  };

  useEffect(() => {
    checkLogin();

    const textarea = textareaRef.current;
    if (textarea) {
      textarea.addEventListener("input", function () {
        this.style.height = "auto";
        this.style.height = this.scrollHeight + "px";
      });
    }

    if (dataUserLogin.profile_picture) {
      const cl = new Cloudinary({ cloud_name: "ddpo1vjim" });
      const url = cl.url(dataUserLogin.profile_picture);
      setImageUrl(url);
    }
  }, [dataUserLogin.profile_picture]);
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
                src={`${imageUrl}.jpg`}
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
