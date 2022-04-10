'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");

function TimerActions(Props) {
  var dispatch = Props.dispatch;
  var isTicking = Props.isTicking;
  return React.createElement("div", {
              className: "buttons"
            }, React.createElement("button", {
                  onClick: (function (param) {
                      return Curry._1(dispatch, /* Reset */2);
                    })
                }, React.createElement("span", {
                      className: "fas fa-stop"
                    })), isTicking ? React.createElement("button", {
                    onClick: (function (param) {
                        return Curry._1(dispatch, /* Stop */1);
                      })
                  }, React.createElement("span", {
                        className: "fas fa-pause"
                      })) : React.createElement("button", {
                    onClick: (function (param) {
                        return Curry._1(dispatch, /* Start */0);
                      })
                  }, React.createElement("span", {
                        className: "fas fa-play"
                      })));
}

var make = TimerActions;

exports.make = make;
/* react Not a pure module */
