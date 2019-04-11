(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./client/components/tabs/photos/PhotoCategory/index.jsx":
/*!***************************************************************!*\
  !*** ./client/components/tabs/photos/PhotoCategory/index.jsx ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_PhotosContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/PhotosContext */ \"./client/components/tabs/photos/context/PhotosContext.jsx\");\n/* harmony import */ var _photoCategory_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./photoCategory.scss */ \"./client/components/tabs/photos/PhotoCategory/photoCategory.scss\");\n/* harmony import */ var _photoCategory_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_photoCategory_scss__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nvar PhotoCategory = function PhotoCategory(_ref) {\n  var category = _ref.category;\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useContext\"])(_context_PhotosContext__WEBPACK_IMPORTED_MODULE_2__[\"default\"]),\n      selectedCategory = _useContext.selectedCategory,\n      setSelectedCategory = _useContext.setSelectedCategory;\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    type: \"button\",\n    onClick: function onClick() {\n      return setSelectedCategory(category);\n    },\n    className: \"\".concat(_photoCategory_scss__WEBPACK_IMPORTED_MODULE_3__[\"photosBar__category\"], \" \").concat(selectedCategory === category ? _photoCategory_scss__WEBPACK_IMPORTED_MODULE_3__[\"photosBar__category__active\"] : '')\n  }, category);\n};\n\nPhotoCategory.propTypes = {\n  category: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['All', 'Dining', 'Pool & Beach', 'Family and Play Areas', 'Business Center & Event Rooms', 'Room & Suite']).isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (PhotoCategory);\n\n//# sourceURL=webpack:///./client/components/tabs/photos/PhotoCategory/index.jsx?");

/***/ }),

/***/ "./client/components/tabs/photos/PhotoCategory/photoCategory.scss":
/*!************************************************************************!*\
  !*** ./client/components/tabs/photos/PhotoCategory/photoCategory.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--5-1!../../../../../node_modules/sass-loader/lib/loader.js!./photoCategory.scss */ \"./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/lib/loader.js!./client/components/tabs/photos/PhotoCategory/photoCategory.scss\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./client/components/tabs/photos/PhotoCategory/photoCategory.scss?");

/***/ }),

/***/ "./client/components/tabs/photos/PhotoReview/index.jsx":
/*!*************************************************************!*\
  !*** ./client/components/tabs/photos/PhotoReview/index.jsx ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _PhotoReviewContent_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../PhotoReviewContent/index */ \"./client/components/tabs/photos/PhotoReviewContent/index.jsx\");\n/* harmony import */ var _reviews_ReviewUserInfo_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../reviews/ReviewUserInfo/index */ \"./client/components/tabs/reviews/ReviewUserInfo/index.jsx\");\n/* harmony import */ var _reviews_ReviewLinks_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../reviews/ReviewLinks/index */ \"./client/components/tabs/reviews/ReviewLinks/index.jsx\");\n/* harmony import */ var _proptypes_users__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../proptypes/users */ \"./client/proptypes/users.js\");\n/* harmony import */ var _photoReview_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./photoReview.scss */ \"./client/components/tabs/photos/PhotoReview/photoReview.scss\");\n/* harmony import */ var _photoReview_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_photoReview_scss__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\n\nvar PhotoReview = function PhotoReview(_ref) {\n  var photo = _ref.photo;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: _photoReview_scss__WEBPACK_IMPORTED_MODULE_6__[\"photo__review__wrapper\"]\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_reviews_ReviewUserInfo_index__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    user: photo.user_id,\n    date: photo.date,\n    type: \"photo\"\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PhotoReviewContent_index__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    photo: photo\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_reviews_ReviewLinks_index__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    votes: photo.likes,\n    type: \"photo\"\n  }));\n};\n\nPhotoReview.propTypes = {\n  photo: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({\n    _id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,\n    category: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['Dining', 'Pool & Beach', 'Family and Play Areas', 'Business Center & Event Rooms', 'Room & Suite']).isRequired,\n    url: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,\n    date: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,\n    description: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,\n    likes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,\n    hotel_id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,\n    user_id: _proptypes_users__WEBPACK_IMPORTED_MODULE_5__[\"default\"].isRequired\n  }).isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (PhotoReview);\n\n//# sourceURL=webpack:///./client/components/tabs/photos/PhotoReview/index.jsx?");

