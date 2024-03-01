import { useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  Card,
  Image,
  Stack,
  CardBody,
  Spacer,
  Flex,
  Center,
  Button,
  Heading,
  Text,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContentDetail } from "../../features/contentDetailslice";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { RootState } from "../../datas/data-types";
import ContentSpace from "../../components/content";
import { fetchAllReplyContent } from "../../features/allReplyContentSlice";
import CardContetDetail from "./component/cardContetDetail";

export default function DetailContent() {
  const { id } = useParams();
  const dataId = parseInt(id);

  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();

  const dataDetail = useSelector(
    (state: RootState) => state.contentDetail.data
  );
  const userloginId = useSelector(
    (state: RootState) => state.userDetail.userDetail
  );
  const allReplyContent = useSelector(
    (state: RootState) => state.allReplyContent.data
  );
  const imgCLoud = import.meta.env.VITE_CLOUDINARY_LINK_IMG;
  console.log(allReplyContent);
  // console.log(dataDetail);

  useEffect(() => {
    dispatch(fetchContentDetail(dataId));
    dispatch(fetchAllReplyContent(dataId));
  }, [dataId]);

  return (
    <>
      <Box m={4} display={{ base: "none", md: "block" }}>
        <CardContetDetail
          id={dataDetail.id}
          key={dataDetail.id}
          content={dataDetail.content}
          image={dataDetail.image}
          profile_picture={dataDetail.user.profile_picture}
          full_name={dataDetail.user.full_name}
          username={dataDetail.user.username}
        />
      </Box>
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
            src={`${imgCLoud}${userloginId.profile_picture}.jpg`}
            alt="this.src='/bx-space-bar.sv';"
          />
          <CardBody>
            <form action="">
              <Flex color="gray.600" gap={4}>
                {/* input text */}
                <textarea
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
                  rows={1}
                  placeholder="Reply"
                  // value={postContent}
                  // onChange={(event) => setPostContent(event.target.value)}
                ></textarea>
              </Flex>
              {/* input IMG */}
              {/* <label htmlFor="image">
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
            </label> */}
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
                          {/* <RiImageAddFill /> */}
                        </Text>
                      </Center>
                    </Box>
                    {/* <Input
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
                  /> */}
                  </Box>
                  <Spacer />
                  <Box className="post button">
                    <Button
                      borderRadius="50px"
                      size="sm"
                      colorScheme="teal"
                      type="submit"
                      // onClick={onSubmit}
                    >
                      post
                    </Button>
                  </Box>
                </Flex>
              </Box>
            </form>
          </CardBody>
        </Card>
        <Box pt={4}>
          {allReplyContent.map((i) => (
            <CardContetDetail
              id={i.id}
              key={i.id}
              content={i.content}
              image={i.image}
              profile_picture={i.user.profile_picture}
              full_name={i.user.full_name}
              username={i.user.username}
            />
          ))}
        </Box>
      </Box>
    </>
  );
}
