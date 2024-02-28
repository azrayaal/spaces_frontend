import ContentSpace from "../../../components/content";
import PostInput from "../../../components/postInput";
import { Center, Image } from "@chakra-ui/react";
import { useEffect } from "react";
import { DataContentTypes, RootState } from "../../../datas/data-types";
import { useDispatch, useSelector } from "react-redux";
import { fetchContent } from "../../../features/contentSlice";
import { ThunkDispatch } from "@reduxjs/toolkit";
// import { useRedux } from "../../../hooks";

export default function MainContent() {
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const dataContent = useSelector((state: RootState) => state.content.data);

  useEffect(() => {
    dispatch(fetchContent());
  }, []);

  return (
    <>
      <PostInput />

      <Center></Center>
      {/* content */}

      {dataContent.map((data: DataContentTypes) => (
        <ContentSpace
          key={data.id}
          id={data.id}
          content={data.content}
          image={data.image}
          Total_Likes={data.Total_Likes}
          Total_Replies={data.Total_Replies}
          created_at={data.created_at}
          profile_picture={data.user.profile_picture}
          full_name={data.user.full_name}
          username={data.user.username}
          user={data.user}
        />
      ))}
    </>
  );
}
