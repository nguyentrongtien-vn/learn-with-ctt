import React, { useState } from 'react';
import '../../form_login/DesignAccount.css';

export default function CreateAccount() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [policy, setPolicy] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log({
      username,
      email,
      password,
      phoneNumber,
      policy,
    });
  };

  return (
    <main className="create-account-page">
      <form className="form-data" onSubmit={handleSubmit}>
        <h2 className="heading">Điền thông tin của bạn</h2>
        <div>
          <label htmlFor="user">Tên đăng nhập</label>
          <input
            type="text"
            id="user"
            placeholder="NguyenVanA"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="n82219@gmail.com"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Mật khẩu</label>
          <input
            type="password"
            id="password"
            placeholder="Nght2794@"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="phoneNumber">Số điện thoại</label>
          <input
            type="tel"
            id="phoneNumber"
            placeholder="000xxx000"
            value={phoneNumber}
            onChange={(event) => setPhoneNumber(event.target.value)}
          />
        </div>
        <div className="policy">
          <input
            type="checkbox"
            id="policy"
            name="policy"
            checked={policy}
            onChange={(event) => setPolicy(event.target.checked)}
          />
          <label htmlFor="policy">Chấp nhận điều khoản bảo mật thông tin.</label>
        </div>
        <button className="button" type="submit">
          Xác nhận tạo tài khoản
        </button>
      </form>
    </main>
  );
}