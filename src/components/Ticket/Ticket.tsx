import '../../design/myDesign.css'

import { Container,Row,Col,Button,InputGroup,Form } from 'react-bootstrap';

import React, { Dispatch } from 'react';
import { Route, Redirect } from 'react-router-dom'
import { Action } from 'redux';
import {connect} from 'react-redux';

import {putIntialState} from '../../store/actions/ticketActions'
import {putFootballMatchInitialState} from '../../store/actions/footballActions'
import {putBasketballMatchInitialState} from '../../store/actions/basketballActions'
import {postTicketToMyTickets} from '../../store/actions/myTicketAction'

import { createBrowserHistory } from 'history';
import {withRouter} from 'react-router-dom'

import {TicketMatch} from '../../models/TicketMatch'
import {Football} from '../../models/Football'
import {Basketball} from '../../models/Basketball'
import {MyTickets} from '../../models/MyTickets'



import {AppState} from '../../store/reducers/rootReducer'

const his=createBrowserHistory();

interface Props{
    ticket:TicketMatch[],
    football_matches:Football[],
    basketball_matches:Basketball[],
    putIntialState:Function,
    putFootballMatchInitialState:Function,
    putBasketballMatchInitialState:Function,
    postTicketToMyTickets:Function
}

interface State{
    money:number,
    win:number,
    ticketName:string
}

class Ticket extends React.Component<Props,State>{

    constructor(props:Props){
        super(props);
        this.state={
            money:0,
            win:0,
            ticketName:""
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

        var myTicket:MyTickets={
            id:0,
            title:this.state.ticketName,
            win:this.state.win,
            matches:this.props.ticket
        }
        this.props.postTicketToMyTickets(myTicket);

        
        this.props.putIntialState(this.props.ticket);

        var football:Football[]=this.props.football_matches
        football.map((match)=>{
            match.odds.map((odd)=>{
                odd.includedodds=false;
            })
        })
        this.props.putFootballMatchInitialState(football);

        var basketball:Basketball[]=this.props.basketball_matches
        basketball.map((match)=>{
            match.odds.map((odd)=>{
                odd.includedodds=false;
            })
        })
        this.props.putBasketballMatchInitialState(basketball);

        this.setState({money:50,win:50})
        
    }
    
    render(){
        const {money,win,ticketName}=this.state;
        return(
            <div className="main">
                <h1 className="pageTitle ticketBackground" >E - Ticket</h1>
                <div className="sideContainer ticketBackground">
                    
                </div>
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
                        <Button variant="secondary" style={{margin:"20px"}} onClick={this.handleClick}>
                            Pay
                        </Button>
                        <Form>
                            <input onChange={this.handleMoneyChange} value={money} name="money" type="number" min="50" step="50" placeholder="0" />
                            <input onChange={this.handleNameChange} value={ticketName} name="name" type="text"  placeholder="Ticket Name" />
                        </Form>
                        
                    </Container>
                </div>
                <div className="sideContainer ticketBackground">
                    
                </div>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch:Dispatch<Action>){
    return{
        putIntialState:(tm:TicketMatch[])=>dispatch(putIntialState(tm)),
        putFootballMatchInitialState:(fm:Football[])=>dispatch(putFootballMatchInitialState(fm)),
        putBasketballMatchInitialState:(bm:Basketball[])=>dispatch(putBasketballMatchInitialState(bm)),
        postTicketToMyTickets:(mt:MyTickets)=>dispatch(postTicketToMyTickets(mt))
    }
}

function mapStateToProps(state:AppState){
    console.log(state);
    return{
        ticket:state.ticket_matches,
        football_matches:state.football_matches,
        basketball_matches:state.basketball_matches
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Ticket);