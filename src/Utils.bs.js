'use strict';

var Caml_format = require("bs-platform/lib/js/caml_format.js");

function s(str) {
  return str;
}

function padNumber(num) {
  if (Caml_format.caml_int_of_string(num) < 10) {
    return "0" + num;
  } else {
    return num;
  }
}

function formatTime(seconds) {
  var mins = seconds / 60 | 0;
  var secs = seconds % 60;
  var minStr = padNumber(String(mins));
  var secStr = padNumber(String(secs));
  return minStr + (":" + secStr);
}

exports.s = s;
exports.padNumber = padNumber;
exports.formatTime = formatTime;
/* No side effect */
