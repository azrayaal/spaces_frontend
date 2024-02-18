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
  // datePost: string;
  // likes: string;
  // replies: string;
}

// export interface UserTypes {
//   Obj: {
//     email: string;
//     full_name: string;
//     username: string;
//     profile_picture: string;
//     profile_description: string;
//     id: string;
//   };
// }

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
  user: {
    email: string;
    full_name: string;
    username: string;
    profile_picture: string;
    profile_description: string;
    id: string;
  };
}
