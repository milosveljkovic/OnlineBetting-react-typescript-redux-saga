import {Nav,Navbar,NavDropdown} from 'react-bootstrap';
import React  from 'react';
import {NavLink} from 'react-router-dom'

class Navigationbar extends React.Component{
    render(){
        return(
            <div>
                <Navbar fixed="top" bg="dark" variant="dark">
                    <Nav className="mr-auto">
                        <Nav.Link to="/home" as={NavLink}>Home</Nav.Link>
                        <NavDropdown title="Sports" id="collasible-nav-dropdown">
                            <NavDropdown.Item to="/football" as={NavLink}>Football</NavDropdown.Item>
                            <NavDropdown.Item to="/basketball" as={NavLink}>Basketball</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link to="/eticket" as={NavLink}>E-Ticket</Nav.Link>
                        <Nav.Link to="/mytickets" as={NavLink}>My Tickets</Nav.Link>
                        <Nav.Link to="/login" as={NavLink}>Login</Nav.Link>
                    </Nav>
                </Navbar>
            </div>
        )
    }
}
export default Navigationbar;