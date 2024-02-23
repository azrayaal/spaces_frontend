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
// import { IoSearch } from "react-icons/io5";

export default function Search() {
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
                bg="mainBg.200"
                // outlineColor={"mainBg.200"}
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
                  {/* <Box> */}
                  <Text fontSize="sm" py={2} as="b">
                    Space
                  </Text>
                  {/* </Box> */}
                </Center>
              </Button>
            </GridItem>
            <GridItem colSpan={{ base: 0, md: 3 }}>
              <Button
                bg="mainBg.200"
                // outlineColor={"mainBg.200"}
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
                      <Text fontSize="sm" py={2} pl={1} color={"gray.400"}>
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
              {/* <IoSearch /> */}
              Search
            </Button>
          </Flex>
        </Card>
        {/* end of search section */}
      </Box>
    </>
  );
}
