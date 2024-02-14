import ContentSpace from "../../../components/content";
import PostInput from "../../../components/postInput";
import { Center } from "@chakra-ui/react";
// import { ContentDummy } from "../../../datas/data-dummy";
import { useCallback, useEffect, useState } from "react";
import { getHome } from "../../../services/pages";
import { ContentTypes } from "../../../datas/data-types";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

export default function MainContent() {
  const [content, setContent] = useState([]);

  // const getContent = useCallback(async () => {
  //   const response = await getHome();
  //   setContent(response.data);
  //   console.log(response.data);
  // }, []);

  const getContent = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/api/v1/spaces`);
      console.log(response.data);
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
