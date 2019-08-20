
import { Form,Button } from 'react-bootstrap'
import React ,{Dispatch} from 'react';
import {Action } from 'redux';
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
    confpassword:string,
    error:boolean,
    passwordError:boolean
}

class Registration extends React.Component<Props,State>{

    constructor(props:Props){
        super(props);
        this.state={
            email:"",
            password:"",
            confpassword:"",
            error:false,
            passwordError:false
        }
    }

    handleSubmit=()=>{
        if(this.handleError() && this.handlePasswordError()){
                this.props.register(this.state.email,this.state.password);
                localStorage.setItem("LoggedSuccess", "true");
                history.push('/home') 
        }
    }

    handleError=()=>{
        if(this.state.email.length===0 || this.state.password.length===0 || this.state.confpassword.length===0){
            this.setState({error:true})
            return false;
        }
        return true
    }

    handlePasswordError=()=>{
        if(this.state.confpassword===this.state.password){
            return true;
        }
        this.setState({passwordError:true});
        return false;
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
        const {email, password, confpassword,error,passwordError} = this.state;

        if(localStorage.getItem("LoggedSuccess")) return <Redirect to="/home" />

        return(
            <div className="main">
                <div className="sideContainer">
                    
                </div>
                <div className="contentContainer">
                    <Form style={{backgroundColor:"#e3e3e3",borderRadius: "5px"}}>

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
                            {
                                passwordError?
                                <Form.Text style={{color:"#cc3300"}}>
                                Please check your password.
                                </Form.Text>
                                :
                                <p></p>
                            }
                            
                        </Form.Group>

                    </Form>
                    <Button variant="primary" onClick={this.handleSubmit}>
                        Submit
                    </Button>
                    {
                        error?
                        <p style={{color:"#cc3300", marginTop:"10px"}}>Please fill in all fields.</p>
                        :
                        <p></p>
                    }
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