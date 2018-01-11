import React from "react";
import { Link } from "react-router-dom";

const Header = function () {
    return (
        <div>
            <nav>
                <div className="nav-wrapper">
                    <a href="#" className="left brand-logo">Blog</a>
                    <ul className="right">
                        <li><Link to='/Authors'>Authors</Link></li>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/About'>About</Link></li>
                        <li><Link to='/Compose'>New Post</Link></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};
export default Header;