import React ,{Dispatch} from 'react';
import {Action } from 'redux';
import {connect} from 'react-redux';
import {AppState} from '../../store/reducers/rootReducer';

import {fetchFootballMatches} from '../../store/actions/footballActions';
import {Football} from '../../models/Football';
import {MySpinner} from '../Spinner/Spinner';
import List from '../ListOfMatches/List'
import Ticket from '../Ticket/Ticket'

interface Props{
    fetchFootballMatches:Function,
    football_matches:Football[]
}

interface State{

}

class FootballPage extends React.Component<Props,State>{

    proba=()=>{
        console.log(this.props.football_matches);
        
    }   
    componentDidMount(){
        this.props.fetchFootballMatches();
        console.log("DID MOUNT");
    }

    render(){
        return(
            <div style={{textAlign:"center",marginTop:"60px",width:"100%",height:"100%",position:"absolute",
                         display:"table", clear: "both",  content:""}}>
                <h1>Football</h1>
                <div style={{ float:"left",width:"10%", padding:"10px",height:"500px"}}>
                    
                </div>
                {
                this.props.football_matches.length===1?
                <MySpinner/> : <List match_list={this.props.football_matches}/>
                }
                <div style={{ float:"left",width:"30%", padding:"10px",height:"500px",borderColor:"red"}}>
                    <Ticket></Ticket>
                </div>
            </div>
        )
    }
}

function mapDispatcherToProps(dispatch:Dispatch<Action>){
    return{
        fetchFootballMatches:()=>dispatch(fetchFootballMatches())
    }
}

function mapStateToProps(state:AppState){
    console.log(state);
    return{
        football_matches: state.football_matches
    }
}

export default connect(mapStateToProps,mapDispatcherToProps)(FootballPage);