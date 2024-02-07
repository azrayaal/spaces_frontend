import { Box, Grid, GridItem, Center, Heading, Image } from "@chakra-ui/react";

export default function TopNavbar() {
  return (
    <Box
      display={{ base: "block", md: "none" }}
      w={"100%"}
      // bgColor={{ base: "red.500", md: "green.500" }}
      borderColor={"gray.100"}
      borderBottom={"1px"}
      zIndex={5}
    >
      <Box>
        <Grid h="60px" templateColumns="repeat(3, 1fr)">
          <GridItem colSpan={1}>
            <Image
              borderRadius="100%"
              objectFit="cover"
              h={10}
              w={10}
              m={2}
              minW={{ base: "40px", sm: "40px" }}
              maxW={{ base: "40px", sm: "40px" }}
              minH={{ base: "40px", sm: "40px" }}
              maxH={{ base: "40px", sm: "40px" }}
              src="https://source.unsplash.com/8Tq9pP71_jQ"
              alt="this.src='/bx-space-bar.sv';"
            />
          </GridItem>
          <GridItem colSpan={1}>
            <Center>
              <Heading mt={2}>SpaceS</Heading>
            </Center>
          </GridItem>
          <GridItem colSpan={1} />
        </Grid>
      </Box>
    </Box>
  );
}
