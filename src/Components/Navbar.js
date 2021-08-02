import React from 'react';
import {NavLink, withRouter}  from 'react-router-dom'

class Navbar extends React.Component {
    getNavLinkClass = (path) => {
        return this.props.location.pathname === path ? 'active' : '';
    }
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light" >
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className={this.getNavLinkClass("/"), "nav-item"}>
                                <NavLink className="nav-link" to="/">Inicio</NavLink>
                            </li>
                            <li className={this.getNavLinkClass("/natura"), "nav-item"}>
                                <NavLink className="nav-link" to="/natura">Natura</NavLink>
                            </li>
                            <li className={this.getNavLinkClass("/tupperware"), "nav-item"}>
                                <NavLink className="nav-link" to="/tupperware">Tupperware</NavLink>
                            </li>
                            <li className={this.getNavLinkClass("/contacto"), "nav-item"}>
                                <NavLink className="nav-link" to="/contacto">Contacto</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
};
Navbar = withRouter(Navbar);
export default Navbar;