(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./client/components/tabs/reviews/ReviewStars/ReviewStarsPresentational.jsx":
/*!**********************************************************************************!*\
  !*** ./client/components/tabs/reviews/ReviewStars/ReviewStarsPresentational.jsx ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _reviewStars_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reviewStars.scss */ \"./client/components/tabs/reviews/ReviewStars/reviewStars.scss\");\n/* harmony import */ var _reviewStars_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_reviewStars_scss__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nvar ReviewStarsPresentational = function ReviewStarsPresentational(_ref) {\n  var stars = _ref.stars,\n      text = _ref.text;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: _reviewStars_scss__WEBPACK_IMPORTED_MODULE_2__[\"review__stars__wrapper\"]\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, stars), text && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: _reviewStars_scss__WEBPACK_IMPORTED_MODULE_2__[\"review__stars__description\"]\n  }, text));\n};\n\nReviewStarsPresentational.propTypes = {\n  text: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,\n  stars: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node.isRequired).isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (ReviewStarsPresentational);\n\n//# sourceURL=webpack:///./client/components/tabs/reviews/ReviewStars/ReviewStarsPresentational.jsx?");

/***/ }),

/***/ "./client/components/tabs/reviews/ReviewStars/index.jsx":
/*!**************************************************************!*\
  !*** ./client/components/tabs/reviews/ReviewStars/index.jsx ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ReviewStarsPresentational__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ReviewStarsPresentational */ \"./client/components/tabs/reviews/ReviewStars/ReviewStarsPresentational.jsx\");\n/* harmony import */ var _reviewStars_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reviewStars.scss */ \"./client/components/tabs/reviews/ReviewStars/reviewStars.scss\");\n/* harmony import */ var _reviewStars_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_reviewStars_scss__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nvar renderStars = function renderStars(rating, size) {\n  var stars = [];\n\n  for (var i = 1; i < 6; i++) {\n    stars.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      key: i,\n      className: i <= rating ? _reviewStars_scss__WEBPACK_IMPORTED_MODULE_3__[\"review__stars__full\"] : _reviewStars_scss__WEBPACK_IMPORTED_MODULE_3__[\"review__stars__empty\"],\n      style: {\n        height: size === 'small' ? 14 : 16,\n        width: size === 'small' ? 14 : 16\n      }\n    }));\n  }\n\n  return stars;\n};\n\nvar ReviewStars = function ReviewStars(_ref) {\n  var rating = _ref.rating,\n      size = _ref.size,\n      text = _ref.text;\n  var stars = renderStars(rating, size);\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ReviewStarsPresentational__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    stars: stars,\n    text: text\n  });\n};\n\nReviewStars.propTypes = {\n  rating: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,\n  size: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['small', 'large']),\n  text: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string\n};\nReviewStars.defaultProps = {\n  size: 'large',\n  text: ''\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (ReviewStars);\n\n//# sourceURL=webpack:///./client/components/tabs/reviews/ReviewStars/index.jsx?");

/***/ }),

/***/ "./client/components/tabs/reviews/ReviewStars/reviewStars.scss":
/*!*********************************************************************!*\
  !*** ./client/components/tabs/reviews/ReviewStars/reviewStars.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--5-1!../../../../../node_modules/sass-loader/lib/loader.js!./reviewStars.scss */ \"./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/lib/loader.js!./client/components/tabs/reviews/ReviewStars/reviewStars.scss\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./client/components/tabs/reviews/ReviewStars/reviewStars.scss?");

/***/ }),

/***/ "./client/components/tabs/roomtips/RoomtipSingle/index.jsx":
/*!*****************************************************************!*\
  !*** ./client/components/tabs/roomtips/RoomtipSingle/index.jsx ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _reviews_ReviewUserInfo_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../reviews/ReviewUserInfo/index */ \"./client/components/tabs/reviews/ReviewUserInfo/index.jsx\");\n/* harmony import */ var _RoomtipSingleContent_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../RoomtipSingleContent/index */ \"./client/components/tabs/roomtips/RoomtipSingleContent/index.jsx\");\n/* harmony import */ var _roomtipSingle_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./roomtipSingle.scss */ \"./client/components/tabs/roomtips/RoomtipSingle/roomtipSingle.scss\");\n/* harmony import */ var _roomtipSingle_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_roomtipSingle_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _proptypes_users__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../proptypes/users */ \"./client/proptypes/users.js\");\n\n\n\n\n\n\n\nvar RoomtipSingle = function RoomtipSingle(_ref) {\n  var roomtip = _ref.roomtip;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: _roomtipSingle_scss__WEBPACK_IMPORTED_MODULE_4__[\"roomtip__single__wrapper\"]\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_reviews_ReviewUserInfo_index__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    user: roomtip.user_id,\n    date: roomtip.date,\n    type: \"room_tip\"\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_RoomtipSingleContent_index__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    roomtip: roomtip\n  }));\n};\n\nRoomtipSingle.propTypes = {\n  roomtip: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({\n    _id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,\n    hotel_id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,\n    tip: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,\n    date: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,\n    user_id: _proptypes_users__WEBPACK_IMPORTED_MODULE_5__[\"default\"].isRequired\n  }).isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (RoomtipSingle);\n\n//# sourceURL=webpack:///./client/components/tabs/roomtips/RoomtipSingle/index.jsx?");

