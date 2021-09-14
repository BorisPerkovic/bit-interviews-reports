export const formateDate = (someDate) => {
  let date = new Date(someDate);
  let month = date.toLocaleString("en-US", { month: "2-digit" });
  let day = date.toLocaleString("en-US", { day: "2-digit" });
  let year = date.getFullYear();

  return `${day}.${month}.${year}`;
};
