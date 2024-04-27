import {
  AllReplyContent,
  DataContentTypes,
  DataDetailTypes,
  FollowerTypes,
  FollowingTypes,
  SuggestionTypesRedux,
  UserFromPayloadRedux,
} from "../data-types";

export interface ContentState {
  isLoading: boolean;
  isError: boolean;
  data: DataContentTypes[];
}

export interface FollowingState {
  isLoading: boolean;
  isError: boolean;
  data: FollowingTypes[];
}

export interface FollowerState {
  isLoading: boolean;
  isError: boolean;
  data: FollowerTypes[];
}

export interface ContentDetailState {
  isLoading: boolean;
  isError: boolean;
  data: DataDetailTypes;
  // data: DataContentTypes[];
}

export interface AllReplyContentState {
  isLoading: boolean;
  isError: boolean;
  data: AllReplyContent;
  // data: DataContentTypes[];
}

export interface SuggestState {
  isLoading: boolean;
  isError: boolean;
  data: SuggestionTypesRedux[];
}

export interface UserDetailState {
  userDetail: UserFromPayloadRedux | null;
}
