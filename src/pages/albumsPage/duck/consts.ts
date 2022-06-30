import { URLSearchParamsInit } from "react-router-dom";

export const getPaginationParams = (
  searchParams: URLSearchParams
): {
  page: number;
  size: number;
} => {
  const pageValue = Number(searchParams.get("page"));
  const sizeValue = Number(searchParams.get("size"));

  return {
    page: Number(pageValue) > 0 ? Number(pageValue) : 1,
    size: Number(sizeValue) > 0 ? Number(sizeValue) : 10,
  };
};

export const tablePagination = (
  page: number,
  pageSize: number,
  setSearchParams: (
    nextInit: URLSearchParamsInit,
    navigateOptions?:
      | {
          replace?: boolean | undefined;
          state?: any;
        }
      | undefined
  ) => void
) => {
  return {
    onChange(pageParams: number, sizeParams: number) {
      setSearchParams({
        page: pageParams.toString(),
        size: sizeParams.toString(),
      });
    },
    current: Number(page),
    pageSize: Number(pageSize),
    pageSizeOptions: [10, 20, 50],
  };
};
