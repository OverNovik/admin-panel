export const getPaginationParams = (
  searchParams: URLSearchParams
): {
  page: number;
  size: number;
} => {
  const pageValue = Number(searchParams.get("page"));
  const sizeValue = Number(searchParams.get("size"));

  return {
    page: +pageValue > 0 ? +pageValue : 1,
    size: +sizeValue > 0 ? +sizeValue : 10,
  };
};
