export const reduceEntryCases = (num) => {
  if (num > 1000) {
    return `${num.toString().slice(0, -3)}k+`;
  }
  return num;
};
