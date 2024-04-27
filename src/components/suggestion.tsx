import {
  Box,
  Button,
  Center,
  Grid,
  GridItem,
  Image,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { useFollow } from "../hooks";

export interface SuggestionProps {
  avatar: string;
  profileName: string;
  userName: string;
  id: number;
}
export default function Suggestions(props: SuggestionProps) {
  const { avatar, profileName, userName, id } = props;

  const [followed, setFollowed] = useState<boolean>(false);
  const imgCLoud = import.meta.env.VITE_CLOUDINARY_LINK_IMG;

  const { postFollow } = useFollow();

  // const onFollowed = () => {
  //   setFollowed(!followed);
  // };

  return (
    <Box ml={1}>
      <Grid templateColumns="repeat(5, 1fr)" py={2} mx={3}>
        <GridItem colSpan={1}>
          <Image
            my={2}
            borderRadius="100%"
            objectFit="cover"
            h={10}
            w={10}
            maxW={{ base: "100%", sm: "200px" }}
            src={`${imgCLoud}${avatar}.jpg`}
            alt="Caffe Latte"
          />
        </GridItem>
        <GridItem colSpan={3}>
          <Text fontSize="xs" as="b" textAlign={["left", "center"]}>
            {profileName}
          </Text>
          <Text fontSize="xs" color={"gray.400"}>
            @{userName}
          </Text>
        </GridItem>
        <GridItem colSpan={1}>
          <Center>
            <Button
              borderRadius="50px"
              size="sm"
              colorScheme={!followed ? "teal" : "red"}
              onClick={() => postFollow(id)}
              // onClick={onFollowed}
              style={{
                border: "none",
                outline: "none",
                borderColor: "transparent",
              }}
            >
              {!followed ? "Follow" : "Unfollow"}
            </Button>
          </Center>
        </GridItem>
      </Grid>
    </Box>
  );
}
