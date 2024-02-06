import {
  Box,
  Card,
  CardBody,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
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
  return (
    <Box m={4}>
      <Card
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
        bg="mainBg.200"
        borderColor="mainBg.200"
        border="px"
        color="grey.200"
      >
        <Image
          borderRadius="100%"
          objectFit="cover"
          h={14}
          w={14}
          marginLeft={4}
          marginTop={4}
          maxW={{ base: "100%", sm: "200px" }}
          src={avatar}
          alt="Caffe Latte"
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
              <Text fontSize="16">
                <FaHeart />
              </Text>
              <Text pl="3" fontSize="16">
                <IoChatboxSharp />
              </Text>
            </Flex>
          </CardBody>
        </Stack>
      </Card>
    </Box>
  );
}
