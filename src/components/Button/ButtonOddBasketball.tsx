
import React, { Dispatch } from 'react';
import {Action } from 'redux';
import {connect} from 'react-redux';

import { Button } from 'react-bootstrap';
import {Basketball} from '../../models/Basketball';
import {TicketMatch} from '../../models/TicketMatch';

import {updateBasketballMatch} from '../../store/actions/basketballActions'
import {postMatchToTicket,deleteMatchFromTicket} from '../../store/actions/ticketActions';

interface Props{
    position:number,
    match:Basketball,
    updateBasketballMatch:Function,
    postMatchToTicket:Function,
    deleteMatchFromTicket:Function
}

interface State{
    buttonBackground:string
}

class ButtonOddBasketball extends React.Component<Props,State>{
    constructor(props:Props){
        super(props);
        this.state={
            buttonBackground:"#FFFFFF"
        }
    }

    setTicketMatch=(match:Basketball)=>{
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

            this.props.postMatchToTicket(ticketMatch);
            this.setState({buttonBackground:"#e7874f"});

        }else{
            matchVar.odds[position].includedodds=false;
            this.props.deleteMatchFromTicket(`${match.id}-${match.odds[position].finalscore}`)
           this.setState({buttonBackground:"#FFFFFF"});

        }
        this.props.updateBasketballMatch(matchVar);
    }

    render(){

        const {buttonBackground}=this.state;
        const {position,match}=this.props;

        return(
            <div>
            {
                match.odds[position].includedodds===false?
                <Button  onClick={this.handleClick}  variant="outline-warning" style={{backgroundColor:buttonBackground}}>
                    {match.odds[position].value}
                </Button>
                :
                <Button  onClick={this.handleClick}  variant="outline-warning" style={{backgroundColor:"#e7874f"}}>
                    {match.odds[position].value}
                </Button>
            }
            </div>
        )
    }
}

function mapDispatcherToProps(dispatch:Dispatch<Action>){
    return{
        updateBasketballMatch:(match:Basketball)=>dispatch(updateBasketballMatch(match)),
        postMatchToTicket:(ticketMatch:TicketMatch)=>dispatch(postMatchToTicket(ticketMatch)),
        deleteMatchFromTicket:(ticketMatchId:string)=>dispatch(deleteMatchFromTicket(ticketMatchId)),
    }
}
export default connect(null,mapDispatcherToProps)(ButtonOddBasketball);