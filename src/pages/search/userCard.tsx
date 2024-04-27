import {
  Box,
  Card,
  Image,
  CardBody,
  Text,
  Flex,
  GridItem,
  Grid,
  Button,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../datas/data-types";
import { ThunkDispatch } from "redux-thunk";

export default function UserCard(props) {
  const {
    status,
    profile_picture,
    id,
    full_name,
    username,
    profile_description,
    my,
    fontSize,
    postFollow,
  } = props;
  const imageUrl = import.meta.env.VITE_CLOUDINARY_LINK_IMG;
  // const [followed, setFollowed] = useState<boolean>(false);

  // const onFollowed = () => {
  //   setFollowed(!followed);
  // };

  // if (status === "Unfollow") {
  //   setFollowed(!followed);
  // }

  // const allFollowing = useSelector(
  //   (state: RootState) => state.allFollowing.data
  // );

  // const allUser = useSelector((state: RootState) => state.allUser.data);
  // console.log("allUser", allUser);

  // const filteredUsers = allUser.filter((user) => {
  //   return !allFollowing.some(
  //     (following) =>
  //       following.following.id === user.id || following.follower.id === user.id
  //   );
  // });

  // if (filteredUsers.length > 0) {
  //   setFollowed(true); // Assuming setFollowed(true) means at least one user is followed
  // } else {
  //   setFollowed(false); // Assuming setFollowed(false) means no users are followed
  // }

  // console.log("Filtered Users:", filteredUsers);

  // if(filtereduser){
  //   setFollowed(true)
  // }
  // const filteredFollowing = allUser.filter(allFollowing);
  // console.log("filteredFollowing", filteredFollowing);

  // const isAllFollowing = allFollowing.some((item) => item.follower.id);
  // console.log("isAllFollowing", isAllFollowing);

  // const isAllUser = allUser.some((item) => item.id);
  // console.log("isAllUser", isAllUser);

  // const isFollowingCurrentUser = allFollowing.some(
  //   (item) => item.follower.email === idProfile
  // );

  // if (isFollowingCurrentUser) {
  //   setFollowed(!followed);
  // } else {
  //   setFollowed(followed);
  // }
  // const dispatch = useDispatch<ThunkDispatch<any, any, any>>();

  useEffect(() => {
    // const isAllFollowing = allFollowing.some((item) => item.follower.id === );
    // console.log("isAllFollowing", isAllFollowing);
    // dispatch(fetchAllUser());
  }, []);

  return (
    <>
      <Box my={my} display={{ base: "none", md: "block" }}>
        <Card
          direction={{ base: "column", sm: "row" }}
          overflow="hidden"
          variant="outline"
          bg="mainBg.200"
          borderColor="mainBg.200"
          color="grey.200"
          border="none"
          boxShadow="none"
        >
          <Grid templateColumns="repeat(6, 1fr)" mx={3} w={"full"}>
            <GridItem colSpan={1}>
              <Flex justify="center" align="center" h="full">
                {" "}
                <Image
                  borderRadius="100%"
                  objectFit="cover"
                  alt="not found"
                  minW={{ base: "56px", sm: "56px" }}
                  maxW={{ base: "56px", sm: "56px" }}
                  minH={{ base: "56px", sm: "56px" }}
                  maxH={{ base: "56px", sm: "56px" }}
                  src={`${imageUrl}${profile_picture}.jpg`}
                />
              </Flex>
            </GridItem>
            <GridItem colSpan={4}>
              <CardBody>
                <Link
                  to={`/profile/${id}`}
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  <Box>
                    {/* <Heading size="md">{full_name}</Heading> */}
                    <Text fontSize={fontSize}>{full_name}</Text>
                    <Text fontSize={fontSize} color="gray.400">
                      @{username}
                    </Text>
                    <Text>{profile_description}</Text>
                  </Box>
                </Link>
              </CardBody>
            </GridItem>
            <GridItem colSpan={1}>
              <Flex justify="center" align="center" h="full">
                {" "}
                <Button
                  borderRadius="50px"
                  size="sm"
                  colorScheme={status === "Unfollow" ? "red" : "teal"}
                  onClick={() => postFollow(id)}
                  // onClick={onFollowed}
                  style={{
                    border: "none",
                    outline: "none",
                    borderColor: "transparent",
                  }}
                >
                  {status === "Unfollow" ? "Unfollow" : "Follow"}
                </Button>
              </Flex>
            </GridItem>
          </Grid>
        </Card>
      </Box>
    </>
  );
}
