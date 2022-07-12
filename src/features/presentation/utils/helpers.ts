function paginator<T>(
  items: Array<T>,
  currentPage = 1,
  perPage = 15,
): {
  total: number;
  totalPage: number;
  data: Array<T>;
} {
  const offset = (currentPage - 1) * perPage;
  const paginatedItems = items.slice(offset).slice(0, perPage);
  const totalPage = Math.ceil(items.length / perPage);

  return {
    total: items.length,
    totalPage: totalPage,
    data: paginatedItems,
  };
}

function timeConvert(num: number): string {
  const hours = Math.floor((num % (3600 * 24)) / 3600);
  const minutes = Math.floor((num % 3600) / 60);
  return `${hours}:${minutes}`;
}

export { paginator, timeConvert };
