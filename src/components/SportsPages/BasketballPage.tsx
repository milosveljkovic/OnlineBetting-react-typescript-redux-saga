import React ,{Dispatch} from 'react';
import {Action } from 'redux';
import {connect} from 'react-redux';
import {AppState} from '../../store/reducers/rootReducer';
import '../../design/myDesign.css';
import {fetchBasketballMatches} from '../../store/actions/basketballActions';
import {Basketball} from '../../models/Basketball';
import {MySpinner} from '../Spinner/Spinner';
import BasketballList from '../ListOfMatches/BasketballList'

interface Props{
    fetchBasketballMatches:Function,
    basketball_matches:Basketball[]
}

interface State{

}

class BasketballPage extends React.Component<Props,State>{

    componentDidMount(){
        this.props.fetchBasketballMatches();
    }

    render(){
        return(
            <div className="main">
                <h1 className="pageTitle basketballBackground" >BASKETBALL</h1>
                <div className="sideContainer basketballBackground">
                    
                </div>
                {
                this.props.basketball_matches.length===1?
                <MySpinner/> : <BasketballList basketball_match_list={this.props.basketball_matches}/>
                }
                 <div className="sideContainer basketballBackground">
                    
                 </div>
            </div>
        )
    }
}

function mapDispatcherToProps(dispatch:Dispatch<Action>){
    return{
        fetchBasketballMatches:()=>dispatch(fetchBasketballMatches())
    }
}

function mapStateToProps(state:AppState){
    return{
        basketball_matches: state.basketball_matches
    }
}

export default connect(mapStateToProps,mapDispatcherToProps)(BasketballPage);