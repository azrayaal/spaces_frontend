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
} from "@chakra-ui/react";
import { FaBeer, FaSearch, FaHeart } from "react-icons/fa";
import { GiPlagueDoctorProfile } from "react-icons/gi";
import ListItemSIdeBar from "../../../components/atoms/listItemSIdeBar";
import PostInput from "../../../components/postInput";

const dataSidebar = [
  {
    link: "/",
    logo: <FaBeer />,
    name: "Home",
  },
  {
    link: "/search",
    logo: <FaSearch />,
    name: "Search",
  },
  {
    link: "/follows",
    logo: <FaHeart />,
    name: "Follows",
  },
  {
    link: "/profile",
    logo: <GiPlagueDoctorProfile />,
    name: "Profile",
  },
];

export default function SideNavbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box m={4}>
        <Heading>SpaceS</Heading>
        <UnorderedList my={6} py={2}>
          {dataSidebar.map((data, index) => (
            <ListItemSIdeBar
              key={index}
              link={data.link}
              logo={data.logo}
              name={data.name}
            />
          ))}
        </UnorderedList>
      </Box>
      <Center>
        <Button w={"100%"} mx={4} onClick={onOpen}>
          Create Post
        </Button>
      </Center>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bg={"mainBg.200"} minW="650px">
          <PostInput />
        </ModalContent>
      </Modal>
    </>
  );
}
