'use strict';

var React = require("react");
var Utils$MyReactApp = require("./Utils.bs.js");

function Timer(Props) {
  var seconds = Props.seconds;
  return React.createElement("div", undefined, React.createElement("span", undefined, Utils$MyReactApp.s(Utils$MyReactApp.formatTime(seconds))));
}

var make = Timer;

exports.make = make;
/* react Not a pure module */
