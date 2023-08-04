import React, { useState } from "react";
import "../../assets/css/style.css";
import { useNavigate } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { axiosInstance } from "../../axios";

export const AdminLogin = () => {
    const [passwordShow, setPasswordShow] = useState(false)
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    let navigate = useNavigate();

    const HandleSubmit = (event) => {
        event.preventDefault();
        axiosInstance({
            method: "post",
            url: "admin/signin",
            data: {
                email,
                password
            }
        }).then(res => {
            localStorage.setItem("adminAwestToken", res.data.token)
            localStorage.setItem("isLoggedIn", true);
            navigate("/admin/")
            console.log(res)
        }).catch(err => console.log(err))
    };

    return (
        <>
            <div className="">
                <div className="item">
                    <div style={{ marginTop: "8%", textAlign: "center" }}>
                        <h1
                            style={{ fontWeight: "600", color: "#2D7768", fontSize: "32px" }}
                        >
                            ADMIN LOGIN
                        </h1>
                        <form
                            onSubmit={(e) => {
                                HandleSubmit(e);
                            }}
                        >
                            <div style={{ margin: "3%" }}>
                                <label style={{ color: "#8f8f8f" }}>EMAIL</label>
                                <br />
                                <input
                                    style={{
                                        border: "none",
                                        borderBottom: "1px solid #8f8f8f",
                                        padding: "1%",
                                        width: "45%",
                                    }}
                                    type="text"
                                    value={email}
                                    onChange={(event) => setEmail(event.target.value)}
                                />
                            </div>
                            <div style={{ margin: "3%" }}>
                                <label style={{ color: "#8f8f8f" }}>PASSWORD</label>
                                <br />
                                <div style={{ borderBottom: "1px solid #8f8f8f", width: "46%", marginLeft: "27%", display: "flex", justifyContent: "space-between" }}>
                                    <input
                                        style={{
                                            border: "none",
                                            padding: "1%",
                                            width: "100%",
                                        }}
                                        type={passwordShow ? "text" : "password"}
                                        value={password}
                                        onChange={(event) => setPassword(event.target.value)}
                                    />
                                    <div>
                                        {passwordShow ? <AiFillEyeInvisible size={20} onClick={() => setPasswordShow(!passwordShow)} /> : <AiFillEye size={20} onClick={() => setPasswordShow(!passwordShow)} />}
                                    </div>
                                </div>
                            </div>

                            {/* <div style={{ marginTop: "2%", color: "#8f8f8f" }}>
                                Forget Password?
                            </div> */}
                            <div style={{ marginTop: "3%" }}>
                                <button
                                    className="signIn-fill"
                                    style={{
                                        width: "45%",
                                        padding: "1.5%",
                                        backgroundColor: "#2D7768",
                                        border: "2px solid #2D7768",
                                        color: "white",
                                        borderRadius: "2rem",
                                    }}
                                >
                                    SIGN IN
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};
