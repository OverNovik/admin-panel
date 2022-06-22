/* eslint-disable */
import * as Types from "../../../../schema.generated";

export type GetPhotosInfoQueryVariables = Types.Exact<{
  id: Types.Scalars["ID"];
  options?: Types.Maybe<Types.PageQueryOptions>;
}>;

export type GetPhotosInfoQuery = {
  album?: Types.Maybe<
    Pick<Types.Album, "id"> & {
      photos?: Types.Maybe<{
        data?: Types.Maybe<
          Array<Types.Maybe<Pick<Types.Photo, "id" | "title" | "thumbnailUrl">>>
        >;
      }>;
    }
  >;
};

export type GetAlbumInfoQueryVariables = Types.Exact<{
  id: Types.Scalars["ID"];
}>;

export type GetAlbumInfoQuery = {
  album?: Types.Maybe<
    Pick<Types.Album, "id" | "title"> & {
      user?: Types.Maybe<Pick<Types.User, "id" | "name" | "username">>;
    }
  >;
};
