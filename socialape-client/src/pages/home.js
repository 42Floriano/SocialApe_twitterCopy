import React, { Component } from "react";
import axios from "axios";
import Gride from "@material-ui/core/Grid";
import Scream from "../components/Scream";

class home extends Component {
  state = {
    screams: null,
  };
  componentDidMount() {
    axios
      .get("/screams")
      .then((res) => {
        this.setState({
          screams: res.data,
        });
      })
      .catch((err) => console.log(err));
  }
  render() {
    let recentScreamsMarkup = this.state.screams ? (
      this.state.screams.map((scream) => (
        <Scream key={scream.screamId} scream={scream} />
      ))
    ) : (
      <p>Loading...</p>
    );
    return (
      <Gride container spacing={10}>
        <Gride item sm={8} xs={12}>
          {recentScreamsMarkup}
        </Gride>
        <Gride item sm={2} xs={12}>
          <p> I'm two</p>
        </Gride>
      </Gride>
    );
  }
}

export default home;
