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
  user: {
    id: number;
  };
}

export interface FollowingTypes {
  created_at: string;
  id: number;
  follower: {
    id: number;
    username: string;
    full_name: string;
    email: string;
    profile_description: string;
    profile_picture: string;
    created_at: string;
  };

  // follower: DetailUserTypes;
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
  // exp: number;
  // iat: number;
  user: any;
  created_at: string | number;
  email: string;
  full_name: string;
  username: string;
  profile_picture: string;
  profile_description: string;
  id: number;
  followingTotal: number;
  followerTotal: number;
}

export interface UserFromPayloadRedux {
  id: number | undefined;
  email: string | undefined;
  full_name: string | undefined;
  username: string | undefined;
  profile_picture: string | undefined;
  profile_description: string | undefined;
  created_at: string | undefined;
  followingTotal: number | undefined;
  followerTotal: number | undefined;
  header: string | undefined;
}

export interface SuggestionTypes {
  id: number;
  username: string;
  full_name: string;
  email: string;
  profile_picture: string;
  profile_description: string;

  // suggestions: {
  //   id: number;
  //   username: string;
  //   full_name: string;
  //   email: string;
  //   profile_picture: string;
  //   profile_description: string;
  // };
}

export interface DataDetailTypes {
  id: number;
  content: string;
  image: string;
  created_at: string;
  total_Replies: number;
  total_Likes: number;
  user: {
    id: number;
    username: string;
    full_name: string;
    profile_picture: string;
  };
  // replies: any[];
  // {
  //   content: string;
  //   created_at: string;
  //   id: number;
  //   image: string;
  // }
}

export interface AllReplyContent {
  id: number;
  content: string;
  image: string;
  created_at: string;
  user: {
    id: number;
    username: string;
    full_name: string;
    profile_picture: string;
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
    userId: number;
    id: number;
    email: string;
  };
  userId: number;
  full_name: string;
  username: string;
  profile_picture: string;
  email: string;
}

export interface SuggestionTypesRedux {
  suggestions: {
    id: number;
    username: string;
    full_name: string;
    email: string;
    profile_picture: string;
    profile_description: string;
  };
  id: number;
  username: string;
  full_name: string;
  email: string;
  profile_picture: string;
  profile_description: string;
}

import { store } from "../store/index";
export type RootState = ReturnType<typeof store.getState>;
