import React ,{Dispatch} from 'react';
import {connect} from 'react-redux'
import {AppState} from '../../store/reducers/rootReducer'
import {Action} from 'redux'
import {fetchMyTickets} from '../../store/actions/myTicketAction'
import {User} from '../../models/User'

interface Props{
    user:User,
    fetchMyTickets:Function
}

interface State{

}

class Home extends React.Component<Props,State>{

    render(){

        {
            if(this.props.user.userOrAdmin==="user"){
                this.props.fetchMyTickets(this.props.user.id);
                localStorage.setItem("UserId", this.props.user.id.toString());                
            }
        }

        return(
            <div className="main">
                <div className="sideContainer homeBackground">
                    
                </div>
                <div className="contentContainer">
                    <h1 className="homeTitle">
                    THE BLIND CHICKEN SOMETIMES STABS.
                    </h1>
                </div>
                <div className="sideContainer homeBackground">
                    
                 </div>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch:Dispatch<Action>){
    return{
        fetchMyTickets:(userId:number)=>dispatch(fetchMyTickets(userId))
    }
}

function mapStateToProps(state:AppState){
    console.log(state);
    return{
        user:state.user
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);