import React from 'react';
import {Football} from '../../models/Football'
import { Container, Row,Col } from 'react-bootstrap';

import ButtonOdd from '../Button/ButtonOdd'

interface Props{
    match_list:Football[]
}

interface State{

}

class List extends React.Component<Props,State>{
    render(){
        return(
            <div style={{ float:"left",width:"60%", padding:"10px"}}> 
                <div style={{boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                     marginTop:"20px",marginLeft:"40px",marginRight:"40px",textAlign:"center",
                     borderRadius:"5px",height:"25px",minWidth:"500px"}}>
                    <Container>
                        <Row>
                            <Col xs={6}>Home - Away</Col>
                            <Col xs={2}>1</Col>
                            <Col xs={2}>X</Col>
                            <Col xs={2}>2</Col>
                        </Row>
                    </Container>
                </div>
                {
                this.props.match_list.map((match)=>{
                   return (
                        <div key={match.title}
                        style={{boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                        marginTop:"20px",marginLeft:"40px",marginRight:"40px",textAlign:"center",
                        borderRadius:"5px",height:"40px",minWidth:"500px"}}>
                            <Container>
                                <Row>
                                    <Col xs={6}>{match.title}</Col>
                                    <Col xs={2}>
                                        <ButtonOdd match={match} position={0}/>
                                    </Col>
                                    <Col xs={2}>
                                        <ButtonOdd match={match} position={1}/>
                                    </Col>
                                    <Col xs={2}>
                                        <ButtonOdd match={match} position={2}/>
                                    </Col>
                                </Row>
                            </Container>
                        </div> 
                    )
                })
                }  
            </div>
        )
    }
}

export default List;