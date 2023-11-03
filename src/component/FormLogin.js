import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('')
  const navigate = useNavigate();

  // const handleKeyPress = (e) => {
  //   if (e.key === 'Enter') {
  //     handleLogin();
  //   }
  // };

  const handleLogin = async () => {
    // if (username === 'user1' && password === '123456') {
    //   localStorage.setItem('isLoggedIn', 'true');
    //   navigate('/userlist');
    // } else {
    //   alert('Thông tin đăng nhập không đúng');
    // }
    const user = await api.login(username, password);
    console.log(user);
    if (user) {
      navigate('/userlist');
    } else {
      setLoginError('mat khau hoac ten dang nhap sai')
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Đăng nhập</h2>
        <div>
          <input
            type="text"
            placeholder="Tên đăng nhập"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Mật khẩu"
            value={password}
            onChange={(e) => setPassword(e.target.value)}

          />
        </div>
        {loginError && (
          <p>{loginError}</p>
        )}
        <div>
          <button onClick={handleLogin}>Đăng nhập</button>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;