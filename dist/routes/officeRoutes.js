'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _OfficeController = require('../controllers/OfficeController');

var _OfficeController2 = _interopRequireDefault(_OfficeController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.post('/', _OfficeController2.default.createOffice);
router.get('/', _OfficeController2.default.getOffices);
router.get('/:officeId', _OfficeController2.default.getOffice);

exports.default = router;
//# sourceMappingURL=officeRoutes.js.map