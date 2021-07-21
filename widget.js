(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["widget"],{

    /***/ "./assets/app/widget/js/app.js":
    /*!*************************************!*\
      !*** ./assets/app/widget/js/app.js ***!
      \*************************************/
    /*! no static exports found */
    /***/ (function(module, exports, __webpack_require__) {
    
    "use strict";
    
    
    var _createWidget = __webpack_require__(/*! ./createWidget */ "./assets/app/widget/js/createWidget.js");
    
    var supportedAPI = ['init', 'create']; // enlist all methods supported by API (e.g. `mw('event', 'user-login');`)
    
    /**
    The main entry of the application
    */
    
    function app(window) {
      console.log('JS-ngWidget starting');
      var configurations = {};
      var globalObject = window[window['JS-ngWidget']];
      console.log(globalObject.q);
      var queue = globalObject.q;
    
      if (queue) {
        for (var i = 0; i < queue.length; i++) {
          if (queue[i][0].toLowerCase() == 'init') {
            configurations = extendObject(configurations, queue[i][1]);
            console.log('JS-ngWidget started');
          } else console.log(queue[i][0], queue[i][1]);
    
          apiHandler(queue[i][0], queue[i][1]);
        }
      }
    
      globalObject = apiHandler;
      globalObject.configurations = configurations;
    }
    /**
    Method that handles all API calls
    */
    
    
    function apiHandler(api, params) {
      if (!api) throw Error('API method required');
      api = api.toLowerCase();
      if (supportedAPI.indexOf(api) === -1) throw Error("Method ".concat(api, " is not supported")); // console.log(`Handling API call ${api}`, params);
    
      switch (api) {
        case 'create':
          (0, _createWidget.createWidget)();
          break;
    
        default:
          console.warn("No handler defined for ".concat(api));
      }
    }
    
    function extendObject(a, b) {
      for (var key in b) {
        if (b.hasOwnProperty(key)) a[key] = b[key];
      }
    
      return a;
    }
    
    app(window);
    
    /***/ }),
    
    /***/ "./assets/app/widget/js/createWidget.js":
    /*!**********************************************!*\
      !*** ./assets/app/widget/js/createWidget.js ***!
      \**********************************************/
    /*! no static exports found */
    /***/ (function(module, exports, __webpack_require__) {
    
    "use strict";
    
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.createWidget = undefined;
    
    var LoadJSON = function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var url, promise, jsonContents;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                url = "/app/api/event/" + id;
                _context.next = 3;
                return fetch(url);
    
              case 3:
                promise = _context.sent;
    
                if (promise.ok) {
                  _context.next = 8;
                  break;
                }
    
                throw new Error("Cannot load");
    
              case 8:
                _context.next = 10;
                return promise.json();
    
              case 10:
                jsonContents = _context.sent;
                console.log(jsonContents);
                return _context.abrupt("return", jsonContents);
    
              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
    
      return function LoadJSON() {
        return _ref.apply(this, arguments);
      };
    }(); // async function createWidget()  <--- replace function below with this
    
    
    __webpack_require__(/*! ../scss/app.scss */ "./assets/app/widget/scss/app.scss");
    
    function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
    
    function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
    
    function createWidget() {
      // if( !localStorage.getItem('widgetData') && !sessionStorage.getItem('widgetData') ) {
      //     let data = await LoadJSON();
      //     localStorage.setItem('widgetData', data);
      //   } else {
      //     let data = localStorage.getItem('widgetData') ? localStorage.getItem('widgetData') : sessionStorage.getItem('widgetData');
      //   }
      // dummy data for testing
      var data = {
        "organiser": {
          "company": "Motokultivatori Peruni\u0107",
          "url": "https:\/\/netgen.io\/"
        },
        "name": "WOOOOO",
        "startDate": "2021-07-19T10:00:00",
        "endDate": "2021-07-19T14:00:00",
        "location": "Donji Miholjac",
        "image": "earth-60f52daec9db1.jpg",
        "description": "Spectacle! Event of the year!",
        "termsConditions": "bla bla",
        "privacyPolicy": "bla bla",
        "url": "https:\/\/netgen.io\/",
        "ticketTypes": [{
          "name": "MOJ TIKET",
          "startDate": "2021-07-16T15:00:00",
          "endDate": "2021-07-16T19:41:00",
          "maxQuantity": 50,
          "active": true,
          "price": 246300,
          "vatRate": 25,
          "currency": "HRK",
          "description": "60ebfec0a9e29 description",
          "ticketTypeFields": [],
          "soldTickets": 3
        }, {
          "name": "Ticket 1",
          "startDate": "1999-06-06T00:00:00",
          "endDate": "2000-12-12T00:00:00+01:00",
          "maxQuantity": 77,
          "active": false,
          "price": 24734,
          "vatRate": 25,
          "currency": "HRK",
          "description": "60ebfec0ac0bf description",
          "ticketTypeFields": [],
          "soldTickets": 0
        }, {
          "name": "asdasd",
          "startDate": null,
          "endDate": null,
          "maxQuantity": null,
          "active": true,
          "price": 1200,
          "vatRate": 123,
          "currency": "HRK",
          "description": "asd",
          "ticketTypeFields": [],
          "soldTickets": 0
        }, {
          "name": "ddddddd",
          "startDate": "2021-07-15T17:00:00",
          "endDate": "2021-07-16T16:00:00",
          "maxQuantity": 53,
          "active": true,
          "price": 35200,
          "vatRate": 13,
          "currency": "HRK",
          "description": "fdassd",
          "ticketTypeFields": [],
          "soldTickets": 0
        }]
      };
      var widgetContainer = document.createElement("div");
      widgetContainer.classList.add('widget');
      document.body.appendChild(widgetContainer); // Widget header
    
      var title = data.name;
      var headerImageSrc = data.image;
      var widgetHeader = "\n        <div class='widget__header'>\n            <img class=\"widget__image\"src='".concat(headerImageSrc, "' /><h3 class='widget__title'>").concat(title, "</h3>\n        </div>");
      var allTickets = ""; // Widget tickets
    
      console.log(data.image);
      var ticketTypes = data.ticketTypes;
      ticketTypes.forEach(function (ticketType, index) {
        // common proporties for all tickets
        var ticketTitle = ticketType.name;
        var dateIcon = '';
        var dateLabel = '';
        var date = new Date(ticketTypes.endDate);
        var dateString = date.toDateString();
        var description = ticketType.description !== null ? ticketType.description : '';
        var descriptionAdditional = ticketType.descriptionAdditional !== null ? ticketType.descriptionAdditional : '';
        var btnElement = '';
        var priceNow = ticketType.price / 100;
        var priceDiscounted = ticketType.priceDiscounted;
        var priceDiscountedEl = priceDiscounted ? "\n            <div class='widget__price-discounted'>\n                ".concat(priceDiscounted, " <span class=\"widget__currency\"> ").concat(priceCurrency, "</span>\n            </div>") : '';
        var priceCurrency = ticketType.currency;
        var vatRate = ticketType.vatRate; // if ticket type is active
    
        if (ticketType.active) {
          // if tickets are not sold out 
          if (ticketType.soldTickets !== ticketType.maxQuantity && ticketType.maxQuantity !== null) {
            dateIcon = "<i class=\"fas fa-hourglass-half\"></i>";
            dateLabel = 'Available until ';
            var maxQuantity = data.maxQuantity === null ? 100 : data.maxQuantity;
            var quantityLeft = ticketType.maxQuantity - ticketType.soldTickets;
            var selectLabel = "\n                    <label>\n                        Tickets left\n                        <span>".concat(quantityLeft, "</span>\n                    </label>");
            var select = "<select>";
    
            for (var i = 1; i <= quantityLeft; i++) {
              select += "<option value=\"".concat(i, "\">").concat(i, "</option>");
            }
    
            select += "</select>";
            btnElement = selectLabel + select;
          } // if tickets are sold out
          else {
              dateIcon = "<i class=\"far fa-calendar-alt\"></i>";
              dateLabel = 'Available from ';
              btnElement = "<button class=\"widget__btn widget__btn--sold-out\">Sold out</button>";
            }
        } // if ticket type is not active (unavailable)
        else {
            dateIcon = "<i class=\"far fa-calendar\"></i>";
            dateLabel = 'Was available from ';
            btnElement = "<button class=\"widget__btn widget__btn--unavailable\"><i class=\"fas fa-exclamation-circle\"></i><span>Unavailable</span></button>";
          } // ticket element
    
    
        var ticket = "\n            <div class='widget__ticket'>\n                <div class='widget__left'>\n                    <div>\n                        <div>\n                            <div class='widget__ticket-title'>\n                                ".concat(ticketTitle, "\n                            </div>\n                            <div class=\"widget__date-container\">\n                                <div class='widget__date-icon'>\n                                    ").concat(dateIcon, "\n                                </div>\n                                <div class=\"widget__date-info\">\n                                    <span class='widget__date-label'>\n                                        ").concat(dateLabel, " \n                                    </span>\n                                    <span class='widget__date'>\n                                        ").concat(dateString, "\n                                    </span>\n                                </div>\n                            </div>\n                        </div>\n                        <div class='widget__text'>\n                            <div class='widget__description'>\n                                ").concat(description, "\n                            </div>\n                            <div class='widget__description-additional d-none' id=\"tab-").concat(index, "\">\n                                ").concat(descriptionAdditional, "\n                            </div>\n                        </div>\n                    </div>\n                    <div class='widget__show-more'>\n                        Show more <i class=\"fas fa-chevron-down\"></i>\n                    </div>\n                </div>\n                <div class='widget__right'>\n                    <div class='widget__pricing'>\n                        <div class='widget__price-now'>\n                            ").concat(priceNow, " <span class=\"widget__currency\">").concat(priceCurrency, "</span>\n                        </div>\n                        ").concat(priceDiscountedEl, "\n                        <div class='widget__vat'>\n                            VAT (").concat(vatRate, "%) included\n                        </div>\n                    </div>\n                    <div class='widget__ticket-picker'>\n                        ").concat(btnElement, "\n                    </div>\n                </div>\n                \n            </div>");
        allTickets += ticket;
      });
      var widgetSection = "\n        <div class=\"widget__section\">\n            ".concat(allTickets, "\n        </div>");
      var widgetBody = "\n        <div class=\"widget__body\">\n            ".concat(widgetSection, "\n        </div>");
      var checkoutBtnHref = "#";
      var widgetFooter = "\n        <div class='widget__footer'>\n            <a href=\"".concat(checkoutBtnHref, "\" class=\"widget__btn widget__btn--primary\"><span>Checkout</span><i class=\"fas fa-arrow-right\"></i></button>\n        </div>");
      widgetContainer.innerHTML += widgetHeader + widgetBody + widgetFooter;
    }
    
    exports.createWidget = createWidget;
    
    /***/ }),
    
    /***/ "./assets/app/widget/scss/app.scss":
    /*!*****************************************!*\
      !*** ./assets/app/widget/scss/app.scss ***!
      \*****************************************/
    /*! no static exports found */
    /***/ (function(module, exports, __webpack_require__) {
    
    // extracted by mini-css-extract-plugin
    
    /***/ })
    
    },[["./assets/app/widget/js/app.js","runtime"]]]);
    //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL3dpZGdldC9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC93aWRnZXQvanMvY3JlYXRlV2lkZ2V0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvd2lkZ2V0L3Njc3MvYXBwLnNjc3MiXSwibmFtZXMiOlsic3VwcG9ydGVkQVBJIiwiYXBwIiwid2luZG93IiwiY29uc29sZSIsImxvZyIsImNvbmZpZ3VyYXRpb25zIiwiZ2xvYmFsT2JqZWN0IiwicSIsInF1ZXVlIiwiaSIsImxlbmd0aCIsInRvTG93ZXJDYXNlIiwiZXh0ZW5kT2JqZWN0IiwiYXBpSGFuZGxlciIsImFwaSIsInBhcmFtcyIsIkVycm9yIiwiaW5kZXhPZiIsIndhcm4iLCJhIiwiYiIsImtleSIsImhhc093blByb3BlcnR5IiwidXJsIiwiaWQiLCJmZXRjaCIsInByb21pc2UiLCJvayIsImpzb24iLCJqc29uQ29udGVudHMiLCJMb2FkSlNPTiIsImNyZWF0ZVdpZGdldCIsImRhdGEiLCJ3aWRnZXRDb250YWluZXIiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJ0aXRsZSIsIm5hbWUiLCJoZWFkZXJJbWFnZVNyYyIsImltYWdlIiwid2lkZ2V0SGVhZGVyIiwiYWxsVGlja2V0cyIsInRpY2tldFR5cGVzIiwiZm9yRWFjaCIsInRpY2tldFR5cGUiLCJpbmRleCIsInRpY2tldFRpdGxlIiwiZGF0ZUljb24iLCJkYXRlTGFiZWwiLCJkYXRlIiwiRGF0ZSIsImVuZERhdGUiLCJkYXRlU3RyaW5nIiwidG9EYXRlU3RyaW5nIiwiZGVzY3JpcHRpb24iLCJkZXNjcmlwdGlvbkFkZGl0aW9uYWwiLCJidG5FbGVtZW50IiwicHJpY2VOb3ciLCJwcmljZSIsInByaWNlRGlzY291bnRlZCIsInByaWNlRGlzY291bnRlZEVsIiwicHJpY2VDdXJyZW5jeSIsImN1cnJlbmN5IiwidmF0UmF0ZSIsImFjdGl2ZSIsInNvbGRUaWNrZXRzIiwibWF4UXVhbnRpdHkiLCJxdWFudGl0eUxlZnQiLCJzZWxlY3RMYWJlbCIsInNlbGVjdCIsInRpY2tldCIsIndpZGdldFNlY3Rpb24iLCJ3aWRnZXRCb2R5IiwiY2hlY2tvdXRCdG5IcmVmIiwid2lkZ2V0Rm9vdGVyIiwiaW5uZXJIVE1MIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFNQSxZQUFZLEdBQUcsQ0FBQyxNQUFELEVBQVMsUUFBVCxDQUFyQixDLENBQXlDOztBQUV6QztBQUNBO0FBQ0E7O0FBRUEsU0FBU0MsR0FBVCxDQUFhQyxNQUFiLEVBQXFCO0FBQ2pCQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxzQkFBWjtBQUVBLE1BQUlDLGNBQWMsR0FBRyxFQUFyQjtBQUdBLE1BQUlDLFlBQVksR0FBR0osTUFBTSxDQUFDQSxNQUFNLENBQUMsYUFBRCxDQUFQLENBQXpCO0FBQ0FDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZRSxZQUFZLENBQUNDLENBQXpCO0FBQ0EsTUFBSUMsS0FBSyxHQUFHRixZQUFZLENBQUNDLENBQXpCOztBQUNBLE1BQUlDLEtBQUosRUFBVztBQUNQLFNBQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0QsS0FBSyxDQUFDRSxNQUExQixFQUFrQ0QsQ0FBQyxFQUFuQyxFQUF1QztBQUNuQyxVQUFJRCxLQUFLLENBQUNDLENBQUQsQ0FBTCxDQUFTLENBQVQsRUFBWUUsV0FBWixNQUE2QixNQUFqQyxFQUF5QztBQUNyQ04sc0JBQWMsR0FBR08sWUFBWSxDQUFDUCxjQUFELEVBQWlCRyxLQUFLLENBQUNDLENBQUQsQ0FBTCxDQUFTLENBQVQsQ0FBakIsQ0FBN0I7QUFDQU4sZUFBTyxDQUFDQyxHQUFSLENBQVkscUJBQVo7QUFDSCxPQUhELE1BS0FELE9BQU8sQ0FBQ0MsR0FBUixDQUFZSSxLQUFLLENBQUNDLENBQUQsQ0FBTCxDQUFTLENBQVQsQ0FBWixFQUF5QkQsS0FBSyxD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aUVBRUFELGFBRkEscUJBQWQ7QUFLQSxNQUFJRSxlQUFlLEdBQUcsR0FBdEI7QUFDQSxNQUFJQyxZQUFZLDJFQUVPRCxlQUZQLHFJQUFoQjtBQUtBNUMsaUJBQWUsQ0FBQzhDLFNBQWhCLElBQTZCbkMsWUFBWSxHQUFHZ0MsVUFBZixHQUE0QkUsWUFBekQ7QUFDQzs7UUFFUS9DLFksR0FBQUEsWTs7Ozs7Ozs7Ozs7QUN4UFQsdUMiLCJmaWxlIjoid2lkZ2V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlV2lkZ2V0IH0gZnJvbSAnLi9jcmVhdGVXaWRnZXQnO1xuXG5jb25zdCBzdXBwb3J0ZWRBUEkgPSBbJ2luaXQnLCAnY3JlYXRlJ107IC8vIGVubGlzdCBhbGwgbWV0aG9kcyBzdXBwb3J0ZWQgYnkgQVBJIChlLmcuIGBtdygnZXZlbnQnLCAndXNlci1sb2dpbicpO2ApXG5cbi8qKlxuVGhlIG1haW4gZW50cnkgb2YgdGhlIGFwcGxpY2F0aW9uXG4qL1xuXG5mdW5jdGlvbiBhcHAod2luZG93KSB7XG4gICAgY29uc29sZS5sb2coJ0pTLW5nV2lkZ2V0IHN0YXJ0aW5nJyk7XG5cbiAgICBsZXQgY29uZmlndXJhdGlvbnMgPSB7XG4gICAgfTtcblxuICAgIGxldCBnbG9iYWxPYmplY3QgPSB3aW5kb3dbd2luZG93WydKUy1uZ1dpZGdldCddXTtcbiAgICBjb25zb2xlLmxvZyhnbG9iYWxPYmplY3QucSlcbiAgICBsZXQgcXVldWUgPSBnbG9iYWxPYmplY3QucTtcbiAgICBpZiAocXVldWUpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBxdWV1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHF1ZXVlW2ldWzBdLnRvTG93ZXJDYXNlKCkgPT0gJ2luaXQnKSB7XG4gICAgICAgICAgICAgICAgY29uZmlndXJhdGlvbnMgPSBleHRlbmRPYmplY3QoY29uZmlndXJhdGlvbnMsIHF1ZXVlW2ldWzFdKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnSlMtbmdXaWRnZXQgc3RhcnRlZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgY29uc29sZS5sb2cocXVldWVbaV1bMF0sIHF1ZXVlW2ldWzFdKVxuICAgICAgICAgICAgICAgIGFwaUhhbmRsZXIocXVldWVbaV1bMF0sIHF1ZXVlW2ldWzFdKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdsb2JhbE9iamVjdCA9IGFwaUhhbmRsZXI7XG4gICAgZ2xvYmFsT2JqZWN0LmNvbmZpZ3VyYXRpb25zID0gY29uZmlndXJhdGlvbnM7XG59XG5cbi8qKlxuTWV0aG9kIHRoYXQgaGFuZGxlcyBhbGwgQVBJIGNhbGxzXG4qL1xuZnVuY3Rpb24gYXBpSGFuZGxlcihhcGksIHBhcmFtcykge1xuICAgIGlmICghYXBpKSB0aHJvdyBFcnJvcignQVBJIG1ldGhvZCByZXF1aXJlZCcpO1xuICAgIGFwaSA9IGFwaS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgaWYgKHN1cHBvcnRlZEFQSS5pbmRleE9mKGFwaSkgPT09IC0xKSB0aHJvdyBFcnJvcihgTWV0aG9kICR7YXBpfSBpcyBub3Qgc3VwcG9ydGVkYCk7XG5cbiAgICAvLyBjb25zb2xlLmxvZyhgSGFuZGxpbmcgQVBJIGNhbGwgJHthcGl9YCwgcGFyYW1zKTtcblxuICAgIHN3aXRjaCAoYXBpKSB7XG4gICAgICAgIGNhc2UgJ2NyZWF0ZSc6XG4gICAgICAgICAgICBjcmVhdGVXaWRnZXQoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgY29uc29sZS53YXJuKGBObyBoYW5kbGVyIGRlZmluZWQgZm9yICR7YXBpfWApO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZXh0ZW5kT2JqZWN0KGEsIGIpIHtcbiAgICBmb3IgKHZhciBrZXkgaW4gYilcbiAgICAgICAgaWYgKGIuaGFzT3duUHJvcGVydHkoa2V5KSlcbiAgICAgICAgICAgIGFba2V5XSA9IGJba2V5XTtcbiAgICByZXR1cm4gYTtcbn1cblxuYXBwKHdpbmRvdyk7IiwiLy8gaW1wb3J0IGZvbnRhd2Vzb21lIGluaXQganNcbi8vIGltcG9ydCAnLi9mb250YXdlc29tZS1hbGwubWluLmpzJ1xuXG4vLyBpbXBvcnQgQ1NTIGZvciB3aWRnZXRcbmltcG9ydCBcIi4uL3Njc3MvYXBwLnNjc3NcIjtcblxuXG5hc3luYyBmdW5jdGlvbiBMb2FkSlNPTigpIHtcbiAgICBsZXQgdXJsID0gXCIvYXBwL2FwaS9ldmVudC9cIiArIGlkO1xuICAgIGxldCBwcm9taXNlID0gYXdhaXQgZmV0Y2godXJsKTtcbiAgICBpZiAoIXByb21pc2Uub2spIHsgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGxvYWRcIik7IH1cbiAgICBlbHNlIHtcbiAgICAgICAgdmFyIGpzb25Db250ZW50cyA9IGF3YWl0IHByb21pc2UuanNvbigpO1xuICAgICAgICBjb25zb2xlLmxvZyhqc29uQ29udGVudHMpXG4gICAgICAgIHJldHVybiBqc29uQ29udGVudHM7XG4gICAgfVxufVxuLy8gYXN5bmMgZnVuY3Rpb24gY3JlYXRlV2lkZ2V0KCkgIDwtLS0gcmVwbGFjZSBmdW5jdGlvbiBiZWxvdyB3aXRoIHRoaXNcbmZ1bmN0aW9uIGNyZWF0ZVdpZGdldCgpIHtcblxuLy8gaWYoICFsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnd2lkZ2V0RGF0YScpICYmICFzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd3aWRnZXREYXRhJykgKSB7XG4vLyAgICAgbGV0IGRhdGEgPSBhd2FpdCBMb2FkSlNPTigpO1xuLy8gICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd3aWRnZXREYXRhJywgZGF0YSk7XG4vLyAgIH0gZWxzZSB7XG4vLyAgICAgbGV0IGRhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnd2lkZ2V0RGF0YScpID8gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3dpZGdldERhdGEnKSA6IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3dpZGdldERhdGEnKTtcbi8vICAgfVxuXG4vLyBkdW1teSBkYXRhIGZvciB0ZXN0aW5nXG5sZXQgZGF0YSA9IHtcbiAgICBcIm9yZ2FuaXNlclwiOiB7XG4gICAgICAgIFwiY29tcGFueVwiOiBcIk1vdG9rdWx0aXZhdG9yaSBQZXJ1bmlcXHUwMTA3XCIsXG4gICAgICAgIFwidXJsXCI6IFwiaHR0cHM6XFwvXFwvbmV0Z2VuLmlvXFwvXCJcbiAgICB9LFxuICAgIFwibmFtZVwiOiBcIldPT09PT1wiLFxuICAgIFwic3RhcnREYXRlXCI6IFwiMjAyMS0wNy0xOVQxMDowMDowMFwiLFxuICAgIFwiZW5kRGF0ZVwiOiBcIjIwMjEtMDctMTlUMTQ6MDA6MDBcIixcbiAgICBcImxvY2F0aW9uXCI6IFwiRG9uamkgTWlob2xqYWNcIixcbiAgICBcImltYWdlXCI6IFwiZWFydGgtNjBmNTJkYWVjOWRiMS5qcGdcIixcbiAgICBcImRlc2NyaXB0aW9uXCI6IFwiU3BlY3RhY2xlISBFdmVudCBvZiB0aGUgeWVhciFcIixcbiAgICBcInRlcm1zQ29uZGl0aW9uc1wiOiBcImJsYSBibGFcIixcbiAgICBcInByaXZhY3lQb2xpY3lcIjogXCJibGEgYmxhXCIsXG4gICAgXCJ1cmxcIjogXCJodHRwczpcXC9cXC9uZXRnZW4uaW9cXC9cIixcbiAgICBcInRpY2tldFR5cGVzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgXCJuYW1lXCI6IFwiTU9KIFRJS0VUXCIsXG4gICAgICAgICAgICBcInN0YXJ0RGF0ZVwiOiBcIjIwMjEtMDctMTZUMTU6MDA6MDBcIixcbiAgICAgICAgICAgIFwiZW5kRGF0ZVwiOiBcIjIwMjEtMDctMTZUMTk6NDE6MDBcIixcbiAgICAgICAgICAgIFwibWF4UXVhbnRpdHlcIjogNTAsXG4gICAgICAgICAgICBcImFjdGl2ZVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJwcmljZVwiOiAyNDYzMDAsXG4gICAgICAgICAgICBcInZhdFJhdGVcIjogMjUsXG4gICAgICAgICAgICBcImN1cnJlbmN5XCI6IFwiSFJLXCIsXG4gICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiNjBlYmZlYzBhOWUyOSBkZXNjcmlwdGlvblwiLFxuICAgICAgICAgICAgXCJ0aWNrZXRUeXBlRmllbGRzXCI6IFtdLFxuICAgICAgICAgICAgXCJzb2xkVGlja2V0c1wiOiAzXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIlRpY2tldCAxXCIsXG4gICAgICAgICAgICBcInN0YXJ0RGF0ZVwiOiBcIjE5OTktMDYtMDZUMDA6MDA6MDBcIixcbiAgICAgICAgICAgIFwiZW5kRGF0ZVwiOiBcIjIwMDAtMTItMTJUMDA6MDA6MDArMDE6MDBcIixcbiAgICAgICAgICAgIFwibWF4UXVhbnRpdHlcIjogNzcsXG4gICAgICAgICAgICBcImFjdGl2ZVwiOiBmYWxzZSxcbiAgICAgICAgICAgIFwicHJpY2VcIjogMjQ3MzQsXG4gICAgICAgICAgICBcInZhdFJhdGVcIjogMjUsXG4gICAgICAgICAgICBcImN1cnJlbmN5XCI6IFwiSFJLXCIsXG4gICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiNjBlYmZlYzBhYzBiZiBkZXNjcmlwdGlvblwiLFxuICAgICAgICAgICAgXCJ0aWNrZXRUeXBlRmllbGRzXCI6IFtdLFxuICAgICAgICAgICAgXCJzb2xkVGlja2V0c1wiOiAwXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwibmFtZVwiOiBcImFzZGFzZFwiLFxuICAgICAgICAgICAgXCJzdGFydERhdGVcIjogbnVsbCxcbiAgICAgICAgICAgIFwiZW5kRGF0ZVwiOiBudWxsLFxuICAgICAgICAgICAgXCJtYXhRdWFudGl0eVwiOiBudWxsLFxuICAgICAgICAgICAgXCJhY3RpdmVcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwicHJpY2VcIjogMTIwMCxcbiAgICAgICAgICAgIFwidmF0UmF0ZVwiOiAxMjMsXG4gICAgICAgICAgICBcImN1cnJlbmN5XCI6IFwiSFJLXCIsXG4gICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiYXNkXCIsXG4gICAgICAgICAgICBcInRpY2tldFR5cGVGaWVsZHNcIjogW10sXG4gICAgICAgICAgICBcInNvbGRUaWNrZXRzXCI6IDBcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJuYW1lXCI6IFwiZGRkZGRkZFwiLFxuICAgICAgICAgICAgXCJzdGFydERhdGVcIjogXCIyMDIxLTA3LTE1VDE3OjAwOjAwXCIsXG4gICAgICAgICAgICBcImVuZERhdGVcIjogXCIyMDIxLTA3LTE2VDE2OjAwOjAwXCIsXG4gICAgICAgICAgICBcIm1heFF1YW50aXR5XCI6IDUzLFxuICAgICAgICAgICAgXCJhY3RpdmVcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwicHJpY2VcIjogMzUyMDAsXG4gICAgICAgICAgICBcInZhdFJhdGVcIjogMTMsXG4gICAgICAgICAgICBcImN1cnJlbmN5XCI6IFwiSFJLXCIsXG4gICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiZmRhc3NkXCIsXG4gICAgICAgICAgICBcInRpY2tldFR5cGVGaWVsZHNcIjogW10sXG4gICAgICAgICAgICBcInNvbGRUaWNrZXRzXCI6IDBcbiAgICAgICAgfVxuICAgIF1cbn1cblxubGV0IHdpZGdldENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG53aWRnZXRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnd2lkZ2V0JylcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQod2lkZ2V0Q29udGFpbmVyKTtcblxuLy8gV2lkZ2V0IGhlYWRlclxubGV0IHRpdGxlID0gZGF0YS5uYW1lO1xubGV0IGhlYWRlckltYWdlU3JjID0gZGF0YS5pbWFnZTtcbmxldCB3aWRnZXRIZWFkZXIgPSBgXG4gICAgICAgIDxkaXYgY2xhc3M9J3dpZGdldF9faGVhZGVyJz5cbiAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJ3aWRnZXRfX2ltYWdlXCJzcmM9JyR7aGVhZGVySW1hZ2VTcmN9JyAvPjxoMyBjbGFzcz0nd2lkZ2V0X190aXRsZSc+JHt0aXRsZX08L2gzPlxuICAgICAgICA8L2Rpdj5gXG5sZXQgYWxsVGlja2V0cyA9IGBgO1xuXG4vLyBXaWRnZXQgdGlja2V0c1xuY29uc29sZS5sb2coZGF0YS5pbWFnZSlcbmxldCB0aWNrZXRUeXBlcyA9IGRhdGEudGlja2V0VHlwZXM7XG50aWNrZXRUeXBlcy5mb3JFYWNoKCh0aWNrZXRUeXBlLCBpbmRleCkgPT4ge1xuXG4gICAgLy8gY29tbW9uIHByb3BvcnRpZXMgZm9yIGFsbCB0aWNrZXRzXG4gICAgbGV0IHRpY2tldFRpdGxlID0gdGlja2V0VHlwZS5uYW1lO1xuICAgIGxldCBkYXRlSWNvbiA9ICcnO1xuICAgIGxldCBkYXRlTGFiZWwgPSAnJztcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUodGlja2V0VHlwZXMuZW5kRGF0ZSk7XG4gICAgY29uc3QgZGF0ZVN0cmluZyA9IGRhdGUudG9EYXRlU3RyaW5nKCk7XG4gICAgbGV0IGRlc2NyaXB0aW9uID0gdGlja2V0VHlwZS5kZXNjcmlwdGlvbiAhPT0gbnVsbCA/IHRpY2tldFR5cGUuZGVzY3JpcHRpb24gOiAnJztcbiAgICBsZXQgZGVzY3JpcHRpb25BZGRpdGlvbmFsID0gdGlja2V0VHlwZS5kZXNjcmlwdGlvbkFkZGl0aW9uYWwgIT09IG51bGwgPyB0aWNrZXRUeXBlLmRlc2NyaXB0aW9uQWRkaXRpb25hbCA6ICcnO1xuICAgIGxldCBidG5FbGVtZW50ID0gJyc7XG4gICAgbGV0IHByaWNlTm93ID0gdGlja2V0VHlwZS5wcmljZSAvIDEwMDtcbiAgICBsZXQgcHJpY2VEaXNjb3VudGVkID0gdGlja2V0VHlwZS5wcmljZURpc2NvdW50ZWQ7XG4gICAgbGV0IHByaWNlRGlzY291bnRlZEVsID0gcHJpY2VEaXNjb3VudGVkID8gYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz0nd2lkZ2V0X19wcmljZS1kaXNjb3VudGVkJz5cbiAgICAgICAgICAgICAgICAke3ByaWNlRGlzY291bnRlZH0gPHNwYW4gY2xhc3M9XCJ3aWRnZXRfX2N1cnJlbmN5XCI+ICR7cHJpY2VDdXJyZW5jeX08L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5gIDogJyc7XG5cbiAgICBsZXQgcHJpY2VDdXJyZW5jeSA9IHRpY2tldFR5cGUuY3VycmVuY3k7XG4gICAgbGV0IHZhdFJhdGUgPSB0aWNrZXRUeXBlLnZhdFJhdGU7XG5cbiAgICAvLyBpZiB0aWNrZXQgdHlwZSBpcyBhY3RpdmVcbiAgICBpZiAodGlja2V0VHlwZS5hY3RpdmUpIHtcblxuICAgICAgICAvLyBpZiB0aWNrZXRzIGFyZSBub3Qgc29sZCBvdXQgXG4gICAgICAgIGlmICh0aWNrZXRUeXBlLnNvbGRUaWNrZXRzICE9PSB0aWNrZXRUeXBlLm1heFF1YW50aXR5ICYmIHRpY2tldFR5cGUubWF4UXVhbnRpdHkgIT09IG51bGwpIHtcblxuICAgICAgICAgICAgZGF0ZUljb24gPSBgPGkgY2xhc3M9XCJmYXMgZmEtaG91cmdsYXNzLWhhbGZcIj48L2k+YFxuICAgICAgICAgICAgZGF0ZUxhYmVsID0gJ0F2YWlsYWJsZSB1bnRpbCAnO1xuXG4gICAgICAgICAgICBsZXQgbWF4UXVhbnRpdHkgPSBkYXRhLm1heFF1YW50aXR5ID09PSBudWxsID8gMTAwIDogZGF0YS5tYXhRdWFudGl0eTtcbiAgICAgICAgICAgIGxldCBxdWFudGl0eUxlZnQgPSB0aWNrZXRUeXBlLm1heFF1YW50aXR5IC0gdGlja2V0VHlwZS5zb2xkVGlja2V0cztcbiAgICAgICAgICAgIGxldCBzZWxlY3RMYWJlbCA9IGBcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgVGlja2V0cyBsZWZ0XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4ke3F1YW50aXR5TGVmdH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+YFxuICAgICAgICAgICAgbGV0IHNlbGVjdCA9IGA8c2VsZWN0PmBcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IHF1YW50aXR5TGVmdDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgc2VsZWN0ICs9IGA8b3B0aW9uIHZhbHVlPVwiJHtpfVwiPiR7aX08L29wdGlvbj5gO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2VsZWN0ICs9IGA8L3NlbGVjdD5gXG5cbiAgICAgICAgICAgIGJ0bkVsZW1lbnQgPSBzZWxlY3RMYWJlbCArIHNlbGVjdDtcbiAgICAgICAgfVxuICAgICAgICAvLyBpZiB0aWNrZXRzIGFyZSBzb2xkIG91dFxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGRhdGVJY29uID0gYDxpIGNsYXNzPVwiZmFyIGZhLWNhbGVuZGFyLWFsdFwiPjwvaT5gO1xuICAgICAgICAgICAgZGF0ZUxhYmVsID0gJ0F2YWlsYWJsZSBmcm9tICc7XG4gICAgICAgICAgICBidG5FbGVtZW50ID0gYDxidXR0b24gY2xhc3M9XCJ3aWRnZXRfX2J0biB3aWRnZXRfX2J0bi0tc29sZC1vdXRcIj5Tb2xkIG91dDwvYnV0dG9uPmA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gaWYgdGlja2V0IHR5cGUgaXMgbm90IGFjdGl2ZSAodW5hdmFpbGFibGUpXG4gICAgZWxzZSB7XG4gICAgICAgIGRhdGVJY29uID0gYDxpIGNsYXNzPVwiZmFyIGZhLWNhbGVuZGFyXCI+PC9pPmBcbiAgICAgICAgZGF0ZUxhYmVsID0gJ1dhcyBhdmFpbGFibGUgZnJvbSAnO1xuICAgICAgICBidG5FbGVtZW50ID0gYDxidXR0b24gY2xhc3M9XCJ3aWRnZXRfX2J0biB3aWRnZXRfX2J0bi0tdW5hdmFpbGFibGVcIj48aSBjbGFzcz1cImZhcyBmYS1leGNsYW1hdGlvbi1jaXJjbGVcIj48L2k+PHNwYW4+VW5hdmFpbGFibGU8L3NwYW4+PC9idXR0b24+YDtcbiAgICB9XG5cbiAgICAvLyB0aWNrZXQgZWxlbWVudFxuICAgIGxldCB0aWNrZXQgPSBgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSd3aWRnZXRfX3RpY2tldCc+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nd2lkZ2V0X19sZWZ0Jz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nd2lkZ2V0X190aWNrZXQtdGl0bGUnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3RpY2tldFRpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3aWRnZXRfX2RhdGUtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J3dpZGdldF9fZGF0ZS1pY29uJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7ZGF0ZUljb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwid2lkZ2V0X19kYXRlLWluZm9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSd3aWRnZXRfX2RhdGUtbGFiZWwnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7ZGF0ZUxhYmVsfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSd3aWRnZXRfX2RhdGUnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7ZGF0ZVN0cmluZ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J3dpZGdldF9fdGV4dCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nd2lkZ2V0X19kZXNjcmlwdGlvbic+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7ZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nd2lkZ2V0X19kZXNjcmlwdGlvbi1hZGRpdGlvbmFsIGQtbm9uZScgaWQ9XCJ0YWItJHtpbmRleH1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtkZXNjcmlwdGlvbkFkZGl0aW9uYWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J3dpZGdldF9fc2hvdy1tb3JlJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIFNob3cgbW9yZSA8aSBjbGFzcz1cImZhcyBmYS1jaGV2cm9uLWRvd25cIj48L2k+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J3dpZGdldF9fcmlnaHQnPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSd3aWRnZXRfX3ByaWNpbmcnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nd2lkZ2V0X19wcmljZS1ub3cnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7cHJpY2VOb3d9IDxzcGFuIGNsYXNzPVwid2lkZ2V0X19jdXJyZW5jeVwiPiR7cHJpY2VDdXJyZW5jeX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICR7cHJpY2VEaXNjb3VudGVkRWx9XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSd3aWRnZXRfX3ZhdCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVkFUICgke3ZhdFJhdGV9JSkgaW5jbHVkZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nd2lkZ2V0X190aWNrZXQtcGlja2VyJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICR7YnRuRWxlbWVudH1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICA8L2Rpdj5gXG5cbiAgICBhbGxUaWNrZXRzICs9IHRpY2tldDtcbn0pO1xuXG5sZXQgd2lkZ2V0U2VjdGlvbiA9IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cIndpZGdldF9fc2VjdGlvblwiPlxuICAgICAgICAgICAgJHthbGxUaWNrZXRzfVxuICAgICAgICA8L2Rpdj5gO1xuXG5sZXQgd2lkZ2V0Qm9keSA9IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cIndpZGdldF9fYm9keVwiPlxuICAgICAgICAgICAgJHt3aWRnZXRTZWN0aW9ufVxuICAgICAgICA8L2Rpdj5gO1xuXG5sZXQgY2hlY2tvdXRCdG5IcmVmID0gXCIjXCI7XG5sZXQgd2lkZ2V0Rm9vdGVyID0gYFxuICAgICAgICA8ZGl2IGNsYXNzPSd3aWRnZXRfX2Zvb3Rlcic+XG4gICAgICAgICAgICA8YSBocmVmPVwiJHtjaGVja291dEJ0bkhyZWZ9XCIgY2xhc3M9XCJ3aWRnZXRfX2J0biB3aWRnZXRfX2J0bi0tcHJpbWFyeVwiPjxzcGFuPkNoZWNrb3V0PC9zcGFuPjxpIGNsYXNzPVwiZmFzIGZhLWFycm93LXJpZ2h0XCI+PC9pPjwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5gXG5cbndpZGdldENvbnRhaW5lci5pbm5lckhUTUwgKz0gd2lkZ2V0SGVhZGVyICsgd2lkZ2V0Qm9keSArIHdpZGdldEZvb3Rlcjtcbn1cblxuZXhwb3J0IHsgY3JlYXRlV2lkZ2V0IH0gIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==