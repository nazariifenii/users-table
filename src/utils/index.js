
export const clearObjectValues = (data) => {
  return Object.keys(data).reduce(
    (acc, key) => ({
      ...acc,
      [key]: "",
    }),
    {}
  );
};
