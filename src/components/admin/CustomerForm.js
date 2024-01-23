import React, { useState } from "react";
import { axiosAuthInstance } from "../../axios";
import { useNavigate } from "react-router-dom";

const CustomerForm = ({ manageMenuState }) => {
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const [confirmPassword, setConfirmPass] = useState("");
  const [userRole, setuserRole] = useState("select");

  const navigate = useNavigate();

  const userType = localStorage.getItem("userType");

  const handleSubmit = (event) => {
    event.preventDefault();

    const admin = localStorage.getItem("adminAwestToken");
    let type = "";

    if (userRole === "admin") {
      type = 1;
    }
    if (userRole === "user") {
      type = 0;
    }

    console.log(type);
    // if (admin) {
    //   if (password === confirmPassword) {
    //     axiosAuthInstance({
    //       method: "post",
    //       url: "/admin/createUser",
    //       data: {
    //         email,
    //         password,
    //         type,
    //       },
    //     })
    //       .then((res) => {
    //         // if (res.data.statusCode == 403) {
    //         //   navigate("/admin/login");
    //         // }
    //         alert(res.data.status);
    //       })
    //       .catch((err) => {
    //         console.log(err);
    //       });
    //   } else {
    //     alert("wrong");
    //   }
    // } else {
    //   alert("not logged in");
    // }
  };

  return (
    <>
      <section className="home-section">
        <div className="home-content">
          <i
            className="bx bx-menu"
            onClick={manageMenuState}
            style={{ color: "#64c5b1" }}
          ></i>
          <span className="text"></span>
        </div>
      </section>
      <div
        className="main_content_iner overly_inner"
        style={{ maxHeight: "calc(100vh - 76px)" }}
      >
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="white_card card_height_100">
                <div className="white_card_header">
                  <div className="box_header m-0">
                    <div className="main-title">
                      <h3 className="mb-4">User Form</h3>
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-12">
                        <label className="form-label" htmlFor="email">
                          Email
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      <div className="col-12">
                        <label className="form-label" htmlFor="password">
                          Password
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          id="password"
                          onChange={(e) => setPass(e.target.value)}
                        />
                      </div>
                      <div className="col-12">
                        <label className="form-label" htmlFor="confirmPassword">
                          Confirm Password
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          id="confirmPassword"
                          onChange={(e) => setConfirmPass(e.target.value)}
                        />
                      </div>
                      {userType === "superAdmin" || userType=== "admin" ? (
                        <div className="col-12">
                          <label className="form-label" htmlFor="userRole">
                            User Role
                          </label>
                          <select
                            className="form-select"
                            id="userRole"
                            onChange={(e) => setuserRole(e.target.value)}
                          >
                            <option value="" disabled>
                              Select a role
                            </option>
                            {userType === "superAdmin" ? (
                              <option value="admin">Admin</option>
                            ) : (
                              ""
                            )}
                            <option value="user">User</option>
                          </select>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                    <div className="d-flex justify-content-center mt-3">
                      <button
                        style={{ background: "#64C5B1", color: "white" }}
                        type="button"
                        className="btn px-5"
                        onClick={handleSubmit}
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomerForm;
