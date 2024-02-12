import {
  Box,
  Heading,
  Button,
  UnorderedList,
  Center,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  Link,
  Card,
  Image,
  Text,
  Flex,
} from "@chakra-ui/react";

export default function SideProfileNotLogin() {
  return (
    <Box m={4}>
      <Card bg="mainBg.200" borderRadius="lg" h={200} w={380}>
        <Box m={"auto"} color="gray.100">
          <Center>
            <Flex>
              <Button w={250}>Login</Button>
            </Flex>
          </Center>
        </Box>
      </Card>
    </Box>
  );
}
