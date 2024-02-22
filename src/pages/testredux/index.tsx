import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setContent } from "../../features/contentSlice";
import { API } from "../../libs/api";
import { DataContentTypes, RootState } from "../../datas/data-types";
import ContentSpace from "../../components/content";

export default function TestRedux() {
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

  console.log("data use selector", data);

  useEffect(() => {
    fetchContent();
  }, []);
  return (
    <>
      <div>TestRedux</div>
      {data.map((data: DataContentTypes) => (
        <>
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
