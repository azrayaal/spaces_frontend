import {
  Box,
  Card,
  Center,
  Heading,
  Image,
  Text,
  Flex,
  Button,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";

export default function ProfileNSuggest() {
  return (
    <>
      <Box m={4}>
        <Card bg="mainBg.200" borderRadius="lg">
          <Box m={4} color="gray.100">
            <Heading size="sm">My Profile</Heading>
            <Box my={2} mb={6} position="relative">
              <Image
                zIndex={1}
                borderColor="gray.200"
                objectFit="cover"
                borderRadius="md"
                h={14}
                w="100%"
                // maxW={{ base: "100%", sm: "200px" }}
                src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
                alt="Caffe Latte"
              />
              <Center>
                <Image
                  position="absolute"
                  zIndex={2}
                  border="2px"
                  borderColor="gray.200"
                  borderRadius="100%"
                  objectFit="cover"
                  h={14}
                  w={14}
                  left={2}
                  maxW={{ base: "100%", sm: "200px" }}
                  src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
                  alt="Caffe Latte"
                />
              </Center>
              <Box pt={4}>
                <Button
                  colorScheme="teal"
                  size="xs"
                  borderRadius="md"
                  float={"right"}
                >
                  Edit Profile
                </Button>
              </Box>
            </Box>
            <Heading size="sm" mt={2}>
              This is Name
            </Heading>
            <Text fontSize="xs">@username</Text>
            <Text fontSize="sm" py={2}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Obcaecati, corporis!
            </Text>
            <Box>
              <Flex>
                <Box>
                  <Flex>
                    <Text fontSize="sm" py={2} as="b">
                      291
                    </Text>
                    <Text fontSize="sm" py={2} pl={1}>
                      Following
                    </Text>
                  </Flex>
                </Box>
                <Box>
                  <Flex pl={4}>
                    <Text fontSize="sm" py={2} as="b">
                      100
                    </Text>
                    <Text fontSize="sm" py={2} pl={1}>
                      Followers
                    </Text>
                  </Flex>
                </Box>
              </Flex>
            </Box>
          </Box>
        </Card>
      </Box>
      {/* suggestion */}
      <Box m={4}>
        <Card color="gray.100" bg="mainBg.200">
          <Heading size="sm" mt={3} ml={3}>
            Suggested for you
          </Heading>
          {/* Suggest */}
          <Box mt={2} ml={1}>
            <Box>
              <Flex>
                <Image
                  ml={2}
                  my={2}
                  borderRadius="100%"
                  objectFit="cover"
                  h={10}
                  w={10}
                  maxW={{ base: "100%", sm: "200px" }}
                  src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
                  alt="Caffe Latte"
                />
                <Box>
                  <UnorderedList>
                    <ListItem style={{ listStyleType: "none" }}>
                      <Text fontSize="xs" as="b">
                        LE MINERALE
                      </Text>
                    </ListItem>
                    <ListItem style={{ listStyleType: "none" }}>
                      <Text fontSize="xs">@leminerale</Text>
                    </ListItem>
                  </UnorderedList>
                </Box>
                {/* <Center pl={2}>
                  <Text fontSize="xs" as="b">
                    LE MINERALE
                  </Text>
                  <Text fontSize="xs">@leminerale</Text>
                </Center> */}
                <Center>
                  <Box pl={3}>
                    <Button borderRadius="50px">Follow</Button>
                  </Box>
                </Center>
              </Flex>
            </Box>
            <Box>
              <Flex>
                <Image
                  ml={2}
                  my={2}
                  borderRadius="100%"
                  objectFit="cover"
                  h={10}
                  w={10}
                  maxW={{ base: "100%", sm: "200px" }}
                  src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
                  alt="Caffe Latte"
                />
                <Box>
                  <UnorderedList>
                    <ListItem style={{ listStyleType: "none" }}>
                      <Text fontSize="xs" as="b">
                        LE MINERALE
                      </Text>
                    </ListItem>
                    <ListItem style={{ listStyleType: "none" }}>
                      <Text fontSize="xs">@leminerale</Text>
                    </ListItem>
                  </UnorderedList>
                </Box>
                {/* <Center pl={2}>
                  <Text fontSize="xs" as="b">
                    LE MINERALE
                  </Text>
                  <Text fontSize="xs">@leminerale</Text>
                </Center> */}
                <Center>
                  <Box pl={3}>
                    <Button borderRadius="50px">Follow</Button>
                  </Box>
                </Center>
              </Flex>
            </Box>
            <Box>
              <Flex>
                <Image
                  ml={2}
                  my={2}
                  borderRadius="100%"
                  objectFit="cover"
                  h={10}
                  w={10}
                  maxW={{ base: "100%", sm: "200px" }}
                  src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
                  alt="Caffe Latte"
                />
                <Box>
                  <UnorderedList>
                    <ListItem style={{ listStyleType: "none" }}>
                      <Text fontSize="xs" as="b">
                        LE MINERALE
                      </Text>
                    </ListItem>
                    <ListItem style={{ listStyleType: "none" }}>
                      <Text fontSize="xs">@leminerale</Text>
                    </ListItem>
                  </UnorderedList>
                </Box>
                {/* <Center pl={2}>
                  <Text fontSize="xs" as="b">
                    LE MINERALE
                  </Text>
                  <Text fontSize="xs">@leminerale</Text>
                </Center> */}
                <Center>
                  <Box pl={3}>
                    <Button borderRadius="50px">Follow</Button>
                  </Box>
                </Center>
              </Flex>
            </Box>
            <Box>
              <Flex>
                <Image
                  ml={2}
                  my={2}
                  borderRadius="100%"
                  objectFit="cover"
                  h={10}
                  w={10}
                  maxW={{ base: "100%", sm: "200px" }}
                  src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
                  alt="Caffe Latte"
                />
                <Box>
                  <UnorderedList>
                    <ListItem style={{ listStyleType: "none" }}>
                      <Text fontSize="xs" as="b">
                        LE MINERALE
                      </Text>
                    </ListItem>
                    <ListItem style={{ listStyleType: "none" }}>
                      <Text fontSize="xs">@leminerale</Text>
                    </ListItem>
                  </UnorderedList>
                </Box>
                {/* <Center pl={2}>
                  <Text fontSize="xs" as="b">
                    LE MINERALE
                  </Text>
                  <Text fontSize="xs">@leminerale</Text>
                </Center> */}
                <Center>
                  <Box pl={3}>
                    <Button borderRadius="50px">Follow</Button>
                  </Box>
                </Center>
              </Flex>
            </Box>
          </Box>
        </Card>
      </Box>
    </>
  );
}
