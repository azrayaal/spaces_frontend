import {
  Card,
  Heading,
  Text,
  Box,
  Stack,
  Input,
  Button,
  Link,
  Center,
} from "@chakra-ui/react";
import { IoMdBackspace } from "react-icons/io";

export default function Register() {
  return (
    <>
      <Card
        color="grey.200"
        bg="mainBg.200"
        py={6}
        px={24}
        my={20}
        borderRadius={10}
      >
        <Text fontSize={30} mt={-4} ml={-20}>
          <Link href="/" style={{ textDecoration: "none" }}>
            <IoMdBackspace />
          </Link>
        </Text>
        <Center>
          <Heading>SpaceS</Heading>
        </Center>
        <Center>
          <Text>Create your account</Text>
        </Center>
        <Box py={4}>
          <Stack spacing={3}>
            <Input
              //   focusBorderColor="lime"
              borderRadius={10}
              placeholder="Email"
              w={300}
            />
            <Input
              //   focusBorderColor="grey.200"
              borderRadius={10}
              placeholder="Full Name"
              w={300}
            />
            <Input
              //   focusBorderColor="grey.200"
              borderRadius={10}
              placeholder="Username"
              w={300}
            />
            <Input
              //   focusBorderColor="grey.200"
              borderRadius={10}
              placeholder="Password"
              w={300}
            />
            <Button>Submit</Button>
          </Stack>
        </Box>
      </Card>
    </>
  );
}
