import React from "react";

class RangeSlider extends React.Component {
  sliderRef = React.createRef();

  state = {
    sliderValue: 0
  };

  componentDidMount() {
    console.log(this.sliderRef.current.type);
  }

  handleSliderChange = e => {
    this.setState({ sliderValue: e.target.value });
  };

  render() {
    return (
      <div className="slidecontainer">
        <input
          ref={this.sliderRef}
          type="range"
          min="0"
          max="100"
          value={this.state.sliderValue}
          className="slider"
          id="myRange"
          onChange={this.handleSliderChange}
        />
        <div>Current Value: {this.state.sliderValue}</div>
      </div>
    );
  }
}

export default RangeSlider;
