import '../../design/myDesign.css'

import { Container,Row,Col,Button,InputGroup,Form } from 'react-bootstrap';

import React, { Dispatch } from 'react';
import { Action } from 'redux';
import {connect} from 'react-redux';

import {postTicketToMyTickets} from '../../store/actions/myTicketAction'
import {setTicketIntialState} from '../../store/actions/ticketActions'
import {fetchFootballMatches} from '../../store/actions/footballActions'
import {fetchBasketballMatches} from '../../store/actions/basketballActions'

import { createBrowserHistory } from 'history';

import {TicketMatch} from '../../models/TicketMatch'
import {MyTickets} from '../../models/MyTickets'

import {AppState} from '../../store/reducers/rootReducer'

const his=createBrowserHistory();

interface Props{
    ticket:TicketMatch[],
    postTicketToMyTickets:Function,
    setTicketIntialState:Function,
    fetchFootballMatches:Function,
    fetchBasketballMatches:Function
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
            title:this.state.ticketName,
            win:this.state.win,
            matches:this.props.ticket
        }
        this.props.postTicketToMyTickets(myTicket);
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
        return(
            <div className="main">
                <h1 className="pageTitle ticketBackground" >E - Ticket</h1>
                <div className="sideContainer ticketBackground">
                    
                </div>
                {
                    this.props.ticket.length===0?
                    <div className="contentContainer " >
                    <Container>
                        <h4 style={{marginTop:"50px"}}>You have to add some mathes to your ticket.</h4>
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
                            <input onChange={this.handleMoneyChange} value={money} name="money" type="number" min="50" step="50" placeholder="50" />
                            <input onChange={this.handleNameChange} value={ticketName} name="name" type="text"  placeholder="Ticket Name" />
                        </Form>
                        {
                            this.state.enableError?
                            <p style={{color:"red"}}>Please set a price and ticket name.</p>
                            :
                            <p></p>
                        }
                        <Button variant="secondary" style={{margin:"20px"}} onClick={this.handleClick}>
                            Pay
                        </Button>
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
        postTicketToMyTickets:(mt:MyTickets)=>dispatch(postTicketToMyTickets(mt)),
        setTicketIntialState:()=>dispatch(setTicketIntialState()),
        fetchFootballMatches:()=>dispatch(fetchFootballMatches()),
        fetchBasketballMatches:()=>dispatch(fetchBasketballMatches())
    }
}

function mapStateToProps(state:AppState){
    console.log(state);
    return{
        ticket:state.ticket_matches
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Eticket);