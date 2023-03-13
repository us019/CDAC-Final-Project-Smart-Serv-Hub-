import React from "react";
import Meta from "../Components/Meta";
import BreadCrumb from "../Components/BreadCrumb";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <Meta title={"title"} />
      <BreadCrumb title="Login" />

      <div className="login-wrapper py-5 home-wrapper">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Login As Employee</h3>
              <form action="" className="d-flex flex-column gap-15">
                <div>
                  <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    className="form-control"
                  />
                </div>

                <div className="mt-1 ">
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="form-control"
                  />
                </div>
                <div>
                  <Link to="/forgot-password">Forgot Password</Link>
                  <div className="d-felx justify-content-center gap-15 align-items-center">
                    <button className="button border-0">Login</button>
                    <Link to="/signupasemployee" className="button signup">
                      Signup
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
