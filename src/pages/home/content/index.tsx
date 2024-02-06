import {
  Box,
  Image,
  Card,
  CardBody,
  Flex,
  Input,
  Center,
  Button,
} from "@chakra-ui/react";

import ContentSpace from "../../../components/content";

const ContentDummy = [
  {
    avatar:
      "https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
    profileName: "Azra",
    userName: "azra",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit maiores atque tenetur.",
  },
  {
    avatar:
      "https://unsplash.com/photos/a-close-up-of-a-speedometer-on-a-vehicle-m9ti5LT5C2Q",
    profileName: "Azra",
    userName: "azra",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit maiores atque tenetur.",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
    profileName: "Azra",
    userName: "azra",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit maiores atque tenetur.",
  },
];

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
            alt="this.src='/bx-space-bar.sv';"
          />
          <CardBody>
            <Flex color="white">
              <Input
                borderColor={"mainBg.200"}
                border={"1px"}
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

      {ContentDummy.map((content, index) => (
        <ContentSpace
          key={index}
          avatar={content.avatar}
          profileName={content.profileName}
          userName={content.userName}
          content={content.content}
        />
      ))}
    </>
  );
}