/***/ }),

/***/ "./client/components/tabs/photos/PhotoReview/photoReview.scss":
/*!********************************************************************!*\
  !*** ./client/components/tabs/photos/PhotoReview/photoReview.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--5-1!../../../../../node_modules/sass-loader/lib/loader.js!./photoReview.scss */ \"./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/lib/loader.js!./client/components/tabs/photos/PhotoReview/photoReview.scss\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./client/components/tabs/photos/PhotoReview/photoReview.scss?");

/***/ }),

/***/ "./client/components/tabs/photos/PhotoReviewContent/index.jsx":
/*!********************************************************************!*\
  !*** ./client/components/tabs/photos/PhotoReviewContent/index.jsx ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _proptypes_photo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../proptypes/photo */ \"./client/proptypes/photo.js\");\n/* harmony import */ var _photoReviewContent_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./photoReviewContent.scss */ \"./client/components/tabs/photos/PhotoReviewContent/photoReviewContent.scss\");\n/* harmony import */ var _photoReviewContent_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_photoReviewContent_scss__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nvar PhotoReviewContent = function PhotoReviewContent(_ref) {\n  var photo = _ref.photo;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: _photoReviewContent_scss__WEBPACK_IMPORTED_MODULE_2__[\"review__photo\"],\n    style: {\n      background: \"url(\\\"\".concat(photo.url, \"\\\")\")\n    }\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n    className: _photoReviewContent_scss__WEBPACK_IMPORTED_MODULE_2__[\"review__photo__description\"]\n  }, photo.description));\n};\n\nPhotoReviewContent.propTypes = {\n  photo: _proptypes_photo__WEBPACK_IMPORTED_MODULE_1__[\"default\"].isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (PhotoReviewContent);\n\n//# sourceURL=webpack:///./client/components/tabs/photos/PhotoReviewContent/index.jsx?");

/***/ }),

/***/ "./client/components/tabs/photos/PhotoReviewContent/photoReviewContent.scss":
/*!**********************************************************************************!*\
  !*** ./client/components/tabs/photos/PhotoReviewContent/photoReviewContent.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--5-1!../../../../../node_modules/sass-loader/lib/loader.js!./photoReviewContent.scss */ \"./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/lib/loader.js!./client/components/tabs/photos/PhotoReviewContent/photoReviewContent.scss\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./client/components/tabs/photos/PhotoReviewContent/photoReviewContent.scss?");

/***/ }),

/***/ "./client/components/tabs/photos/PhotosBar/PhotosBarPresentational.jsx":
/*!*****************************************************************************!*\
  !*** ./client/components/tabs/photos/PhotosBar/PhotosBarPresentational.jsx ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _PhotoCategory_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../PhotoCategory/index */ \"./client/components/tabs/photos/PhotoCategory/index.jsx\");\n/* harmony import */ var _photosBar_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./photosBar.scss */ \"./client/components/tabs/photos/PhotosBar/photosBar.scss\");\n/* harmony import */ var _photosBar_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_photosBar_scss__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nvar PhotosBarPresentational = function PhotosBarPresentational(_ref) {\n  var categories = _ref.categories;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: _photosBar_scss__WEBPACK_IMPORTED_MODULE_3__[\"photosBar__wrapper\"]\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h5\", null, \"Album Categories\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PhotoCategory_index__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    category: \"All\"\n  })), categories.map(function (category) {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n      key: category\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PhotoCategory_index__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      category: category\n    }));\n  })));\n};\n\nPhotosBarPresentational.propTypes = {\n  categories: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired).isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (PhotosBarPresentational);\n\n//# sourceURL=webpack:///./client/components/tabs/photos/PhotosBar/PhotosBarPresentational.jsx?");

/***/ }),

