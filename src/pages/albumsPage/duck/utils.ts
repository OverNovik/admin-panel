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
