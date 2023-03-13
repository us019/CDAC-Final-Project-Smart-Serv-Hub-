import React from "react";
import Meta from "../Components/Meta";
// import BreadCrumb from "../component/BreadCrumb";
import BreadCrumb from "../Components/BreadCrumb";
import { Link } from "react-router-dom";
import { Component } from "react";
import UserServise from "../services/UserServise";

//const Signup = () => {
class SignupAsCustomer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      role: "CUSTOMER",

      address: {
        addressLine: "na",
        state: "na",
        city: "na",
        pincode: "na",
      },
    };

    this.changeNameHandler = this.changeNameHandler.bind(this);
    this.changeUserPasswordHandler = this.changeUserPasswordHandler.bind(this);
    this.changeEmailIdHandler = this.changeEmailIdHandler.bind(this);
    this.changeRoleHandler = this.changeRoleHandler.bind(this);
    this.changeAddressLineHandler = this.changeAddressLineHandler.bind(this);
    this.changeCityHandler = this.changeCityHandler.bind(this);
    this.changeStateHandler = this.changeStateHandler.bind(this);
    this.changePincodeHandler = this.changePincodeHandler.bind(this);
  }
  saveUser = (e) => {
    e.preventDefault();
    let user = {
      name: this.state.name,
      password: this.state.password,
      email: this.state.email,
      role: this.state.role,
      address: {
        addressLine: this.state.addressLine,
        state: this.state.state,
        city: this.state.city,
        pincode: this.state.pincode,
      },
    };
    console.log("start");
    console.log("user=>" + JSON.stringify(user));
    console.log("end");

    UserServise.createUser(user).then((res) => {
      this.props.history.push("/");
    });
  };
  changeNameHandler = (event) => {
    this.setState({ name: event.target.value });
  };
  changeUserPasswordHandler = (event) => {
    this.setState({ password: event.target.value });
  };
  changeEmailIdHandler = (event) => {
    this.setState({ email: event.target.value });
  };

  changeRoleHandler = (event) => {
    this.setState({ role: event.target.value });
  };
  changeAddressLineHandler = (event) => {
    this.setState({ addressLine: event.target.value });
  };
  changeCityHandler = (event) => {
    this.setState({ city: event.target.value });
  };
  changeStateHandler = (event) => {
    this.setState({ state: event.target.value });
  };
  changePincodeHandler = (event) => {
    this.setState({ pincode: event.target.value });
  };

  cancle() {
    this.props.history.push("/add-user");
  }

  render() {
    return (
      <>
        <Meta title={"title"} />
        <BreadCrumb title="Login" />

        <div className="login-wrapper py-5 home-wrapper">
          <div className="row">
            <div className="col-12">
              <div className="auth-card">
                <h3 className="text-center mb-3">Create Account</h3>
                <form action="/" className="d-flex flex-column gap-15">
                  <div className="card-body">
                    <div className="form-group">
                      <label> Name</label>
                      <input
                        placeholder="Name"
                        name="name"
                        className="form-control"
                        value={this.state.name}
                        onChange={this.changeNameHandler}
                      />
                    </div>

                    <div className="form-group">
                      <label> User Password</label>
                      <input
                        placeholder="UserPassword"
                        name="userPassword"
                        className="form-control"
                        value={this.state.password}
                        onChange={this.changeUserPasswordHandler}
                      />
                    </div>

                    <div className="form-group">
                      <label> Email Id</label>
                      <input
                        placeholder="EmailId"
                        name="emailId"
                        className="form-control"
                        value={this.state.email}
                        onChange={this.changeEmailIdHandler}
                      />
                    </div>

                    <div className="form-group">
                      <label> Role</label>
                      <select
                        class="form-select"
                        aria-label="Floating label select example"
                        onChange={this.changeRoleHandler}
                      >
                        <option value="CUSTOMER">CUSTOMER</option>
                        <option value="EMPLOYEE">EMPLOYEE</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label> AddressLine</label>
                      <input
                        placeholder="AddressLine"
                        name="addressLine"
                        className="form-control"
                        value={this.state.addressLine}
                        onChange={this.changeAddressLineHandler}
                      />
                    </div>
                    <div className="form-group">
                      <label> City</label>
                      <input
                        placeholder="Name"
                        name="name"
                        className="form-control"
                        value={this.state.city}
                        onChange={this.changeCityHandler}
                      />
                    </div>
                    <div className="form-group">
                      <label>State</label>
                      <input
                        placeholder="Name"
                        name="name"
                        className="form-control"
                        value={this.state.state}
                        onChange={this.changeStateHandler}
                      />
                    </div>

                    <div className="form-group">
                      <label> PIN</label>
                      <input
                        placeholder="PIN code"
                        name="pin"
                        className="form-control"
                        value={this.state.pincode}
                        onChange={this.changePincodeHandler}
                      />
                    </div>
                    {/* <Link to="/" className="button signup">
                                         Back to Home
                                         </Link> */}
                    <button className="btn btn-success" onClick={this.saveUser}>
                      Save
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={this.cancle.bind(this)}
                      style={{ marginLeft: "10px" }}
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default SignupAsCustomer;

// import React from "react";
// import Meta from "../Components/Meta";
// import BreadCrumb from "../Components/BreadCrumb";
// import { Link } from "react-router-dom";
// import { Component } from 'react';
// import UserServise from '../services/UserServise';
// import { useState } from "react";
// //import "react-toastify/dist/ReactToastify.css";
// import { ToastContainer, toast } from "react-toastify";

// const SignupAsCustomer = () => {

//   const [user, setUser] = useState({
//     name:'',
//     email:'',
//     password: '',
//     role: 'CUSTOMER',

//     address: {
//       addressLine: 'na',
//       state:'na',
//       city: 'na',
//       pincode:'na',
//     }
//        });

//        const handleUserInput = (e) => {
//         setUser({ ...user, [e.target.name]: e.target.value });
//       };

//       const saveUser = (event) => {
//       event.preventDefault();
//   let user={name:this.state.name,password:this.state.password,email:this.state.email,role:this.state.role,address:{addressLine:this.state.addressLine,state:this.state.state,city:this.state.city,pincode:this.state.pincode}};
//   console.log("start");
//   console.log('user=>'+JSON.stringify(user));
//   console.log("end");

//   UserServise.createUser(user).then((result) => {
//     console.log("******near toast thing");
//     toast.success("Registered Successfully!!!", {
//       position: "top-center",
//       autoClose: 1000,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//       progress: undefined,
//     });
//     console.warn("result", result);
//     result
//       .json()
//       .then((res) => {
//         console.log("response", res);
//       })
//       .catch((error) => {
//         console.log("******", error);
//         console.log(error);
//       });
//   });
// };

//     return (
//       <>
//         <Meta title={"title"} />
//         <BreadCrumb title="Login" />

//         <div className="login-wrapper py-5 home-wrapper">
//           <div className="row">
//             <div className="col-12">
//               <div className="auth-card">
//                 <h3 className="text-center mb-3">Create Account</h3>
//                 <form action="" className="d-flex flex-column gap-15">
//                            <div className="card-body">
//                                           <div className="form-group">
//                                           <label> Name</label>
//                                           <input placeholder="Name" name="name" className="form-control"
//                                           value={user.name} onChange={handleUserInput}/>
//                                           </div>

//                                           <div className="form-group">
//                                           <label> User Password</label>
//                                           <input placeholder="UserPassword" name="userPassword" className="form-control"
//                                           value={user.password} onChange={handleUserInput}/>
//                                           </div>

//                                           <div className="form-group">
//                                           <label> Email Id</label>
//                                           <input placeholder="EmailId" name="emailId" className="form-control"
//                                             value={user.email} onChange={handleUserInput}/>
//                                           </div>

//                                           <div className="form-group">
//                                           <label> Role</label>
//                                           <select class="form-select"  aria-label="Floating label select example"
//                         onChange={handleUserInput}>

//                         <option value="CUSTOMER">CUSTOMER</option>
//                         <option value="EMPLOYEE">EMPLOYEE</option>
//                         </select>
//                                           </div>

//                                           <div className="form-group">
//                                           <label> AddressLine</label>
//                                           <input placeholder="AddressLine" name="addressLine" className="form-control"
//                                           value={user.addressLine} onChange={handleUserInput}/>
//                                           </div>
//                                           <div className="form-group">
//                                           <label> City</label>
//                                           <input placeholder="Name" name="name" className="form-control"
//                                           value={user.city} onChange={handleUserInput}/>
//                                           </div>
//                                           <div className="form-group">
//                                           <label>State</label>
//                                           <input placeholder="Name" name="name" className="form-control"
//                                           value={user.state} onChange={handleUserInput}/>
//                                           </div>

//                                           <div className="form-group">
//                                           <label> PIN</label>
//                                           <input placeholder="PIN code" name="pin" className="form-control"
//                                           value={user.pincode}onChange={handleUserInput}/>
//                                           </div>

//                                           <button className="btn btn-success" onClick={saveUser}>Save</button>
//                                           <button className="btn btn-danger" onClick={this.cancle.bind(this)} style={{marginLeft:"10px"}}>Cancel</button>

//                                       </div>

//                                   </form>

//                               </div>
//             </div>
//           </div>
//         </div>
//       </>
//     );
//   };

//   export default SignupAsCustomer;
