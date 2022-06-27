import { Maybe } from "schema.generated";

export * from "./operations.generated";
export interface Data {
  id: string;
  title: string;
  preview: string;
  key: string;
}

export interface PhotoItem {
  id: Maybe<string> | undefined;
  title: Maybe<string> | undefined;
  preview: Maybe<string> | undefined;
  key: Maybe<string> | undefined;
}
