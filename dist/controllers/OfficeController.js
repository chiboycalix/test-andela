'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /* eslint-disable class-methods-use-this */


var _officeDB = require('../db/officeDB');

var _officeDB2 = _interopRequireDefault(_officeDB);

var _response = require('../helpers/response');

var _response2 = _interopRequireDefault(_response);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var OfficeController = function () {
  function OfficeController() {
    _classCallCheck(this, OfficeController);
  }

  _createClass(OfficeController, [{
    key: 'createOffice',
    value: function createOffice(req, res) {
      var _req$body = req.body,
          type = _req$body.type,
          name = _req$body.name;

      if (!type || !name) {
        return (0, _response2.default)(res, 400, 'All fields are required');
      }
      _officeDB2.default.push({
        id: _officeDB2.default.length + 1,
        type: type,
        name: name
      });
      return (0, _response2.default)(res, 201, 'Office created successfully', _officeDB2.default[_officeDB2.default.length - 1]);
    }
  }, {
    key: 'getOffices',
    value: function getOffices(req, res) {
      return (0, _response2.default)(res, 200, 'Success', _officeDB2.default);
    }
  }, {
    key: 'getOffice',
    value: function getOffice(req, res) {
      var officeId = req.params.officeId;

      for (var i = 0; i < _officeDB2.default.length; i += 1) {
        if (_officeDB2.default[i].id === parseInt(officeId, 10)) {
          return (0, _response2.default)(res, 200, 'success', _officeDB2.default[i]);
        }
      }
      return (0, _response2.default)(res, 404, 'Office does not exist');
    }
  }]);

  return OfficeController;
}();

var officeController = new OfficeController();
exports.default = officeController;
//# sourceMappingURL=OfficeController.js.map