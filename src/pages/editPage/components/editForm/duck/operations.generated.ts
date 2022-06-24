/* eslint-disable */
import * as Types from "../../../../../schema.generated";

export type UpdateAlbumMutationVariables = Types.Exact<{
  input: Types.UpdateAlbumInput;
  id: Types.Scalars["ID"];
}>;

export type UpdateAlbumMutation = {
  updateAlbum?: Types.Maybe<Pick<Types.Album, "id" | "title">>;
};

export type GetAlbumQueryVariables = Types.Exact<{
  id: Types.Scalars["ID"];
}>;

export type GetAlbumQuery = {
  album?: Types.Maybe<
    Pick<Types.Album, "id" | "title"> & {
      user?: Types.Maybe<Pick<Types.User, "id" | "name">>;
    }
  >;
};

export type GetUsersSelectQueryVariables = Types.Exact<{
  [key: string]: never;
}>;

export type GetUsersSelectQuery = {
  users?: Types.Maybe<{
    data?: Types.Maybe<
      Array<Types.Maybe<Pick<Types.User, "id" | "email" | "username">>>
    >;
  }>;
};
