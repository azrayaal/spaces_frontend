import {
  Box,
  Card,
  Image,
  CardBody,
  Flex,
  Input,
  Center,
  Button,
} from "@chakra-ui/react";

export default function PostInput() {
  return (
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
              <Button ml={3} borderRadius="50px" size="md" colorScheme="teal">
                post
              </Button>
            </Center>
          </Flex>
        </CardBody>
      </Card>
    </Box>
  );
}
