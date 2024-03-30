import {
  Box,
  Card,
  CardBody,
  Center,
  Flex,
  Heading,
  Stack,
  Image,
  Text,
} from "@chakra-ui/react";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
export default function CardContetDetail(props) {
  const { profile_picture, full_name, username, content, image } = props;
  const imgCLoud = import.meta.env.VITE_CLOUDINARY_LINK_IMG;
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/");
  };

  return (
    <>
      <Heading size="md">
        <Flex>
          <Center>
            <Box mr={5} color={"teal"}>
              <FaRegArrowAltCircleLeft size="25" onClick={handleBack} />
            </Box>
            Post
          </Center>
        </Flex>
      </Heading>
      <Box pt={4}>
        <Card
          direction={{ base: "column", sm: "row" }}
          overflow="hidden"
          variant="outline"
          bg="mainBg.200"
          borderColor="mainBg.200"
          color="grey.200"
        >
          <Image
            borderRadius="100%"
            objectFit="cover"
            h={14}
            w={14}
            marginLeft={4}
            marginTop={6}
            minW={{ base: "56px", sm: "56px" }}
            maxW={{ base: "56px", sm: "56px" }}
            minH={{ base: "56px", sm: "56px" }}
            maxH={{ base: "56px", sm: "56px" }}
            src={`${imgCLoud}${profile_picture}.jpg`}
            alt="this.src='/bx-space-bar.sv';"
          />
          <Stack>
            <CardBody w={480}>
              <Box>
                <Flex>
                  <Center>
                    <Heading size="md">{full_name}</Heading>
                    <Text pt="1" color="gray.400" px={2}>
                      @{username}
                    </Text>
                    <Text pt="1" color="gray.400">
                      •12h
                    </Text>
                  </Center>
                </Flex>
              </Box>
              <Text py="2">{content}</Text>

              {image && (
                <Image
                  src={`${imgCLoud}${image}.jpg`}
                  borderRadius={10}
                ></Image>
              )}
            </CardBody>
          </Stack>
        </Card>
      </Box>
    </>
  );
}
