
import { Form,Button } from 'react-bootstrap'

import React ,{Dispatch} from 'react';

interface Props{
    
}

interface State{

}

class Registration extends React.Component<Props,State>{

    render(){
        return(
            <div className="main">
                <div className="sideContainer homeBackground">
                    
                </div>
                <div className="contentContainer">
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group><Button variant="primary" type="submit">
                        Submit
                    </Button>
                    </Form>
                    
                </div>
                <div className="sideContainer homeBackground">
                    
                 </div>
            </div>
        )
    }
}

export default Registration;