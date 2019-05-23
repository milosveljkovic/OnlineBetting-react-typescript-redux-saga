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
                        </NavDropdown>
                    </Nav>
                </Navbar>
            </div>
        )
    }
}
export default Navigationbar;