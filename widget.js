(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["widget"],{

    /***/ "./assets/app/widget/js/app.js":
    /*!*************************************!*\
      !*** ./assets/app/widget/js/app.js ***!
      \*************************************/
    /*! no static exports found */
    /***/ (function(module, exports, __webpack_require__) {
    
    "use strict";
    
    
    var _createWidget = __webpack_require__(/*! ./createWidget */ "./assets/app/widget/js/createWidget.js");
    
    const supportedAPI = ['init', 'create']; // enlist all methods supported by API (e.g. `mw('event', 'user-login');`)
    
    /**
    The main entry of the application
    */
    
    function app(window) {
      console.log('JS-ngWidget starting');
      let configurations = {};
      let globalObject = window[window['JS-ngWidget']];
      console.log(globalObject.q);
      let queue = globalObject.q;
    
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
      if (supportedAPI.indexOf(api) === -1) throw Error(`Method ${api} is not supported`); // console.log(`Handling API call ${api}`, params);
    
      switch (api) {
        case 'create':
          (0, _createWidget.createWidget)();
          break;
    
        default:
          console.warn(`No handler defined for ${api}`);
      }
    }
    
    function extendObject(a, b) {
      for (var key in b) if (b.hasOwnProperty(key)) a[key] = b[key];
    
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
    let LoadJSON = (() => {
      var _ref = _asyncToGenerator(function* () {
        let url = "/app/api/event/" + id;
        let promise = yield fetch(url);
    
        if (!promise.ok) {
          throw new Error("Cannot load");
        } else {
          var jsonContents = yield promise.json();
          console.log(jsonContents);
          return jsonContents;
        }
      });
    
      return function LoadJSON() {
        return _ref.apply(this, arguments);
      };
    })(); // async function createWidget()  <--- replace function below with this
    
    
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
      let data = {
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
      let widgetContainer = document.createElement("div");
      widgetContainer.classList.add('widget');
      document.body.appendChild(widgetContainer); // Widget header
    
      let title = data.name;
      let headerImageSrc = data.image;
      let widgetHeader = `
            <div class='widget__header'>
                <img class="widget__image"src='${headerImageSrc}' /><h3 class='widget__title'>${title}</h3>
            </div>`;
      let allTickets = ``; // Widget tickets
    
      console.log(data.image);
      let ticketTypes = data.ticketTypes;
      ticketTypes.forEach((ticketType, index) => {
        // common proporties for all tickets
        let ticketTitle = ticketType.name;
        let dateIcon = '';
        let dateLabel = '';
        const date = new Date(ticketTypes.endDate);
        const dateString = date.toDateString();
        let description = ticketType.description !== null ? ticketType.description : '';
        let descriptionAdditional = ticketType.descriptionAdditional !== null ? ticketType.descriptionAdditional : '';
        let btnElement = '';
        let priceNow = ticketType.price / 100;
        let priceDiscounted = ticketType.priceDiscounted;
        let priceDiscountedEl = priceDiscounted ? `
                    <div class='widget__price-discounted'>
                        ${priceDiscounted} <span class="widget__currency"> ${priceCurrency}</span>
                    </div>` : '';
        let priceCurrency = ticketType.currency;
        let vatRate = ticketType.vatRate; // if ticket type is active
    
        if (ticketType.active) {
          // if tickets are not sold out 
          if (ticketType.soldTickets !== ticketType.maxQuantity && ticketType.maxQuantity !== null) {
            dateIcon = `<i class="fas fa-hourglass-half"></i>`;
            dateLabel = 'Available until ';
            let maxQuantity = data.maxQuantity === null ? 100 : data.maxQuantity;
            let quantityLeft = ticketType.maxQuantity - ticketType.soldTickets;
            let selectLabel = `
                            <label>
                                Tickets left
                                <span>${quantityLeft}</span>
                            </label>`;
            let select = `<select>`;
    
            for (let i = 1; i <= quantityLeft; i++) {
              select += `<option value="${i}">${i}</option>`;
            }
    
            select += `</select>`;
            btnElement = selectLabel + select;
          } // if tickets are sold out
          else {
              dateIcon = `<i class="far fa-calendar-alt"></i>`;
              dateLabel = 'Available from ';
              btnElement = `<button class="widget__btn widget__btn--sold-out">Sold out</button>`;
            }
        } // if ticket type is not active (unavailable)
        else {
            dateIcon = `<i class="far fa-calendar"></i>`;
            dateLabel = 'Was available from ';
            btnElement = `<button class="widget__btn widget__btn--unavailable"><i class="fas fa-exclamation-circle"></i>Unavailable</button>`;
          } // ticket element
    
    
        let ticket = `
                    <div class='widget__ticket'>
                        <div class='widget__left'>
                            <div>
                                <div class='widget__ticket-title'>
                                    ${ticketTitle}
                                </div>
                                <span class='widget__date-icon'>
                                    ${dateIcon}
                                </span>
                                <span class='widget__date-label'>
                                    ${dateLabel} 
                                </span>
                                <span class='widget__date'>
                                    ${dateString}
                                </span>
                            </div>
                            <div class='widget__text'>
                                <div class='widget__description'>
                                    ${description}
                                </div>
                                <div class='widget__description-additional d-none' id="tab-${index}">
                                    ${descriptionAdditional}
                                </div>
                            </div>
                        </div>
                        <div class='widget__right'>
                            <div class='widget__pricing'>
                                <div class='widget__price-now'>
                                    ${priceNow} <span class="widget__currency">${priceCurrency}</span>
                                </div>
                                ${priceDiscountedEl}
                                <div class='widget__vat'>
                                    VAT (${vatRate}%) included
                                </div>
                            </div>
                            <div class='widget__ticket-picker'>
                                ${btnElement}
                            </div>
                        </div>
                        <div class='widget__show-more'>
                            Show more <i class="fas fa-chevron-down"></i>
                        </div>
                    </div>`;
        allTickets += ticket;
      });
      let widgetSection = `
                <div class="widget__section">
                    ${allTickets}
                </div>`;
      let widgetBody = `
                <div class="widget__body">
                    ${widgetSection}
                </div>`;
      let checkoutBtnHref = "#";
      let widgetFooter = `
                <div class='widget__footer'>
                    <a href="${checkoutBtnHref}" class="widget__btn widget__btn--primary">Checkout<i class="fas fa-arrow-right"></i></button>
                </div>`;
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
    //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL3dpZGdldC9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC93aWRnZXQvanMvY3JlYXRlV2lkZ2V0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvd2lkZ2V0L3Njc3MvYXBwLnNjc3MiXSwibmFtZXMiOlsic3VwcG9ydGVkQVBJIiwiYXBwIiwid2luZG93IiwiY29uc29sZSIsImxvZyIsImNvbmZpZ3VyYXRpb25zIiwiZ2xvYmFsT2JqZWN0IiwicSIsInF1ZXVlIiwiaSIsImxlbmd0aCIsInRvTG93ZXJDYXNlIiwiZXh0ZW5kT2JqZWN0IiwiYXBpSGFuZGxlciIsImFwaSIsInBhcmFtcyIsIkVycm9yIiwiaW5kZXhPZiIsIndhcm4iLCJhIiwiYiIsImtleSIsImhhc093blByb3BlcnR5IiwidXJsIiwiaWQiLCJwcm9taXNlIiwiZmV0Y2giLCJvayIsImpzb25Db250ZW50cyIsImpzb24iLCJMb2FkSlNPTiIsImNyZWF0ZVdpZGdldCIsImRhdGEiLCJ3aWRnZXRDb250YWluZXIiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJ0aXRsZSIsIm5hbWUiLCJoZWFkZXJJbWFnZVNyYyIsImltYWdlIiwid2lkZ2V0SGVhZGVyIiwiYWxsVGlja2V0cyIsInRpY2tldFR5cGVzIiwiZm9yRWFjaCIsInRpY2tldFR5cGUiLCJpbmRleCIsInRpY2tldFRpdGxlIiwiZGF0ZUljb24iLCJkYXRlTGFiZWwiLCJkYXRlIiwiRGF0ZSIsImVuZERhdGUiLCJkYXRlU3RyaW5nIiwidG9EYXRlU3RyaW5nIiwiZGVzY3JpcHRpb24iLCJkZXNjcmlwdGlvbkFkZGl0aW9uYWwiLCJidG5FbGVtZW50IiwicHJpY2VOb3ciLCJwcmljZSIsInByaWNlRGlzY291bnRlZCIsInByaWNlRGlzY291bnRlZEVsIiwicHJpY2VDdXJyZW5jeSIsImN1cnJlbmN5IiwidmF0UmF0ZSIsImFjdGl2ZSIsInNvbGRUaWNrZXRzIiwibWF4UXVhbnRpdHkiLCJxdWFudGl0eUxlZnQiLCJzZWxlY3RMYWJlbCIsInNlbGVjdCIsInRpY2tldCIsIndpZGdldFNlY3Rpb24iLCJ3aWRnZXRCb2R5IiwiY2hlY2tvdXRCdG5IcmVmIiwid2lkZ2V0Rm9vdGVyIiwiaW5uZXJIVE1MIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxNQUFNQSxZQUFZLEdBQUcsQ0FBQyxNQUFELEVBQVMsUUFBVCxDQUFyQixDLENBQXlDOztBQUV6QztBQUNBO0FBQ0E7O0FBRUEsU0FBU0MsR0FBVCxDQUFhQyxNQUFiLEVBQXFCO0FBQ2pCQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxzQkFBWjtBQUVBLE1BQUlDLGNBQWMsR0FBRyxFQUFyQjtBQUdBLE1BQUlDLFlBQVksR0FBR0osTUFBTSxDQUFDQSxNQUFNLENBQUMsYUFBRCxDQUFQLENBQXpCO0FBQ0FDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZRSxZQUFZLENBQUNDLENBQXpCO0FBQ0EsTUFBSUMsS0FBSyxHQUFHRixZQUFZLENBQUNDLENBQXpCOztBQUNBLE1BQUlDLEtBQUosRUFBVztBQUNQLFNBQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0QsS0FBSyxDQUFDRSxNQUExQixFQUFrQ0QsQ0FBQyxFQUFuQyxFQUF1QztBQUNuQyxVQUFJRCxLQUFLLENBQUNDLENBQUQsQ0FBTCxDQUFTLENBQVQsRUFBWUUsV0FBWixNQUE2QixNQUFqQyxFQUF5QztBQUNyQ04sc0JBQWMsR0FBR08sWUFBWSxDQUFDUCxjQUFELEVBQWlCRyxLQUFLLENBQUNDLENBQUQsQ0FBTCxDQUFTLENBQVQsQ0FBakIsQ0FBN0I7QUFDQU4sZUFBTyxDQUFDQyxHQUFSLENBQVlJLEtBQUssQ0FBQ0MsQ0FBRCxDQUFMLENBQVMsQ0FBVCxDQUFaO0FBQ0FOLGVBQU8sQ0FBQ0MsR0FBUixDQUFZQyxjQUFaO0FBQ0FGLGVBQU8sQ0FBQ0MsR0FBUixD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O0FBQzVDO0FBQ0E7QUFDQSxrQ0FBa0NJLFVBQVc7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0NFLFdBQVk7QUFDOUM7QUFDQSx5RkFBeUZULEtBQU07QUFDL0Ysa0NBQWtDVSxxQkFBc0I7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDRSxRQUFTLG1DQUFrQ0ksYUFBYztBQUMzRjtBQUNBLDhCQUE4QkQsaUJBQWtCO0FBQ2hEO0FBQ0EsdUNBQXVDRyxPQUFRO0FBQy9DO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QlAsVUFBVztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBM0NRO0FBNkNBZixjQUFVLElBQUk2QixNQUFkO0FBQ0gsR0ExR0Q7QUE0R0EsTUFBSUMsYUFBYSxHQUFJO0FBQ3pCO0FBQ0Esa0JBQWtCOUIsVUFBVztBQUM3QixtQkFISTtBQUtBLE1BQUkrQixVQUFVLEdBQUk7QUFDdEI7QUFDQSxrQkFBa0JELGFBQWM7QUFDaEMsbUJBSEk7QUFLQSxNQUFJRSxlQUFlLEdBQUcsR0FBdEI7QUFDQSxNQUFJQyxZQUFZLEdBQUk7QUFDeEI7QUFDQSwyQkFBMkJELGVBQWdCO0FBQzNDLG1CQUhJO0FBS0E1QyxpQkFBZSxDQUFDOEMsU0FBaEIsSUFBNkJuQyxZQUFZLEdBQUdnQyxVQUFmLEdBQTRCRSxZQUF6RDtBQUNIOztBQUNEL0MsWUFBWSxHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BQWix1QyIsImZpbGUiOiJ3aWRnZXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVXaWRnZXQgfSBmcm9tICcuL2NyZWF0ZVdpZGdldCc7XG5cbmNvbnN0IHN1cHBvcnRlZEFQSSA9IFsnaW5pdCcsICdjcmVhdGUnXTsgLy8gZW5saXN0IGFsbCBtZXRob2RzIHN1cHBvcnRlZCBieSBBUEkgKGUuZy4gYG13KCdldmVudCcsICd1c2VyLWxvZ2luJyk7YClcblxuLyoqXG5UaGUgbWFpbiBlbnRyeSBvZiB0aGUgYXBwbGljYXRpb25cbiovXG5cbmZ1bmN0aW9uIGFwcCh3aW5kb3cpIHtcbiAgICBjb25zb2xlLmxvZygnSlMtbmdXaWRnZXQgc3RhcnRpbmcnKTtcblxuICAgIGxldCBjb25maWd1cmF0aW9ucyA9IHtcbiAgICB9O1xuXG4gICAgbGV0IGdsb2JhbE9iamVjdCA9IHdpbmRvd1t3aW5kb3dbJ0pTLW5nV2lkZ2V0J11dO1xuICAgIGNvbnNvbGUubG9nKGdsb2JhbE9iamVjdC5xKVxuICAgIGxldCBxdWV1ZSA9IGdsb2JhbE9iamVjdC5xO1xuICAgIGlmIChxdWV1ZSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHF1ZXVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAocXVldWVbaV1bMF0udG9Mb3dlckNhc2UoKSA9PSAnaW5pdCcpIHtcbiAgICAgICAgICAgICAgICBjb25maWd1cmF0aW9ucyA9IGV4dGVuZE9iamVjdChjb25maWd1cmF0aW9ucywgcXVldWVbaV1bMV0pO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHF1ZXVlW2ldWzFdKVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGNvbmZpZ3VyYXRpb25zKVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdKUy1uZ1dpZGdldCBzdGFydGVkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhxdWV1ZVtpXVswXSwgcXVldWVbaV1bMV0pXG4gICAgICAgICAgICAgICAgYXBpSGFuZGxlcihxdWV1ZVtpXVswXSwgcXVldWVbaV1bMV0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2xvYmFsT2JqZWN0ID0gYXBpSGFuZGxlcjtcbiAgICBnbG9iYWxPYmplY3QuY29uZmlndXJhdGlvbnMgPSBjb25maWd1cmF0aW9ucztcbn1cblxuLyoqXG5NZXRob2QgdGhhdCBoYW5kbGVzIGFsbCBBUEkgY2FsbHNcbiovXG5mdW5jdGlvbiBhcGlIYW5kbGVyKGFwaSwgcGFyYW1zKSB7XG4gICAgaWYgKCFhcGkpIHRocm93IEVycm9yKCdBUEkgbWV0aG9kIHJlcXVpcmVkJyk7XG4gICAgYXBpID0gYXBpLnRvTG93ZXJDYXNlKCk7XG5cbiAgICBpZiAoc3VwcG9ydGVkQVBJLmluZGV4T2YoYXBpKSA9PT0gLTEpIHRocm93IEVycm9yKGBNZXRob2QgJHthcGl9IGlzIG5vdCBzdXBwb3J0ZWRgKTtcblxuICAgIC8vIGNvbnNvbGUubG9nKGBIYW5kbGluZyBBUEkgY2FsbCAke2FwaX1gLCBwYXJhbXMpO1xuXG4gICAgc3dpdGNoIChhcGkpIHtcbiAgICAgICAgY2FzZSAnY3JlYXRlJzpcbiAgICAgICAgICAgIGNyZWF0ZVdpZGdldCgpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYE5vIGhhbmRsZXIgZGVmaW5lZCBmb3IgJHthcGl9YCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBleHRlbmRPYmplY3QoYSwgYikge1xuICAgIGZvciAodmFyIGtleSBpbiBiKVxuICAgICAgICBpZiAoYi5oYXNPd25Qcm9wZXJ0eShrZXkpKVxuICAgICAgICAgICAgYVtrZXldID0gYltrZXldO1xuICAgIHJldHVybiBhO1xufVxuXG5hcHAod2luZG93KTsiLCIvLyBpbXBvcnQgZm9udGF3ZXNvbWUgaW5pdCBqc1xuaW1wb3J0ICcuL2ZvbnRhd2Vzb21lLWFsbC5taW4uanMnXG5cbi8vIGltcG9ydCBDU1MgZm9yIHdpZGdldFxuaW1wb3J0ICcuLi9zY3NzL2FwcC5zY3NzJ1xuXG5cblxuLy8gbG9hZHMgZGF0YVxuYXN5bmMgZnVuY3Rpb24gTG9hZEpTT04oKSB7XG4gICAgbGV0IHVybCA9IFwiL2FwcC9hcGkvZXZlbnQvXCIgKyBpZDtcbiAgICBsZXQgcHJvbWlzZSA9IGF3YWl0IGZldGNoKHVybCk7XG4gICAgaWYgKCFwcm9taXNlLm9rKSB7IHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBsb2FkXCIpOyB9XG4gICAgZWxzZSB7XG4gICAgICAgIHZhciBqc29uQ29udGVudHMgPSBhd2FpdCBwcm9taXNlLmpzb24oKTtcbiAgICAgICAgY29uc29sZS5sb2coanNvbkNvbnRlbnRzKVxuICAgICAgICByZXR1cm4ganNvbkNvbnRlbnRzO1xuICAgIH1cbn1cblxuXG4vLyBhc3luYyBmdW5jdGlvbiBjcmVhdGVXaWRnZXQoKSAgPC0tLSByZXBsYWNlIGZ1bmN0aW9uIGJlbG93IHdpdGggdGhpc1xuZnVuY3Rpb24gY3JlYXRlV2lkZ2V0KCkge1xuXG4gICAgLy8gaWYoICFsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnd2lkZ2V0RGF0YScpICYmICFzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd3aWRnZXREYXRhJykgKSB7XG4gICAgLy8gICAgIGxldCBkYXRhID0gYXdhaXQgTG9hZEpTT04oKTtcbiAgICAvLyAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3dpZGdldERhdGEnLCBkYXRhKTtcbiAgICAvLyAgIH0gZWxzZSB7XG4gICAgLy8gICAgIGxldCBkYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3dpZGdldERhdGEnKSA/IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd3aWRnZXREYXRhJykgOiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd3aWRnZXREYXRhJyk7XG4gICAgLy8gICB9XG5cbiAgICAvLyBkdW1teSBkYXRhIGZvciB0ZXN0aW5nXG4gICAgbGV0IGRhdGEgPSB7XG4gICAgICAgIFwib3JnYW5pc2VyXCI6IHtcbiAgICAgICAgICAgIFwiY29tcGFueVwiOiBcIk1vdG9rdWx0aXZhdG9yaSBQZXJ1bmlcXHUwMTA3XCIsXG4gICAgICAgICAgICBcInVybFwiOiBcImh0dHBzOlxcL1xcL25ldGdlbi5pb1xcL1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcIldPT09PT1wiLFxuICAgICAgICBcInN0YXJ0RGF0ZVwiOiBcIjIwMjEtMDctMTlUMTA6MDA6MDBcIixcbiAgICAgICAgXCJlbmREYXRlXCI6IFwiMjAyMS0wNy0xOVQxNDowMDowMFwiLFxuICAgICAgICBcImxvY2F0aW9uXCI6IFwiRG9uamkgTWlob2xqYWNcIixcbiAgICAgICAgXCJpbWFnZVwiOiBcImVhcnRoLTYwZjUyZGFlYzlkYjEuanBnXCIsXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJTcGVjdGFjbGUhIEV2ZW50IG9mIHRoZSB5ZWFyIVwiLFxuICAgICAgICBcInRlcm1zQ29uZGl0aW9uc1wiOiBcImJsYSBibGFcIixcbiAgICAgICAgXCJwcml2YWN5UG9saWN5XCI6IFwiYmxhIGJsYVwiLFxuICAgICAgICBcInVybFwiOiBcImh0dHBzOlxcL1xcL25ldGdlbi5pb1xcL1wiLFxuICAgICAgICBcInRpY2tldFR5cGVzXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJNT0ogVElLRVRcIixcbiAgICAgICAgICAgICAgICBcInN0YXJ0RGF0ZVwiOiBcIjIwMjEtMDctMTZUMTU6MDA6MDBcIixcbiAgICAgICAgICAgICAgICBcImVuZERhdGVcIjogXCIyMDIxLTA3LTE2VDE5OjQxOjAwXCIsXG4gICAgICAgICAgICAgICAgXCJtYXhRdWFudGl0eVwiOiA1MCxcbiAgICAgICAgICAgICAgICBcImFjdGl2ZVwiOiB0cnVlLFxuICAgICAgICAgICAgICAgIFwicHJpY2VcIjogMjQ2MzAwLFxuICAgICAgICAgICAgICAgIFwidmF0UmF0ZVwiOiAyNSxcbiAgICAgICAgICAgICAgICBcImN1cnJlbmN5XCI6IFwiSFJLXCIsXG4gICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIjYwZWJmZWMwYTllMjkgZGVzY3JpcHRpb25cIixcbiAgICAgICAgICAgICAgICBcInRpY2tldFR5cGVGaWVsZHNcIjogW10sXG4gICAgICAgICAgICAgICAgXCJzb2xkVGlja2V0c1wiOiAzXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIlRpY2tldCAxXCIsXG4gICAgICAgICAgICAgICAgXCJzdGFydERhdGVcIjogXCIxOTk5LTA2LTA2VDAwOjAwOjAwXCIsXG4gICAgICAgICAgICAgICAgXCJlbmREYXRlXCI6IFwiMjAwMC0xMi0xMlQwMDowMDowMCswMTowMFwiLFxuICAgICAgICAgICAgICAgIFwibWF4UXVhbnRpdHlcIjogNzcsXG4gICAgICAgICAgICAgICAgXCJhY3RpdmVcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgXCJwcmljZVwiOiAyNDczNCxcbiAgICAgICAgICAgICAgICBcInZhdFJhdGVcIjogMjUsXG4gICAgICAgICAgICAgICAgXCJjdXJyZW5jeVwiOiBcIkhSS1wiLFxuICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCI2MGViZmVjMGFjMGJmIGRlc2NyaXB0aW9uXCIsXG4gICAgICAgICAgICAgICAgXCJ0aWNrZXRUeXBlRmllbGRzXCI6IFtdLFxuICAgICAgICAgICAgICAgIFwic29sZFRpY2tldHNcIjogMFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJhc2Rhc2RcIixcbiAgICAgICAgICAgICAgICBcInN0YXJ0RGF0ZVwiOiBudWxsLFxuICAgICAgICAgICAgICAgIFwiZW5kRGF0ZVwiOiBudWxsLFxuICAgICAgICAgICAgICAgIFwibWF4UXVhbnRpdHlcIjogbnVsbCxcbiAgICAgICAgICAgICAgICBcImFjdGl2ZVwiOiB0cnVlLFxuICAgICAgICAgICAgICAgIFwicHJpY2VcIjogMTIwMCxcbiAgICAgICAgICAgICAgICBcInZhdFJhdGVcIjogMTIzLFxuICAgICAgICAgICAgICAgIFwiY3VycmVuY3lcIjogXCJIUktcIixcbiAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiYXNkXCIsXG4gICAgICAgICAgICAgICAgXCJ0aWNrZXRUeXBlRmllbGRzXCI6IFtdLFxuICAgICAgICAgICAgICAgIFwic29sZFRpY2tldHNcIjogMFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJkZGRkZGRkXCIsXG4gICAgICAgICAgICAgICAgXCJzdGFydERhdGVcIjogXCIyMDIxLTA3LTE1VDE3OjAwOjAwXCIsXG4gICAgICAgICAgICAgICAgXCJlbmREYXRlXCI6IFwiMjAyMS0wNy0xNlQxNjowMDowMFwiLFxuICAgICAgICAgICAgICAgIFwibWF4UXVhbnRpdHlcIjogNTMsXG4gICAgICAgICAgICAgICAgXCJhY3RpdmVcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBcInByaWNlXCI6IDM1MjAwLFxuICAgICAgICAgICAgICAgIFwidmF0UmF0ZVwiOiAxMyxcbiAgICAgICAgICAgICAgICBcImN1cnJlbmN5XCI6IFwiSFJLXCIsXG4gICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcImZkYXNzZFwiLFxuICAgICAgICAgICAgICAgIFwidGlja2V0VHlwZUZpZWxkc1wiOiBbXSxcbiAgICAgICAgICAgICAgICBcInNvbGRUaWNrZXRzXCI6IDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgIH1cblxuICAgIGxldCB3aWRnZXRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHdpZGdldENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd3aWRnZXQnKVxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQod2lkZ2V0Q29udGFpbmVyKTtcblxuICAgIC8vIFdpZGdldCBoZWFkZXJcbiAgICBsZXQgdGl0bGUgPSBkYXRhLm5hbWU7XG4gICAgbGV0IGhlYWRlckltYWdlU3JjID0gZGF0YS5pbWFnZTtcbiAgICBsZXQgd2lkZ2V0SGVhZGVyID0gYFxuICAgICAgICA8ZGl2IGNsYXNzPSd3aWRnZXRfX2hlYWRlcic+XG4gICAgICAgICAgICA8aW1nIGNsYXNzPVwid2lkZ2V0X19pbWFnZVwic3JjPScke2hlYWRlckltYWdlU3JjfScgLz48aDMgY2xhc3M9J3dpZGdldF9fdGl0bGUnPiR7dGl0bGV9PC9oMz5cbiAgICAgICAgPC9kaXY+YFxuICAgIGxldCBhbGxUaWNrZXRzID0gYGA7XG5cbiAgICAvLyBXaWRnZXQgdGlja2V0c1xuICAgIGNvbnNvbGUubG9nKGRhdGEuaW1hZ2UpXG4gICAgbGV0IHRpY2tldFR5cGVzID0gZGF0YS50aWNrZXRUeXBlcztcbiAgICB0aWNrZXRUeXBlcy5mb3JFYWNoKCh0aWNrZXRUeXBlLCBpbmRleCkgPT4ge1xuXG4gICAgICAgIC8vIGNvbW1vbiBwcm9wb3J0aWVzIGZvciBhbGwgdGlja2V0c1xuICAgICAgICBsZXQgdGlja2V0VGl0bGUgPSB0aWNrZXRUeXBlLm5hbWU7XG4gICAgICAgIGxldCBkYXRlSWNvbiA9ICcnO1xuICAgICAgICBsZXQgZGF0ZUxhYmVsID0gJyc7XG4gICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSh0aWNrZXRUeXBlcy5lbmREYXRlKTtcbiAgICAgICAgY29uc3QgZGF0ZVN0cmluZyA9IGRhdGUudG9EYXRlU3RyaW5nKCk7XG4gICAgICAgIGxldCBkZXNjcmlwdGlvbiA9IHRpY2tldFR5cGUuZGVzY3JpcHRpb24gIT09IG51bGwgPyB0aWNrZXRUeXBlLmRlc2NyaXB0aW9uIDogJyc7XG4gICAgICAgIGxldCBkZXNjcmlwdGlvbkFkZGl0aW9uYWwgPSB0aWNrZXRUeXBlLmRlc2NyaXB0aW9uQWRkaXRpb25hbCAhPT0gbnVsbCA/IHRpY2tldFR5cGUuZGVzY3JpcHRpb25BZGRpdGlvbmFsIDogJyc7XG4gICAgICAgIGxldCBidG5FbGVtZW50ID0gJyc7XG4gICAgICAgIGxldCBwcmljZU5vdyA9IHRpY2tldFR5cGUucHJpY2UgLyAxMDA7XG4gICAgICAgIGxldCBwcmljZURpc2NvdW50ZWQgPSB0aWNrZXRUeXBlLnByaWNlRGlzY291bnRlZDtcbiAgICAgICAgbGV0IHByaWNlRGlzY291bnRlZEVsID0gcHJpY2VEaXNjb3VudGVkID8gYFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J3dpZGdldF9fcHJpY2UtZGlzY291bnRlZCc+XG4gICAgICAgICAgICAgICAgICAgICR7cHJpY2VEaXNjb3VudGVkfSA8c3BhbiBjbGFzcz1cIndpZGdldF9fY3VycmVuY3lcIj4gJHtwcmljZUN1cnJlbmN5fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5gIDogJyc7XG5cbiAgICAgICAgbGV0IHByaWNlQ3VycmVuY3kgPSB0aWNrZXRUeXBlLmN1cnJlbmN5O1xuICAgICAgICBsZXQgdmF0UmF0ZSA9IHRpY2tldFR5cGUudmF0UmF0ZTtcblxuICAgICAgICAvLyBpZiB0aWNrZXQgdHlwZSBpcyBhY3RpdmVcbiAgICAgICAgaWYgKHRpY2tldFR5cGUuYWN0aXZlKSB7XG5cbiAgICAgICAgICAgIC8vIGlmIHRpY2tldHMgYXJlIG5vdCBzb2xkIG91dCBcbiAgICAgICAgICAgIGlmICh0aWNrZXRUeXBlLnNvbGRUaWNrZXRzICE9PSB0aWNrZXRUeXBlLm1heFF1YW50aXR5ICYmIHRpY2tldFR5cGUubWF4UXVhbnRpdHkgIT09IG51bGwpIHtcblxuICAgICAgICAgICAgICAgIGRhdGVJY29uID0gYDxpIGNsYXNzPVwiZmFzIGZhLWhvdXJnbGFzcy1oYWxmXCI+PC9pPmBcbiAgICAgICAgICAgICAgICBkYXRlTGFiZWwgPSAnQXZhaWxhYmxlIHVudGlsICc7XG5cbiAgICAgICAgICAgICAgICBsZXQgbWF4UXVhbnRpdHkgPSBkYXRhLm1heFF1YW50aXR5ID09PSBudWxsID8gMTAwIDogZGF0YS5tYXhRdWFudGl0eTtcbiAgICAgICAgICAgICAgICBsZXQgcXVhbnRpdHlMZWZ0ID0gdGlja2V0VHlwZS5tYXhRdWFudGl0eSAtIHRpY2tldFR5cGUuc29sZFRpY2tldHM7XG4gICAgICAgICAgICAgICAgbGV0IHNlbGVjdExhYmVsID0gYFxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRpY2tldHMgbGVmdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPiR7cXVhbnRpdHlMZWZ0fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+YFxuICAgICAgICAgICAgICAgIGxldCBzZWxlY3QgPSBgPHNlbGVjdD5gXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gcXVhbnRpdHlMZWZ0OyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ICs9IGA8b3B0aW9uIHZhbHVlPVwiJHtpfVwiPiR7aX08L29wdGlvbj5gO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzZWxlY3QgKz0gYDwvc2VsZWN0PmBcblxuICAgICAgICAgICAgICAgIGJ0bkVsZW1lbnQgPSBzZWxlY3RMYWJlbCArIHNlbGVjdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGlmIHRpY2tldHMgYXJlIHNvbGQgb3V0XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBkYXRlSWNvbiA9IGA8aSBjbGFzcz1cImZhciBmYS1jYWxlbmRhci1hbHRcIj48L2k+YDtcbiAgICAgICAgICAgICAgICBkYXRlTGFiZWwgPSAnQXZhaWxhYmxlIGZyb20gJztcbiAgICAgICAgICAgICAgICBidG5FbGVtZW50ID0gYDxidXR0b24gY2xhc3M9XCJ3aWRnZXRfX2J0biB3aWRnZXRfX2J0bi0tc29sZC1vdXRcIj5Tb2xkIG91dDwvYnV0dG9uPmA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gaWYgdGlja2V0IHR5cGUgaXMgbm90IGFjdGl2ZSAodW5hdmFpbGFibGUpXG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZGF0ZUljb24gPSBgPGkgY2xhc3M9XCJmYXIgZmEtY2FsZW5kYXJcIj48L2k+YFxuICAgICAgICAgICAgZGF0ZUxhYmVsID0gJ1dhcyBhdmFpbGFibGUgZnJvbSAnO1xuICAgICAgICAgICAgYnRuRWxlbWVudCA9IGA8YnV0dG9uIGNsYXNzPVwid2lkZ2V0X19idG4gd2lkZ2V0X19idG4tLXVuYXZhaWxhYmxlXCI+PGkgY2xhc3M9XCJmYXMgZmEtZXhjbGFtYXRpb24tY2lyY2xlXCI+PC9pPlVuYXZhaWxhYmxlPC9idXR0b24+YDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHRpY2tldCBlbGVtZW50XG4gICAgICAgIGxldCB0aWNrZXQgPSBgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nd2lkZ2V0X190aWNrZXQnPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSd3aWRnZXRfX2xlZnQnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSd3aWRnZXRfX3RpY2tldC10aXRsZSc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7dGlja2V0VGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J3dpZGdldF9fZGF0ZS1pY29uJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtkYXRlSWNvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J3dpZGdldF9fZGF0ZS1sYWJlbCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7ZGF0ZUxhYmVsfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J3dpZGdldF9fZGF0ZSc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7ZGF0ZVN0cmluZ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J3dpZGdldF9fdGV4dCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nd2lkZ2V0X19kZXNjcmlwdGlvbic+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7ZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nd2lkZ2V0X19kZXNjcmlwdGlvbi1hZGRpdGlvbmFsIGQtbm9uZScgaWQ9XCJ0YWItJHtpbmRleH1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtkZXNjcmlwdGlvbkFkZGl0aW9uYWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J3dpZGdldF9fcmlnaHQnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nd2lkZ2V0X19wcmljaW5nJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSd3aWRnZXRfX3ByaWNlLW5vdyc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7cHJpY2VOb3d9IDxzcGFuIGNsYXNzPVwid2lkZ2V0X19jdXJyZW5jeVwiPiR7cHJpY2VDdXJyZW5jeX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtwcmljZURpc2NvdW50ZWRFbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSd3aWRnZXRfX3ZhdCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZBVCAoJHt2YXRSYXRlfSUpIGluY2x1ZGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J3dpZGdldF9fdGlja2V0LXBpY2tlcic+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtidG5FbGVtZW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSd3aWRnZXRfX3Nob3ctbW9yZSc+XG4gICAgICAgICAgICAgICAgICAgICAgICBTaG93IG1vcmUgPGkgY2xhc3M9XCJmYXMgZmEtY2hldnJvbi1kb3duXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5gXG5cbiAgICAgICAgYWxsVGlja2V0cyArPSB0aWNrZXQ7XG4gICAgfSk7XG5cbiAgICBsZXQgd2lkZ2V0U2VjdGlvbiA9IGBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3aWRnZXRfX3NlY3Rpb25cIj5cbiAgICAgICAgICAgICAgICAke2FsbFRpY2tldHN9XG4gICAgICAgICAgICA8L2Rpdj5gO1xuXG4gICAgbGV0IHdpZGdldEJvZHkgPSBgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwid2lkZ2V0X19ib2R5XCI+XG4gICAgICAgICAgICAgICAgJHt3aWRnZXRTZWN0aW9ufVxuICAgICAgICAgICAgPC9kaXY+YDtcblxuICAgIGxldCBjaGVja291dEJ0bkhyZWYgPSBcIiNcIjtcbiAgICBsZXQgd2lkZ2V0Rm9vdGVyID0gYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz0nd2lkZ2V0X19mb290ZXInPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIke2NoZWNrb3V0QnRuSHJlZn1cIiBjbGFzcz1cIndpZGdldF9fYnRuIHdpZGdldF9fYnRuLS1wcmltYXJ5XCI+Q2hlY2tvdXQ8aSBjbGFzcz1cImZhcyBmYS1hcnJvdy1yaWdodFwiPjwvaT48L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PmBcblxuICAgIHdpZGdldENvbnRhaW5lci5pbm5lckhUTUwgKz0gd2lkZ2V0SGVhZGVyICsgd2lkZ2V0Qm9keSArIHdpZGdldEZvb3Rlcjtcbn1cbmNyZWF0ZVdpZGdldCgpO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==