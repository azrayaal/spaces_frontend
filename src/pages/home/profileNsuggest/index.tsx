import { Box, Card, Heading } from "@chakra-ui/react";
import Suggestions from "../../../components/suggestion";
import SideProfile from "../../../components/sideProfile";
import { useEffect } from "react";
import SideProfileNotLogin from "../../../components/sideProfileNotLogin";
import { RootState, SuggestionTypes } from "../../../datas/data-types";
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
  const suggestData = useSelector(
    (state: RootState) => state.suggests.suggests.suggestions
  );
  // const data = suggestData.suggests.suggestions;
  const { isLogin } = checkLogin();
  console.log("datasuggest dari profile", suggestData);
  console.log("dataUserLogin dari profile", dataUserLogin);

  useEffect(() => {
    // dispatch(fetchUserDetail());
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

              {suggestData.map((i: SuggestionTypes[]) => (
                <Suggestions
                  key={i.id}
                  avatar={i.profile_picture}
                  profileName={i.full_name}
                  userName={i.username}
                />
              ))}
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
