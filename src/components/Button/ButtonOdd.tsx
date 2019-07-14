

import React, { Dispatch } from 'react';
import {Action } from 'redux';
import {connect} from 'react-redux';

import { Button } from 'react-bootstrap';
import {Football} from '../../models/Football';
import {TicketMatch} from '../../models/TicketMatch';
import { AppState } from '../../store/reducers/rootReducer';

import {updateFootballMatch} from '../../store/actions/footballActions'
import {addMatchToTicket,removeMatchFromTicket} from '../../store/actions/ticketActions';

interface Props{
    position:number,
    match:Football,
    updateFootballMatch:Function,
    addMatchToTicket:Function,
    removeMatchFromTicket:Function
}

interface State{
    buttonBackground:string
}

class ButtonOdd extends React.Component<Props,State>{

    constructor(props:Props){
        super(props);
        this.state={
            buttonBackground:"#FFFFFF"
        }
    }

    setTicketMatch=(match:Football)=>{
        var ticketMatch:TicketMatch={
            id:`${match.id}-${match.odds[this.props.position].finalscore}`,
            title:match.title,
            finalscore:match.odds[this.props.position].finalscore,
            odd:match.odds[this.props.position].value
        }
        return ticketMatch;
    }

    handleClick=()=>{
        const {match,position} = this.props;
        var matchVar=match;
        if(!match.odds[position].includedodds){
            matchVar.odds[position].includedodds=true;

            var ticketMatch:TicketMatch;
            ticketMatch=this.setTicketMatch(match);

            this.props.addMatchToTicket(ticketMatch);
            this.setState({buttonBackground:"#92D67D"});

        }else{
            matchVar.odds[position].includedodds=false;
            this.props.removeMatchFromTicket(`${match.id}-${match.odds[position].finalscore}`)
           this.setState({buttonBackground:"#FFFFFF"});
        }
        this.props.updateFootballMatch(matchVar);
    }

    render(){

        const {buttonBackground}=this.state;
        const {position,match}=this.props;

        return(
            <div>
            {
                match.odds[position].includedodds===false?
                <Button  onClick={this.handleClick}variant="outline-success"style={{backgroundColor:buttonBackground}}>
                    {this.props.match.odds[position].value}
                </Button>
                :
                <Button  onClick={this.handleClick}variant="outline-success"style={{backgroundColor:"#92D67D"}}>
                    {match.odds[position].value}
                </Button>
            }
            </div>
        )
    }
}

function mapDispatcherToProps(dispatch:Dispatch<Action>){
    return{
        updateFootballMatch:(match:Football)=>dispatch(updateFootballMatch(match)),
        addMatchToTicket:(ticketMatch:TicketMatch)=>dispatch(addMatchToTicket(ticketMatch)),
        removeMatchFromTicket:(ticketMatchId:string)=>dispatch(removeMatchFromTicket(ticketMatchId))
    }
}

export default connect(null,mapDispatcherToProps)(ButtonOdd);