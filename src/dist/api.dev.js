"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var BASE_URL = "http://localhost:3001";

var delay = function delay(ms) {
  return new Promise(function (resolve) {
    return setTimeout(resolve, ms);
  });
};

var randomNumber = function randomNumber() {
  var min = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var max = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

var simulateNetworkLatency = function simulateNetworkLatency() {
  var min = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 30;
  var max = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1500;
  return delay(randomNumber(min, max));
};

function callApi(endpoint) {
  var options,
      url,
      response,
      data,
      _args = arguments;
  return regeneratorRuntime.async(function callApi$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          options = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};
          _context.next = 3;
          return regeneratorRuntime.awrap(simulateNetworkLatency());

        case 3:
          options.headers = {
            "Content-Type": "application/json",
            Accept: "application/json"
          };
          url = BASE_URL + endpoint;
          _context.next = 7;
          return regeneratorRuntime.awrap(fetch(url, options));

        case 7:
          response = _context.sent;
          _context.next = 10;
          return regeneratorRuntime.awrap(response.json());

        case 10:
          data = _context.sent;
          return _context.abrupt("return", data);

        case 12:
        case "end":
          return _context.stop();
      }
    }
  });
}

var api = {
  badges: {
    list: function list() {
      // throw new Error("500:Server errors");
      return callApi("/badges");
    },
    create: function create(badge) {
      // throw new Error("500:Server errors");
      return callApi("/badges", {
        method: "POST",
        body: JSON.stringify(badge)
      });
    },
    read: function read(badgeId) {
      return callApi("/badges/".concat(badgeId));
    },
    update: function update(badgeId, updates) {
      return callApi("/badges/".concat(badgeId), {
        method: "PUT",
        body: JSON.stringify(updates)
      });
    },
    // Lo hubiera llamado `delete`, pero `delete` es un keyword en JavaScript asi que no es buena idea :P
    remove: function remove(badgeId) {
      return callApi("/badges/".concat(badgeId), {
        method: "DELETE"
      });
    }
  }
};
var _default = api;
exports["default"] = _default;