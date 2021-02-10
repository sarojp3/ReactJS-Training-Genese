import React, { Component } from 'react';
import {withRouter} from "react-router-dom";

class DigitalClock extends Component {
    constructor(props){
        super(props);
        this.state ={
            date: new Date()
        };
    }

    componentDidMount(){
        let self = this;
        this.state.timer = setInterval(function(){
            self.setState({
                date:new Date()
            })
        }, 1000)
    }

    componentWillUnmount(){
        clearInterval(this.state.timer);
    }
    
    render() {
        return (
            <div style={{position:'relative',height:'50vh',background:'#f5f5f5'}}>
                {this.props.location.name}
                <div style={{display:'flex',position:'absolute',
                top:'30%', left:'43%',fontSize:50}}>
                    <div style={{padding:20}}>{this.state.date.getHours()}</div>
                    <div style={{padding:20}}>{this.state.date.getMinutes()}</div>
                    <div style={{padding:20}}>{this.state.date.getSeconds()}</div>
                </div>
            </div>
        );
    }
}

export default withRouter(DigitalClock);