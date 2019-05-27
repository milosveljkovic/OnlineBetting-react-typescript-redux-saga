

import React, { Dispatch } from 'react';
import {Action } from 'redux';
import {connect} from 'react-redux';

import { Button } from 'react-bootstrap';
import {Basketball} from '../../models/Basketball';
import {TicketMatch} from '../../models/TicketMatch';
import { AppState } from '../../store/reducers/rootReducer';

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
    match:Basketball,
    ticketMatch:TicketMatch
}

class ButtonOddBasketball extends React.Component<Props,State>{

    constructor(props:Props){
        super(props);
        this.state={
            match:this.props.match,
            ticketMatch:{
                id:"0",
                title:"A",
                finalscore:"X",
                odd:2
            }
        }
    }

    setTicketMatch=(match:Basketball)=>{
        var ticketMatch=this.state.ticketMatch;
        ticketMatch.id=`${match.title}-${match.odds[this.props.position].finalscore}`
        ticketMatch.title=match.title;
        ticketMatch.finalscore=match.odds[this.props.position].finalscore;
        ticketMatch.odd=match.odds[this.props.position].value;
        return ticketMatch;
    }

    handleClick=()=>{
        var matchVar=this.state.match;
        if(!this.state.match.odds[this.props.position].includedodds){
            matchVar.odds[this.props.position].includedodds=true;

            var ticketMatch=this.state.ticketMatch;
            ticketMatch=this.setTicketMatch(this.props.match);

            this.props.postMatchToTicket(ticketMatch);
            console.log("BUTTON ODD BASKETBALL-POST")

        }else{
            console.log("BUTTON ODD BASKETBALL-DELETE")
            matchVar.odds[this.props.position].includedodds=false;
            this.props.deleteMatchFromTicket(`${this.props.match.title}-${this.props.match.odds[this.props.position].finalscore}`)
        }
        this.setState({match:matchVar});
        this.props.updateBasketballMatch(matchVar);
    }

    render(){

        const {match}=this.state;
        const {position}=this.props;

        return(
            <div>
            {
                match.odds[position].includedodds===false?
                <Button  onClick={this.handleClick}  variant="outline-warning" style={{backgroundColor:"#FFFFFF"}}>
                    {this.props.match.odds[position].value}
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
        deleteMatchFromTicket:(ticketMatchId:string)=>dispatch(deleteMatchFromTicket(ticketMatchId))
    }
}

function mapStateToProps(state:AppState){
    console.log(state);
    return{
        basketball_matches: state.basketball_matches
    }
}

export default connect(mapStateToProps,mapDispatcherToProps)(ButtonOddBasketball);