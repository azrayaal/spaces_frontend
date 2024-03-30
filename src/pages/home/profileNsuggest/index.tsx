import { Box, Card, Heading } from "@chakra-ui/react";
import Suggestions from "../../../components/suggestion";
import SideProfile from "../../../components/sideProfile";
import { useEffect, useState } from "react";
import SideProfileNotLogin from "../../../components/sideProfileNotLogin";
import { RootState, SuggestionTypesRedux } from "../../../datas/data-types";
import { checkLogin } from "../../../hooks";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserDetail } from "../../../features/userDetailSlice";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { fetchSuggest } from "../../../features/suggestSlice";

export default function ProfileNSuggest() {
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
              <Heading size="sm" mt={3} ml={3}>
                Suggested for you
              </Heading>

              {Array.isArray(suggestData) && suggestData.length > 0 ? (
                suggestData.map((data: SuggestionTypesRedux) => (
                  <Suggestions
                    key={data.id}
                    avatar={data.profile_picture}
                    profileName={data.full_name}
                    userName={data.username}
                    id={data.id}
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
