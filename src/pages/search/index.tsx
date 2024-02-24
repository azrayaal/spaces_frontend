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
import { APIPOST } from "../../libs/api";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSearchParams } from "react-router-dom";
// import { IoSearch } from "react-icons/io5";

export default function Search() {
  // const [content, setContent] = useState();
  const [content, setSearchContent] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  // const [active, setActive] = useSearchParams(false);
  const [activeContent, setActiveContent] = useState<Boolean>(false);
  const [activeUser, setActiveUser] = useState<Boolean>(false);

  const contentSpaceButton = () => {
    setSearchParams("content");
    setActiveUser(false);
    setActiveContent(true);
  };

  const userSearchButton = () => {
    setSearchParams("user");
    setActiveContent(false);
    setActiveUser(true);
  };

  console.log(searchParams);
  // console.log("content", content);
  const fetchSearchContent = async () => {
    try {
      const data = content;
      const response = await axios.post(
        `http://localhost:3000/api/v1/search-space?content=${data}`
      );
      console.log(response);
      // const response = await APIPOST.post(
      //   `search-space?content=${searchContent}`
      // );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchSearchContent();
  }, []);

  return (
    <>
      {/* <div>Tutorial: {searchParams.get("tutorial")}</div>

      <input
        type="text"
        // value={searchParams}
        onChange={(e) => setSearchParams(e.target.value)}
      /> */}

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
          <Flex>
            {/* <form
              action=""
              encType="multipart/form-data"
              onSubmit={fetchSearchContent}
              style={{ width: "100%" }}
            > */}
            <textarea
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
              placeholder="Search..."
              value={content}
              onChange={(event) => setSearchContent(event.target.value)}
            ></textarea>
            <Spacer px={2} />
            {/* <Button> */}
            <Button onClick={fetchSearchContent}>
              {/* <IoSearch /> */}
              Search
            </Button>
            {/* </form> */}
          </Flex>
        </Card>
        {/* end of search section */}
        {/* search input section user */}
        {/* <Card p={5} bg={"mainBg.200"}>
          <Flex>
            <textarea
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
              placeholder="Search..."
              // value={postContent}
              // onChange={(event) => setPostContent(event.target.value)}
            ></textarea>
            <Spacer px={2} />
            <Button>
              Search
            </Button>
          </Flex>
        </Card> */}
        {/* end of search section user */}
      </Box>
    </>
  );
}
