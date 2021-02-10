import React, { Component } from 'react';

class CovidCard extends Component {
    render() {
        let item = this.props.data;
        return (
            <div style={{background:'#f5f5f5' , padding:20,marginBottom:20}}>
                <p style={{textAlign:'center', fontWeight:'bolder',fontSize:20,fontStyle:'italic',color:'royalblue',textDecoration:'underline'}}>{item.country}</p>
                <div style={{display:'flex',justifyContent:'space-between'}}>
                    <div>New Cases</div>
                    <div>New Deaths</div>
                    <div>New Recovered</div>
                </div>
                <div style={{display:'flex',justifyContent:'space-between'}}>
                    <div style={{color:'indigo'}}>{item.cases}</div>
                    <div style={{color:'red'}}>{item.deaths}</div>
                    <div style={{color:'green'}}>{item.recovered}</div>
                </div>
                <div style={{height:20}}></div>
                <hr/>
                <div style={{height:20}}></div>
                <div style={{display:'flex',justifyContent:'space-between'}}>
                    <div>Total Cases</div>
                    <div>Total Deaths</div>
                    <div>Total Recovered</div>
                </div>
                <div style={{display:'flex',justifyContent:'space-between'}}>
                    <div style={{color:'indigo'}}>{item.todayCases}</div>
                    <div style={{color:'red'}}>{item.todayDeaths}</div>
                    <div style={{color:'green'}}>{item.active}</div>
                </div>
                <div style={{height:20}}></div>
                <hr/>
                <div style={{height:20}}></div>
                <div style={{color:'tomato', textAlign:'center',fontWeight:'bold'}}>Critical Patients</div>
                <div style={{textAlign:'center'}}>{item.critical}</div>
                
            </div>
        );
    }
}

export default CovidCard;