import ContentSpace from "../../../components/content";
import PostInput from "../../../components/postInput";
import { Center } from "@chakra-ui/react";
import { useEffect } from "react";
import { DataContentTypes, RootState } from "../../../datas/data-types";
import { API } from "../../../libs/api";
import { useDispatch, useSelector } from "react-redux";
import { setContent } from "../../../features/contentSlice";

export default function MainContent() {
  const dispatch = useDispatch();
  const { data } = useSelector((state: RootState) => state.content);

  const fetchContent = async () => {
    try {
      const response = await API.get("spaces");
      dispatch(setContent(response.data));
      console.log("response api", response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchContent();
  }, []);

  return (
    <>
      <PostInput />

      <Center></Center>
      {/* content */}

      {data.map((data: DataContentTypes) => (
        <>
          {/* <Link to={`/spaces/${data.spaces_id}`} style={{}}> */}
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
        </>
      ))}
    </>
  );
}
