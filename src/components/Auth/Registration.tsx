
import { Form,Button } from 'react-bootstrap'
import React ,{Dispatch} from 'react';
import {Action } from 'redux';
import {AppState} from '../../store/reducers/rootReducer';
import {connect} from 'react-redux'
import {register} from '../../store/actions/userAction'
import {Redirect} from 'react-router-dom'

import history from '../../history'

interface Props{
    register:Function
}

interface State{
    email:string,
    password:string,
    confpassword:string
}

class Registration extends React.Component<Props,State>{

    constructor(props:Props){
        super(props);
        this.state={
            email:"",
            password:"",
            confpassword:""
        }
    }

    handleSubmit=()=>{
        //handle error
        this.props.register(this.state.email,this.state.password);
        localStorage.setItem("LoggedSuccess", "true");
        history.push('/home')
    }

    handleChange=(event:React.FormEvent<HTMLInputElement>)=>{
        if(event.currentTarget.name==="email"){
            this.setState({"email":event.currentTarget.value})
        }else if(event.currentTarget.name==="password"){
            this.setState({"password":event.currentTarget.value})
        }else{
            this.setState({"confpassword":event.currentTarget.value})
        }
    }

    render(){
        const {email, password, confpassword} = this.state;

        if(localStorage.getItem("LoggedSuccess")) return <Redirect to="/home" />

        return(
            <div className="main">
                <div className="sideContainer">
                    
                </div>
                <div className="contentContainer">
                    <Form>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <p style={{marginBottom:"0"}}></p>
                            <input onChange={this.handleChange} name="email" value={email} type="email" placeholder="Enter email" className="inputControl"/>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <p style={{marginBottom:"0"}}></p>
                            <input onChange={this.handleChange} name="password" value={password} type="password" placeholder="Password" className="inputControl"/>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Confirm Password</Form.Label>
                            <p style={{marginBottom:"0"}}></p>
                            <input onChange={this.handleChange} name="confpassword" value={confpassword} type="password" placeholder="Confirm Password" className="inputControl"/>
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

function mapDispatcherToProps(dispatch:Dispatch<Action>){
    return{
        register:(email:string,password:string)=>dispatch(register(email,password)),
    }
}

export default connect(null,mapDispatcherToProps)(Registration);