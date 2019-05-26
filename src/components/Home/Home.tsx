import React ,{Dispatch} from 'react';


interface Props{
    
}

interface State{

}

class Home extends React.Component<Props,State>{

    render(){

        return(
            <div style={{textAlign:"center",marginTop:"60px",width:"100%",height:"100%",position:"absolute",
                         display:"table", clear: "both",  content:""}}>
                <div style={{ float:"left",width:"30%", padding:"10px",height:"100%"}}>
                    
                </div>
                <div style={{ float:"left",width:"40%",height:"100%", padding:"10px"}}>
                    <h1 style={{marginTop:"100px"}}>
                    The blind chicken sometimes stabs
                    </h1>
                </div>
                <div style={{ float:"left",width:"30%", padding:"10px",height:"100%"}}>
                    
                 </div>
            </div>
        )
    }
}



export default Home;