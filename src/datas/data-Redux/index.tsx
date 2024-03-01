import {
  AllReplyContent,
  DataContentTypes,
  DataDetailTypes,
  DetailUserTypes,
  SuggestionTypes,
  SuggestionTypesRedux,
  UserFromPayload,
  UserFromPayloadRedux,
} from "../data-types";

export interface ContentState {
  isLoading: boolean;
  isError: boolean;
  data: DataContentTypes[];
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
  data: AllReplyContent[];
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
