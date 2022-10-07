import { useState } from "react";

const LoginLogout = () => {
  let admin = {
    email: "admin@gmail.com",
    password: "123456",
  };

  let [users, setUsers] = useState({
    email: "",
    password: "",
  });

  let [status, setStatus] = useState("block");
  let [flag, setFlag] = useState("none");
  let [flag2, setFlag2] = useState("none");

  const getData = (e) => {
    setUsers({ ...users, [e.target.name]: e.target.value });
  };

  const submit = (ope) => {
    switch (ope) {
      case "login": {
        if (users.email === admin.email && users.password === admin.password) {
          setStatus("none");
          setFlag("block");
        } else {
          setStatus("none");
          setFlag2("block");
        }
        break;
      }
      case "back":
      case 'logout':{
        setStatus("block");
        setFlag("none");
        setFlag2("none");
        break;
      }
      
      default:
    }
  };

  return (
    <div className="container d-flex align-items-center text-center">
      <div style={{ display: flag }}>
        <p>Ban da login!</p>
        <button onClick={() => submit("logout")}>Logout</button>
      </div>
      <div>
        <div style={{ display: flag2 }}>
          <p>Sai mat khau hoac ten dang nhap!</p>
          <button onClick={() => submit("back")}>Back</button>
        </div>
      </div>

      <div className="form-signin" style={{ display: status }}>
        <div>
          <img
            className="mb-4"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/2560px-Bootstrap_logo.svg.png"
            alt=""
            width="72"
            height="57"
          />
          <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
          <div className="form-floating">
            <input
              className="form-control email"
              type="email"
              name="email"
              placeholder="name@example.com"
              onKeyUp={(e) => getData(e)}
              required
            />
            <label>Email address</label>
          </div>
          <div className="form-floating">
            <input
              className="form-control password"
              type="password"
              name="password"
              placeholder="Password"
              onKeyUp={(e) => getData(e)}
              required
            />
            <label>Password</label>
          </div>
          <button
            className="w-100 btn btn-lg btn-primary"
            type="button"
            onClick={() => submit("login")}
          >
            Sign in
          </button>
          <p className="mt-5 mb-3 text-muted">© 2017–2021</p>
        </div>
      </div>
    </div>
  );
};

export default LoginLogout;
