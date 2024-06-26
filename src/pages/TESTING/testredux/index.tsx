// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { setContent } from "../../../features/contentSlice";
// import { API } from "../../../libs/api";
// import { DataContentTypes, RootState } from "../../../datas/data-types";
// import ContentSpace from "../../../components/content";
// import { fetchContent } from "../../../features/contentTestRedux";
// import { ThunkDispatch } from "@reduxjs/toolkit";

// export default function TestRedux() {
//   const dispatch = useDispatch<ThunkDispatch<any, any, any>>();

//   const dataContent = useSelector((state: any) => state.contentTest);

//   useEffect(() => {
//     dispatch(fetchContent());
//   }, []);
//   return (
//     <>
//       {dataContent.contents.map((data: DataContentTypes) => (
//         <ContentSpace
//           key={data.id}
//           id={data.id}
//           content={data.content}
//           image={data.image}
//           Total_Likes={data.Total_Likes}
//           Total_Replies={data.Total_Replies}
//           created_at={data.created_at}
//           profile_picture={data.user.profile_picture}
//           full_name={data.user.full_name}
//           username={data.user.username}
//           user={data.user}
//         />
//       ))}
//     </>
//   );
// }
