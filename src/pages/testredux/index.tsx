import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setContent } from "../../features/contentSlice";
import { API } from "../../libs/api";
import { RootState } from "../../datas/data-types";

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
  }, [dispatch]);
  return (
    <>
      <div>TestRedux</div>
      {data.map((content: any) => (
        <>
          <div key={content.id}>
            <h1>Content: {content.content}</h1>
          </div>
        </>
      ))}
    </>
  );
}
