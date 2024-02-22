export interface FillFormProps {
  description: string;
  placeholder: string;
  button: string;
}

export interface ContentSpaceProps {
  avatar: string;
  profileName: string;
  userName: string;
  content: string;
  image_content: string;
  id: number;
  // datePost: number;
  // likes: number;
  // replies: number;
}

export interface ContentTypes {
  spaces_id: number;
  profile_picture: string;
  full_name: string;
  username: string;
  spaces_content: string;
  spaces_image: string;
  datePost: string;
  likes: string;
  replies: string;
}

export interface DetailUserTypes {
  email: string;
  full_name: string;
  username: string;
  profile_picture: string;
  profile_description: string;
  created_at: string | number;
  follower: string | number;
  followerTotal: string | number;
  following: string | number;
  followingTotal: number;
  id: number;
}

// export interface Obj {
//   email: string;
//   full_name: string;
//   username: string;
//   profile_picture: string;
//   profile_description: string;
//   id: string;
// }

// export interface JWTPayloadsTypes {
//   user: Obj;
//   iat: string;
// }

export interface JWTPayloadsTypes {
  exp: number;
  iat: string;

  user: {
    email: string;
    full_name: string;
    username: string;
    profile_picture: string;
    profile_description: string;
    id: string;
  };
}

export interface UserFromPayload {
  exp: number;
  iat: number;
  user: any;
  email: string;
  full_name: string;
  username: string;
  profile_picture: string;
  profile_description: string;
  id: string;
}

export interface SuggestionTypes {
  id: number;
  username: string;
  full_name: string;
  email: string;
  profile_picture: string;

  profile_description: string;
}

export interface DataDetailTypes {
  content: string;
  id: number;
  image: string;
  posted_at: number;

  profile_picture: string;

  user: {
    email: string;
    full_name: string;
    username: string;
    profile_picture: string;
    profile_description: string;
    id: string;
  };
}

export interface DataContentTypes {
  id: number;
  content: string;
  image: string;
  created_at: any;
  Total_Likes: number;
  Total_Replies: number;
  user: {
    full_name: string;
    username: string;
    profile_picture: string;
    id: string;
  };
  full_name: string;
  username: string;
  profile_picture: string;
}

import { store } from "../store/index";
export type RootState = ReturnType<typeof store.getState>;
