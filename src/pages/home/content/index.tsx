import ContentSpace from "../../../components/content";
import PostInput from "../../../components/postInput";
import { useEffect } from "react";
import { DataContentTypes, RootState } from "../../../datas/data-types";
import { useDispatch, useSelector } from "react-redux";
import { fetchContent } from "../../../features/contentSlice";
import { ThunkDispatch } from "@reduxjs/toolkit";

export default function MainContent() {
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const dataContent = useSelector((state: RootState) => state.content.data);
  console.log("dataContent", dataContent);
  useEffect(() => {
    dispatch(fetchContent());
  }, []);

  return (
    <>
      <PostInput />

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
          userId={data.user.id}
          profile_picture={data.user.profile_picture}
          full_name={data.user.full_name}
          username={data.user.username}
          email={data.user.email}
          user={data.user}
        />
      ))}
    </>
  );
}
