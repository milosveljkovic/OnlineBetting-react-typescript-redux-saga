import React ,{Dispatch} from 'react';
import {Action } from 'redux';
import {connect} from 'react-redux';
import {AppState} from '../../store/reducers/rootReducer';
import '../../design/myDesign.css';
import {fetchFootballMatches} from '../../store/actions/footballActions';
import {Football} from '../../models/Football';
import {MySpinner} from '../Spinner/Spinner';
import List from '../ListOfMatches/List'

interface Props{
    fetchFootballMatches:Function,
    football_matches:Football[]
}

interface State{

}

class FootballPage extends React.Component<Props,State>{

    componentDidMount(){
        this.props.fetchFootballMatches();
    }

    render(){
        return(
            <div className="main">
                <h1 className="pageTitle footballBackground" >FOOTBALL</h1>
                <div className="sideContainer footballBackground">
                    
                </div>
                {
                this.props.football_matches.length===1?
                <MySpinner/> : <List match_list={this.props.football_matches}/>
                }
                 <div className="sideContainer footballBackground">
                    
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
    return{
        football_matches: state.football_matches
    }
}

export default connect(mapStateToProps,mapDispatcherToProps)(FootballPage);