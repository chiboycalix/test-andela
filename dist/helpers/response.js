"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

// eslint-disable-next-line arrow-body-style
exports.default = function (response, statusCode, statusMessage) {
  for (var _len = arguments.length, data = Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
    data[_key - 3] = arguments[_key];
  }

  return response.status(statusCode).json({ statusMessage: statusMessage, data: data });
};
//# sourceMappingURL=response.js.map