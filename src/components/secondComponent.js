import React, { Component } from 'react';
import {withRouter} from "react-router-dom";

class SecondComponent extends Component {
    componentDidMount(){
        console.log('this is component did mount');
    }
    componentWillUnmount(){
        console.log('this is unmount');
    }
    render() {
        return (
            <div>
                {this.props.match.params.id}<br/>
                {this.props.match.params.value}<br/>
                <p style={{color:'red',textAlign:'center'}}>Username from first component:<br/>
                {this.props.username}<br/>
                {this.props.address}<br/>
                {this.props.number}</p>
                <button style={{background:'green',color:'white',padding:6}} onClick={() => this.props.callFromSecondComponent('Saroj')}>Call Function</button>
            </div>
        );
    }
}

export default withRouter(SecondComponent);