import {
  Box,
  Heading,
  Button,
  ListItem,
  UnorderedList,
  Text,
  Flex,
  Center,
} from "@chakra-ui/react";
import { FaBeer, FaSearch } from "react-icons/fa";
import { GiPlagueDoctorProfile } from "react-icons/gi";
// import { PiCarProfileFill } from "react-icons/pi";

export default function SideNavbar() {
  return (
    <>
      <Box m={4}>
        <Heading>SpaceS</Heading>
        <UnorderedList my={4}>
          <ListItem my={2} style={{ listStyleType: "none" }}>
            <Flex>
              <Center>
                <FaBeer />
                <Text bg="mainBg.900" pl={2}>
                  HOME
                </Text>
              </Center>
            </Flex>
          </ListItem>
          <ListItem my={2} style={{ listStyleType: "none" }}>
            <Flex>
              <Center>
                <FaSearch />
                <Text bg="mainBg.900" pl={2}>
                  SEARCH
                </Text>
              </Center>
            </Flex>
          </ListItem>
          <ListItem my={2} style={{ listStyleType: "none" }}>
            <Flex>
              <Center>
                <GiPlagueDoctorProfile />
                <Text bg="mainBg.900" pl={2}>
                  FOLLOWS
                </Text>
              </Center>
            </Flex>
          </ListItem>
          <ListItem my={2} style={{ listStyleType: "none" }}>
            <Flex>
              <Center>
                <GiPlagueDoctorProfile />
                <Text bg="mainBg.900" pl={2}>
                  PROFILE
                </Text>
              </Center>
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
