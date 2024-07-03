export const saveAllAutos = (autos) => ({
  type: 'ADD_ALL_AUTOS',
  payload: autos
});

export const saveByIdAutos = (id) => ({
  type: 'ADD_AUTOS_ID',
  payload: id,
});
export const sortAutos = (sortBy) => ({
  type: 'SORT_AUTOS',
  payload: sortBy,
});
export const deleteByIdAutos = (id) => ({
  type: 'DELETE_BY_ID',
  payload: id,
});
export const updateAuto = (obj) => ({
  type: 'UPDATE_AUTO',
  payload: obj,
});

