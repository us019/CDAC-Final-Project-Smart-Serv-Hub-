import React from "react";
import Meta from "../Components/Meta";
import BreadCrumb from "../Components/BreadCrumb";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <>
      <Meta title={"title"} />
      <BreadCrumb title="Login" />

      <div className="login-wrapper py-5 home-wrapper">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Create Account</h3>
              <form action="" className="d-flex flex-column gap-15">
                <div>
                  <input
                    type="Name"
                    name="Name"
                    placeholder="Name"
                    className="form-control"
                  />
                </div>
                <div>
                  <input
                    type="Password"
                    name="Password"
                    placeholder="Password"
                    className="form-control"
                  />
                </div>
                <div>
                  <input
                    type="confirm-password"
                    name="confirm-password"
                    placeholder="Confirm-password"
                    className="form-control"
                  />
                </div>
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
                  
                  <div className="d-felx justify-content-center gap-15 align-items-center">
                    <button className="button border-0" type="submit">Create</button>
                   
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

export default Signup;
