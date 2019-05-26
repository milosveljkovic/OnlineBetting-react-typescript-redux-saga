import { Container } from 'react-bootstrap';

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

    render(){
        return(
            <div style={{textAlign:"center",marginTop:"60px",width:"100%",height:"100%",position:"absolute",
                         display:"table", clear: "both",  content:""}}>
                <div style={{ float:"left",width:"30%", padding:"10px",height:"500px"}}>
                    
                    </div>
                    <div style={{ float:"left",width:"40%",height:"100%", padding:"10px",borderRadius:"5px",borderColor:"#B6B2B2", 
                                borderStyle:"solid"}}>
                    <h1>e - Ticket</h1>
                    <Container>
                    <h5>Odd: {this.getFinalOdd()}</h5>
                    </Container>
                    <Container>
                        {   
                            this.props.ticket.map((ticketmatch)=>{
                            return (
                                <div key={ticketmatch.title}>
                                    <p>{ticketmatch.title}</p>
                                </div>
                            )
                        })
                        }
                    </Container>
                </div>
                <div style={{ float:"left",width:"30%", padding:"10px",height:"500px"}}>
                    
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