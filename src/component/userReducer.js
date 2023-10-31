// Trong tệp userReducer.js
const initialState = {
  users: [], // Khởi tạo danh sách người dùng trống
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_USER':
      // Logic để thêm người dùng mới vào danh sách USERS
      // Sử dụng action.payload để truyền thông tin người dùng mới
      return {
        ...state,
        users: [...state.users, action.payload],
      };

    case 'UPDATE_USER':
      // Logic để cập nhật thông tin người dùng
      // Sử dụng action.payload để truyền thông tin người dùng cần cập nhật
      const updatedUsers = state.users.map((user) =>
        user.id === action.payload.id ? action.payload : user
      );
      return {
        ...state,
        users: updatedUsers,
      };

    case 'DELETE_USER':
      // Logic để xóa người dùng
      // Sử dụng action.payload để truyền thông tin người dùng cần xóa
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
