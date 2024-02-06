import { Grid, GridItem, Center, Text, Link, Box } from "@chakra-ui/react";

import { IoHomeSharp } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import ListItemBottom from "./atoms/listItemBottomBar";

const bottomNavData = [
  {
    logo: <IoHomeSharp />,
  },
  {
    logo: <FaSearch />,
  },
  {
    logo: <IoIosNotifications />,
  },
];

export default function ButtomNavbar() {
  return (
    <Box
      display={{ base: "block", md: "none" }}
      position={"fixed"}
      bottom={-1}
      w={"100%"}
      bgColor={"mainBg.500"}
      borderColor="mainBg.500"
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
  );
}
