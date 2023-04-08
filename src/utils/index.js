export const clearObjectValues = (data) => {
  return Object.keys(data).reduce(
    (acc, key) => ({
      ...acc,
      [key]: "",
    }),
    {}
  );
};

function checkReportEntityId(entity, idField, array) {
  if (!entity[idField]) {
    console.warn(
      `Entity ${JSON.stringify(
        entity
      )} doesn't have an a field '${idField}'. All entities: ${JSON.stringify(
        array
      )}`
    );
    return false;
  }
  return true;
}

export const normalizeArrayOfEntities = (array, { idField = "id" } = {}) => {
  const ids = [];
  const entityById = {};
  for (let i = 0; i < array.length; i += 1) {
    const entity = array[i];
    if (checkReportEntityId(entity, idField, array)) {
      ids.push(entity[idField]);
      entityById[entity[idField]] = entity;
    }
  }
  return { ids, entityById };
};
