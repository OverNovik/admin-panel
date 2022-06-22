/* eslint-disable */

declare module "*/operations.gql" {
  import { DocumentNode } from "graphql";
  const defaultDocument: DocumentNode;
  export const getAlbums: DocumentNode;
  export const createAlbum: DocumentNode;
  export const getUsers: DocumentNode;
  export const deleteAlbum: DocumentNode;
  export const updateAlbum: DocumentNode;
  export const getAlbum: DocumentNode;
  export const getUsersSelect: DocumentNode;
  export const getPhotosInfo: DocumentNode;
  export const getPhotoInfo: DocumentNode;
  export const getAlbumInfo: DocumentNode;

  export default defaultDocument;
}
