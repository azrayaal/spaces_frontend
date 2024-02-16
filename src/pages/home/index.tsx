import { Grid, GridItem, Box } from "@chakra-ui/react";
import ProfileNSuggest from "./profileNsuggest";
import SideNavbar from "./sideNavbar";
import ButtomNavbar from "../../components/bottomNavbar";
import TopNavbar from "../../components/topNavbar";
import { Outlet } from "react-router-dom";

export default function Home(dataUserLogin: any) {
  return (
    <>
      <Box>
        <TopNavbar />

        <Grid
          h="100%"
          // pos={"fixed"}
          templateColumns="repeat(10, 1fr)"
          position={"relative"}
          mb={{ base: "50px", md: "0px" }}
        >
          {/* SIDE BAR */}
          <GridItem
            // w="100%"
            // bg="red.100"
            position={"relative"}
            display={{ base: "none", md: "block" }}
            colSpan={{ base: 0, md: 2 }}
          >
            <SideNavbar />
          </GridItem>

          {/* MAIN CONTENT */}
          <GridItem
            w="100%"
            h="100%"
            bg="mainBg.100"
            colSpan={{ base: 10, md: 5 }}
          >
            <Outlet />
          </GridItem>

          {/* PROFILE AND SUGGEST */}
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
      </Box>
    </>
  );
}
