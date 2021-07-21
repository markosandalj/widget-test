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
            console.log(queue[i][1]);
            console.log(configurations);
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
    
    
    // loads data
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
    
    
    __webpack_require__(/*! ./fontawesome-all.min.js */ "./assets/app/widget/js/fontawesome-all.min.js");
    
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
        var priceDiscountedEl = priceDiscounted ? "\n                <div class='widget__price-discounted'>\n                    ".concat(priceDiscounted, " <span class=\"widget__currency\"> ").concat(priceCurrency, "</span>\n                </div>") : '';
        var priceCurrency = ticketType.currency;
        var vatRate = ticketType.vatRate; // if ticket type is active
    
        if (ticketType.active) {
          // if tickets are not sold out 
          if (ticketType.soldTickets !== ticketType.maxQuantity && ticketType.maxQuantity !== null) {
            dateIcon = "<i class=\"fas fa-hourglass-half\"></i>";
            dateLabel = 'Available until ';
            var maxQuantity = data.maxQuantity === null ? 100 : data.maxQuantity;
            var quantityLeft = ticketType.maxQuantity - ticketType.soldTickets;
            var selectLabel = "\n                        <label>\n                            Tickets left\n                            <span>".concat(quantityLeft, "</span>\n                        </label>");
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
            btnElement = "<button class=\"widget__btn widget__btn--unavailable\"><i class=\"fas fa-exclamation-circle\"></i>Unavailable</button>";
          } // ticket element
    
    
        var ticket = "\n                <div class='widget__ticket'>\n                    <div class='widget__left'>\n                        <div>\n                            <div class='widget__ticket-title'>\n                                ".concat(ticketTitle, "\n                            </div>\n                            <span class='widget__date-icon'>\n                                ").concat(dateIcon, "\n                            </span>\n                            <span class='widget__date-label'>\n                                ").concat(dateLabel, " \n                            </span>\n                            <span class='widget__date'>\n                                ").concat(dateString, "\n                            </span>\n                        </div>\n                        <div class='widget__text'>\n                            <div class='widget__description'>\n                                ").concat(description, "\n                            </div>\n                            <div class='widget__description-additional d-none' id=\"tab-").concat(index, "\">\n                                ").concat(descriptionAdditional, "\n                            </div>\n                        </div>\n                    </div>\n                    <div class='widget__right'>\n                        <div class='widget__pricing'>\n                            <div class='widget__price-now'>\n                                ").concat(priceNow, " <span class=\"widget__currency\">").concat(priceCurrency, "</span>\n                            </div>\n                            ").concat(priceDiscountedEl, "\n                            <div class='widget__vat'>\n                                VAT (").concat(vatRate, "%) included\n                            </div>\n                        </div>\n                        <div class='widget__ticket-picker'>\n                            ").concat(btnElement, "\n                        </div>\n                    </div>\n                    <div class='widget__show-more'>\n                        Show more <i class=\"fas fa-chevron-down\"></i>\n                    </div>\n                </div>");
        allTickets += ticket;
      });
      var widgetSection = "\n            <div class=\"widget__section\">\n                ".concat(allTickets, "\n            </div>");
      var widgetBody = "\n            <div class=\"widget__body\">\n                ".concat(widgetSection, "\n            </div>");
      var checkoutBtnHref = "#";
      var widgetFooter = "\n            <div class='widget__footer'>\n                <a href=\"".concat(checkoutBtnHref, "\" class=\"widget__btn widget__btn--primary\">Checkout<i class=\"fas fa-arrow-right\"></i></button>\n            </div>");
      widgetContainer.innerHTML += widgetHeader + widgetBody + widgetFooter;
    }
    
    createWidget();
    
    /***/ }),
    
    /***/ "./assets/app/widget/js/fontawesome-all.min.js":
    /*!*****************************************************!*\
      !*** ./assets/app/widget/js/fontawesome-all.min.js ***!
      \*****************************************************/
    /*! no static exports found */
    /***/ (function(module, exports, __webpack_require__) {
    
    "use strict";
    
    
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
    //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL3dpZGdldC9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC93aWRnZXQvanMvY3JlYXRlV2lkZ2V0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvd2lkZ2V0L3Njc3MvYXBwLnNjc3MiXSwibmFtZXMiOlsic3VwcG9ydGVkQVBJIiwiYXBwIiwid2luZG93IiwiY29uc29sZSIsImxvZyIsImNvbmZpZ3VyYXRpb25zIiwiZ2xvYmFsT2JqZWN0IiwicSIsInF1ZXVlIiwiaSIsImxlbmd0aCIsInRvTG93ZXJDYXNlIiwiZXh0ZW5kT2JqZWN0IiwiYXBpSGFuZGxlciIsImFwaSIsInBhcmFtcyIsIkVycm9yIiwiaW5kZXhPZiIsIndhcm4iLCJhIiwiYiIsImtleSIsImhhc093blByb3BlcnR5IiwidXJsIiwiaWQiLCJmZXRjaCIsInByb21pc2UiLCJvayIsImpzb24iLCJqc29uQ29udGVudHMiLCJMb2FkSlNPTiIsImNyZWF0ZVdpZGdldCIsImRhdGEiLCJ3aWRnZXRDb250YWluZXIiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJ0aXRsZSIsIm5hbWUiLCJoZWFkZXJJbWFnZVNyYyIsImltYWdlIiwid2lkZ2V0SGVhZGVyIiwiYWxsVGlja2V0cyIsInRpY2tldFR5cGVzIiwiZm9yRWFjaCIsInRpY2tldFR5cGUiLCJpbmRleCIsInRpY2tldFRpdGxlIiwiZGF0ZUljb24iLCJkYXRlTGFiZWwiLCJkYXRlIiwiRGF0ZSIsImVuZERhdGUiLCJkYXRlU3RyaW5nIiwidG9EYXRlU3RyaW5nIiwiZGVzY3JpcHRpb24iLCJkZXNjcmlwdGlvbkFkZGl0aW9uYWwiLCJidG5FbGVtZW50IiwicHJpY2VOb3ciLCJwcmljZSIsInByaWNlRGlzY291bnRlZCIsInByaWNlRGlzY291bnRlZEVsIiwicHJpY2VDdXJyZW5jeSIsImN1cnJlbmN5IiwidmF0UmF0ZSIsImFjdGl2ZSIsInNvbGRUaWNrZXRzIiwibWF4UXVhbnRpdHkiLCJxdWFudGl0eUxlZnQiLCJzZWxlY3RMYWJlbCIsInNlbGVjdCIsInRpY2tldCIsIndpZGdldFNlY3Rpb24iLCJ3aWRnZXRCb2R5IiwiY2hlY2tvdXRCdG5IcmVmIiwid2lkZ2V0Rm9vdGVyIiwiaW5uZXJIVE1MIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFNQSxZQUFZLEdBQUcsQ0FBQyxNQUFELEVBQVMsUUFBVCxDQUFyQixDLENBQXlDOztBQUV6QztBQUNBO0FBQ0E7O0FBRUEsU0FBU0MsR0FBVCxDQUFhQyxNQUFiLEVBQXFCO0FBQ2pCQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxzQkFBWjtBQUVBLE1BQUlDLGNBQWMsR0FBRyxFQUFyQjtBQUdBLE1BQUlDLFlBQVksR0FBR0osTUFBTSxDQUFDQSxNQUFNLENBQUMsYUFBRCxDQUFQLENBQXpCO0FBQ0FDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZRSxZQUFZLENBQUNDLENBQXpCO0FBQ0EsTUFBSUMsS0FBSyxHQUFHRixZQUFZLENBQUNDLENBQXpCOztBQUNBLE1BQUlDLEtBQUosRUFBVztBQUNQLFNBQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0QsS0FBSyxDQUFDRSxNQUExQixFQUFrQ0QsQ0FBQyxFQUFuQyxFQUF1QztBQUNuQyxVQUFJRCxLQUFLLENBQUNDLENBQUQsQ0FBTCxDQUFTLENBQVQsRUFBWUUsV0FBWixNQUE2QixNQUFqQyxFQUF5QztBQUNyQ04sc0JBQWMsR0FBR08sWUFBWSxDQUFDUCxjQUFELEVBQWlCRyxLQUFLLENBQUNDLENBQUQsQ0FBTCxDQUFTLENBQVQsQ0FBakIsQ0FBN0I7QUFDQU4sZUFBTyxDQUFDQyxHQUFSLENBQVlJLEtBQUssQ0FBQ0MsQ0FBRCxDQUFMLENBQVMsQ0FBVCxDQUFaO0FBQ0FOLGVBQU8sQ0FBQ0MsR0FBUixDQUFZQyxjQUFaO0FBQ0FGLGVBQU8sQ0FBQ0MsR0FBUixD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UCxVQXJDWixtUEFBVjtBQTZDQWYsY0FBVSxJQUFJNkIsTUFBZDtBQUNILEdBMUdEO0FBNEdBLE1BQUlDLGFBQWEsNEVBRUg5QixVQUZHLHlCQUFqQjtBQUtBLE1BQUkrQixVQUFVLHlFQUVBRCxhQUZBLHlCQUFkO0FBS0EsTUFBSUUsZUFBZSxHQUFHLEdBQXRCO0FBQ0EsTUFBSUMsWUFBWSxtRkFFT0QsZUFGUCw0SEFBaEI7QUFLQTVDLGlCQUFlLENBQUM4QyxTQUFoQixJQUE2Qm5DLFlBQVksR0FBR2dDLFVBQWYsR0FBNEJFLFlBQXpEO0FBQ0g7O0FBQ0QvQyxZQUFZLEc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcFBaLHVDIiwiZmlsZSI6IndpZGdldC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVdpZGdldCB9IGZyb20gJy4vY3JlYXRlV2lkZ2V0JztcblxuY29uc3Qgc3VwcG9ydGVkQVBJID0gWydpbml0JywgJ2NyZWF0ZSddOyAvLyBlbmxpc3QgYWxsIG1ldGhvZHMgc3VwcG9ydGVkIGJ5IEFQSSAoZS5nLiBgbXcoJ2V2ZW50JywgJ3VzZXItbG9naW4nKTtgKVxuXG4vKipcblRoZSBtYWluIGVudHJ5IG9mIHRoZSBhcHBsaWNhdGlvblxuKi9cblxuZnVuY3Rpb24gYXBwKHdpbmRvdykge1xuICAgIGNvbnNvbGUubG9nKCdKUy1uZ1dpZGdldCBzdGFydGluZycpO1xuXG4gICAgbGV0IGNvbmZpZ3VyYXRpb25zID0ge1xuICAgIH07XG5cbiAgICBsZXQgZ2xvYmFsT2JqZWN0ID0gd2luZG93W3dpbmRvd1snSlMtbmdXaWRnZXQnXV07XG4gICAgY29uc29sZS5sb2coZ2xvYmFsT2JqZWN0LnEpXG4gICAgbGV0IHF1ZXVlID0gZ2xvYmFsT2JqZWN0LnE7XG4gICAgaWYgKHF1ZXVlKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcXVldWUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChxdWV1ZVtpXVswXS50b0xvd2VyQ2FzZSgpID09ICdpbml0Jykge1xuICAgICAgICAgICAgICAgIGNvbmZpZ3VyYXRpb25zID0gZXh0ZW5kT2JqZWN0KGNvbmZpZ3VyYXRpb25zLCBxdWV1ZVtpXVsxXSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocXVldWVbaV1bMV0pXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coY29uZmlndXJhdGlvbnMpXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0pTLW5nV2lkZ2V0IHN0YXJ0ZWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHF1ZXVlW2ldWzBdLCBxdWV1ZVtpXVsxXSlcbiAgICAgICAgICAgICAgICBhcGlIYW5kbGVyKHF1ZXVlW2ldWzBdLCBxdWV1ZVtpXVsxXSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnbG9iYWxPYmplY3QgPSBhcGlIYW5kbGVyO1xuICAgIGdsb2JhbE9iamVjdC5jb25maWd1cmF0aW9ucyA9IGNvbmZpZ3VyYXRpb25zO1xufVxuXG4vKipcbk1ldGhvZCB0aGF0IGhhbmRsZXMgYWxsIEFQSSBjYWxsc1xuKi9cbmZ1bmN0aW9uIGFwaUhhbmRsZXIoYXBpLCBwYXJhbXMpIHtcbiAgICBpZiAoIWFwaSkgdGhyb3cgRXJyb3IoJ0FQSSBtZXRob2QgcmVxdWlyZWQnKTtcbiAgICBhcGkgPSBhcGkudG9Mb3dlckNhc2UoKTtcblxuICAgIGlmIChzdXBwb3J0ZWRBUEkuaW5kZXhPZihhcGkpID09PSAtMSkgdGhyb3cgRXJyb3IoYE1ldGhvZCAke2FwaX0gaXMgbm90IHN1cHBvcnRlZGApO1xuXG4gICAgLy8gY29uc29sZS5sb2coYEhhbmRsaW5nIEFQSSBjYWxsICR7YXBpfWAsIHBhcmFtcyk7XG5cbiAgICBzd2l0Y2ggKGFwaSkge1xuICAgICAgICBjYXNlICdjcmVhdGUnOlxuICAgICAgICAgICAgY3JlYXRlV2lkZ2V0KCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgTm8gaGFuZGxlciBkZWZpbmVkIGZvciAke2FwaX1gKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGV4dGVuZE9iamVjdChhLCBiKSB7XG4gICAgZm9yICh2YXIga2V5IGluIGIpXG4gICAgICAgIGlmIChiLmhhc093blByb3BlcnR5KGtleSkpXG4gICAgICAgICAgICBhW2tleV0gPSBiW2tleV07XG4gICAgcmV0dXJuIGE7XG59XG5cbmFwcCh3aW5kb3cpOyIsIi8vIGltcG9ydCBmb250YXdlc29tZSBpbml0IGpzXG5pbXBvcnQgJy4vZm9udGF3ZXNvbWUtYWxsLm1pbi5qcydcblxuLy8gaW1wb3J0IENTUyBmb3Igd2lkZ2V0XG5pbXBvcnQgJy4uL3Njc3MvYXBwLnNjc3MnXG5cblxuXG4vLyBsb2FkcyBkYXRhXG5hc3luYyBmdW5jdGlvbiBMb2FkSlNPTigpIHtcbiAgICBsZXQgdXJsID0gXCIvYXBwL2FwaS9ldmVudC9cIiArIGlkO1xuICAgIGxldCBwcm9taXNlID0gYXdhaXQgZmV0Y2godXJsKTtcbiAgICBpZiAoIXByb21pc2Uub2spIHsgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGxvYWRcIik7IH1cbiAgICBlbHNlIHtcbiAgICAgICAgdmFyIGpzb25Db250ZW50cyA9IGF3YWl0IHByb21pc2UuanNvbigpO1xuICAgICAgICBjb25zb2xlLmxvZyhqc29uQ29udGVudHMpXG4gICAgICAgIHJldHVybiBqc29uQ29udGVudHM7XG4gICAgfVxufVxuXG5cbi8vIGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVdpZGdldCgpICA8LS0tIHJlcGxhY2UgZnVuY3Rpb24gYmVsb3cgd2l0aCB0aGlzXG5mdW5jdGlvbiBjcmVhdGVXaWRnZXQoKSB7XG5cbiAgICAvLyBpZiggIWxvY2FsU3RvcmFnZS5nZXRJdGVtKCd3aWRnZXREYXRhJykgJiYgIXNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3dpZGdldERhdGEnKSApIHtcbiAgICAvLyAgICAgbGV0IGRhdGEgPSBhd2FpdCBMb2FkSlNPTigpO1xuICAgIC8vICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnd2lkZ2V0RGF0YScsIGRhdGEpO1xuICAgIC8vICAgfSBlbHNlIHtcbiAgICAvLyAgICAgbGV0IGRhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnd2lkZ2V0RGF0YScpID8gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3dpZGdldERhdGEnKSA6IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3dpZGdldERhdGEnKTtcbiAgICAvLyAgIH1cblxuICAgIC8vIGR1bW15IGRhdGEgZm9yIHRlc3RpbmdcbiAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgXCJvcmdhbmlzZXJcIjoge1xuICAgICAgICAgICAgXCJjb21wYW55XCI6IFwiTW90b2t1bHRpdmF0b3JpIFBlcnVuaVxcdTAxMDdcIixcbiAgICAgICAgICAgIFwidXJsXCI6IFwiaHR0cHM6XFwvXFwvbmV0Z2VuLmlvXFwvXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwiV09PT09PXCIsXG4gICAgICAgIFwic3RhcnREYXRlXCI6IFwiMjAyMS0wNy0xOVQxMDowMDowMFwiLFxuICAgICAgICBcImVuZERhdGVcIjogXCIyMDIxLTA3LTE5VDE0OjAwOjAwXCIsXG4gICAgICAgIFwibG9jYXRpb25cIjogXCJEb25qaSBNaWhvbGphY1wiLFxuICAgICAgICBcImltYWdlXCI6IFwiZWFydGgtNjBmNTJkYWVjOWRiMS5qcGdcIixcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlNwZWN0YWNsZSEgRXZlbnQgb2YgdGhlIHllYXIhXCIsXG4gICAgICAgIFwidGVybXNDb25kaXRpb25zXCI6IFwiYmxhIGJsYVwiLFxuICAgICAgICBcInByaXZhY3lQb2xpY3lcIjogXCJibGEgYmxhXCIsXG4gICAgICAgIFwidXJsXCI6IFwiaHR0cHM6XFwvXFwvbmV0Z2VuLmlvXFwvXCIsXG4gICAgICAgIFwidGlja2V0VHlwZXNcIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIk1PSiBUSUtFVFwiLFxuICAgICAgICAgICAgICAgIFwic3RhcnREYXRlXCI6IFwiMjAyMS0wNy0xNlQxNTowMDowMFwiLFxuICAgICAgICAgICAgICAgIFwiZW5kRGF0ZVwiOiBcIjIwMjEtMDctMTZUMTk6NDE6MDBcIixcbiAgICAgICAgICAgICAgICBcIm1heFF1YW50aXR5XCI6IDUwLFxuICAgICAgICAgICAgICAgIFwiYWN0aXZlXCI6IHRydWUsXG4gICAgICAgICAgICAgICAgXCJwcmljZVwiOiAyNDYzMDAsXG4gICAgICAgICAgICAgICAgXCJ2YXRSYXRlXCI6IDI1LFxuICAgICAgICAgICAgICAgIFwiY3VycmVuY3lcIjogXCJIUktcIixcbiAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiNjBlYmZlYzBhOWUyOSBkZXNjcmlwdGlvblwiLFxuICAgICAgICAgICAgICAgIFwidGlja2V0VHlwZUZpZWxkc1wiOiBbXSxcbiAgICAgICAgICAgICAgICBcInNvbGRUaWNrZXRzXCI6IDNcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiVGlja2V0IDFcIixcbiAgICAgICAgICAgICAgICBcInN0YXJ0RGF0ZVwiOiBcIjE5OTktMDYtMDZUMDA6MDA6MDBcIixcbiAgICAgICAgICAgICAgICBcImVuZERhdGVcIjogXCIyMDAwLTEyLTEyVDAwOjAwOjAwKzAxOjAwXCIsXG4gICAgICAgICAgICAgICAgXCJtYXhRdWFudGl0eVwiOiA3NyxcbiAgICAgICAgICAgICAgICBcImFjdGl2ZVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBcInByaWNlXCI6IDI0NzM0LFxuICAgICAgICAgICAgICAgIFwidmF0UmF0ZVwiOiAyNSxcbiAgICAgICAgICAgICAgICBcImN1cnJlbmN5XCI6IFwiSFJLXCIsXG4gICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIjYwZWJmZWMwYWMwYmYgZGVzY3JpcHRpb25cIixcbiAgICAgICAgICAgICAgICBcInRpY2tldFR5cGVGaWVsZHNcIjogW10sXG4gICAgICAgICAgICAgICAgXCJzb2xkVGlja2V0c1wiOiAwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImFzZGFzZFwiLFxuICAgICAgICAgICAgICAgIFwic3RhcnREYXRlXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgXCJlbmREYXRlXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgXCJtYXhRdWFudGl0eVwiOiBudWxsLFxuICAgICAgICAgICAgICAgIFwiYWN0aXZlXCI6IHRydWUsXG4gICAgICAgICAgICAgICAgXCJwcmljZVwiOiAxMjAwLFxuICAgICAgICAgICAgICAgIFwidmF0UmF0ZVwiOiAxMjMsXG4gICAgICAgICAgICAgICAgXCJjdXJyZW5jeVwiOiBcIkhSS1wiLFxuICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJhc2RcIixcbiAgICAgICAgICAgICAgICBcInRpY2tldFR5cGVGaWVsZHNcIjogW10sXG4gICAgICAgICAgICAgICAgXCJzb2xkVGlja2V0c1wiOiAwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImRkZGRkZGRcIixcbiAgICAgICAgICAgICAgICBcInN0YXJ0RGF0ZVwiOiBcIjIwMjEtMDctMTVUMTc6MDA6MDBcIixcbiAgICAgICAgICAgICAgICBcImVuZERhdGVcIjogXCIyMDIxLTA3LTE2VDE2OjAwOjAwXCIsXG4gICAgICAgICAgICAgICAgXCJtYXhRdWFudGl0eVwiOiA1MyxcbiAgICAgICAgICAgICAgICBcImFjdGl2ZVwiOiB0cnVlLFxuICAgICAgICAgICAgICAgIFwicHJpY2VcIjogMzUyMDAsXG4gICAgICAgICAgICAgICAgXCJ2YXRSYXRlXCI6IDEzLFxuICAgICAgICAgICAgICAgIFwiY3VycmVuY3lcIjogXCJIUktcIixcbiAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiZmRhc3NkXCIsXG4gICAgICAgICAgICAgICAgXCJ0aWNrZXRUeXBlRmllbGRzXCI6IFtdLFxuICAgICAgICAgICAgICAgIFwic29sZFRpY2tldHNcIjogMFxuICAgICAgICAgICAgfVxuICAgICAgICBdXG4gICAgfVxuXG4gICAgbGV0IHdpZGdldENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgd2lkZ2V0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3dpZGdldCcpXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh3aWRnZXRDb250YWluZXIpO1xuXG4gICAgLy8gV2lkZ2V0IGhlYWRlclxuICAgIGxldCB0aXRsZSA9IGRhdGEubmFtZTtcbiAgICBsZXQgaGVhZGVySW1hZ2VTcmMgPSBkYXRhLmltYWdlO1xuICAgIGxldCB3aWRnZXRIZWFkZXIgPSBgXG4gICAgICAgIDxkaXYgY2xhc3M9J3dpZGdldF9faGVhZGVyJz5cbiAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJ3aWRnZXRfX2ltYWdlXCJzcmM9JyR7aGVhZGVySW1hZ2VTcmN9JyAvPjxoMyBjbGFzcz0nd2lkZ2V0X190aXRsZSc+JHt0aXRsZX08L2gzPlxuICAgICAgICA8L2Rpdj5gXG4gICAgbGV0IGFsbFRpY2tldHMgPSBgYDtcblxuICAgIC8vIFdpZGdldCB0aWNrZXRzXG4gICAgY29uc29sZS5sb2coZGF0YS5pbWFnZSlcbiAgICBsZXQgdGlja2V0VHlwZXMgPSBkYXRhLnRpY2tldFR5cGVzO1xuICAgIHRpY2tldFR5cGVzLmZvckVhY2goKHRpY2tldFR5cGUsIGluZGV4KSA9PiB7XG5cbiAgICAgICAgLy8gY29tbW9uIHByb3BvcnRpZXMgZm9yIGFsbCB0aWNrZXRzXG4gICAgICAgIGxldCB0aWNrZXRUaXRsZSA9IHRpY2tldFR5cGUubmFtZTtcbiAgICAgICAgbGV0IGRhdGVJY29uID0gJyc7XG4gICAgICAgIGxldCBkYXRlTGFiZWwgPSAnJztcbiAgICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKHRpY2tldFR5cGVzLmVuZERhdGUpO1xuICAgICAgICBjb25zdCBkYXRlU3RyaW5nID0gZGF0ZS50b0RhdGVTdHJpbmcoKTtcbiAgICAgICAgbGV0IGRlc2NyaXB0aW9uID0gdGlja2V0VHlwZS5kZXNjcmlwdGlvbiAhPT0gbnVsbCA/IHRpY2tldFR5cGUuZGVzY3JpcHRpb24gOiAnJztcbiAgICAgICAgbGV0IGRlc2NyaXB0aW9uQWRkaXRpb25hbCA9IHRpY2tldFR5cGUuZGVzY3JpcHRpb25BZGRpdGlvbmFsICE9PSBudWxsID8gdGlja2V0VHlwZS5kZXNjcmlwdGlvbkFkZGl0aW9uYWwgOiAnJztcbiAgICAgICAgbGV0IGJ0bkVsZW1lbnQgPSAnJztcbiAgICAgICAgbGV0IHByaWNlTm93ID0gdGlja2V0VHlwZS5wcmljZSAvIDEwMDtcbiAgICAgICAgbGV0IHByaWNlRGlzY291bnRlZCA9IHRpY2tldFR5cGUucHJpY2VEaXNjb3VudGVkO1xuICAgICAgICBsZXQgcHJpY2VEaXNjb3VudGVkRWwgPSBwcmljZURpc2NvdW50ZWQgPyBgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nd2lkZ2V0X19wcmljZS1kaXNjb3VudGVkJz5cbiAgICAgICAgICAgICAgICAgICAgJHtwcmljZURpc2NvdW50ZWR9IDxzcGFuIGNsYXNzPVwid2lkZ2V0X19jdXJyZW5jeVwiPiAke3ByaWNlQ3VycmVuY3l9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PmAgOiAnJztcblxuICAgICAgICBsZXQgcHJpY2VDdXJyZW5jeSA9IHRpY2tldFR5cGUuY3VycmVuY3k7XG4gICAgICAgIGxldCB2YXRSYXRlID0gdGlja2V0VHlwZS52YXRSYXRlO1xuXG4gICAgICAgIC8vIGlmIHRpY2tldCB0eXBlIGlzIGFjdGl2ZVxuICAgICAgICBpZiAodGlja2V0VHlwZS5hY3RpdmUpIHtcblxuICAgICAgICAgICAgLy8gaWYgdGlja2V0cyBhcmUgbm90IHNvbGQgb3V0IFxuICAgICAgICAgICAgaWYgKHRpY2tldFR5cGUuc29sZFRpY2tldHMgIT09IHRpY2tldFR5cGUubWF4UXVhbnRpdHkgJiYgdGlja2V0VHlwZS5tYXhRdWFudGl0eSAhPT0gbnVsbCkge1xuXG4gICAgICAgICAgICAgICAgZGF0ZUljb24gPSBgPGkgY2xhc3M9XCJmYXMgZmEtaG91cmdsYXNzLWhhbGZcIj48L2k+YFxuICAgICAgICAgICAgICAgIGRhdGVMYWJlbCA9ICdBdmFpbGFibGUgdW50aWwgJztcblxuICAgICAgICAgICAgICAgIGxldCBtYXhRdWFudGl0eSA9IGRhdGEubWF4UXVhbnRpdHkgPT09IG51bGwgPyAxMDAgOiBkYXRhLm1heFF1YW50aXR5O1xuICAgICAgICAgICAgICAgIGxldCBxdWFudGl0eUxlZnQgPSB0aWNrZXRUeXBlLm1heFF1YW50aXR5IC0gdGlja2V0VHlwZS5zb2xkVGlja2V0cztcbiAgICAgICAgICAgICAgICBsZXQgc2VsZWN0TGFiZWwgPSBgXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVGlja2V0cyBsZWZ0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+JHtxdWFudGl0eUxlZnR9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5gXG4gICAgICAgICAgICAgICAgbGV0IHNlbGVjdCA9IGA8c2VsZWN0PmBcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBxdWFudGl0eUxlZnQ7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3QgKz0gYDxvcHRpb24gdmFsdWU9XCIke2l9XCI+JHtpfTwvb3B0aW9uPmA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNlbGVjdCArPSBgPC9zZWxlY3Q+YFxuXG4gICAgICAgICAgICAgICAgYnRuRWxlbWVudCA9IHNlbGVjdExhYmVsICsgc2VsZWN0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gaWYgdGlja2V0cyBhcmUgc29sZCBvdXRcbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGRhdGVJY29uID0gYDxpIGNsYXNzPVwiZmFyIGZhLWNhbGVuZGFyLWFsdFwiPjwvaT5gO1xuICAgICAgICAgICAgICAgIGRhdGVMYWJlbCA9ICdBdmFpbGFibGUgZnJvbSAnO1xuICAgICAgICAgICAgICAgIGJ0bkVsZW1lbnQgPSBgPGJ1dHRvbiBjbGFzcz1cIndpZGdldF9fYnRuIHdpZGdldF9fYnRuLS1zb2xkLW91dFwiPlNvbGQgb3V0PC9idXR0b24+YDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBpZiB0aWNrZXQgdHlwZSBpcyBub3QgYWN0aXZlICh1bmF2YWlsYWJsZSlcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBkYXRlSWNvbiA9IGA8aSBjbGFzcz1cImZhciBmYS1jYWxlbmRhclwiPjwvaT5gXG4gICAgICAgICAgICBkYXRlTGFiZWwgPSAnV2FzIGF2YWlsYWJsZSBmcm9tICc7XG4gICAgICAgICAgICBidG5FbGVtZW50ID0gYDxidXR0b24gY2xhc3M9XCJ3aWRnZXRfX2J0biB3aWRnZXRfX2J0bi0tdW5hdmFpbGFibGVcIj48aSBjbGFzcz1cImZhcyBmYS1leGNsYW1hdGlvbi1jaXJjbGVcIj48L2k+VW5hdmFpbGFibGU8L2J1dHRvbj5gO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gdGlja2V0IGVsZW1lbnRcbiAgICAgICAgbGV0IHRpY2tldCA9IGBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSd3aWRnZXRfX3RpY2tldCc+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J3dpZGdldF9fbGVmdCc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J3dpZGdldF9fdGlja2V0LXRpdGxlJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHt0aWNrZXRUaXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0nd2lkZ2V0X19kYXRlLWljb24nPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke2RhdGVJY29ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0nd2lkZ2V0X19kYXRlLWxhYmVsJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtkYXRlTGFiZWx9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0nd2lkZ2V0X19kYXRlJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtkYXRlU3RyaW5nfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nd2lkZ2V0X190ZXh0Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSd3aWRnZXRfX2Rlc2NyaXB0aW9uJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtkZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSd3aWRnZXRfX2Rlc2NyaXB0aW9uLWFkZGl0aW9uYWwgZC1ub25lJyBpZD1cInRhYi0ke2luZGV4fVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke2Rlc2NyaXB0aW9uQWRkaXRpb25hbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nd2lkZ2V0X19yaWdodCc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSd3aWRnZXRfX3ByaWNpbmcnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J3dpZGdldF9fcHJpY2Utbm93Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtwcmljZU5vd30gPHNwYW4gY2xhc3M9XCJ3aWRnZXRfX2N1cnJlbmN5XCI+JHtwcmljZUN1cnJlbmN5fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3ByaWNlRGlzY291bnRlZEVsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J3dpZGdldF9fdmF0Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVkFUICgke3ZhdFJhdGV9JSkgaW5jbHVkZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nd2lkZ2V0X190aWNrZXQtcGlja2VyJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAke2J0bkVsZW1lbnR9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J3dpZGdldF9fc2hvdy1tb3JlJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIFNob3cgbW9yZSA8aSBjbGFzcz1cImZhcyBmYS1jaGV2cm9uLWRvd25cIj48L2k+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PmBcblxuICAgICAgICBhbGxUaWNrZXRzICs9IHRpY2tldDtcbiAgICB9KTtcblxuICAgIGxldCB3aWRnZXRTZWN0aW9uID0gYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIndpZGdldF9fc2VjdGlvblwiPlxuICAgICAgICAgICAgICAgICR7YWxsVGlja2V0c31cbiAgICAgICAgICAgIDwvZGl2PmA7XG5cbiAgICBsZXQgd2lkZ2V0Qm9keSA9IGBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3aWRnZXRfX2JvZHlcIj5cbiAgICAgICAgICAgICAgICAke3dpZGdldFNlY3Rpb259XG4gICAgICAgICAgICA8L2Rpdj5gO1xuXG4gICAgbGV0IGNoZWNrb3V0QnRuSHJlZiA9IFwiI1wiO1xuICAgIGxldCB3aWRnZXRGb290ZXIgPSBgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSd3aWRnZXRfX2Zvb3Rlcic+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiR7Y2hlY2tvdXRCdG5IcmVmfVwiIGNsYXNzPVwid2lkZ2V0X19idG4gd2lkZ2V0X19idG4tLXByaW1hcnlcIj5DaGVja291dDxpIGNsYXNzPVwiZmFzIGZhLWFycm93LXJpZ2h0XCI+PC9pPjwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+YFxuXG4gICAgd2lkZ2V0Q29udGFpbmVyLmlubmVySFRNTCArPSB3aWRnZXRIZWFkZXIgKyB3aWRnZXRCb2R5ICsgd2lkZ2V0Rm9vdGVyO1xufVxuY3JlYXRlV2lkZ2V0KCk7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9