import {
  Box,
  Card,
  Image,
  CardBody,
  Flex,
  Input,
  Center,
  Button,
  Grid,
  GridItem,
  Text,
} from "@chakra-ui/react";

import { RiImageAddFill } from "react-icons/ri";

export default function PostInput() {
  return (
    <>
      <Box m={4} display={{ base: "none", md: "block" }}>
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
            src="https://source.unsplash.com/8Tq9pP71_jQ"
            alt="this.src='/bx-space-bar.sv';"
          />
          <CardBody>
            <Flex color="gray.600">
              <Input
                color="gray.100"
                borderColor={"gray.100"}
                border={"2px"}
                placeholder="What's Happening?!"
                size="lg"
                marginX="auto"
                borderRadius="50px"
              />
              <Center>
                <Text mx={3} fontSize={"30px"}>
                  <RiImageAddFill color="teal" />
                </Text>
                <Button borderRadius="50px" size="md" colorScheme="teal">
                  post
                </Button>
              </Center>
            </Flex>
          </CardBody>
        </Card>
      </Box>
      {/* input responsive aka mobile version */}
      <Box m={4} display={{ base: "block", md: "none" }}>
        <Card
          direction={{ base: "column", sm: "row" }}
          overflow="hidden"
          variant="outline"
          bg="mainBg.200"
          borderColor="main.Bg.200"
          border="1px"
        >
          <CardBody>
            <Grid h="100%" templateColumns="repeat(10, 1fr) " gap={6}>
              <GridItem colSpan={2}>
                <Center>
                  <Image
                    borderRadius="100%"
                    objectFit="cover"
                    h={14}
                    w={14}
                    minH={{ base: "56px", sm: "56px" }}
                    minW={{ base: "56px", sm: "56px" }}
                    src="https://source.unsplash.com/8Tq9pP71_jQ"
                    alt="this.src='/bx-space-bar.sv';"
                  />
                </Center>
              </GridItem>
              <GridItem colSpan={8}>
                <Center>
                  <Input
                    color="gray.100"
                    borderColor={"gray.100"}
                    border={"2px"}
                    placeholder="What's Happening?!"
                    size="lg"
                    marginX="auto"
                    borderRadius="50px"
                  />
                </Center>
              </GridItem>
            </Grid>
          </CardBody>
        </Card>
      </Box>
    </>
  );
}
