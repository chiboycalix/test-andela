'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /* eslint-disable class-methods-use-this */


var _userDB = require('../db/userDB');

var _userDB2 = _interopRequireDefault(_userDB);

var _response = require('../helpers/response');

var _response2 = _interopRequireDefault(_response);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UserController = function () {
  function UserController() {
    _classCallCheck(this, UserController);
  }

  _createClass(UserController, [{
    key: 'createUser',
    value: function createUser(req, res) {
      var _req$body = req.body,
          firstName = _req$body.firstName,
          lastName = _req$body.lastName,
          otherName = _req$body.otherName,
          email = _req$body.email,
          phoneNumber = _req$body.phoneNumber,
          password = _req$body.password;

      var pat = req.body.file.path;
      console.log(pat);
      if (!email || !password) {
        return (0, _response2.default)(res, 400, 'All fields are required');
      }
      for (var i = 0; i < _userDB2.default.length; i += 1) {
        if (_userDB2.default[i].email === email) {
          return (0, _response2.default)(res, 409, 'Email already exists');
        }
      }
      _userDB2.default.push({
        id: _userDB2.default.length + 1,
        firstName: firstName,
        lastName: lastName,
        otherName: otherName,
        email: email,
        password: password,
        phoneNumber: phoneNumber,
        pat: pat
      });
      console.log(_userDB2.default[_userDB2.default.length - 1]);
      return (0, _response2.default)(res, 201, 'Account created successfully', _userDB2.default[_userDB2.default.length - 1]);
    }
  }, {
    key: 'loginUser',
    value: function loginUser(req, res) {
      var _req$body2 = req.body,
          firstName = _req$body2.firstName,
          lastName = _req$body2.lastName;

      for (var i = 0; i < _userDB2.default.length; i += 1) {
        if (_userDB2.default[i].firstName === firstName && _userDB2.default[i].lastName === lastName) {
          return (0, _response2.default)(res, 200, 'login successful');
        }
      }
      return (0, _response2.default)(res, 404, 'user not found');
    }
  }]);

  return UserController;
}();

var userController = new UserController();
exports.default = userController;
//# sourceMappingURL=UserController.js.map