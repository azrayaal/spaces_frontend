import {
  DataContentTypes,
  DetailUserTypes,
  SuggestionTypes,
  UserFromPayload,
  UserFromPayloadRedux,
} from "../data-types";

export interface ContentState {
  isLoading: boolean;
  isError: boolean;
  contents: DataContentTypes[];
}

export interface SuggestState {
  isLoading: boolean;
  isError: boolean;
  data: SuggestionTypes[];
  // suggests: any;
}

export interface UserDetailState {
  // isLoading: boolean;
  // isError: boolean;
  // userDetail: WritableDraft<UserFromPayloadRedux>;
  userDetail: UserFromPayloadRedux | null;
  // userDetail: UserFromPayload;
}
