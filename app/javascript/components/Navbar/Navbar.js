import React from 'react'
import * as ReactBootStrap from 'react-bootstrap'
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const Nav = styled.div`
  padding-left: 100px;
`
const Navbar = () => {
  return (
    <Nav>
      <ReactBootStrap.Navbar bg="light" expand="lg">
        <ReactBootStrap.Navbar.Brand as={Link} to="/"><img src="https://cdn.hodinkee.com/assets/icon-hodinkee-logo-1a34bb8b68d63e2fc21a7bc5a2693b4e9f4bdd0d3d626abe4da4218ccf4aabe3.svg" width="200px" /></ReactBootStrap.Navbar.Brand>
        <ReactBootStrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
        <ReactBootStrap.Navbar.Collapse id="basic-navbar-nav">
          <ReactBootStrap.Nav className="mr-auto">
            <ReactBootStrap.Nav.Link as={Link} to="/local_articles">Local Articles</ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link as={Link} to="/remote_articles">Remote Articles</ReactBootStrap.Nav.Link>
          </ReactBootStrap.Nav>
        </ReactBootStrap.Navbar.Collapse>
      </ReactBootStrap.Navbar>
    </Nav>
  )
}

export default Navbar
