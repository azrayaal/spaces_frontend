import {
  Box,
  Card,
  Image,
  CardBody,
  Flex,
  Text,
  Spacer,
  Center,
  Button,
  Input,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { RootState } from "../../../datas/data-types";
import { RiImageAddFill } from "react-icons/ri";
import { useOnSubmitReply } from "../../../hooks";

export default function FormReply() {
  const imgCLoud = import.meta.env.VITE_CLOUDINARY_LINK_IMG;

  const userloginId = useSelector(
    (state: RootState) => state.userDetail.userDetail
  );

  const { postReply, handleReplyPost, imagePreview } = useOnSubmitReply();

  return (
    <>
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
          src={`${imgCLoud}${userloginId.profile_picture}.jpg`}
          alt="this.src='/bx-space-bar.sv';"
        />
        <CardBody>
          <form encType="multipart/form-data" onSubmit={(e) => postReply(e)}>
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
                placeholder="Reply"
                name="content"
                onChange={(e) => handleReplyPost(e)}
              ></input>
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
                    htmlFor="imageReply"
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
                    id="imageReply"
                    accept="image/png, image/jpeg"
                    name="image"
                    formEncType="multipart/form-data"
                    onChange={(e) => handleReplyPost(e)}
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
          </form>
        </CardBody>
      </Card>
    </>
  );
}
