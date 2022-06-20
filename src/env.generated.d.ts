/* eslint-disable */

declare module "*/operations.gql" {
  import { DocumentNode } from "graphql";
  const defaultDocument: DocumentNode;
  export const getAlbums: DocumentNode;
  export const createAlbum: DocumentNode;
  export const getUsers: DocumentNode;
  export const deleteAlbum: DocumentNode;

  export default defaultDocument;
}
