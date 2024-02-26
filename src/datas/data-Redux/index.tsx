import {
  DataContentTypes,
  DetailUserTypes,
  UserFromPayload,
  UserFromPayloadRedux,
} from "../data-types";

export interface ContentState {
  isLoading: boolean;
  isError: boolean;
  contents: DataContentTypes[];
}

export interface UserDetailState {
  isLoading: boolean;
  isError: boolean;
  // userDetail: WritableDraft<UserFromPayloadRedux>;
  // userDetail: UserFromPayloadRedux;
  userDetail: UserFromPayload;
}
