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
import { FillFormProps } from "../datas/data-types";

export default function FillForm(props: FillFormProps) {
  const { description, placeholder, button } = props;
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
          <Text>{description}</Text>
        </Center>
        <Box py={4}>
          <Stack spacing={3}>
            <Input
              //   focusBorderColor="lime"
              borderRadius={10}
              placeholder={placeholder}
              w={300}
            />
            <Button>{button}</Button>
          </Stack>
        </Box>
      </Card>
    </>
  );
}
