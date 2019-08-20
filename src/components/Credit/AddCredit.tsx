import React ,{Dispatch} from 'react';
import { Action } from 'redux';
import { Container,Button,Form } from 'react-bootstrap';
import {connect} from 'react-redux'
import {getUserByIdService} from '../../services/user-service'
import {User} from '../../models/User'
import {AppState} from '../../store/reducers/rootReducer'
import {updateUser} from '../../store/actions/userAction'
import {Redirect} from 'react-router-dom'

interface Props{
    updateUser:Function,
    user:User
}

interface State{
    userId:number,
    credit:number,
    error:boolean,
    wrongId:boolean,
    success:boolean
}

class AddCredit extends React.Component<Props,State>{

    constructor(props:Props){
        super(props);
        this.state={
            userId:0,
            credit:0,
            error:false,
            wrongId:false,
            success:false
        }
    }

    handleUserIdChange=(event:React.ChangeEvent<HTMLInputElement>)=>{
        //error handle if isnt a number
        var id=+event.target.value;
        this.setState({userId:id});
    }

    handleCreditChange=(event:React.ChangeEvent<HTMLInputElement>)=>{
        var newcredit=+event.target.value;
        this.setState({credit:newcredit});
    }

    handleClick=()=>{
        if(this.handleError()){
            getUserByIdService(this.state.userId)
            .then(user=>{
                if(user[0]){
                    var currentUser:User=user[0];
                    currentUser.credit=user[0].credit+this.state.credit;
                    this.props.updateUser(currentUser);
                    this.setState({error:false,wrongId:false,success:true})
                }else{
                    this.setState({wrongId:true})
                }
            })
        }else{
            this.setState({error:true})
        }
    }

    handleError=()=>{
        return this.state.credit===0?
        false
        :
        this.state.userId===0?
        false
        :
        true
    }

    render(){

        const {userId,credit,wrongId,success}=this.state;

        if(this.props.user.userOrAdmin==="user"){return <Redirect to="/home" /> }

        if(!localStorage.getItem("LoggedSuccess")) { return <Redirect to="/login" />}

        return(
            <div className="main">
                <h1 className="pageTitle ticketBackground" >Add credit to user</h1>
                <div className="sideContainer ticketBackground">
                    
                </div>
                <div className="contentContainer">
                    <Container>
                        <p></p>
                        <Form>
                            <span>User id: </span>
                            <input onChange={this.handleUserIdChange} value={userId} name="userId" type="text"  placeholder="User Id" />
                            <div style={{margin:"5px"}}>
                            </div>
                            <span>
                                Credit: &nbsp; 
                            </span>
                            <input onChange={this.handleCreditChange} value={credit} name="credit" type="number"  min="50" step="50" placeholder="0" />
                        </Form>
                        {
                            this.state.error?
                            <p style={{color:"#cc3300"}}>Please set id and credit.</p>
                            :
                            <p></p>
                        }
                        {
                            wrongId?
                            <p style={{color:"#cc3300"}}>Inccorect ID. Please try again.</p>
                            :
                            <p></p>
                        }
                        {
                            success?
                            <p style={{color:"#339900"}}>Success!</p>
                            :
                            <p></p>
                        }
                        <Button variant="secondary" style={{margin:"20px"}} onClick={this.handleClick}>
                            Add Credit
                        </Button>
                    </Container>
                </div>
                <div className="sideContainer ticketBackground">
                    
                </div>
            </div>
        )
    }
}

function mapStateToProps(state:AppState){
    return{
        user:state.user
    }
}

function mapDispatchToProps(dispatch:Dispatch<Action>){
    return{
        updateUser:(user:User)=>dispatch(updateUser(user))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AddCredit);