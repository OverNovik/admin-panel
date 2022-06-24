/* eslint-disable */
import * as Types from "../../../../../schema.generated";

export type CreateAlbumMutationVariables = Types.Exact<{
  input: Types.CreateAlbumInput;
}>;

export type CreateAlbumMutation = {
  createAlbum?: Types.Maybe<
    Pick<Types.Album, "id" | "title"> & {
      user?: Types.Maybe<Pick<Types.User, "id" | "name">>;
    }
  >;
};

export type GetUsersQueryVariables = Types.Exact<{ [key: string]: never }>;

export type GetUsersQuery = {
  users?: Types.Maybe<{
    data?: Types.Maybe<
      Array<Types.Maybe<Pick<Types.User, "id" | "email" | "username">>>
    >;
  }>;
};
