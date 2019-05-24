

import React, { Dispatch } from 'react';
import {Action } from 'redux';
import {connect} from 'react-redux';

import { Button } from 'react-bootstrap';
import {Football} from '../../models/Football';
import {TicketMatch} from '../../models/TicketMatch';
import { AppState } from '../../store/reducers/rootReducer';

import {updateMatch} from '../../store/actions/footballActions'
import {postMatchToTicket} from '../../store/actions/ticketActions';

interface Props{
    position:number,
    match:Football,
    updateMatch:Function,
    postMatchToTicket:Function
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
                id:0,
                title:"A",
                finalscore:"X",
                odd:2
            }
        }
    }

    handleClick=()=>{
        var matchVar=this.state.match;
        if(!this.state.match.odds[this.props.position].includedodds){
            matchVar.odds[this.props.position].includedodds=true;

            var ticketMatch=this.state.ticketMatch;
            ticketMatch.title=this.props.match.title;
            ticketMatch.finalscore=this.props.match.odds[this.props.position].finalscore;
            ticketMatch.odd=this.props.match.odds[this.props.position].value;

            this.props.postMatchToTicket(ticketMatch);
        }else{
            matchVar.odds[this.props.position].includedodds=false;
        }
        this.setState({match:matchVar});
        this.props.updateMatch(matchVar);
    }

    render(){
        return(
            <div>
            {
                this.state.match.odds[this.props.position].includedodds===false?
                <Button  onClick={this.handleClick}variant="outline-success"style={{backgroundColor:"#FFFFFF"}}>
                    {this.props.match.odds[this.props.position].value}
                </Button>
                :
                <Button  onClick={this.handleClick}variant="outline-success"style={{backgroundColor:"#92D67D"}}>
                    {this.props.match.odds[this.props.position].value}
                </Button>
            }
            </div>
        )
    }
}

function mapDispatcherToProps(dispatch:Dispatch<Action>){
    return{
        updateMatch:(match:Football)=>dispatch(updateMatch(match)),
        postMatchToTicket:(ticketMatch:TicketMatch)=>dispatch(postMatchToTicket(ticketMatch))
    }
}

function mapStateToProps(state:AppState){
    console.log(state);
    return{
        football_matches: state.football_matches
    }
}

export default connect(mapStateToProps,mapDispatcherToProps)(ButtonOdd);