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
import { useEffect, useRef } from "react";
import { checkLogin, useOnSubmitPost } from "../hooks";
import { useSelector } from "react-redux";
import { RootState } from "../datas/data-types";

export default function PostInput() {
  // const textareaRef = useRef<HTMLTextAreaElement>(null);

  const { isLogin } = checkLogin();

  const imageUrl = import.meta.env.VITE_CLOUDINARY_LINK_IMG;

  const dataUserLogin = useSelector((state: RootState) => state.userDetail);

  const { handleDataPost, postContent, imagePreview } = useOnSubmitPost();

  useEffect(() => {
    // const textarea = textareaRef.current;
    // if (textarea) {
    //   textarea.addEventListener("input", function () {
    //     this.style.height = "auto";
    //     this.style.height = this.scrollHeight + "px";
    //   });
    // }
  }, []);

  return (
    <>
      {isLogin && (
        <>
          <Box my={4} display={{ base: "none", md: "block" }}>
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
                src={`${imageUrl}${dataUserLogin.userDetail.profile_picture}.jpg`}
                className="avatar"
                alt="this.src='/bx-space-bar.sv';"
              />
              <form
                encType="multipart/form-data"
                onSubmit={(e) => postContent(e)}
                style={{ width: "100%" }}
              >
                <CardBody>
                  <Flex color="gray.600" gap={4}>
                    {/* input text */}
                    <input
                      // ref={textareaRef}
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
                      // rows={1}
                      placeholder="What's Happening?!"
                      name="content"
                      onChange={(e) => handleDataPost(e)}
                    ></input>
                  </Flex>
                  {/* input IMG */}
                  <label htmlFor="image">
                    {imagePreview && (
                      <Image
                        width={200}
                        height={200}
                        src={imagePreview}
                        className="img-upload"
                        alt="upload"
                      />
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
                          onChange={handleDataPost}
                          display={"none"}
                        />
                      </Box>
                      <Spacer />
                      <Box className="post button">
                        <Button
                          borderRadius="50px"
                          size="sm"
                          colorScheme="teal"
                          type="submit"
                        >
                          post
                        </Button>
                      </Box>
                    </Flex>
                  </Box>
                </CardBody>
              </form>
            </Card>
          </Box>
        </>
      )}
    </>
  );
}
