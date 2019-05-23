

import React from 'react';
import { Button } from 'react-bootstrap';

interface Props{
    odd:number
}

interface State{
    clicked:boolean,
    color:string
}

class ButtonOdd extends React.Component<Props,State>{

    constructor(props:Props){
        super(props);
        this.state={
            clicked:false,
            color:"#FFFFFF"
        }
    }
    handleClick=()=>{
        if(!this.state.clicked){
            this.setState({clicked:!this.state.clicked,
                color:"#aee59d"})
                //ovde ide kod za kvotu
            console.log(this.state.clicked)
        }else{
            this.setState({clicked:!this.state.clicked,
                color:"#FFFFFF"})
                //ovde ide za smanjene kvote kod
            console.log(this.state.clicked)
        }
    }

    render(){
        return(
            <div>
                <Button  onClick={this.handleClick}
                variant="outline-success"
                style={{backgroundColor:this.state.color}}
                >
                    {this.props.odd}
                </Button>
            </div>
        )
    }
}

export default ButtonOdd;