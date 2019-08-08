import {Nav,Navbar,NavDropdown} from 'react-bootstrap';
import React  from 'react';
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import {Action } from 'redux';
import {AppState} from '../../store/reducers/rootReducer';
import { User } from '../../models/User';
import history from '../../history'

interface Props{
    user:User
}

interface State{

}

class Navigationbar extends React.Component<Props,State>{

    handleLogout=()=>{
        localStorage.clear();
        setTimeout(function (){history.push("/login");}, 2000);
        window.location.reload();
    }

    render(){

        const {user}=this.props;

        return(
            <div>
                <Navbar fixed="top" bg="dark" variant="dark">
                    {
                    localStorage.getItem("LoggedSuccess")?
                        user.userOrAdmin==="user"?
                        <Nav className="mr-auto">
                            <Nav.Link to="/home" as={NavLink}>Home</Nav.Link>
                            <NavDropdown title="Sports" id="collasible-nav-dropdown">
                                <NavDropdown.Item to="/football" as={NavLink}>Football</NavDropdown.Item>
                                <NavDropdown.Item to="/basketball" as={NavLink}>Basketball</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link to="/eticket" as={NavLink}>E-Ticket</Nav.Link>
                            <Nav.Link to="/mytickets" as={NavLink}>My Tickets</Nav.Link>
                            <Nav.Link onClick={this.handleLogout}>Logout</Nav.Link>
                        </Nav>
                        :
                        <Nav className="mr-auto">
                            <Nav.Link to="/home" as={NavLink}>Home</Nav.Link>
                            <Nav.Link to="/addcredit" as={NavLink}>Add Credit</Nav.Link>
                            <Nav.Link onClick={this.handleLogout}>Logout</Nav.Link>
                        </Nav>
                    :
                    <Nav className="mr-auto">
                        <Nav.Link to="/login" as={NavLink}>Login</Nav.Link>
                        <Nav.Link to="/registration" as={NavLink}>Registration</Nav.Link>
                    </Nav>
                    }
                </Navbar>
            </div>
        )
    }
}

function mapStateToProps(state:AppState){
    return{
        user: state.user
    }
}

export default connect(mapStateToProps,null)(Navigationbar);