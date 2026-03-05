import React, { useEffect } from "react";
import "./App.css";

function Header() {
    return (
        <div>
            <nav className="navbar">
                <a href="/" className="navlinks">
                    Home
                </a>
                <a href="/Services" className="navlinks">
                    Services
                </a>
                <a href="/blog" className="navlinks">
                    Blog
                </a>
                <a href="/Login" className="navlinks">
                    Login
                </a>

                <a href="/create-enquiry" className="navlink">
                    Create Enquiry
                </a>
                <a href="/todo" className="navlinks">
                Todo list
                </a>
            </nav>
        </div>
    );
}

export default Header;
