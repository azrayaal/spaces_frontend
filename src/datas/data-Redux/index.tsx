import {
  DataContentTypes,
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

export interface SuggestState {
  isLoading: boolean;
  isError: boolean;
  data: SuggestionTypesRedux[];
}

export interface UserDetailState {
  userDetail: UserFromPayloadRedux | null;
}
