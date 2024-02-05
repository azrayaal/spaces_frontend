import {
  Heading,
  Box,
  Image,
  Card,
  Text,
  CardBody,
  Flex,
  Input,
  Center,
  Button,
  Stack,
} from "@chakra-ui/react";

import { FaHeart } from "react-icons/fa";
import { IoChatboxSharp } from "react-icons/io5";

export default function MainContent() {
  return (
    <>
      <Box m={4}>
        <Card
          direction={{ base: "column", sm: "row" }}
          overflow="hidden"
          variant="outline"
          bg="mainBg.200"
          borderColor="main.Bg.200"
          border="1px"
        >
          <Image
            borderRadius="100%"
            objectFit="cover"
            h={14}
            w={14}
            marginLeft={4}
            marginTop={4}
            maxW={{ base: "100%", sm: "200px" }}
            src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
            alt="Caffe Latte"
          />
          <CardBody>
            <Flex color="white">
              <Input
                placeholder="What's Happening?!"
                size="lg"
                marginX="auto"
              />
              <Center>
                <Button colorScheme="green" ml={3} borderRadius="20%">
                  post
                </Button>
              </Center>
            </Flex>
          </CardBody>
        </Card>
      </Box>
      {/* content */}
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
            src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
            alt="Caffe Latte"
          />

          <Stack>
            <CardBody>
              <Box>
                <Heading size="md">This is Name</Heading>
                <Text pt="1" color="gray.400">
                  @username
                </Text>
              </Box>
              <Text py="2">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem
                iure excepturi voluptas commodi vero deleniti enim nisi nobis ut
                dignissimos.
              </Text>
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
            src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
            alt="Caffe Latte"
          />

          <Stack>
            <CardBody>
              <Box>
                <Heading size="md">This is Name</Heading>
                <Text pt="1" color="gray.400">
                  @username
                </Text>
              </Box>
              <Text py="2">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem
                iure excepturi voluptas commodi vero deleniti enim nisi nobis ut
                dignissimos.
              </Text>
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
    </>
  );
}
