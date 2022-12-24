"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var meta = function meta(count, limit, page) {
  var pages;
  if (count > limit) {
    pages = Math.ceil(count / limit);
  } else {
    pages = 1;
  }
  var prev = 0;
  return {
    pages: pages,
    page: page,
    prev: page !== 1 ? page - 1 : prev,
    next: page === pages ? 0 : page + 1,
    count: count
  };
};
var _default = meta;
exports["default"] = _default;
//# sourceMappingURL=meta.js.map