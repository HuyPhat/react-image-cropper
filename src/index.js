import "@babel/polyfill";
import "core-js/es6/map";
import "core-js/es6/set";
import "raf/polyfill";
import React from "react";
import ReactDOM from "react-dom";
// import RangeSlider from "./components/containers/rangeSlider";
import ReactImageCropper from "./components/react-image-cropper";

ReactDOM.render(<ReactImageCropper />, document.getElementById("root"));
