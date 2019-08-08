import React ,{Dispatch} from 'react';
import {Action } from 'redux';
import {connect} from 'react-redux';
import {AppState} from '../../store/reducers/rootReducer';
import '../../design/myDesign.css';
import {Basketball} from '../../models/Basketball';
import {MySpinner} from '../Spinner/Spinner';
import BasketballList from '../ListOfMatches/BasketballList'
import {Redirect} from 'react-router-dom';

interface Props{
    basketball_matches:Basketball[]
}

interface State{

}

class BasketballPage extends React.Component<Props,State>{

    render(){

        const {basketball_matches} = this.props;

        if(!localStorage.getItem("LoggedSuccess")) return <Redirect to="/login" />

        return(
            <div className="main">
                <h1 className="pageTitle basketballBackground" >BASKETBALL</h1>
                <div className="sideContainer basketballBackground">
                    
                </div>
                {
                this.props.basketball_matches.length===0?
                <MySpinner/> : <BasketballList basketball_match_list={basketball_matches}/>
                }
                 <div className="sideContainer basketballBackground">
                    
                 </div>
            </div>
        )
    }
}

function mapStateToProps(state:AppState){
    return{
        basketball_matches: state.basketball_matches
    }
}

export default connect(mapStateToProps,null)(BasketballPage);