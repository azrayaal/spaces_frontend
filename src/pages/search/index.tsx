import {
  Input,
  Card,
  Box,
  Button,
  Flex,
  Spacer,
  Grid,
  GridItem,
  Center,
  Text,
} from "@chakra-ui/react";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { API } from "../../libs/api";
import ContentSpace from "../../components/content";
import { DataContentTypes, DetailUserTypes } from "../../datas/data-types";
import UserCard from "./userCard";
import { useFollow } from "../../hooks";

export default function Search() {
  const [content, setContent] = useState("");
  // const [searchParams, setSearchParams] = useSearchParams();
  const [searchParams, setSearchParams] = useState("content");
  const [showContent, setShowContent] = useState(false);
  const [showUser, setShowUser] = useState(false);
  const [activeContent, setActiveContent] = useState<Boolean>(true);
  const [activeUser, setActiveUser] = useState<Boolean>(false);
  const [dataContent, setDataContent] = useState(null);
  const [dataUser, setDataUser] = useState(null);
  const [url, setUrl] = useState("space");

  const contentSpaceButton = () => {
    // setSearchParams({ content: `${content}` });
    setSearchParams("content");
    setUrl("space");
    setActiveUser(false);
    setActiveContent(true);
    setShowUser(false);
  };

  const userSearchButton = () => {
    // setSearchParams({ user: `${content}` });
    setSearchParams("username");
    setUrl("user");
    setActiveContent(false);
    setActiveUser(true);
    setShowContent(false);
  };

  const fetchSearchContent = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await API.get(
        `search-${url}?${searchParams}=${content}`
      );
      if (response.data.contentSearch) {
        setDataContent(response.data.contentSearch);
        console.log("response.content", dataContent);
        setShowContent(true);
      } else if (response.data.userSearch) {
        setDataUser(response.data.userSearch);
        console.log("response.user", dataUser);
        setShowUser(true);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const { postFollow } = useFollow();

  return (
    <>
      <Box py={4}>
        <Card bg="mainBg.200" borderRadius="lg" color={"gray.100"} mb={4}>
          <Grid
            h="100%"
            templateColumns="repeat(6, 1fr)"
            position={"relative"}
            mb={{ base: "50px", md: "0px" }}
          >
            <GridItem colSpan={{ base: 0, md: 3 }}>
              <Button
                onClick={contentSpaceButton}
                // bgColor={"teal"}
                bgColor={activeContent ? "teal" : "mainBg.200"}
                w={"100%"}
                borderLeftRadius={"lg"}
                borderRightRadius={"none"}
                color={"gray.100"}
                _hover={{ bg: "teal" }}
                _active={{ bg: "teal" }}
                _focus={{ outline: "none" }}
                border="none"
                outline={"none"}
              >
                <Center>
                  <Text
                    fontSize="sm"
                    py={2}
                    as="b"
                    color={activeContent ? "inherit" : "gray.400"}
                  >
                    Space
                  </Text>
                </Center>
              </Button>
            </GridItem>
            <GridItem colSpan={{ base: 0, md: 3 }}>
              <Button
                onClick={userSearchButton}
                bg={activeUser ? "teal" : "mainBg.200"}
                borderRightRadius={"lg"}
                borderLeftRadius={"none"}
                w={"100%"}
                color={"gray.100"}
                _hover={{ bg: "teal" }}
                _active={{ bg: "teal" }}
                _focus={{ outline: "none" }}
                border="none"
                outline={"none"}
              >
                <Center>
                  <Box>
                    <Flex>
                      <Text
                        fontSize="sm"
                        py={2}
                        pl={1}
                        color={activeUser ? "inherit" : "gray.400"}
                      >
                        User
                      </Text>
                    </Flex>
                  </Box>
                </Center>
              </Button>
            </GridItem>
          </Grid>
        </Card>
        {/* search input section */}
        <Card p={5} bg={"mainBg.200"}>
          <form
            action=""
            onSubmit={(e) => fetchSearchContent(e)}
            encType="multipart/form-data"
          >
            <Flex>
              <input
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
                name="content"
                placeholder="Search..."
                // onChange={(e) => handleDataSearch(e)}
                onChange={(e) => setContent(e.target.value)}
              ></input>
              <Spacer px={2} />
              <Button type="submit">Search</Button>
            </Flex>
          </form>
        </Card>
        {/* end of search section */}
        {showContent &&
          dataContent.map((data: DataContentTypes) => (
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
              spacesId={data.id}
            />
          ))}

        {showUser &&
          dataUser.map((data: DetailUserTypes) => (
            <UserCard
              postFollow={postFollow}
              my={4}
              fontSize={"md"}
              id={data.id}
              key={data.id}
              username={data.username}
              profile_description={data.profile_description}
              profile_picture={data.profile_picture}
              full_name={data.full_name}
              created_at={data.created_at}
            />
          ))}

        {/* <>
          //     <Box py={4}>data not found</Box>
          //   </> */}
      </Box>
    </>
  );
}
