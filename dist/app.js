'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _partyRoutes = require('./routes/partyRoutes');

var _partyRoutes2 = _interopRequireDefault(_partyRoutes);

var _officeRoutes = require('./routes/officeRoutes');

var _officeRoutes2 = _interopRequireDefault(_officeRoutes);

var _userRoutes = require('./routes/userRoutes');

var _userRoutes2 = _interopRequireDefault(_userRoutes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

// Middlewares
app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: true }));

// API routes
app.use('/api/v1/parties', _partyRoutes2.default);
app.use('/api/v1/offices', _officeRoutes2.default);
app.use('/api/v1/auth', _userRoutes2.default);

var PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
  console.log('App listening on port ' + PORT);
});

exports.default = app;
//# sourceMappingURL=app.js.map