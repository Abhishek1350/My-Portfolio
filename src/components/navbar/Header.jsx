import React, { useState } from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import logo from "../images/avtar.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faBriefcase, faBlog, faContactCard } from '@fortawesome/free-solid-svg-icons'
import './header.css'


const Header = () => {
    const [expanded, setExpanded] = useState(false);
    const [navClassList, setNavClassList] = useState("")
    window.onscroll = () => {
        window.scrollY > 20 ? setNavClassList("nav-sticky") : setNavClassList("")
    }
    return (
        <Navbar className={`navbar ${navClassList}`} expanded={expanded} fixed="top" expand="md" bg="dark" variant='dark'>
            <Container>
                <Navbar.Brand onClick={() => setExpanded(false)} as={NavLink} to="/"><img className='rounded-circle' style={{ width: "40px", filter: "invert(50%)" }} src={logo} alt="Abhishek" /></Navbar.Brand>
                <Navbar.Toggle onClick={() => setExpanded(expanded ? false : "expanded")} aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto" style={{
                        justifyContent: "center",
                        width: "100%",
                        alignItems: "center",
                        fontSize: "18px"
                    }}>
                        <Nav.Link style={{ padding: "0", margin: "10px 20px" }} onClick={() => setExpanded(false)} as={NavLink} to="/">  <FontAwesomeIcon icon={faHome} /> Home</Nav.Link>
                        <Nav.Link style={{ padding: "0", margin: "10px 20px" }} onClick={() => setExpanded(false)} as={NavLink} to="/about"> <FontAwesomeIcon icon={faUser} /> About</Nav.Link>
                        <Nav.Link style={{ padding: "0", margin: "10px 20px" }} onClick={() => setExpanded(false)} as={NavLink} to="/projects"> <FontAwesomeIcon icon={faBriefcase} /> Projects</Nav.Link>
                        <Nav.Link style={{ padding: "0", margin: "10px 20px" }} onClick={() => setExpanded(false)} as={NavLink} to="/blogs"> <FontAwesomeIcon icon={faBlog} /> Blogs</Nav.Link>
                        <Nav.Link style={{ padding: "0", margin: "10px 20px" }} onClick={() => setExpanded(false)} as={NavLink} to="/contact"> <FontAwesomeIcon icon={faContactCard} /> Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >

    )
}

export default Header