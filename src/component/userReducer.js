// Trong tệp userReducer.js
const initialState = {
  users: [], // Khởi tạo danh sách người dùng trống
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ALL_USERS':
      return {
        ...state,
        users: action.payload,
      };

    case 'ADD_USER':
      return {
        ...state,
        users: [...state.users, action.payload],
      };

    case 'UPDATE_USER':
      const updatedUsers = state.users.map((user) =>
        user.id === action.payload.id ? action.payload : user
      );
      return {
        ...state,
        users: updatedUsers,
      };

    case 'DELETE_USER':
      const filteredUsers = state.users.filter((user) => user.id !== action.payload.id);
      return {
        ...state,
        users: filteredUsers,
      };

    default:
      return state;
  }
};

export default userReducer;
