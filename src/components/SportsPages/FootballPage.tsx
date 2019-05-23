import React ,{Dispatch} from 'react';
import {Action } from 'redux';
import {connect} from 'react-redux';
import {AppState} from '../../store/reducers/rootReducer';

import {fetchFootballMatches} from '../../store/actions/footballActions';
import {Football} from '../../models/Football';
import {MySpinner} from '../Spinner/Spinner';

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
            <div style={{textAlign:"center",marginTop:"50px",width:"100%",height:"100%"}} > 
                <h1>FootballPage</h1>
                {this.props.football_matches.length===1?
                <MySpinner/>: this.props.football_matches.map((match)=>{
                    console.log(match);
                    return (
                    <div key={match.title}
                    style={{boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",marginTop:"20px",borderRadius:"10px"}}>
                    <h1>{match.title}</h1> 
                    </div>
                    )
                })
                }
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