/***/ "./client/components/tabs/photos/PhotosBar/index.jsx":
/*!***********************************************************!*\
  !*** ./client/components/tabs/photos/PhotosBar/index.jsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _context_hotel_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../context/hotel-context */ \"./client/context/hotel-context.jsx\");\n/* harmony import */ var _PhotosBarPresentational__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PhotosBarPresentational */ \"./client/components/tabs/photos/PhotosBar/PhotosBarPresentational.jsx\");\n\n\n\n\nvar PhotosBar = function PhotosBar() {\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useContext\"])(_context_hotel_context__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n      photos = _useContext.photos;\n\n  var categories = Array.from(photos.reduce(function (acc, item) {\n    return acc.add(item.category);\n  }, new Set()));\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PhotosBarPresentational__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    categories: categories\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (PhotosBar);\n\n//# sourceURL=webpack:///./client/components/tabs/photos/PhotosBar/index.jsx?");

/***/ }),

/***/ "./client/components/tabs/photos/PhotosBar/photosBar.scss":
/*!****************************************************************!*\
  !*** ./client/components/tabs/photos/PhotosBar/photosBar.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--5-1!../../../../../node_modules/sass-loader/lib/loader.js!./photosBar.scss */ \"./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/lib/loader.js!./client/components/tabs/photos/PhotosBar/photosBar.scss\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./client/components/tabs/photos/PhotosBar/photosBar.scss?");

/***/ }),

/***/ "./client/components/tabs/photos/PhotosBody/PhotosBodyPresentational.jsx":
/*!*******************************************************************************!*\
  !*** ./client/components/tabs/photos/PhotosBody/PhotosBodyPresentational.jsx ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _PhotoReview_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../PhotoReview/index */ \"./client/components/tabs/photos/PhotoReview/index.jsx\");\n/* harmony import */ var _proptypes_photo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../proptypes/photo */ \"./client/proptypes/photo.js\");\n\n\n\n\n\nvar PhotosBodyPresentational = function PhotosBodyPresentational(_ref) {\n  var filtered = _ref.filtered;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, filtered.map(function (photo) {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PhotoReview_index__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      key: photo._id,\n      photo: photo\n    });\n  }));\n};\n\nPhotosBodyPresentational.propTypes = {\n  filtered: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(_proptypes_photo__WEBPACK_IMPORTED_MODULE_3__[\"default\"].isRequired)\n};\nPhotosBodyPresentational.defaultProps = {\n  filtered: []\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (PhotosBodyPresentational);\n\n//# sourceURL=webpack:///./client/components/tabs/photos/PhotosBody/PhotosBodyPresentational.jsx?");

/***/ }),

/***/ "./client/components/tabs/photos/PhotosBody/getFilteredPhotos.js":
/*!***********************************************************************!*\
  !*** ./client/components/tabs/photos/PhotosBody/getFilteredPhotos.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// eslint-disable-next-line arrow-body-style\nvar getFilteredPtotos = function getFilteredPtotos(photos) {\n  var category = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'All';\n  return category !== 'All' ? photos.filter(function (i) {\n    return i.category === category;\n  }) : photos;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (getFilteredPtotos);\n\n//# sourceURL=webpack:///./client/components/tabs/photos/PhotosBody/getFilteredPhotos.js?");

/***/ }),

/***/ "./client/components/tabs/photos/PhotosBody/index.jsx":
/*!************************************************************!*\
  !*** ./client/components/tabs/photos/PhotosBody/index.jsx ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _PhotosBodyPresentational__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PhotosBodyPresentational */ \"./client/components/tabs/photos/PhotosBody/PhotosBodyPresentational.jsx\");\n/* harmony import */ var _context_PhotosContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/PhotosContext */ \"./client/components/tabs/photos/context/PhotosContext.jsx\");\n/* harmony import */ var _context_hotel_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../context/hotel-context */ \"./client/context/hotel-context.jsx\");\n/* harmony import */ var _getFilteredPhotos__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getFilteredPhotos */ \"./client/components/tabs/photos/PhotosBody/getFilteredPhotos.js\");\n\n\n\n\n\n\nvar PhotosBody = function PhotosBody() {\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useContext\"])(_context_hotel_context__WEBPACK_IMPORTED_MODULE_3__[\"default\"]),\n      photos = _useContext.photos;\n\n  var _useContext2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useContext\"])(_context_PhotosContext__WEBPACK_IMPORTED_MODULE_2__[\"default\"]),\n      selectedCategory = _useContext2.selectedCategory;\n\n  var filtered = Object(_getFilteredPhotos__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(photos, selectedCategory);\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PhotosBodyPresentational__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    filtered: filtered\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (PhotosBody);\n\n//# sourceURL=webpack:///./client/components/tabs/photos/PhotosBody/index.jsx?");

