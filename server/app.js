"use strict";

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _routes = _interopRequireDefault(require("./routes"));

var _chalk = _interopRequireDefault(require("chalk"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)();
const port = process.env.port || 8080;
app.use(_bodyParser.default.json());
app.use('/api', _routes.default);
app.use(_express.default.static('build'));
app.listen(port, () => {
  console.log(_chalk.default.blue(`App available on port ${_chalk.default.yellow(port)}.`));
});