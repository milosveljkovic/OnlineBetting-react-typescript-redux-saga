import '../../design/myDesign.css'

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
            <div className="contentContainer "> 
                <div className="dataContainer dataContainerGreenShadow">
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
                        <div key={match.title} className="dataContainer dataContainerGreenShadow">
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