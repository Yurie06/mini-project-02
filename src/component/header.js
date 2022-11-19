import React from "react";
import { Link } from "react-router-dom"
// import SignUp from "./SignUp";

class Header extends React.Component {
    render() {
        return (
            <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                <div class="container-fluid">
                    <Link class="navbar-brand" to="/">SheltDraw</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarCollapse">
                    <ul class="navbar-nav me-auto mb-2 mb-md-0">
                        <li class="nav-item">
                        <Link class="nav-link" activeClassName="is-active" exact={true} to="/">Home</Link>
                        </li>
                        <li class="nav-item">
                        <Link class="nav-link" activeClassName="is-active" to="/services">Services</Link>
                        </li>
                        <li class="nav-item">
                        <Link class="nav-link" activeClassName="is-active" to="pricing">Pricing</Link>
                        </li>
                        <li class="nav-item">
                        <Link class="nav-link" activeClassName="is-active" to="gallery">Gallery</Link>
                        </li>
                        <li class="nav-item">
                        <Link class="nav-link" activeClassName="is-active" to="About">About Us</Link>
                        </li>
                    </ul>
                    <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Keyword" aria-label="Search" />
                        <div>
                        <button class="btn btn-outline-success" type="submit">Search</button>
                        </div>
                    </form>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Header;