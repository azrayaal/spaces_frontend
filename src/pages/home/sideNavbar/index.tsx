import {
  Box,
  Heading,
  Button,
  ListItem,
  UnorderedList,
  Text,
  Flex,
  Center,
  Link,
  // ExternalLinkIcon,
} from "@chakra-ui/react";
import { FaBeer, FaSearch, FaHeart } from "react-icons/fa";
import { GiPlagueDoctorProfile } from "react-icons/gi";

export default function SideNavbar() {
  return (
    <>
      <Box m={4}>
        <Heading>SpaceS</Heading>
        <UnorderedList my={4}>
          <ListItem my={2} style={{ listStyleType: "none" }}>
            <Flex>
              <Link href="https://chakra-ui.com" isExternal>
                <Center>
                  <FaBeer />
                  <Text bg="mainBg.900" pl={2}>
                    HOME
                  </Text>
                </Center>
              </Link>
            </Flex>
          </ListItem>
          <ListItem my={2} style={{ listStyleType: "none" }}>
            <Flex>
              <Link href="https://chakra-ui.com" isExternal>
                <Center>
                  <FaSearch />
                  <Text bg="mainBg.900" pl={2}>
                    SEARCH
                  </Text>
                </Center>
              </Link>
            </Flex>
          </ListItem>
          <ListItem my={2} style={{ listStyleType: "none" }}>
            <Flex>
              <Link href="https://chakra-ui.com" isExternal>
                <Center>
                  <FaHeart />
                  <Text bg="mainBg.900" pl={2}>
                    FOLLOWS
                  </Text>
                </Center>
              </Link>
            </Flex>
          </ListItem>
          <ListItem my={2} style={{ listStyleType: "none" }}>
            <Flex>
              <Link href="https://chakra-ui.com" isExternal>
                <Center>
                  <GiPlagueDoctorProfile />
                  <Text bg="mainBg.900" pl={2}>
                    PROFILE
                  </Text>
                </Center>
              </Link>
            </Flex>
          </ListItem>
        </UnorderedList>
      </Box>
      <Center>
        <Button w={"100%"} mx={4}>
          Create Post
        </Button>
      </Center>
    </>
  );
}
