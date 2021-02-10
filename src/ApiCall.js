import Axios from 'axios';
import React, { Component } from 'react';
import CovidCard from './components/CovidCard';
import ErrorComponent from './components/errorComponent';

class ApiCall extends Component {
    constructor(props){
        super(props);
        this.state={
            covidData: [],
            duplicateData: [],
            loading: true,    //Loading is used so that it can show the data is fetching from the api. It is used to avoid error.
            error: false  
        };
    }
    componentDidMount(){
        this.getRemoteData();
    }
    getRemoteData = () =>{
        let self = this; //We create our custom self for the function
        Axios.get('https://coronavirus-19-api.herokuapp.com/countries').
        then(function(response){
            self.setState({
                covidData: response.data,
                duplicateData: response.data,
                loading: false
            })
        }) .catch(function(error){
            self.setState({
                error:true
            })

        });
    };
    onRetry=()=>{
        this.setState({error: false, loading: true});
        this.getRemoteData();
    };
    handleChange=(event)=>{
        let duplicateData = this.state.duplicateData;
        let data = this.state.covidData.filter(function(val){
            if(val.country.toLowerCase().indexOf(event.target.value.toLowerCase()) != -1){
                return val;
            }
        });
        this.setState({
            duplicateData: data  //We change the state of duplicate data and still call the event on original data.
        })
    }
    render() {
        return (
            <div style={{maxWidth:600, margin:'20px auto'}}>
                {this.state.error?
                    <ErrorComponent onRetry={this.onRetry}/>:
                
                this.state.loading?<div>Data is Loading</div>: //When loading is true, it shows data is loading. 
                                                              //When loading is false(ie fetching is complete, then it maps the data to DOM)
                <div>
                    <input type='text' onChange={this.handleChange}
                        style={{width:'100%',marginBottom:12,padding:'5px'}}/>
                {
                    this.state.duplicateData.map((data)=>
                        <CovidCard data={data}/>
                    )
                }
                </div>
                }
            </div>
        );
    }
}

export default ApiCall;