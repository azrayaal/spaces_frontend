// import Cookies from "js-cookie";
// import { jwtDecode } from "jwt-decode";
// import { setLoading, setRejected, setUserDetail } from "../userDetailSlice";
// import { DetailUserTypes } from "../../datas/data-types";

// export const fetchUserDetailFromToken = () => async (dispatch: any) => {
//   dispatch(setLoading());
//   const token = Cookies.get("token");
//   if (token) {
//     const jwtToken = atob(token);
//     const payload: DetailUserTypes = jwtDecode(jwtToken);
//     dispatch(setUserDetail(payload.user));
//   } else {
//     dispatch(setRejected());
//   }
// };
