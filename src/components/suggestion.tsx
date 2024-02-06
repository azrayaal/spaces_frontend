import {
  Box,
  Button,
  Center,
  Grid,
  GridItem,
  Image,
  Text,
} from "@chakra-ui/react";

export interface SuggestionProps {
  avatar: string;
  profileName: string;
  userName: string;
}

export default function Suggestions(props: SuggestionProps) {
  const { avatar, profileName, userName } = props;

  return (
    <Box mt={2} ml={1}>
      <Grid templateColumns="repeat(5, 1fr)" py={2} mx={3}>
        <GridItem colSpan={1}>
          <Image
            my={2}
            borderRadius="100%"
            objectFit="cover"
            h={10}
            w={10}
            maxW={{ base: "100%", sm: "200px" }}
            src={avatar}
            alt="Caffe Latte"
          />
        </GridItem>
        <GridItem colSpan={3}>
          <Text fontSize="xs" as="b" textAlign={["left", "center"]}>
            {profileName}
          </Text>
          <Text fontSize="xs">@{userName}</Text>
        </GridItem>
        <GridItem colSpan={1}>
          <Center>
            <Button borderRadius="50px">Follow</Button>
          </Center>
        </GridItem>
      </Grid>
    </Box>
  );
}
