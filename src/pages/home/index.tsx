import { Grid, GridItem, Box, Flex, Center } from "@chakra-ui/react";
import ProfileNSuggest from "./profileNsuggest";
import SideNavbar from "./sideNavbar";
import ButtomNavbar from "../../components/bottomNavbar";
import TopNavbar from "../../components/topNavbar";
import { Outlet } from "react-router-dom";

export default function Home(dataUserLogin: any) {
  return (
    <>
      {/* <Box>
        <TopNavbar />

        <Grid
          h="100%"
          // pos={"fixed"}
          templateColumns="repeat(10, 1fr)"
          position={"relative"}
          mb={{ base: "50px", md: "0px" }}
        >
          <GridItem
            // w="100%"
            // bg="red.100"
            position={"relative"}
            display={{ base: "none", md: "block" }}
            colSpan={{ base: 0, md: 2 }}
          >
            <SideNavbar />
          </GridItem>

          <GridItem
            w="100%"
            h="100%"
            bg="mainBg.100"
            colSpan={{ base: 10, md: 5 }}
          >
            <Outlet />
          </GridItem>

          <GridItem
            colSpan={{ base: 0, md: 3 }}
            w="100%"
            bg="mainBg.100"
            display={{ base: "none", md: "block" }}
          >
            <ProfileNSuggest {...dataUserLogin} />
          </GridItem>
        </Grid>

        <ButtomNavbar />
      </Box> */}

      <Box w={"1280px"}>
        <Flex>
          <Box w={"20%"} h={"610px"} position={"sticky"} top={0}>
            <SideNavbar />
          </Box>
          <Box w={"65%"} h={"100%"}>
            <Outlet />
          </Box>
          <Box w={"30%"} h={"610px"} position={"sticky"} top={0}>
            <ProfileNSuggest {...dataUserLogin} />
          </Box>
        </Flex>
      </Box>
    </>
  );
}
