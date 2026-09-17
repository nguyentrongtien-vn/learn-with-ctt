import React, { useState } from "react";
import "../../form_login/style.css";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const isInvalid = !username.trim() || !password.trim();
    setError(isInvalid);

    if (!isInvalid) {
      sessionStorage.setItem("ctt-authenticated", "true");
      window.location.assign("/");
    }
  };

  return (
    <main className="login-page">
      <div className="login-container">
        <h1 className="heading-title">Chào mừng bạn trở lại</h1>
        <p className="title">Đăng nhập vào tài khoản!</p>
        <form className="content-infor" onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="User">Tên đăng nhập</label>
            <input
              type="text"
              id="User"
              placeholder="NguyenVanA"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Mật khẩu</label>
            <input
              type="password"
              id="password"
              placeholder="Nght2794@"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          {error && (
            <p className="wrong-input">
              Tên đăng nhập hoặc mật khẩu sai. Vui lòng thử lại.
            </p>
          )}
          <button type="submit">
            <b>Đăng nhập</b>
          </button>
          <p>
            Bạn đã có tài khoản chưa?{" "}
            <a href="/create-account" className="create-account">
              Tạo tài khoản
            </a>
          </p>
        </form>
      </div>
    </main>
  );
}
