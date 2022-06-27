import { Maybe } from "schema.generated";

export * from "./operations.generated";
export interface DataItems {
  id: Maybe<string> | undefined;
  key: Maybe<string> | undefined;
  photos: number | undefined;
  title: Maybe<string> | undefined;
  username: Maybe<string> | undefined;
}

export interface Data {
  id: string;
  key: string;
  photos: number;
  title: string;
  username: string;
}
