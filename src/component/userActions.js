//userActions.js
export const ADD_USER = 'ADD_USER';
export const UPDATE_USER = 'UPDATE_USER';
export const DELETE_USER = 'DELETE_USER';
export const GET_ALL_USERS = 'GET_ALL_USERS'; // Thêm action GET_ALL_USERS

export const addUser = (user) => {
  return {
    type: ADD_USER,
    payload: user,
  };
};

export const updateUser = (user) => {
  return {
    type: UPDATE_USER,
    payload: user,
  };
};

export const deleteUser = (userId) => {
  return {
    type: DELETE_USER,
    payload: { id: userId },
  };
};

export const getAllUsers = (users) => {
  return {
    type: GET_ALL_USERS,
    payload: users,
  };
};
