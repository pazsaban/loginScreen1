import * as types from './types';

export const setUser = (payload) => ({
  type: types.SET_USER,
  payload,
});

// export const addToFavorites = (payload) => ({
//   type: types.ADD_FAVORITE_MOVIE,
//   payload,
// });

// export const deleteFromFavorites = (payload) => ({
//   type: types.DELETE_FAVORITE_MOVIE,
//   payload,
// });
