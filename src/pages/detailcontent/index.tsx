import axios from "axios";
import { useEffect, useState } from "react";
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
import { fetchContentDetail } from "../../features/contentDetail.slice";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { RootState } from "../../datas/data-types";
import ContentSpace from "../../components/content";

export default function DetailContent() {
  const { id } = useParams();
  const dataId = parseInt(id);
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();

  const dataDetail = useSelector((state: RootState) => state.contentDetail);
  const userloginId = useSelector(
    (state: RootState) => state.userDetail.userDetail
  );
  console.log(dataDetail);

  const imgCLoud = import.meta.env.VITE_CLOUDINARY_LINK_IMG;

  useEffect(() => {
    dispatch(fetchContentDetail(dataId));
  }, [dataId]);

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
            marginTop={6}
            minW={{ base: "56px", sm: "56px" }}
            maxW={{ base: "56px", sm: "56px" }}
            minH={{ base: "56px", sm: "56px" }}
            maxH={{ base: "56px", sm: "56px" }}
            src={`${imgCLoud}${dataDetail.user.profile_picture}.jpg`}
            alt="this.src='/bx-space-bar.sv';"
          />
          <Stack>
            <CardBody w={480}>
              <Box>
                <Flex>
                  <Center>
                    <Heading size="md">{dataDetail.user.full_name}</Heading>
                    <Text pt="1" color="gray.400" px={2}>
                      @{dataDetail.user.username}
                    </Text>
                    <Text pt="1" color="gray.400">
                      •12h
                    </Text>
                  </Center>
                </Flex>
              </Box>
              <Text py="2">{dataDetail.content}</Text>

              {dataDetail.image && (
                <Image
                  src={`${imgCLoud}${dataDetail.image}.jpg`}
                  borderRadius={10}
                ></Image>
              )}
            </CardBody>
          </Stack>
        </Card>
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
        {/* {DetailContent.map((data) => (
          <ContentSpace
            key={data.id}
            id={data.id}
            content={data.content}
            image={data.image}
            Total_Likes={data.Total_Likes}
            Total_Replies={data.Total_Replies}
            created_at={data.created_at}
            userId={data.user.id}
            profile_picture={data.user.profile_picture}
            full_name={data.user.full_name}
            username={data.user.username}
            email={data.user.email}
            user={data.user}
          />
        ))} */}
      </Box>
    </>
  );
}
