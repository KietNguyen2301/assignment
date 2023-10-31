//UserList.js

import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addUser, updateUser, deleteUser } from './userActions';
import '../style/UserList.css'; // Import CSS file
import { USERS } from './data';

const UserList = () => {
  const usersFromStore = useSelector((state) => state.users.users);
  const dispatch = useDispatch();

  const [newUser, setNewUser] = useState({
    id: '',
    name: '',
    fullname: '',
  });

  const [newUser1, setNewUser1] = useState({
    id: '',
    name: '',
    fullname: '',
  });


  const [initialUsers, setInitialUsers] = useState(USERS);
  const [nextId, setNextId] = useState(USERS.length + 1); // Khởi tạo nextId
  const [selectedUserId, setSelectedUserId] = useState(null); // State để lưu ID người dùng được chọn

  useEffect(() => {
    if (initialUsers.length === 0) {
      setInitialUsers(USERS);
    }
  }, [initialUsers]);

  const handleAddUser = () => {
    const userToAdd = {
      id: nextId,
      name: newUser.name,
      fullname: newUser.fullname,
    };

    dispatch(addUser(userToAdd));

    // Tăng giá trị của nextId
    setNextId(nextId + 1);

    setNewUser({
      id: '',
      name: '',
      fullname: '',
    });

    setNewUser1({
      id: '',
      name: '',
      fullname: '',
    });
  };

  const handleUpdateUser = () => {
    if (selectedUserId) {
      const userToUpdate = {
        id: selectedUserId,
        name: newUser1.name,
        fullname: newUser1.fullname,
      };

      dispatch(updateUser(userToUpdate));

      // Reset tên và họ đầy đủ mới sau khi cập nhật
      setNewUser1({
        id: '',
        name: '',
        fullname: '',
      });

      // Reset selectedUserId
      setSelectedUserId(null);
    }
  };

  const handleDeleteUser = (userId) => {
    dispatch(deleteUser(userId));
  };

  return (
    <div>
      <h2>User List</h2>
      <h3>Danh sách ban đầu</h3>
      <table className="user-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Fullname</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {initialUsers.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.fullname}</td>
              <td>
                <div className="button-container">
                  <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
                  <button onClick={() => {
                    setSelectedUserId(user.id);
                    setNewUser1({ id: user.id, name: user.name, fullname: user.fullname });
                  }}>Update</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3>Danh sách mới</h3>
      <table className="user-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Fullname</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {usersFromStore.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.fullname}</td>
              <td>
                <div className="button-container">
                  <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
                  <button onClick={() => {
                    setSelectedUserId(user.id);
                    setNewUser1({ id: user.id, name: user.name, fullname: user.fullname });
                  }}>Update</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3>Add User</h3>
      <input
        type="text"
        placeholder="Name"
        value={newUser.name}
        onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
      />
      <input
        type="text"
        placeholder="Fullname"
        value={newUser.fullname}
        onChange={(e) => setNewUser({ ...newUser, fullname: e.target.value })}
      />
      <button onClick={handleAddUser}>Add</button>

      <h3>Update User</h3>
      <input
        type="text"
        placeholder="Name"
        value={newUser1.name}
        onChange={(e) => setNewUser1({ ...newUser1, name: e.target.value })}
      />
      <input
        type="text"
        placeholder="Fullname"
        value={newUser1.fullname}
        onChange={(e) => setNewUser1({ ...newUser1, fullname: e.target.value })}
      />
      <button onClick={handleUpdateUser}>Update</button>
    </div>
  );
};

export default UserList;
