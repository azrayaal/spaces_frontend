import { DataContentTypes, DetailUserTypes } from "../data-types";

export interface ContentState {
  isLoading: boolean;
  isError: boolean;
  contents: DataContentTypes[];
}

export interface DetailContentState {
  isLoading: boolean;
  isError: boolean;
  userDetail: DetailUserTypes[];
}
