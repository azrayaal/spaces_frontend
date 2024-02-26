import { Box, Card, Heading } from "@chakra-ui/react";
import Suggestions from "../../../components/suggestion";
import SideProfile from "../../../components/sideProfile";
import { useEffect, useState } from "react";
import SideProfileNotLogin from "../../../components/sideProfileNotLogin";
import { API } from "../../../libs/api";
import { RootState, SuggestionTypes } from "../../../datas/data-types";
import { checkLogin } from "../../../hooks";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserDetail } from "../../../features/userDetailSlice";
import { ThunkDispatch } from "@reduxjs/toolkit";

export default function ProfileNSuggest() {
  const [suggestData, setSuggestData] = useState([]);

  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const dataUserLogin = useSelector((state: RootState) => state.userDetail);
  console.log("dataUserLogin profile", dataUserLogin);

  // const { dataUserLogin, isLogin } = checkLogin();
  const { isLogin } = checkLogin();
  // const dispatch = useDispatch();
  // console.log("isLogin dari profile", isLogin);

  const suggestAPI = async () => {
    try {
      const response = await API.get("user");
      setSuggestData(response.data);
    } catch (error) {
      console.log(
        `Ooops something went error during API suggest, please see this ==>> ${error}`
      );
    }
  };

  useEffect(() => {
    dispatch(fetchUserDetail());
    suggestAPI();
  }, []);
  return (
    <>
      {isLogin ? (
        <>
          <SideProfile
            id={dataUserLogin?.userDetail.id}
            full_name={dataUserLogin?.userDetail.full_name}
            username={dataUserLogin?.userDetail.username}
            profile_description={dataUserLogin?.userDetail.profile_description}
            profile_picture={dataUserLogin?.userDetail.profile_picture}
            followingTotal={dataUserLogin?.userDetail.followingTotal}
            followerTotal={dataUserLogin?.userDetail.followerTotal}
          />
          <Box m={4}>
            <Card color="gray.100" bg="mainBg.200">
              <Heading size="sm" mt={3} ml={3}>
                Suggested for you
              </Heading>

              {suggestData.map((suggest: SuggestionTypes) => (
                <Suggestions
                  key={suggest.id}
                  avatar={suggest.profile_picture}
                  profileName={suggest.full_name}
                  userName={suggest.username}
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
