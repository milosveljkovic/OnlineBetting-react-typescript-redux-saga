import '../../design/myDesign.css'

import { Container,Row,Col,Button,Form } from 'react-bootstrap';

import React, { Dispatch } from 'react';
import { Action } from 'redux';
import {connect} from 'react-redux';

import {postTicketToMyTickets} from '../../store/actions/myTicketAction'
import {setTicketIntialState} from '../../store/actions/ticketActions'
import {fetchFootballMatches} from '../../store/actions/footballActions'
import {fetchBasketballMatches} from '../../store/actions/basketballActions'
import {updateUser} from '../../store/actions/userAction'

import {TicketMatch} from '../../models/TicketMatch'
import {MyTickets} from '../../models/MyTickets'
import {User} from '../../models/User'

import {AppState} from '../../store/reducers/rootReducer'
import {Redirect} from 'react-router-dom'

interface Props{
    ticket:TicketMatch[],
    user:User,
    postTicketToMyTickets:Function,
    setTicketIntialState:Function,
    fetchFootballMatches:Function,
    fetchBasketballMatches:Function,
    updateUser:Function
}

interface State{
    money:number,
    win:number,
    ticketName:string,
    enableError:boolean
}

class Eticket extends React.Component<Props,State>{

    constructor(props:Props){
        super(props);
        this.state={
            money:0,
            win:0,
            ticketName:"",
            enableError:false
        }
    }

    getFinalOdd=()=>{
        var mult=1;
        for(var i=0;i<this.props.ticket.length;i++){
            mult*=this.props.ticket[i].odd;
        }
        return mult;
    }

    handleMoneyChange=(event:React.ChangeEvent<HTMLInputElement>)=>{
        var n=+event.target.value
        var odd:number=this.getFinalOdd();
        this.setState({money:n,win:n*odd})
    }

    handleNameChange=(event:React.ChangeEvent<HTMLInputElement>)=>{
        this.setState({ticketName:event.target.value})
    }

    handleClick=()=>{
        if(this.handleError()){
        var myTicket:MyTickets={
            id:0,
            userId:this.props.user.id,
            title:this.state.ticketName,
            win:this.state.win,
            matches:this.props.ticket
        }
        this.props.postTicketToMyTickets(myTicket);

        var updatedUser:User=this.props.user;
        updatedUser.credit-=this.state.money;
        this.props.updateUser(updatedUser);

        this.props.fetchFootballMatches();
        this.props.fetchBasketballMatches();
        this.props.setTicketIntialState();
    }else{
        this.setState({enableError:true})
    }
    }
    
    handleError=()=>{
        return (this.state.ticketName.length===0 || this.state.money===0)?false:true
    }

    render(){

        const {money,win,ticketName}=this.state;
        const {user} = this.props;

        if(!localStorage.getItem("LoggedSuccess")) return <Redirect to="/login" />

        return(
            <div className="main">
                <h1 className="pageTitle ticketBackground" >
                    E - Ticket
                </h1>
                <h4 className="ticketBackground" style={{ color: "#ffffff",fontFamily: "Arial, Helvetica, sans-serif",marginBottom:"1px"}}>
                    Available credit: {user.credit} | User id:{user.id}
                </h4>
                <div className="sideContainer ticketBackground">
                
                </div>
                {
                    this.props.ticket.length===0?
                    <div className="contentContainer " >
                    <Container>
                        <h4 style={{marginTop:"50px"}}>You have to add some matches to your ticket.</h4>
                    </Container>
                    </div>
                    :
                    <div className="contentContainer " >
                    <Container>
                        <h4 style={{marginTop:"50px"}}>Odd: {this.getFinalOdd().toFixed(2)} Win:{win.toFixed(2)} - {ticketName}</h4>
                    </Container>
                    <Container>
                        {   
                            this.props.ticket.map((ticketmatch)=>{
                            return (
                                <div key={ticketmatch.id} className="dataContainer dataContainerTickectShadow">
                                    <Container>
                                            <Row>
                                                <Col xs={6}>
                                                {ticketmatch.title}
                                                </Col>
                                                <Col xs={3}>                
                                                {ticketmatch.finalscore}
                                                </Col>
                                                <Col xs={3}>                
                                                {ticketmatch.odd}                                            
                                                </Col>
                                            </Row>
                                    </Container>   
                                </div>
                            )
                        })
                        }
                    </Container>
                    <Container>
                        <p></p>
                        <Form>
                            <input onChange={this.handleMoneyChange} value={money} name="money" type="number" min="50" max={this.props.user.credit} step="50" placeholder="50" />
                            <input onChange={this.handleNameChange} value={ticketName} name="name" type="text"  placeholder="Ticket Name" />
                        </Form>
                        {
                            this.state.enableError?
                            <p style={{color:"red"}}>Please set a price and ticket name.</p>
                            :
                            <p></p>
                        }
                        {
                            this.props.user.credit<50?
                            <p style={{color:"red"}}>*Please add credit.*</p>
                            :
                            <Button variant="secondary" style={{margin:"20px"}} onClick={this.handleClick}>
                                Pay
                            </Button>
                        }
                        
                    </Container>
                </div>
                }
                
                <div className="sideContainer ticketBackground">
                    
                </div>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch:Dispatch<Action>){
    return{
        postTicketToMyTickets:(myticket:MyTickets)=>dispatch(postTicketToMyTickets(myticket)),
        setTicketIntialState:()=>dispatch(setTicketIntialState()),
        fetchFootballMatches:()=>dispatch(fetchFootballMatches()),
        fetchBasketballMatches:()=>dispatch(fetchBasketballMatches()),
        updateUser:(user:User)=>dispatch(updateUser(user))
    }
}

function mapStateToProps(state:AppState){
    console.log(state);
    return{
        ticket:state.ticket_matches,
        user:state.user
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Eticket);