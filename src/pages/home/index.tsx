import { Grid, GridItem, Box } from "@chakra-ui/react";
import MainContent from "./content";
import ProfileNSuggest from "./profileNsuggest";
import SideNavbar from "./sideNavbar";
import ButtomNavbar from "../../components/bottomNavbar";
import TopNavbar from "../../components/topNavbar";

export default function Home() {
  return (
    <>
      <Box>
        <TopNavbar />

        <Grid h="100%" templateColumns="repeat(10, 1fr)" position={"relative"}>
          <GridItem
            w="100%"
            bg="mainBg.100"
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
            <MainContent />
          </GridItem>
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
