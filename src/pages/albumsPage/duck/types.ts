import { Maybe, Photo } from "schema.generated";

export * from "./operations.generated";
export interface DataItems {
  id: Maybe<string> | undefined;
  key: Maybe<string> | undefined;
  currPhotos:
    | Maybe<{ data?: Maybe<Maybe<Pick<Photo, "id">>[]> | undefined }>
    | undefined;
  title: Maybe<string> | undefined;
  username: Maybe<string> | undefined;
}
