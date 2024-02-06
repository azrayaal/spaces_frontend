import {
  Box,
  Card,
  CardBody,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  Link,
} from "@chakra-ui/react";
import { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { IoChatboxSharp } from "react-icons/io5";

export interface ContentSpaceProps {
  avatar: string;
  profileName: string;
  userName: string;
  content: string;
}

export default function ContentSpace(props: ContentSpaceProps) {
  const { avatar, profileName, userName, content } = props;

  const [liked, setLiked] = useState(false);
  const [commented, setCommented] = useState(false);

  const switchLike = () => {
    setLiked(!liked);
  };

  const switchComment = () => {
    setCommented(!commented);
  };

  return (
    <Box m={4}>
      <Card
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
        bg="mainBg.200"
        borderColor="mainBg.200"
        color="grey.200"
      >
        <Image
          borderRadius="100%"
          objectFit="cover"
          h={14}
          w={14}
          marginLeft={4}
          marginTop={4}
          minW={{ base: "56px", sm: "56px" }}
          maxW={{ base: "56px", sm: "56px" }}
          minH={{ base: "56px", sm: "56px" }}
          maxH={{ base: "56px", sm: "56px" }}
          src={avatar}
          alt="this.src='/bx-space-bar.sv';"
        />
        <Stack>
          <CardBody>
            <Box>
              <Heading size="md">{profileName}</Heading>
              <Text pt="1" color="gray.400">
                @{userName}
              </Text>
            </Box>
            <Text py="2">{content}</Text>
            <Flex pt="2">
              <Text
                fontSize="16"
                onClick={switchLike}
                color={liked ? "red.500" : "inherit"}
              >
                <FaHeart />
              </Text>
              <Link>
                <Text
                  pl="3"
                  fontSize="16"
                  onClick={switchComment}
                  color={commented ? "blue.500" : "inherit"}
                >
                  <IoChatboxSharp />
                </Text>
              </Link>
            </Flex>
          </CardBody>
        </Stack>
      </Card>
    </Box>
  );
}
