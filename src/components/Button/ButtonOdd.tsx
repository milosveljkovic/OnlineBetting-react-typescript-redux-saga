

import React, { Dispatch } from 'react';
import {Action } from 'redux';
import {connect} from 'react-redux';

import { Button } from 'react-bootstrap';
import {Football} from '../../models/Football';
import {TicketMatch} from '../../models/TicketMatch';
import { AppState } from '../../store/reducers/rootReducer';

import {updateFootballMatch} from '../../store/actions/footballActions'
import {postMatchToTicket,deleteMatchFromTicket} from '../../store/actions/ticketActions';

interface Props{
    position:number,
    match:Football,
    updateFootballMatch:Function,
    postMatchToTicket:Function,
    deleteMatchFromTicket:Function
}

interface State{
    match:Football,
    ticketMatch:TicketMatch
}

class ButtonOdd extends React.Component<Props,State>{

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

    setTicketMatch=(match:Football)=>{
        var ticketMatch=this.state.ticketMatch;
        ticketMatch.id=`${match.id}`
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
            console.log("BUTTON ODD-POST")

        }else{
            console.log("BUTTON ODD-DELETE")
            matchVar.odds[this.props.position].includedodds=false;
            this.props.deleteMatchFromTicket(`${this.props.match.id}`);
        }
        this.setState({match:matchVar});
        this.props.updateFootballMatch(matchVar);
    }

    render(){

        const {match}=this.state;
        const {position}=this.props;

        return(
            <div>
            {
                match.odds[position].includedodds===false?
                <Button  onClick={this.handleClick}variant="outline-success"style={{backgroundColor:"#FFFFFF"}}>
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
        postMatchToTicket:(ticketMatch:TicketMatch)=>dispatch(postMatchToTicket(ticketMatch)),
        deleteMatchFromTicket:(ticketMatchId:string)=>dispatch(deleteMatchFromTicket(ticketMatchId))
    }
}

function mapStateToProps(state:AppState){
    console.log(state);
    return{
        football_matches: state.football_matches
    }
}

export default connect(mapStateToProps,mapDispatcherToProps)(ButtonOdd);