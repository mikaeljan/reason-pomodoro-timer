'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Utils$MyReactApp = require("./Utils.bs.js");

function Header(Props) {
  var seconds = Props.seconds;
  var currentPhase = Props.currentPhase;
  var dispatch = Props.dispatch;
  var label = seconds > 0 ? (
      currentPhase ? "Break time" : "Time to work"
    ) : (
      currentPhase ? "Ready for work?" : "Ready for a break?"
    );
  return React.createElement("h1", {
              onClick: seconds === 0 ? (function (param) {
                    return Curry._1(dispatch, /* TogglePhase */4);
                  }) : (function (param) {
                    
                  })
            }, Utils$MyReactApp.s(label));
}

var make = Header;

exports.make = make;
/* react Not a pure module */
