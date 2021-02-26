import React from "react";
import {
  Navbar,
  Form,
  Nav,
  NavDropdown,
  FormControl,
  Button,
} from "react-bootstrap";
import useAuth from "../hooks/auth";
const MainLayout = (props) => {
  const [user, loading, fetchUser, logout] = useAuth();
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Users App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto"></Nav>
          {!loading && user && (
            <Form inline>
              <NavDropdown title={user.email} id="basic-nav-dropdown">
                <NavDropdown.Item
                  as={"a"}
                  href={process.env.REACT_APP_BACKEND_URL + "/auth/logout"}
                >
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            </Form>
          )}
        </Navbar.Collapse>
      </Navbar>
      {props.children}
    </>
  );
};

export default MainLayout;
