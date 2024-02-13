import { Grid, GridItem, Box } from "@chakra-ui/react";
import ProfileNSuggest from "./profileNsuggest";
import SideNavbar from "./sideNavbar";
import ButtomNavbar from "../../components/bottomNavbar";
import TopNavbar from "../../components/topNavbar";
import { Outlet } from "react-router-dom";
import Cookies from "js-cookie";
import { useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import API from "../../libs/api";

export default function Home() {
  useEffect(() => {
    const token = Cookies.get("token");

    if (token) {
      const jwtToken = atob(token);
      const payload = jwtDecode(jwtToken);
      // console.log("data obj", payload);
    }
  }, []);

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
            w="100%"
            bg="mainBg.100"
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
            {/* <MainContent /> */}
          </GridItem>

          {/* PROFILE AND SUGGEST */}
          <GridItem
            colSpan={{ base: 0, md: 3 }}
            w="100%"
            bg="mainBg.100"
            display={{ base: "none", md: "block" }}
          >
            <ProfileNSuggest />
          </GridItem>
        </Grid>

        <ButtomNavbar />
      </Box>
    </>
  );
}
