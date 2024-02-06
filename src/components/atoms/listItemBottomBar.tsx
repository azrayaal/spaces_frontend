import { GridItem, Center, Text, Link } from "@chakra-ui/react";

export interface ListBottomBarProps {
  logo: any;
}

export default function ListItemBottom(props: ListBottomBarProps) {
  const { logo } = props;
  return (
    <GridItem colSpan={1}>
      <Center py={3}>
        <Text>
          <Link href=".com" isExternal style={{ textDecoration: "none" }}>
            {logo}
          </Link>
        </Text>
      </Center>
    </GridItem>
  );
}