/***/ }),

/***/ "./client/components/tabs/photos/context/PhotosContext.jsx":
/*!*****************************************************************!*\
  !*** ./client/components/tabs/photos/context/PhotosContext.jsx ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext({\n  selectedRatings: [],\n  selectedTimes: [],\n  selectedTypes: [],\n  selectedMentions: [],\n  selectedLanguage: '',\n  dispatchRatings: function dispatchRatings() {},\n  dispatchTimes: function dispatchTimes() {},\n  dispatchTypes: function dispatchTypes() {},\n  dispatchMentions: function dispatchMentions() {},\n  setLanguage: function setLanguage() {},\n  getFilteredReviews: function getFilteredReviews() {}\n}));\n\n//# sourceURL=webpack:///./client/components/tabs/photos/context/PhotosContext.jsx?");

/***/ }),

/***/ "./client/components/tabs/photos/context/PhotosState.jsx":
/*!***************************************************************!*\
  !*** ./client/components/tabs/photos/context/PhotosState.jsx ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_hotel_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../context/hotel-context */ \"./client/context/hotel-context.jsx\");\n/* harmony import */ var _PhotosContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PhotosContext */ \"./client/components/tabs/photos/context/PhotosContext.jsx\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\nvar PhotosState = function PhotosState(_ref) {\n  var children = _ref.children;\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useContext\"])(_context_hotel_context__WEBPACK_IMPORTED_MODULE_2__[\"default\"]),\n      setPhotos = _useContext.setPhotos,\n      hotelId = _useContext.hotelId,\n      setLoading = _useContext.setLoading;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])('All'),\n      _useState2 = _slicedToArray(_useState, 2),\n      selectedCategory = _useState2[0],\n      setSelectedCategory = _useState2[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    setLoading(true);\n    fetch(\"http://localhost:3000/api/hotels/\".concat(hotelId, \"/reviews/photos\")).then(function (res) {\n      return res.json();\n    }).then(function (data) {\n      setPhotos(data);\n      setLoading(false);\n    });\n  }, [hotelId]);\n  var contextData = {\n    selectedCategory: selectedCategory,\n    setSelectedCategory: setSelectedCategory\n  };\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PhotosContext__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Provider, {\n    value: contextData\n  }, children);\n};\n\nPhotosState.propTypes = {\n  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node.isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (PhotosState);\n\n//# sourceURL=webpack:///./client/components/tabs/photos/context/PhotosState.jsx?");

/***/ }),

/***/ "./client/components/tabs/photos/index.jsx":
/*!*************************************************!*\
  !*** ./client/components/tabs/photos/index.jsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _context_PhotosState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./context/PhotosState */ \"./client/components/tabs/photos/context/PhotosState.jsx\");\n/* harmony import */ var _PhotosBody_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PhotosBody/index */ \"./client/components/tabs/photos/PhotosBody/index.jsx\");\n/* harmony import */ var _PhotosBar_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PhotosBar/index */ \"./client/components/tabs/photos/PhotosBar/index.jsx\");\n/* harmony import */ var _TabHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../TabHeader */ \"./client/components/TabHeader/index.jsx\");\n/* harmony import */ var _BodyWrapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../BodyWrapper */ \"./client/components/tabs/BodyWrapper.jsx\");\n/* harmony import */ var _css_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../css/main.scss */ \"./client/components/css/main.scss\");\n/* harmony import */ var _css_main_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_css_main_scss__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\n\nvar Photos = function Photos() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_context_PhotosState__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: _css_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"upper__wrapper\"]\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TabHeader__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    title: \"Photos\",\n    buttonText: \"Post a Photo\"\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PhotosBar_index__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    \"data-testid\": \"photos-body\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_BodyWrapper__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PhotosBody_index__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Photos);\n\n//# sourceURL=webpack:///./client/components/tabs/photos/index.jsx?");

