import "./BorderAnimatedForm.css";
const BorderAnimatedForm = () => {
  return (
    <div className="">
      <div className="fullContainer">
        <h2 className="">hello</h2>
        <li className="li">Devs</li>
        {/* <h2 className=""></h2> */}
      </div>
      {/* <p className="mt-20 text-center login-title">Form-2 </p> */}
          <h5 className="mt-20 login-title text-2xl font-bold">Login Form-2</h5>
      {/* Form-2 */}
      <div className="wp mb-20">
        <div className="wp">
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

export default BorderAnimatedForm;
