
import { Form,Button } from 'react-bootstrap'
import {Redirect} from 'react-router-dom'
import React, { Dispatch } from 'react';
import {connect} from 'react-redux'
import { Action } from 'redux';
import {getUserWithEmailAndPassword} from '../../services/user-service'
import {setUser} from '../../store/actions/userAction'
import {User} from '../../models/User'
import history from '../../history'

interface Props{
    setUser:Function
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
        //handle error
        //call service
        getUserWithEmailAndPassword(this.state.email,this.state.password)
        .then(user=>{
            if(user[0]){ 
                localStorage.setItem("LoggedSuccess", "true");
                localStorage.setItem("UserId", user[0].id);
                console.log(user[0])
                this.props.setUser(user[0]);
                history.push('/home');
        }else{
                //error handle
        }
        });
    }

    handleChange=(event:React.FormEvent<HTMLInputElement>)=>{
        if(event.currentTarget.name==="email"){
            this.setState({"email":event.currentTarget.value})
        }else{
            this.setState({"password":event.currentTarget.value})
        }
    }

    render(){
        const {email, password} = this.state;

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

function mapDispatchToProps(dispatch:Dispatch<Action>){
    return{
        setUser:(user:User)=>dispatch(setUser(user)),
    }
}

export default connect(null,mapDispatchToProps)(Login);