/***/ }),

/***/ "./client/components/tabs/roomtips/RoomtipSingle/roomtipSingle.scss":
/*!**************************************************************************!*\
  !*** ./client/components/tabs/roomtips/RoomtipSingle/roomtipSingle.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--5-1!../../../../../node_modules/sass-loader/lib/loader.js!./roomtipSingle.scss */ \"./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/lib/loader.js!./client/components/tabs/roomtips/RoomtipSingle/roomtipSingle.scss\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./client/components/tabs/roomtips/RoomtipSingle/roomtipSingle.scss?");

/***/ }),

/***/ "./client/components/tabs/roomtips/RoomtipSingleContent/index.jsx":
/*!************************************************************************!*\
  !*** ./client/components/tabs/roomtips/RoomtipSingleContent/index.jsx ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _reviews_ReviewStars_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../reviews/ReviewStars/index */ \"./client/components/tabs/reviews/ReviewStars/index.jsx\");\n/* harmony import */ var _roomtipSingleContent_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./roomtipSingleContent.scss */ \"./client/components/tabs/roomtips/RoomtipSingleContent/roomtipSingleContent.scss\");\n/* harmony import */ var _roomtipSingleContent_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_roomtipSingleContent_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _proptypes_roomtip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../proptypes/roomtip */ \"./client/proptypes/roomtip.js\");\n\n\n\n\n\nvar RoomtipSingleContent = function RoomtipSingleContent(_ref) {\n  var roomtip = _ref.roomtip;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: _roomtipSingleContent_scss__WEBPACK_IMPORTED_MODULE_2__[\"roomtip__single__inner__wrapper\"]\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_reviews_ReviewStars_index__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    rating: roomtip.rating\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"\\\"\".concat(roomtip.tip, \"\\\"\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    href: \"http://www.google.com\",\n    className: _roomtipSingleContent_scss__WEBPACK_IMPORTED_MODULE_2__[\"roomtip__single__readMore\"]\n  }, \"Read full review\"));\n};\n\nRoomtipSingleContent.propTypes = {\n  roomtip: _proptypes_roomtip__WEBPACK_IMPORTED_MODULE_3__[\"default\"].isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (RoomtipSingleContent);\n\n//# sourceURL=webpack:///./client/components/tabs/roomtips/RoomtipSingleContent/index.jsx?");

/***/ }),

/***/ "./client/components/tabs/roomtips/RoomtipSingleContent/roomtipSingleContent.scss":
/*!****************************************************************************************!*\
  !*** ./client/components/tabs/roomtips/RoomtipSingleContent/roomtipSingleContent.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--5-1!../../../../../node_modules/sass-loader/lib/loader.js!./roomtipSingleContent.scss */ \"./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/lib/loader.js!./client/components/tabs/roomtips/RoomtipSingleContent/roomtipSingleContent.scss\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./client/components/tabs/roomtips/RoomtipSingleContent/roomtipSingleContent.scss?");

/***/ }),

/***/ "./client/components/tabs/roomtips/RoomtipsBody/index.jsx":
/*!****************************************************************!*\
  !*** ./client/components/tabs/roomtips/RoomtipsBody/index.jsx ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _context_hotel_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../context/hotel-context */ \"./client/context/hotel-context.jsx\");\n/* harmony import */ var _RoomtipsState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../RoomtipsState */ \"./client/components/tabs/roomtips/RoomtipsState.jsx\");\n/* harmony import */ var _RoomtipSingle_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../RoomtipSingle/index */ \"./client/components/tabs/roomtips/RoomtipSingle/index.jsx\");\n\n\n\n\n\nvar RoomtipsBody = function RoomtipsBody() {\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useContext\"])(_context_hotel_context__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n      roomtips = _useContext.roomtips;\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_RoomtipsState__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null, roomtips.map(function (tip) {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_RoomtipSingle_index__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      key: tip._id,\n      roomtip: tip\n    });\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (RoomtipsBody);\n\n//# sourceURL=webpack:///./client/components/tabs/roomtips/RoomtipsBody/index.jsx?");

