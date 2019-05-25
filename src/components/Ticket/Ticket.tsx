import React from 'react';
import { Container } from 'react-bootstrap';

import {connect} from 'react-redux';
import {AppState} from '../../store/reducers/rootReducer'
import {TicketMatch} from '../../models/TicketMatch'

interface Props{
    ticket:TicketMatch[]
}

interface State{
}

class Ticket extends React.Component<Props,State>{
    render(){
        return(
            <div style={{float:"left",width:"100%", padding:"10px",height:"500px",
                        borderStyle:"solid",borderColor:"#858181",borderRadius:"15px"}}>
                <h1>e - Ticket</h1>
                <Container>
                   <h5>Odd: {}</h5>
                </Container>
                <p>niz utakmica</p>
                <p>prikazi tiket</p>
            </div>
        )
    }
}

function mapStateToProps(state:AppState){
    console.log(state);
    return{
        ticket:state.ticket_matches
    }
}

export default connect(mapStateToProps,null)(Ticket);