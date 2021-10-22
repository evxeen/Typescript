export const dateStringToDate = (dateString: string): Date => {
  const parseDate = dateString.split('/').map((item: string): number => {
    return parseInt(item);
  });

  return new Date(parseDate[2],parseDate[1] - 1, parseDate[0])
}