/***/ }),

/***/ "./client/components/tabs/roomtips/RoomtipsState.jsx":
/*!***********************************************************!*\
  !*** ./client/components/tabs/roomtips/RoomtipsState.jsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_hotel_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../context/hotel-context */ \"./client/context/hotel-context.jsx\");\n\n\n\n\nvar RoomtipsState = function RoomtipsState(_ref) {\n  var children = _ref.children;\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useContext\"])(_context_hotel_context__WEBPACK_IMPORTED_MODULE_2__[\"default\"]),\n      hotelId = _useContext.hotelId,\n      setRoomtips = _useContext.setRoomtips,\n      setLoading = _useContext.setLoading;\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    setLoading(true);\n    fetch(\"http://localhost:3000/api/hotels/\".concat(hotelId, \"/reviews/roomtips\")).then(function (res) {\n      return res.json();\n    }).then(function (data) {\n      setRoomtips(data);\n      setLoading(false);\n    });\n  }, [hotelId]);\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, children);\n};\n\nRoomtipsState.propTypes = {\n  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node.isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (RoomtipsState);\n\n//# sourceURL=webpack:///./client/components/tabs/roomtips/RoomtipsState.jsx?");

/***/ }),

/***/ "./client/components/tabs/roomtips/index.jsx":
/*!***************************************************!*\
  !*** ./client/components/tabs/roomtips/index.jsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _TabHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../TabHeader */ \"./client/components/TabHeader/index.jsx\");\n/* harmony import */ var _BodyWrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../BodyWrapper */ \"./client/components/tabs/BodyWrapper.jsx\");\n/* harmony import */ var _RoomtipsState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RoomtipsState */ \"./client/components/tabs/roomtips/RoomtipsState.jsx\");\n/* harmony import */ var _RoomtipsBody_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./RoomtipsBody/index */ \"./client/components/tabs/roomtips/RoomtipsBody/index.jsx\");\n/* harmony import */ var _css_main_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../css/main.scss */ \"./client/components/css/main.scss\");\n/* harmony import */ var _css_main_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_css_main_scss__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n\nvar RoomTips = function RoomTips() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_RoomtipsState__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: _css_main_scss__WEBPACK_IMPORTED_MODULE_5__[\"upper__wrapper\"]\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TabHeader__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    title: \"Room Tips\",\n    buttonText: \"Finish Your Review\"\n  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_BodyWrapper__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_RoomtipsBody_index__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (RoomTips);\n\n//# sourceURL=webpack:///./client/components/tabs/roomtips/index.jsx?");

/***/ }),

