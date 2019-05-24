import React from 'react';
import { Container } from 'react-bootstrap';




class Ticket extends React.Component{
    render(){
        return(
            <div style={{float:"left",width:"100%", padding:"10px",height:"500px",
                        borderStyle:"solid",borderColor:"#858181",borderRadius:"15px"}}>
                <h1>e - Ticket</h1>
                <Container>
                   <h5>Odd: 0.0</h5>
                </Container>
                <p>niz utakmica</p>
                <p>prikazi tiket</p>
            </div>
        )
    }
}

export default Ticket;