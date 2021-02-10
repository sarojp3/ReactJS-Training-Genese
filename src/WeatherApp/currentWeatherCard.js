import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';

class CurrentWeatherCard extends Component {
    render() {
        let weather = this.props.data;
        return (
            <div>
                <Card style={{padding:10, width:'50%',marginLeft:350, marginTop:35}}>
                    <div style={{color:'#eb6e4b', fontSize:15, marginTop:5, textAlign:'center'}}>
                        {new Date().toDateString()}
                    </div>
                    <div style={{fontSize:20, fontWeight:'bolder',marginTop:7, textAlign:'center'}}>
                        {weather.name},{weather.sys.country}
                    </div>
                    <div style={{textAlign:'center', fontStyle:'italic',padding:7}}>
                        Sunrise: {new Date(weather.sys.sunrise * 1000).toLocaleString()}
                    </div>
                    <div style={{textAlign:'center', fontStyle:'italic'}}>
                        Sunset: {new Date(weather.sys.sunset * 1000).toLocaleString()}
                    </div>
                    <Grid container  spacing={2} style={{marginTop:5, marginLeft:50}}>
                        <Grid item xs="3" sm="2"style={{marginTop:5}}>
                            <div>Temperature</div>
                            <div>{weather.main.temp}&deg;C</div>
                        </Grid>
                        <Grid item xs="3" sm="2" style={{marginTop:5}}>
                            <div>Min Temp</div>
                            <div>{weather.main.temp_min}&deg;C</div>
                        </Grid>
                        <Grid item xs="3" sm="2" style={{marginTop:5}}>
                            <div>Max Temp</div>
                            <div>{weather.main.temp_max}&deg;C</div>
                        </Grid>
                        <Grid item xs="3" sm="2" style={{marginTop:5}}>
                            <div>Pressure</div>
                            <div>{weather.main.pressure}</div>
                        </Grid>
                        <Grid item xs="3" sm="2" style={{marginTop:5}}>
                            <div>Humidity</div>
                            <div>{weather.main.humidity}</div>
                        </Grid>

                    </Grid>
                </Card>
            </div>
        );
    }
}

export default  CurrentWeatherCard;