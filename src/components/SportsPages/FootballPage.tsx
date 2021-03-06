import React from 'react';
import {connect} from 'react-redux';
import {AppState} from '../../store/reducers/rootReducer';
import '../../design/myDesign.css';
import {Football} from '../../models/Football';
import {MySpinner} from '../Spinner/Spinner';
import List from '../ListOfMatches/List'
import {Redirect} from 'react-router-dom';

interface Props{
    football_matches:Football[]
}

interface State{

}

class FootballPage extends React.Component<Props,State>{

    render(){

        const {football_matches}=this.props;

        if(!localStorage.getItem("LoggedSuccess")) return <Redirect to="/login" />

        return(
            <div className="main">
                <h1 className="pageTitle footballBackground" >FOOTBALL</h1>
                <div className="sideContainer footballBackground">
                    
                </div>
                {
                football_matches.length===1?
                <MySpinner/> : <List match_list={football_matches}/>
                }
                 <div className="sideContainer footballBackground">
                    
                 </div>
            </div>
        )
    }
}

function mapStateToProps(state:AppState){
    return{
        football_matches: state.football_matches
    }
}

export default connect(mapStateToProps,null)(FootballPage);