/***/ }),

/***/ "./client/components/tabs/reviews/ReviewLinks/index.jsx":
/*!**************************************************************!*\
  !*** ./client/components/tabs/reviews/ReviewLinks/index.jsx ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ReviewButton_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ReviewButton/index */ \"./client/components/tabs/reviews/ReviewButton/index.jsx\");\n/* harmony import */ var _review_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../review.scss */ \"./client/components/tabs/reviews/review.scss\");\n/* harmony import */ var _review_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_review_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _reviewLinks_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reviewLinks.scss */ \"./client/components/tabs/reviews/ReviewLinks/reviewLinks.scss\");\n/* harmony import */ var _reviewLinks_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_reviewLinks_scss__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\nvar ReviewLinks = function ReviewLinks(_ref) {\n  var votes = _ref.votes,\n      type = _ref.type;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: _review_scss__WEBPACK_IMPORTED_MODULE_3__[\"review__inner__wrapper\"]\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: _reviewLinks_scss__WEBPACK_IMPORTED_MODULE_4__[\"review__links__wrapper\"]\n  }, votes > 0 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: _reviewLinks_scss__WEBPACK_IMPORTED_MODULE_4__[\"review__links__helpfulVotes\"]\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, votes), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, type === 'photo' ? ' likes' : ' helpful votes')), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: _reviewLinks_scss__WEBPACK_IMPORTED_MODULE_4__[\"review__links\"]\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ReviewButton_index__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    icon: \"thumbs-up\",\n    text: type === 'photo' ? 'Like' : 'Helpful'\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ReviewButton_index__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    icon: \"retweet\",\n    text: \"Re-Post\"\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ReviewButton_index__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    icon: \"share\",\n    text: \"Share\"\n  }))));\n};\n\nReviewLinks.propTypes = {\n  votes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,\n  type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string\n};\nReviewLinks.defaultProps = {\n  type: 'review'\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (ReviewLinks);\n\n//# sourceURL=webpack:///./client/components/tabs/reviews/ReviewLinks/index.jsx?");

/***/ }),

/***/ "./client/components/tabs/reviews/ReviewLinks/reviewLinks.scss":
/*!*********************************************************************!*\
  !*** ./client/components/tabs/reviews/ReviewLinks/reviewLinks.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--5-1!../../../../../node_modules/sass-loader/lib/loader.js!./reviewLinks.scss */ \"./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/lib/loader.js!./client/components/tabs/reviews/ReviewLinks/reviewLinks.scss\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./client/components/tabs/reviews/ReviewLinks/reviewLinks.scss?");

/***/ }),

