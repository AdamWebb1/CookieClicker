import React from "react";
import Cookie from "./Cookie";
import "./App.css";

class CookieJar extends React.Component {

  state = {
    value: 0,
  }

  clickHandler = () => {
    this.setState(
      {value: this.state.value + 1}
    )
  }

  render() {
    return (
      <div>
        <Cookie clickHandler={this.clickHandler}/>
        <span className="all"
        >
          {this.state.value}
        </span>
      </div>
    );
  }
}

export default CookieJar;