/* eslint-disable */
import * as Types from "../../../../schema.generated";

export type GetPhotoInfoQueryVariables = Types.Exact<{
  id: Types.Scalars["ID"];
}>;

export type GetPhotoInfoQuery = {
  photo?: Types.Maybe<Pick<Types.Photo, "id" | "title" | "url">>;
};
