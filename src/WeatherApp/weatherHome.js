import { CircularProgress } from '@material-ui/core';
import React, { Component } from 'react';
import Header from '../materialUI/header';
import CurrentWeatherCard from './currentWeatherCard';
import {WeatherAPI} from './weatherAPI';

class WeatherHome extends Component {
    constructor(props){
        super(props);
        this.state={
            city:'Kathmandu',
            weatherData:{},
            isLoading: true
        }
    }

    componentDidMount(){
        this.getWeatherData();
    }

    //Getting the data from API
    getWeatherData=()=>{
        let self = this;
        WeatherAPI.getCurrentWeatherData(this.state.city).then(function (res) {
            self.setState({
                weatherData: res.data,
                isLoading: false
            })
            
        })
    };
    render() {
        return (
            <div>
                <Header/>
                {this.state.isLoading?<div style={{textAlign:'center', marginTop:100}}><CircularProgress/></div>:
                    <div>
                        <CurrentWeatherCard data={this.state.weatherData}/>
                    </div>
                }
            </div>
        );
    }
}

export default WeatherHome;