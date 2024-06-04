import React from "react";
import "./Login.css";
const Login = () => {
  return (
    <div className="">
      <div className="fullContainer">
        <h2 className="">hello</h2>
        <li className="li">sorry</li>
        <h2 className="">Okk</h2>
      </div>
      <div className="wp">
      {/* <div className="border border-red-500 w-full h-screen z-20 bg-green-300 bg-[url('https://i.ibb.co/vwZkcgh/blossom-floral-bouquet-decoration-colorful-beautiful-flowers-background-garden-flowers-plant-pattern.jpg)]"> */}
        <div className="wp">
          <h5 className="login-title">Login</h5>
          <div className="body">
            <form method="" action="">
              <div className="">
                <div className="input-group-append">
                  <span className="input-group-text"></span>
                </div>
                <input
                  type="text"
                  name="email"
                  placeholder="email..."
                  className="form-control"
                />
              </div>
              <div className="">
                <div className="input-group-append">
                  <span className="input-group-text"></span>
                </div>
                <input
                  type="password"
                  name="password"
                  placeholder="Password..."
                  className="form-control"
                />
              </div>
              <div className="forgot-pass-container">
                <label for="">
                  <input type="checkbox" /> Remember me
                </label>
                <a href="">Forgot password</a>
              </div>

              <div className="login-btn-container">
                <input className="login-btn" type="submit" value="Login" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
