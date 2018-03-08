'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _header = require('./middleware/header');

var _header2 = _interopRequireDefault(_header);

var _plantRoutes = require('./routes/plantRoutes');

var _plantRoutes2 = _interopRequireDefault(_plantRoutes);

var _userRoutes = require('./routes/userRoutes');

var _userRoutes2 = _interopRequireDefault(_userRoutes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var PORT = 5000;
app.use(_header2.default);

_mongoose2.default.Promise = global.Promise;
_mongoose2.default.connect('mongodb://sleepy:d4rkkn!ght88@ds161210.mlab.com:61210/plantr', {
	useMongoClient: true
});

app.use(_bodyParser2.default.urlencoded({ extended: true }));
app.use(_bodyParser2.default.json());

(0, _plantRoutes2.default)(app);
(0, _userRoutes2.default)(app);

app.get('/', function (req, res) {
	res.send('node and express server is running on port ' + PORT);
});

app.listen(PORT, function () {
	console.log('Your server is running on port ' + PORT);
});