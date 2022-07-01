import { Maybe, Photo } from "schema.generated";

export * from "./operations.generated";
export interface DataItems {
  id: Maybe<string> | undefined;
  key: Maybe<string> | undefined;
  photos: Maybe<Maybe<Pick<Photo, "id">>[]> | undefined;
  title: Maybe<string> | undefined;
  username: Maybe<string> | undefined;
}
