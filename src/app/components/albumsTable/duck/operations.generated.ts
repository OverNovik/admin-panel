/* eslint-disable */
import * as Types from "../../../../schema.generated";

export type GetAlbumsQueryVariables = Types.Exact<{ [key: string]: never }>;

export type GetAlbumsQuery = {
  albums?: Types.Maybe<{
    data?: Types.Maybe<
      Array<
        Types.Maybe<
          Pick<Types.Album, "id" | "title"> & {
            user?: Types.Maybe<Pick<Types.User, "id" | "name">>;
            photos?: Types.Maybe<{
              data?: Types.Maybe<Array<Types.Maybe<Pick<Types.Photo, "id">>>>;
            }>;
          }
        >
      >
    >;
  }>;
};
