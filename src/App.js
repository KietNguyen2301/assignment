import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import LoginForm from './component/FormLogin';
import UserList from './component/UserList';


function App() {
  return (
    <div className="container">
      <Router>
        <Routes>
          <Route path="/login" element={<LoginForm/>} />
          <Route path="/userlist" element={<UserList/>}
                  isAdminRequired={true}
                />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
