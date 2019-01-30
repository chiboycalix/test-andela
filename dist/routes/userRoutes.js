'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _imgUpload = require('../helpers/imgUpload');

var _imgUpload2 = _interopRequireDefault(_imgUpload);

var _UserController = require('../controllers/UserController');

var _UserController2 = _interopRequireDefault(_UserController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.post('/signup', _imgUpload2.default.single('passportUrl'), _UserController2.default.createUser);
router.post('/login', _UserController2.default.loginUser);

exports.default = router;
//# sourceMappingURL=userRoutes.js.map