import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <header className="navbar navbar-expand-lg navbar-dark bg-secondary">
            <nav className="container-fluid">
                <div className="navbar-brand">Google Books Search</div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li>
                            <Link className="nav-link" to="/">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link className="nav-link" to="/portfolio">
                                My Portfolio
                            </Link>
                        </li>
                    </ul>

                </div>
            </nav>
        </header>

    )
}

export default Navbar;