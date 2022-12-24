'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _uuid = require("uuid");
var _models = _interopRequireDefault(require("../models"));
function createUserProfile(userId) {
  return [{
    id: (0, _uuid.v4)(),
    userId: userId,
    firstName: 'Admin',
    lastName: 'Admin',
    callingCode: '+250',
    phoneNumberVerified: true,
    createdAt: new Date(),
    updatedAt: new Date()
  }];
}
module.exports = {
  up: function () {
    var _up = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(queryInterface) {
      var user;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _models["default"]['User'].findOne({
                where: {
                  email: process.env.ADMIN_EMAIL,
                  role: 'admin',
                  status: 'active',
                  verified: true
                },
                raw: true
              });
            case 2:
              user = _context.sent;
              queryInterface.bulkInsert('Profiles', createUserProfile(user.id), {});
            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    function up(_x) {
      return _up.apply(this, arguments);
    }
    return up;
  }(),
  down: function down(queryInterface) {
    queryInterface.bulkDelete('Profiles', null, {});
  }
};
//# sourceMappingURL=20221021152722-add-user-profile.js.map