/***/ "./client/proptypes/roomtip.js":
/*!*************************************!*\
  !*** ./client/proptypes/roomtip.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _users__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./users */ \"./client/proptypes/users.js\");\n\n\nvar roomtipPropTypes = Object(prop_types__WEBPACK_IMPORTED_MODULE_0__[\"shape\"])({\n  _id: prop_types__WEBPACK_IMPORTED_MODULE_0__[\"string\"].isRequired,\n  hotel_id: prop_types__WEBPACK_IMPORTED_MODULE_0__[\"string\"].isRequired,\n  tip: prop_types__WEBPACK_IMPORTED_MODULE_0__[\"string\"].isRequired,\n  date: prop_types__WEBPACK_IMPORTED_MODULE_0__[\"string\"].isRequired,\n  user_id: _users__WEBPACK_IMPORTED_MODULE_1__[\"default\"].isRequired\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (roomtipPropTypes);\n\n//# sourceURL=webpack:///./client/proptypes/roomtip.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/lib/loader.js!./client/components/tabs/reviews/ReviewStars/reviewStars.scss":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./node_modules/sass-loader/lib/loader.js!./client/components/tabs/reviews/ReviewStars/reviewStars.scss ***!
  \**************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"/* For bold prices at bottom */\\n/* For small gray text */\\n/* For green text, greeen buttons */\\n/* For header/navbar, little green bars */\\n/* For green h1/h2/etc.  */\\n/* for yellow buttons */\\n/* LOCATION COMPONENT */\\n/* BOOKING COMPONENT */\\n/* Red font */\\n.reviewStars__review__stars__wrapper___1G5bm {\\n  align-items: center;\\n  display: flex;\\n  justify-content: center;\\n  justify-content: flex-start;\\n  flex-direction: row;\\n  margin-top: 2px !important; }\\n\\n.reviewStars__review__stars__full___2jxKf,\\n.reviewStars__review__stars__empty___3VZUW {\\n  align-items: center;\\n  display: flex;\\n  justify-content: center;\\n  background-color: #fff;\\n  border: 2px solid #7eba9a;\\n  border-radius: 50%;\\n  display: inline-block;\\n  margin: 0 1px 0 0 !important;\\n  padding: 0 !important;\\n  position: relative; }\\n\\n.reviewStars__review__stars__full___2jxKf::after {\\n  background-color: #5da880;\\n  border-radius: 50%;\\n  content: '';\\n  height: 60%;\\n  left: 50%;\\n  position: absolute;\\n  top: 50%;\\n  transform: translate(-50%, -50%);\\n  width: 60%; }\\n\\n.reviewStars__review__stars__description___26luU {\\n  margin-left: 8px; }\\n\", \"\"]);\n\n// Exports\nexports.locals = {\n\t\"review__stars__wrapper\": \"reviewStars__review__stars__wrapper___1G5bm\",\n\t\"review__stars__full\": \"reviewStars__review__stars__full___2jxKf\",\n\t\"review__stars__empty\": \"reviewStars__review__stars__empty___3VZUW\",\n\t\"review__stars__description\": \"reviewStars__review__stars__description___26luU\"\n};\n\n//# sourceURL=webpack:///./client/components/tabs/reviews/ReviewStars/reviewStars.scss?./node_modules/css-loader/dist/cjs.js??ref--5-1!./node_modules/sass-loader/lib/loader.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/lib/loader.js!./client/components/tabs/roomtips/RoomtipSingle/roomtipSingle.scss":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./node_modules/sass-loader/lib/loader.js!./client/components/tabs/roomtips/RoomtipSingle/roomtipSingle.scss ***!
  \*******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"/* For bold prices at bottom */\\n/* For small gray text */\\n/* For green text, greeen buttons */\\n/* For header/navbar, little green bars */\\n/* For green h1/h2/etc.  */\\n/* for yellow buttons */\\n/* LOCATION COMPONENT */\\n/* BOOKING COMPONENT */\\n/* Red font */\\n.roomtipSingle__roomtip__single__wrapper___2Ntjg {\\n  border: 1px solid #e5e5e5;\\n  margin-top: 10px; }\\n\", \"\"]);\n\n// Exports\nexports.locals = {\n\t\"roomtip__single__wrapper\": \"roomtipSingle__roomtip__single__wrapper___2Ntjg\"\n};\n\n//# sourceURL=webpack:///./client/components/tabs/roomtips/RoomtipSingle/roomtipSingle.scss?./node_modules/css-loader/dist/cjs.js??ref--5-1!./node_modules/sass-loader/lib/loader.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/lib/loader.js!./client/components/tabs/roomtips/RoomtipSingleContent/roomtipSingleContent.scss":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./node_modules/sass-loader/lib/loader.js!./client/components/tabs/roomtips/RoomtipSingleContent/roomtipSingleContent.scss ***!
  \*********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"/* For bold prices at bottom */\\n/* For small gray text */\\n/* For green text, greeen buttons */\\n/* For header/navbar, little green bars */\\n/* For green h1/h2/etc.  */\\n/* for yellow buttons */\\n/* LOCATION COMPONENT */\\n/* BOOKING COMPONENT */\\n/* Red font */\\n.roomtipSingleContent__roomtip__single__inner__wrapper___2xhke {\\n  background-color: #fff;\\n  border-bottom: 1px solid #e5e5e5;\\n  padding: 16px 24px; }\\n\\n.roomtipSingleContent__roomtip__single__readMore___m0CE1 {\\n  color: #078171;\\n  display: block;\\n  font-size: 0.875rem;\\n  font-weight: 700;\\n  margin-top: 8px;\\n  text-decoration: none; }\\n  .roomtipSingleContent__roomtip__single__readMore___m0CE1:hover {\\n    text-decoration: underline; }\\n\", \"\"]);\n\n// Exports\nexports.locals = {\n\t\"roomtip__single__inner__wrapper\": \"roomtipSingleContent__roomtip__single__inner__wrapper___2xhke\",\n\t\"roomtip__single__readMore\": \"roomtipSingleContent__roomtip__single__readMore___m0CE1\"\n};\n\n//# sourceURL=webpack:///./client/components/tabs/roomtips/RoomtipSingleContent/roomtipSingleContent.scss?./node_modules/css-loader/dist/cjs.js??ref--5-1!./node_modules/sass-loader/lib/loader.js");

/***/ })

}]);