/***/ "./client/proptypes/photo.js":
/*!***********************************!*\
  !*** ./client/proptypes/photo.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _users__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./users */ \"./client/proptypes/users.js\");\n\n\nvar photoPropTypes = Object(prop_types__WEBPACK_IMPORTED_MODULE_0__[\"shape\"])({\n  _id: prop_types__WEBPACK_IMPORTED_MODULE_0__[\"string\"].isRequired,\n  category: Object(prop_types__WEBPACK_IMPORTED_MODULE_0__[\"oneOf\"])(['Dining', 'Pool & Beach', 'Family and Play Areas', 'Business Center & Event Rooms', 'Room & Suite']).isRequired,\n  url: prop_types__WEBPACK_IMPORTED_MODULE_0__[\"string\"].isRequired,\n  date: prop_types__WEBPACK_IMPORTED_MODULE_0__[\"string\"].isRequired,\n  description: prop_types__WEBPACK_IMPORTED_MODULE_0__[\"string\"].isRequired,\n  likes: prop_types__WEBPACK_IMPORTED_MODULE_0__[\"number\"].isRequired,\n  hotel_id: prop_types__WEBPACK_IMPORTED_MODULE_0__[\"string\"].isRequired,\n  user_id: _users__WEBPACK_IMPORTED_MODULE_1__[\"default\"].isRequired\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (photoPropTypes);\n\n//# sourceURL=webpack:///./client/proptypes/photo.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/lib/loader.js!./client/components/tabs/photos/PhotoCategory/photoCategory.scss":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./node_modules/sass-loader/lib/loader.js!./client/components/tabs/photos/PhotoCategory/photoCategory.scss ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"/* For bold prices at bottom */\\n/* For small gray text */\\n/* For green text, greeen buttons */\\n/* For header/navbar, little green bars */\\n/* For green h1/h2/etc.  */\\n/* for yellow buttons */\\n/* LOCATION COMPONENT */\\n/* BOOKING COMPONENT */\\n/* Red font */\\n.photoCategory__photosBar__category___16dRm {\\n  background-color: #fff;\\n  border: 1px solid #e5e5e5;\\n  border-radius: 2px;\\n  box-shadow: 1px 1px 0 0 rgba(0, 0, 0, 0.05);\\n  color: #4a4a4a;\\n  cursor: pointer;\\n  font-size: 12px;\\n  line-height: 14px;\\n  outline: none;\\n  padding: 11px 12px 10px;\\n  text-align: center;\\n  text-decoration: none; }\\n\\n.photoCategory__photosBar__category__active___mxnIn {\\n  background-color: #078171;\\n  color: #fff; }\\n\", \"\"]);\n\n// Exports\nexports.locals = {\n\t\"photosBar__category\": \"photoCategory__photosBar__category___16dRm\",\n\t\"photosBar__category__active\": \"photoCategory__photosBar__category__active___mxnIn\"\n};\n\n//# sourceURL=webpack:///./client/components/tabs/photos/PhotoCategory/photoCategory.scss?./node_modules/css-loader/dist/cjs.js??ref--5-1!./node_modules/sass-loader/lib/loader.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/lib/loader.js!./client/components/tabs/photos/PhotoReview/photoReview.scss":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./node_modules/sass-loader/lib/loader.js!./client/components/tabs/photos/PhotoReview/photoReview.scss ***!
  \*************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"/* For bold prices at bottom */\\n/* For small gray text */\\n/* For green text, greeen buttons */\\n/* For header/navbar, little green bars */\\n/* For green h1/h2/etc.  */\\n/* for yellow buttons */\\n/* LOCATION COMPONENT */\\n/* BOOKING COMPONENT */\\n/* Red font */\\n.photoReview__photo__review__wrapper___3neFW {\\n  border: 1px solid #e5e5e5;\\n  margin-top: 10px; }\\n\", \"\"]);\n\n// Exports\nexports.locals = {\n\t\"photo__review__wrapper\": \"photoReview__photo__review__wrapper___3neFW\"\n};\n\n//# sourceURL=webpack:///./client/components/tabs/photos/PhotoReview/photoReview.scss?./node_modules/css-loader/dist/cjs.js??ref--5-1!./node_modules/sass-loader/lib/loader.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/lib/loader.js!./client/components/tabs/photos/PhotoReviewContent/photoReviewContent.scss":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./node_modules/sass-loader/lib/loader.js!./client/components/tabs/photos/PhotoReviewContent/photoReviewContent.scss ***!
  \***************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"/* For bold prices at bottom */\\n/* For small gray text */\\n/* For green text, greeen buttons */\\n/* For header/navbar, little green bars */\\n/* For green h1/h2/etc.  */\\n/* for yellow buttons */\\n/* LOCATION COMPONENT */\\n/* BOOKING COMPONENT */\\n/* Red font */\\n.photoReviewContent__review__photo___-Wh1M {\\n  background-size: cover !important;\\n  cursor: pointer;\\n  height: 300px;\\n  position: relative;\\n  width: 100%;\\n  z-index: 1; }\\n  .photoReviewContent__review__photo___-Wh1M::after {\\n    background-color: rgba(255, 255, 255, 0);\\n    bottom: 0;\\n    content: '';\\n    left: 0;\\n    position: absolute;\\n    right: 0;\\n    top: 0;\\n    transition: background-color 200ms ease; }\\n  .photoReviewContent__review__photo___-Wh1M:hover::after {\\n    background-color: rgba(255, 255, 255, 0.1); }\\n\\n.photoReviewContent__review__photo__description___BbifD {\\n  background-color: #f9f9f9;\\n  color: #4a4a4a;\\n  font-size: 14px;\\n  line-height: 18px;\\n  margin: 0;\\n  padding: 16px 24px; }\\n\", \"\"]);\n\n// Exports\nexports.locals = {\n\t\"review__photo\": \"photoReviewContent__review__photo___-Wh1M\",\n\t\"review__photo__description\": \"photoReviewContent__review__photo__description___BbifD\"\n};\n\n//# sourceURL=webpack:///./client/components/tabs/photos/PhotoReviewContent/photoReviewContent.scss?./node_modules/css-loader/dist/cjs.js??ref--5-1!./node_modules/sass-loader/lib/loader.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/lib/loader.js!./client/components/tabs/photos/PhotosBar/photosBar.scss":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./node_modules/sass-loader/lib/loader.js!./client/components/tabs/photos/PhotosBar/photosBar.scss ***!
  \*********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"/* For bold prices at bottom */\\n/* For small gray text */\\n/* For green text, greeen buttons */\\n/* For header/navbar, little green bars */\\n/* For green h1/h2/etc.  */\\n/* for yellow buttons */\\n/* LOCATION COMPONENT */\\n/* BOOKING COMPONENT */\\n/* Red font */\\n.photosBar__photosBar__wrapper___2cCkR {\\n  border-top: 0.5px solid #e5e5e5;\\n  margin-top: 24px;\\n  padding: 24px 0 0 0; }\\n  .photosBar__photosBar__wrapper___2cCkR h5 {\\n    margin: 0 0 10px 0;\\n    padding: 0;\\n    text-transform: uppercase; }\\n  .photosBar__photosBar__wrapper___2cCkR ul {\\n    list-style-type: none;\\n    margin: 0;\\n    padding: 0; }\\n    .photosBar__photosBar__wrapper___2cCkR ul li {\\n      display: inline-block;\\n      margin-bottom: 6px;\\n      margin-right: 6px;\\n      padding: 0; }\\n\", \"\"]);\n\n// Exports\nexports.locals = {\n\t\"photosBar__wrapper\": \"photosBar__photosBar__wrapper___2cCkR\"\n};\n\n//# sourceURL=webpack:///./client/components/tabs/photos/PhotosBar/photosBar.scss?./node_modules/css-loader/dist/cjs.js??ref--5-1!./node_modules/sass-loader/lib/loader.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/lib/loader.js!./client/components/tabs/reviews/ReviewLinks/reviewLinks.scss":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./node_modules/sass-loader/lib/loader.js!./client/components/tabs/reviews/ReviewLinks/reviewLinks.scss ***!
  \**************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"/* For bold prices at bottom */\\n/* For small gray text */\\n/* For green text, greeen buttons */\\n/* For header/navbar, little green bars */\\n/* For green h1/h2/etc.  */\\n/* for yellow buttons */\\n/* LOCATION COMPONENT */\\n/* BOOKING COMPONENT */\\n/* Red font */\\n.reviewLinks__review__links__helpfulVotes___GZJ_q {\\n  border-bottom: 1px solid #eeeeee;\\n  color: #767676;\\n  font-size: 12px;\\n  margin-bottom: 10px;\\n  padding-bottom: 12px; }\\n\\n.reviewLinks__review__links___3c_79 {\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: flex-start;\\n  padding: 2px 0;\\n  width: 50%; }\\n  .reviewLinks__review__links___3c_79 > * {\\n    display: inline-block;\\n    margin-right: 20px;\\n    text-align: left; }\\n\", \"\"]);\n\n// Exports\nexports.locals = {\n\t\"review__links__helpfulVotes\": \"reviewLinks__review__links__helpfulVotes___GZJ_q\",\n\t\"review__links\": \"reviewLinks__review__links___3c_79\"\n};\n\n//# sourceURL=webpack:///./client/components/tabs/reviews/ReviewLinks/reviewLinks.scss?./node_modules/css-loader/dist/cjs.js??ref--5-1!./node_modules/sass-loader/lib/loader.js");

/***/ })

}]);