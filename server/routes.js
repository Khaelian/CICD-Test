"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

const app = (0, _express.Router)();
app.get('/test', (req, res) => {
  res.send('OK');
});
var _default = app;
exports.default = _default;