import React, { Component } from 'react';
import './App.css';
import Routes from './routes';
import {theme} from "./theme";
import {ThemeProvider} from '@material-ui/core/styles';
import firebase from 'firebase';

class App extends Component {
  constructor(props){
    super(props);
  }

  initFireBase=()=>{
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
      apiKey: "AIzaSyAHAsPu40EPcOvO6BECTsdGCHasr95LW44",
      authDomain: "user-profile-42a79.firebaseapp.com",
      projectId: "user-profile-42a79",
      storageBucket: "user-profile-42a79.appspot.com",
      messagingSenderId: "245202660136",
      appId: "1:245202660136:web:9ce17c3af63ff647897e1d",
      measurementId: "G-NH28582YFH"
    }; 
    firebase.initializeApp(firebaseConfig) 
  };

  componentDidMount(){
    this.initFireBase();
  }

  render() {  
    return (
      <div>
      <div>                              
        <ThemeProvider theme={theme}>
            <Routes/>
        </ThemeProvider>
      </div>
      </div>
    );
  }
}

export default App;
