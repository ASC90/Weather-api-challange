export const parseDate = (date: string): string => {
  const dateToParse = new Date(date);
  const parsedData = `${dateToParse.getDay().toString().padStart(2, "0")}/${(
    dateToParse.getMonth() + 1
  )
    .toString()
    .padStart(2, "0")}/${dateToParse
    .getFullYear()
    .toString()
    .padStart(2, "0")} - ${dateToParse
    .getHours()
    .toString()
    .padStart(2, "0")}:${dateToParse.getMinutes().toString().padStart(2, "0")}`;
  return parsedData;
};
