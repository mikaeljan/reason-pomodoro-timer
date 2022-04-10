'use strict';

var React = require("react");
var Utils$MyReactApp = require("./Utils.bs.js");

function getDashArray(seconds, maxTime) {
  var remainder = seconds / maxTime;
  var timeStr = String(remainder * 283.0 | 0);
  var strokeDasharray = timeStr + " 283";
  return {
          strokeDasharray: strokeDasharray
        };
}

function Timer(Props) {
  var seconds = Props.seconds;
  var maxTime = Props.maxTime;
  return React.createElement("div", {
              className: "timer"
            }, React.createElement("svg", {
                  className: "timer-svg",
                  viewBox: "0 0 100 100"
                }, React.createElement("g", {
                      className: "timer-circle"
                    }, React.createElement("circle", {
                          className: "timer-path-gray",
                          cx: "50",
                          cy: "50",
                          r: "45"
                        }), React.createElement("path", {
                          className: "timer-path-green",
                          style: getDashArray(seconds, maxTime),
                          d: "\n            M 50, 50\n            m -45, 0\n            a 45,45 0 1,0 90,0\n            a 45,45 0 1,0 -90,0\n          "
                        }))), React.createElement("span", {
                  className: "timer-label"
                }, Utils$MyReactApp.s(Utils$MyReactApp.formatTime(seconds))));
}

var make = Timer;

exports.getDashArray = getDashArray;
exports.make = make;
/* react Not a pure module */
