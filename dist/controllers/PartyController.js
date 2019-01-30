'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /* eslint-disable class-methods-use-this */
/* eslint-disable consistent-return */


var _partyDB = require('../db/partyDB');

var _partyDB2 = _interopRequireDefault(_partyDB);

var _response = require('../helpers/response');

var _response2 = _interopRequireDefault(_response);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PartyController = function () {
  function PartyController() {
    _classCallCheck(this, PartyController);
  }

  _createClass(PartyController, [{
    key: 'createParty',

    // Create party Controller function
    value: function createParty(req, res) {
      var _req$body = req.body,
          name = _req$body.name,
          path = _req$body.path;

      if (!name || !path) {
        return (0, _response2.default)(res, 400, 'All fields are required');
      }
      _partyDB2.default.push({
        id: _partyDB2.default.length + 1,
        name: name,
        path: path
      });
      return (0, _response2.default)(res, 201, 'Party created successfully', _partyDB2.default[_partyDB2.default.length - 1]);
    }

    // Get all parties Controller function

  }, {
    key: 'getParties',
    value: function getParties(req, res) {
      return (0, _response2.default)(res, 200, 'Success', _partyDB2.default);
    }

    // Get party Controller function

  }, {
    key: 'getParty',
    value: function getParty(req, res) {
      var partyId = req.params.partyId;

      for (var i = 0; i < _partyDB2.default.length; i += 1) {
        if (_partyDB2.default[i].id === parseInt(partyId, 10)) {
          return (0, _response2.default)(res, 200, 'success', _partyDB2.default[i]);
        }
      }
      return (0, _response2.default)(res, 404, 'Party does not exist');
    }

    // Patch party Controller function

  }, {
    key: 'patchParty',
    value: function patchParty(req, res) {
      var partyName = req.params.partyName;
      var name = req.body.name;

      for (var i = 0; i < _partyDB2.default.length; i += 1) {
        if (_partyDB2.default[i].name === partyName) {
          if (!name) {
            return (0, _response2.default)(res, 400, 'Name field is required');
          }
          _partyDB2.default[i].name = name;
          return (0, _response2.default)(res, 200, 'Party updated successfully', _partyDB2.default[i]);
        }
        return (0, _response2.default)(res, 404, 'Party does not exist');
      }
    }

    // Delete party Controller function

  }, {
    key: 'deleteParty',
    value: function deleteParty(req, res) {
      var partyId = req.params.partyId;

      for (var i = 0; i < _partyDB2.default.length; i += 1) {
        if (_partyDB2.default[i].id === parseInt(partyId, 10)) {
          _partyDB2.default.splice(_partyDB2.default[i].id - 1, 1);
          return (0, _response2.default)(res, 200, 'party deleted');
        }
        return (0, _response2.default)(res, 404, 'party does not exist');
      }
    }
  }]);

  return PartyController;
}();

var partyController = new PartyController();
exports.default = partyController;
//# sourceMappingURL=PartyController.js.map