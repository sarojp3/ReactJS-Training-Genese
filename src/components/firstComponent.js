import React, { Component } from "react";
import { Link } from "react-router-dom";
import SecondComponent from "./secondComponent";
import {withRouter} from "react-router-dom";

class FirstComponent extends Component {
  //creating the state
  constructor(props) {
    //In order to transfer the value of state
    //from one to other component, we use props
    super(props);
    this.state = {
      username: "",
      address: "",
      number: "",
    };
  }
  //handling the change of state values
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  callFromSecondComponent = (name) => {
    alert("Hello " + name);
  };
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <div style={{ padding: 6 }}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={this.handleChange}
          />
        </div>
        <div style={{ padding: 6 }}>
          <input
            type="text"
            name="address"
            placeholder="Address"
            onChange={this.handleChange}
          />
        </div>
        <div style={{ padding: 6 }}>
          <input
            type="number"
            name="number"
            placeholder="Number"
            onChange={this.handleChange}
          />
        </div>
        <SecondComponent
          username={this.state.username}
          address={this.state.address}
          number={this.state.number}
          callFromSecondComponent={this.callFromSecondComponent}
        />
        <Link
          to={{
            pathname: "/clock",
            search: "?sort=name",
            hash: "#the-hash",
            state: { fromDashboard: true },
          }}
        >
          <button>Go to Digital Clock</button>
        </Link>
        <button
            onClick={()=>
            this.props.history.push('/clock',
            {name:this.state.username})
            }>Change Route Prgramatically</button>
        <br/>
        <button onClick={()=>
              this.props.history.push('dynamicRoute/book/213126543718_e1ecs1')}>Dynamic Route</button>
      </div>
    );
  }
}

export default withRouter(FirstComponent);
