import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addUser, updateUser, deleteUser, getAllUsers } from './userActions'; // Import getAllUsers action
import '../style/UserList.css';
import api from '../api'; // Import API

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

  const [selectedUserId, setSelectedUserId] = useState(null);

  useEffect(() => {
    fetchUserData();
    fetchAllUsers(); // Call fetchAllUsers to load all users initially
  }, []);

  const fetchUserData = async () => {
    const users = await api.getAllUsers();
    dispatch(updateUser(users));
  };

  const fetchAllUsers = async () => {
    const allUsers = await api.getAllUsers();
    dispatch(getAllUsers(allUsers));
  };

  const handleAddUser = async () => {
    const { id, name, fullname } = newUser;
    const addedUser = await api.adduser(id, name, fullname);

    if (addedUser) {
      dispatch(addUser(addedUser));

      setNewUser({
        id: '',
        name: '',
        fullname: '',
      });
    }
  };

  const handleUpdateUser = async () => {
    if (selectedUserId) {
      const { id, name, fullname } = newUser1;
      const updatedUser = await api.updateuser(selectedUserId, {
        id,
        name,
        fullname,
      });

      if (updatedUser) {
        dispatch(updateUser(updatedUser));

        setNewUser1({
          id: '',
          name: '',
          fullname: '',
        });
        setSelectedUserId(null);
      }
    }
  };

  const handleDeleteUser = async (userId) => {
    const deletedUser = await api.deleteuser(userId);

    if (deletedUser) {
      dispatch(deleteUser(userId));
    }
  };

  return (
    <div>
      <h2>User List</h2>
      {/* <h3>Danh sách ban đầu</h3> */}
      {/* <table className="user-table">
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
      </table> */}

      {/* <h3>Danh sách mới</h3> */}
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
