import React, { Component } from "react";
import Meta from "../Components/Meta";
import BreadCrumb from "../Components/BreadCrumb";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom"

import { withRouter } from 'react-router-dom';



import { useState } from "react";
import {  toast } from "react-toastify";
//import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import UserServise from "../services/UserServise";






  class LoginAsCustomer extends Component {
    
    constructor(props) {
        super(props)
        this.state ={
          
          email:'',
          password: ''
        }
        
        
        this.changeUserPasswordHandler=this.changeUserPasswordHandler.bind(this)
        this.changeEmailIdHandler=this.changeEmailIdHandler.bind(this)
        
      }
      
      changeUserPasswordHandler=(event)=>{
        this.setState({password:event.target.value});
      }
      changeEmailIdHandler=(event)=>{
        this.setState({email:event.target.value});
      }

      
      loginUser=(e)=>{
        e.preventDefault();
    let loginrequest={email:this.state.email,password:this.state.password};
    console.log("start");
    console.log('user=>'+JSON.stringify(loginrequest));
    console.log("end");
    
    UserServise.authenticateUser(loginrequest).then((result) => {
      console.log("result", result);
      this.props.history.push("/Home");

        //     if (result.data.role === "ADMIN") {
        //     console.log("Working fine:)");
        //     sessionStorage.setItem("active-admin", JSON.stringify(result));
        //   } else if (result.data.role === "CUSTOMER") {
        //     sessionStorage.setItem("active-customer", JSON.stringify(result));
        //   } else if (result.data.role === "EMPLOYEE") {
        //     sessionStorage.setItem("active-employee", JSON.stringify(result));
        //   }

        // toast.success("logged in successfully!!!", {
        //   position: "top-center",
        //   autoClose: 1000,
        //   hideProgressBar: false,
        //   closeOnClick: true,
        //   pauseOnHover: true,
        //   draggable: true,
        //   progress: undefined,
        // });

        this.props.history.push("/");
        //this.props.history.push('Home');

       
      });
    
    e.preventDefault();
  };

     render() {

  return (
    <>
      <Meta title={"title"} />
      <BreadCrumb title="Login" />

      <div className="login-wrapper py-5 home-wrapper">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Login</h3>
              <form action="" className="d-flex flex-column gap-15">
              <div className="form-group">
                <label> Email Id</label>
                <input placeholder="EmailId" name="emailId" className="form-control" 
                value={this.state.email} onChange={this.changeEmailIdHandler}/>
                </div>

              <div className="form-group">
                <label> User Password</label>
                <input placeholder="UserPassword" name="userPassword" className="form-control" 
                value={this.state.password} onChange={this.changeUserPasswordHandler}/>
                </div>

                  {/* <button className="btn btn-success" onClick={this.loginUser}>Login</button>
               */}

                <div>
                  <Link to="/forgot-password">Forgot Password</Link>
                  <div className="d-felx justify-content-center gap-15 align-items-center">
                  
                  <button className="btn btn-success" onClick={this.loginUser}>Login</button>
                  
                    <Link to="/signupascustomer" className="button signup">
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
}
export default LoginAsCustomer;

















// import React from "react";
// import Meta from "../Components/Meta";
// import BreadCrumb from "../Components/BreadCrumb";
// import { Link } from "react-router-dom";

// const Login = () => {
//   return (
//     <>
//       <Meta title={"title"} />
//       <BreadCrumb title="Login" />

//       <div className="login-wrapper py-5 home-wrapper">
//         <div className="row">
//           <div className="col-12">
//             <div className="auth-card">
//               <h3 className="text-center mb-3">Login As Customer</h3>
//               <form action="" className="d-flex flex-column gap-15">
//                 <div>
//                   <input
//                     type="text"
//                     name="email"
//                     placeholder="Email"
//                     className="form-control"
//                   />
//                 </div>

//                 <div className="mt-1 ">
//                   <input
//                     type="password"
//                     name="password"
//                     placeholder="Password"
//                     className="form-control"
//                   />
//                 </div>
//                 <div>
//                   <Link to="/forgot-password">Forgot Password</Link>
//                   <div className="d-felx justify-content-center gap-15 align-items-center">
//                     <button className="button border-0">Login</button>
//                     <Link to="/signupascustomer" className="button signup">
//                       Signup
//                     </Link>
//                   </div>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Login;
