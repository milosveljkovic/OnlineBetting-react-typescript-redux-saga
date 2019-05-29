import '../../design/myDesign.css'

import { Container,Row,Col,Button,InputGroup,FormControl } from 'react-bootstrap';

import React, { Dispatch } from 'react';
import { Action } from 'redux';
import {connect} from 'react-redux';

import {TicketMatch} from '../../models/TicketMatch'
import {fetchTicketMatches} from '../../store/actions/ticketActions'

import {AppState} from '../../store/reducers/rootReducer'

interface Props{
    ticket:TicketMatch[],
    fetchTicketMatches:Function
}

interface State{
}

class Ticket extends React.Component<Props,State>{


    componentDidMount(){
        this.props.fetchTicketMatches();
    }

    getFinalOdd=()=>{
        var mult=1;
        for(var i=0;i<this.props.ticket.length;i++){
            mult*=this.props.ticket[i].odd;
        }
        return mult;
    }

    handleClick=()=>{
        console.log("LALLA");
    }
    
    render(){
        return(
            <div className="main">
                <h1 className="pageTitle ticketBackground" >E - Ticket</h1>
                <div className="sideContainer ticketBackground">
                    
                </div>
                <div className="contentContainer " >
                <Container>
                <h4 style={{marginTop:"50px"}}>Odd: {this.getFinalOdd().toFixed(2)}</h4>
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
        fetchTicketMatches:()=>dispatch(fetchTicketMatches())
    }
}

function mapStateToProps(state:AppState){
    console.log(state);
    return{
        ticket:state.ticket_matches
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Ticket);