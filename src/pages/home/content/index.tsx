import ContentSpace from "../../../components/content";
import PostInput from "../../../components/postInput";
import { Center } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { ContentTypes } from "../../../datas/data-types";
import { API } from "../../../libs/api";

export default function MainContent() {
  const [content, setContent] = useState([]);

  const getContent = async () => {
    try {
      const response = await API.get(`http://localhost:3000/api/v1/spaces`);
      // console.log(response.data);
      setContent(response.data);
    } catch (error) {
      console.log(
        `Ooops something went error during fetching content, please see this ${error}`
      );
    }
  };

  useEffect(() => {
    getContent();
  }, []);

  return (
    <>
      <PostInput />

      <Center></Center>
      {/* content */}

      {content.map((data: ContentTypes) => (
        <>
          {/* <Link to={`/spaces/${data.spaces_id}`} style={{}}> */}
          <ContentSpace
            key={data.spaces_id}
            id={data.spaces_id}
            avatar={data.profile_picture}
            profileName={data.full_name}
            userName={data.username}
            content={data.spaces_content}
            image_content={data.spaces_image}
            // datePost={content.datePost}
            // likes={content.likes}
            // replies={content.replies}
          />
        </>
      ))}
    </>
  );
}
