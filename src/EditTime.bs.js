'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Utils$MyReactApp = require("./Utils.bs.js");

function EditTime(Props) {
  var phase = Props.phase;
  var value = Props.value;
  var onChange = Props.onChange;
  return React.createElement("div", {
              className: "edit-time"
            }, React.createElement("label", {
                  className: "edit-time-label"
                }, Utils$MyReactApp.s(phase)), React.createElement("input", {
                  type: "number",
                  value: String(value),
                  onChange: (function (e) {
                      return Curry._1(onChange, e.target.value);
                    })
                }));
}

var make = EditTime;

exports.make = make;
/* react Not a pure module */
