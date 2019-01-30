'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _imgUpload = require('../helpers/imgUpload');

var _imgUpload2 = _interopRequireDefault(_imgUpload);

var _PartyController = require('../controllers/PartyController');

var _PartyController2 = _interopRequireDefault(_PartyController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router(); /* eslint-disable import/no-unresolved */


router.post('/', _imgUpload2.default.single('logoUrl'), _PartyController2.default.createParty);
router.get('/', _PartyController2.default.getParties);
router.get('/:partyId', _PartyController2.default.getParty);
router.patch('/:partyId/:partyName', _PartyController2.default.patchParty);
router.delete('/:partyId', _PartyController2.default.deleteParty);

exports.default = router;
//# sourceMappingURL=partyRoutes.js.map