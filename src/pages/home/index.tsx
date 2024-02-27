import { Box, Flex } from "@chakra-ui/react";
import ProfileNSuggest from "./profileNsuggest";
import SideNavbar from "./sideNavbar";
import { Outlet } from "react-router-dom";

export default function Home() {
  return (
    <>
      <Box w={"1280px"}>
        <Flex>
          <Box
            w={"20%"}
            h={"100%"}
            position={"sticky"}
            top={0}
            display={{ base: "none", md: "block" }}
          >
            <SideNavbar />
          </Box>
          <Box w={"65%"} h={"100%"} bg={"mainBg.100"}>
            <Outlet />
          </Box>
          <Box
            w={"30%"}
            h={"100%"}
            position={"sticky"}
            top={0}
            display={{ base: "none", md: "block" }}
          >
            <ProfileNSuggest />
          </Box>
        </Flex>
      </Box>
    </>
  );
}
