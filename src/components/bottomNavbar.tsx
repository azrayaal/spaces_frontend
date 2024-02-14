import { Grid, GridItem, Text, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import ListItemBottom from "./atoms/listItemBottomBar";
import { RiAddCircleFill } from "react-icons/ri";
import { bottomNavData } from "../datas/data-dummy";

export default function ButtomNavbar() {
  return (
    <Box position={"fixed"} bottom={-1} display={{ base: "block", md: "none" }}>
      <Text
        fontSize={50}
        position={"fixed"}
        bottom={58}
        right={4}
        color={"teal"}
      >
        <Link to="/post">
          <RiAddCircleFill />
        </Link>
      </Text>
      <Box
        display={{ base: "block", md: "none" }}
        position={"fixed"}
        bottom={-1}
        w={"100%"}
        bgColor={"mainBg.500"}
        borderColor="gray.100"
        borderTop="1px"
      >
        <Box>
          <Grid h="50px" templateColumns="repeat(5, 1fr)">
            <GridItem colSpan={1} />
            {bottomNavData.map((data, index) => (
              <ListItemBottom key={index} logo={data.logo} />
            ))}
            <GridItem colSpan={1} />
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}
