import React, { Component } from "react";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./index.css";
import { Navbar, NavbarBrand, Nav, Collapse, NavItem } from "reactstrap";
import NavLink from "react-router-dom/NavLink";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: false,
    };
    this.toggleNav = this.toggleNav.bind(this);
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  }

  render() {
    return (
      <>
        <div className="header-top text-white">
          <div className="container">
            <div className="row">
              <div className="col-6 top-address">
                <div className="row">
                  <div className="col-6">
                    <span className="fa fa-light fa-envelope fa-sm"></span>{" "}
                    Company Address type here
                  </div>
                  <div className="col-6">
                    <span className="fa fa-phone fa-sm"></span> +94 000 00000
                  </div>
                </div>
              </div>
              <div className="offset-1 col-5 ">
                <div className="row">
                  <div className="col-3 col-lg-2 offset-lg-1 col-xl-3 offset-xl-0 ht-l">
                    English <span className="fa fa-solid fa-angle-down"></span>
                  </div>
                  <div className="col-3 col-lg-2 offset-lg-1 col-xl-3 offset-xl-0 ht-l">
                    USD <span className="fa fa-solid fa-angle-down"></span>
                  </div>
                  <div className="col-3 col-lg-2 offset-lg-1 col-xl-3 offset-xl-0 ht-l">
                    Login <span className="fa fa-sharp fa-sign-in"></span>
                  </div>
                  <div className="col-3 col-lg-2 offset-lg-1 col-xl-3 offset-xl-0 ht-l">
                    Whishlist <span className="fa fa-regular fa-heart "></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Navbar expand="lg header-top bg-white">
          <div className="container">
            <button
              onClick={this.toggleNav}
              className="mr-2 toggle-button navbar-toggler"
            >
              <span className="fa fa-solid fa-bars"></span>
            </button>
            <NavbarBrand className="mr-auto navbar-logo" href="/home">
              <b>Hekto</b>
            </NavbarBrand>
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav navbar className="offset-2">
                <NavItem>
                  <NavLink className="nav-link" to="/home">
                    <span className="fa fa-home fa-lg mt-2"> Home</span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/aboutus">
                    <NavDropdown
                      className="fa fa-lg"
                      title="&#xf129; Pages" //font awesome code inside title
                    >
                      <NavLink className="nav-link sub-nav" to="/shopGrid">
                      <NavDropdown.Item className="faas" href="/shopGrid">
                      Ecommerce Accesories & Fashion item
                      </NavDropdown.Item>
                      </NavLink>
                      <NavLink className="nav-link sub-nav" to="/shopGrid">
                      <NavDropdown.Item className="faas" href="/shopGrid">
                        Electronics Items
                      </NavDropdown.Item>
                      </NavLink>
                      <NavLink className="nav-link sub-nav" to="/shopGrid">
                      <NavDropdown.Item className="faas" href="/shopGrid">
                      Fashion items
                      </NavDropdown.Item>
                      </NavLink>
                      <NavDropdown.Divider />
                      <NavLink className="nav-link sub-nav" to="/shopGrid">
                      <NavDropdown.Item className="faas" href="/shopGrid">
                       Trending Products
                      </NavDropdown.Item>
                      </NavLink>
                    </NavDropdown>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/shopGrid">
                    <span className="fa fa-list fa-lg mt-2"> Products</span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/shopGrid">
                    <span className="fa fa-address-card fa-lg mt-2"> Blog</span>
                  </NavLink>
                </NavItem>
              </Nav>
              <Nav className="ml-auto" navbar>
                <form class="form-inline my-2 my-lg-0">
                  <input
                    class="form-control mr-sm-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button
                    class="btn btn-outline-success my-2 my-sm-0"
                    type="submit"
                  >
                    <span className="fa fa-lg fa-search"></span>
                  </button>
                </form>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
      </>
    );
  }
}

export default Header;
