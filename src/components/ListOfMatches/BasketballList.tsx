import '../../design/myDesign.css'

import React from 'react';
import {Basketball} from '../../models/Basketball'
import { Container, Row,Col } from 'react-bootstrap';

import ButtonOddBasketball from '../Button/ButtonOddBasketball'

interface Props{
    basketball_match_list:Basketball[]
}

interface State{

}

class BasketballList extends React.Component<Props,State>{
    render(){
        return(
            <div className="contentContainer"> 
                <div className="dataContainer dataContainerOrangeShadow">
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
                this.props.basketball_match_list.map((match)=>{
                   return (
                        <div key={match.title} className="dataContainer dataContainerOrangeShadow">
                            <Container>
                                <Row>
                                    <Col xs={6}>{match.title}</Col>
                                    <Col xs={2}>
                                        <ButtonOddBasketball match={match} position={0}/>
                                    </Col>
                                    <Col xs={2}>
                                        <ButtonOddBasketball match={match} position={1}/>
                                    </Col>
                                    <Col xs={2}>
                                        <ButtonOddBasketball match={match} position={2}/>
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

export default BasketballList;