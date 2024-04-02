import { ListItem, Flex, Center, Text } from "@chakra-ui/react";
import { Link, NavLink } from "react-router-dom";

export interface ListItemSideBarProps {
  link: string;
  logo: any;
  name: string;
}

export default function ListItemSIdeBar(props: ListItemSideBarProps) {
  const { link, logo, name } = props;

  return (
    <ListItem py={2} style={{ listStyleType: "none" }}>
      <Flex>
        <Link to={link}>
          {/* <NavLink to={link}> */}
          <Center>
            {logo}
            <Text bg="mainBg.900" pl={2}>
              {name}
            </Text>
          </Center>
        </Link>
        {/* </NavLink> */}
      </Flex>
    </ListItem>
  );
}
