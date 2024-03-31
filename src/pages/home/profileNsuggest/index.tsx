import { Box, Card, Heading } from "@chakra-ui/react";
import Suggestions from "../../../components/suggestion";
import SideProfile from "../../../components/sideProfile";
import { useEffect, useState } from "react";
import SideProfileNotLogin from "../../../components/sideProfileNotLogin";
import { RootState, SuggestionTypesRedux } from "../../../datas/data-types";
import { checkLogin, useFollow } from "../../../hooks";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserDetail } from "../../../features/userDetailSlice";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { fetchSuggest } from "../../../features/suggestSlice";
import UserCard from "../../search/userCard";

export default function ProfileNSuggest() {
  const { postFollow } = useFollow();
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const dataUserLogin = useSelector(
    (state: RootState) => state.userDetail.userDetail
  );
  const suggestData = useSelector((state: RootState) => state.suggests.data);
  const { isLogin } = checkLogin();

  useEffect(() => {
    dispatch(fetchUserDetail());
    dispatch(fetchSuggest());
  }, []);

  return (
    <>
      {isLogin ? (
        <>
          <SideProfile
            id={dataUserLogin?.id}
            full_name={dataUserLogin?.full_name}
            username={dataUserLogin?.username}
            profile_description={dataUserLogin?.profile_description}
            profile_picture={dataUserLogin?.profile_picture}
            followingTotal={dataUserLogin?.followingTotal}
            followerTotal={dataUserLogin?.followerTotal}
            header={dataUserLogin?.header}
          />
          <Box m={4}>
            <Card color="gray.100" bg="mainBg.200">
              <Heading size="sm" my={3} ml={3}>
                Suggested for you
              </Heading>

              {Array.isArray(suggestData) && suggestData.length > 0 ? (
                suggestData.map((data: SuggestionTypesRedux) => (
                  <UserCard
                    postFollow={postFollow}
                    my={0}
                    fontSize={"xs"}
                    id={data.id}
                    key={data.id}
                    username={data.username}
                    profile_picture={data.profile_picture}
                    full_name={data.full_name}
                  />
                ))
              ) : (
                <Box p={4}>
                  <p>No suggestions available</p>
                </Box>
              )}
            </Card>
          </Box>
        </>
      ) : (
        <Box>
          <SideProfileNotLogin />
        </Box>
      )}
    </>
  );
}
