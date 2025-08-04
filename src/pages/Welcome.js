import React from "react";
import { Link } from "react-router-dom";
import logo from '../logo.svg';

const Welcome = () => {
    return (
        <section
            style={{ display: "flex",flexDirection: "column",justifyContent: "center",alignItems: "center",minHeight: "100vh",padding: "30px" }}
        >
            <img src={logo} width={50} />
            <div
                style={{ border: "1px solid rgb(245, 247, 247)",borderRadius: "12px",textAlign: "left",maxWidth: "700px",boxShadow:"rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.1) 0px 8px 10px -6px",padding: "48px",marginTop: "20px" }}
            >
                <h1
                    style={{ marginBottom: "10px",fontSize: "32px",fontWeight: "600" }}
                >
                    Welcome to <span style={{ color: "rgb(0, 122, 255)" }}>Portfolio</span>
                </h1>
                <p style={{ marginBottom: "30px" }}>
                    You can get all the available routes from the here
                </p>
                <div>
                    <div
                        style={{ border: "1px dashed rgb(103, 127, 131)", borderRadius: "12px", padding: "32px", }}
                    >
                        <p style={{ fontSize: "14px", fontWeight: "600", marginBottom: "8px" }}>
                            Pages
                        </p>
                        <div style={{ display: "flex", gap: "8px" }}>
                                                    <Link
                                to="/index"
                                style={{ display: "inline-block", fontWeight: "600", lineHeight: "1.5", color: "#1e4148", textAlign: "center", cursor: "pointer", padding: "0.5rem 0.75rem", fontSize: "14px", borderRadius: "0.25rem", backgroundColor: "transparent", textDecoration: "none", border: "1px solid #dee4e4" }}
                            >
                            Home Page
                            </Link>
                                                </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Welcome;



