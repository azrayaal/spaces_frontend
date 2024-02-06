import { ListItem, Flex, Link, Center, Text } from "@chakra-ui/react";

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
        <Link href={link} isExternal style={{ textDecoration: "none" }}>
          <Center>
            {logo}
            <Text bg="mainBg.900" pl={2}>
              {name}
            </Text>
          </Center>
        </Link>
      </Flex>
    </ListItem>
  );
}
