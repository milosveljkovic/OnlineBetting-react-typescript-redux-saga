
import { Form,Button, FormControlProps } from 'react-bootstrap'

import React, { FormEvent } from 'react';
import { ReplaceProps, BsPrefixProps } from 'react-bootstrap/helpers';

interface Props{
    
}

interface State{
    email:string,
    password:string
}

class Login extends React.Component<Props,State>{

    constructor(props:Props){
        super(props);
        this.state={
            email:"",
            password:""
        }
    }

    handleSubmit=()=>{
        console.log(this.state.password)
        console.log(this.state.email);
    }

    handleChange=(event:React.FormEvent<HTMLInputElement>)=>{
        if(event.currentTarget.name==="email"){
            console.log("XD")
            this.setState({"email":event.currentTarget.value})

        }else{

            this.setState({"password":event.currentTarget.value})

        }
        
    }

    render(){
        const {email, password} = this.state;

        return(
            <div className="main">
                <div className="sideContainer">
                    
                </div>
                <div className="contentContainer">
                    <Form>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <input onChange={this.handleChange} name="email" value={email} type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <input onChange={this.handleChange} name="password" value={password} type="password" placeholder="Password" />
                        </Form.Group>

                    </Form>
                    <Button variant="primary" onClick={this.handleSubmit}>
                        Submit
                    </Button>
                </div>
                <div className="sideContainer ">
                    
                 </div>
            </div>
        )
    }
}

export default Login;