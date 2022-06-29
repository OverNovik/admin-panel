import { Maybe, Photo } from "schema.generated";

export * from "./operations.generated";
export interface DataItems {
  id: Maybe<string> | undefined;
  key: Maybe<string> | undefined;
  currPhotos: Maybe<Maybe<Pick<Photo, "id">>[]> | undefined;
  title: Maybe<string> | undefined;
  username: Maybe<string> | undefined;
}

export interface Data {
  id: string;
  key: string;
  currPhotos: Maybe<Maybe<Pick<Photo, "id">>[]> | undefined;
  title: string;
  username: string;
}
