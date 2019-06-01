import {Nav,Navbar,NavDropdown} from 'react-bootstrap';
import React  from 'react';

class Navigationbar extends React.Component{
    render(){
        return(
            <div>
                <Navbar fixed="top" bg="dark" variant="dark">
                    <Nav className="mr-auto">
                        <Nav.Link href="home">Home</Nav.Link>
                        <NavDropdown title="Sports" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="/football" >Football</NavDropdown.Item>
                            <NavDropdown.Item href="/basketball" >Basketball</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="ticket">My Ticket</Nav.Link>
                        <Nav.Link href="mytickets">My Ticket</Nav.Link>
                    </Nav>
                </Navbar>
            </div>
        )
    }
}
export default Navigationbar;