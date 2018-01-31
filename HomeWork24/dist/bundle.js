/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "dist";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _lib = __webpack_require__(1);

var _middlewares = __webpack_require__(4);

var _bookPage = __webpack_require__(7);

var _bookPage2 = _interopRequireDefault(_bookPage);

var _bookItem = __webpack_require__(8);

var _bookItem2 = _interopRequireDefault(_bookItem);

var _template = __webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

$('#app').html(_bookPage2.default);
var api = new _middlewares.fetchApi();

api.get('http://localhost:3000/books').then(function (res) {
  res.json().then(function (result) {
    console.log(result);
    var template = _template.templateBinder.bind(_bookItem2.default, result);
    $('#bookList').append(template);
  });
});

var getdom = new _lib.domuti();
var getdomedit = new _lib.domuti();
function addclick() {
  _lib.domuti.editItem('modaltitle', "ADD");
}

function btnasveclick() {

  var BookId = getdom.getText('inputBookId');
  var Title = getdom.getText('inpuTitle');
  var SalePrice = getdom.getText('inputSalePrice');
  var PromotionDate = getdom.getText('inputPromotionDate');
  var Image = getdom.getText("inputImage");
  var div = document.createElement("div");
  div.className = "col-sm-3";
  var chack = document.getElementById("modaltitle").innerText;

  if (chack == "ADD") {

    div.id = BookId;
    div.innerHTML = '      \n  <div class="csscard Card" id="' + BookId + '">\n  <p hidden><label id="Bookid_' + BookId + '">' + BookId + '</label></p>\n<p><h1 id="cardTitle_' + BookId + '">' + Title + '</h1></p>\n  <img class="card-img-top" id="inputimg_' + BookId + '" src="' + Image + '" alt="Card image cap">\n  <div class="card-body">\n      <p hidden><label for="PromotionDate" id="PromotionDate_' + BookId + '" style="padding-right:5px">January 24, 2018 11:13:00</label>          \n  <p>Price :<label for="price" id="price_' + BookId + '" style="padding-right:5px">50</label>$\n    <button type="button" name="btnedit" onclick="edit(\'' + BookId + '\')" data-id="1" class="btn btn-success "   data-toggle="modal" data-target="#myModal" >\n       Edit\n       <span class="glyphicon glyphicon-wrench" style="color:white"></span>\n    </button>\n          <button type="button" name="btndelete" onclick="deletecard(' + BookId + ')" data-id="1" class="btn btn-danger btndelete" >\n       Delete\n       <span class="glyphicon glyphicon-trash" style="color:white"></span>\n    </button>\n    </p>  \n  </div>\n</div>\n  ';
    document.getElementById("rowcard").appendChild(div);
    document.getElementById("myForm").reset();
  } else {
    _lib.domuti.setText('Bookid_' + hi, BookId);
    _lib.domuti.setText('cardTitle_' + hi, Title);
    _lib.domuti.setText('price_' + hi, SalePrice);
    _lib.domuti.setText('PromotionDate_' + hi, PromotionDate);
    document.getElementById('inputimg_' + hi).src = Image;
    document.getElementById("myForm").reset();
  }
  $('#myModal').modal('hide');
}

function edit(id) {
  var hi = id;
  _lib.domuti.editItem('modaltitle', "EDIT");
  console.log(document.getElementById('Bookid_' + id));

  document.getElementById('inputBookId').value = document.getElementById('Bookid_' + id).innerText;
  document.getElementById('inpuTitle').value = document.getElementById('cardTitle_' + id).innerText;
  document.getElementById('inputSalePrice').value = document.getElementById('price_' + id).innerText;
  document.getElementById('inputPromotionDate').value = document.getElementById('PromotionDate_' + id).innerText;
  document.getElementById('inputImage').value = document.getElementById('inputimg_' + id).src;
}

function deletecard(id) {
  var r = confirm('Are you sure to delete item ' + id + ' y/n ');
  if (r == true) {
    _lib.domuti.removeItem(id, 'rowcard');
  } else {}
}
function myfunction(id) {
  console.log(id);
}

window.myfunction = myfunction;
window.deletecard = deletecard;
window.btnasveclick = btnasveclick;
window.addclick = addclick;
window.edit = edit;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dom = __webpack_require__(2);

Object.defineProperty(exports, "domuti", {
  enumerable: true,
  get: function get() {
    return _dom.domuti;
  }
});

var _bom = __webpack_require__(3);

Object.defineProperty(exports, "bomuti", {
  enumerable: true,
  get: function get() {
    return _bom.bomuti;
  }
});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var domuti = exports.domuti = function () {
    function domuti() {
        _classCallCheck(this, domuti);
    }

    _createClass(domuti, [{
        key: "getText",
        value: function getText(id) {
            var elem = document.getElementById(id).value;
            return elem;
        }
    }], [{
        key: "setText",
        value: function setText(id, text) {
            var elem = document.getElementById(id);
            elem.innerText = text;
        }
    }, {
        key: "openWindow",
        value: function openWindow() {
            this.win = window.open("list.html", "", "resizable=yes,top=100,left=500,width=500,height=600");
        }
    }, {
        key: "closeWindow",
        value: function closeWindow() {
            if (this.win) {
                this.win.close();
            }
        }
    }, {
        key: "editItem",
        value: function editItem(id, text) {
            var elem = document.getElementById(id);
            elem.innerText = text;
        }
    }, {
        key: "removeItem",
        value: function removeItem(removeId, parentId) {
            var elem = document.getElementById(removeId);
            var parent = document.getElementById(parentId);
            parent.removeChild(elem);
        }
    }]);

    return domuti;
}();

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var bomuti = exports.bomuti = function bomuti() {
  _classCallCheck(this, bomuti);
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fetchApi = __webpack_require__(5);

Object.defineProperty(exports, 'fetchApi', {
  enumerable: true,
  get: function get() {
    return _fetchApi.fetchApi;
  }
});

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchApi = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _headers = __webpack_require__(6);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var METHOD = {
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  DELETE: "DELETE"
};

var fetchApi = exports.fetchApi = function () {
  function fetchApi() {
    _classCallCheck(this, fetchApi);

    this.headers = _headers.headers;
  }

  _createClass(fetchApi, [{
    key: "prepare",
    value: function prepare(method) {
      this.header = {
        method: method,
        mode: "cors",
        header: this.headers
      };
    }
  }, {
    key: "get",
    value: function get(url) {
      this.prepare(METHOD.GET);
      return fetch(url, this.header);
    }
  }]);

  return fetchApi;
}();

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var headers = new Headers({
  "Content-Type": "application/json"
});

exports.headers = headers;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"panel panel-primary\">\n    <div class=\"panel-heading\"> Products\n      <button class=\"btn btn-warning pull-right\" style=\"margin-top:-6px\" type=\"button\">\n        <i class=\"glyphicon glyphicon-shopping-cart\"></i> Your Order\n        <span class=\"badge\">4</span>\n      </button>\n    </div>\n    <div class=\"panel-body\">\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n          <form class=\"form-inline\" role=\"form\">\n            <div class=\"form-group\">\n              <label for=\"productCategory\">Product Category</label>\n\n              <select class=\"form-control\" id=\"ddlProductCategory\">\n                <option>Book</option>\n                <option>Cosmetic</option>\n                <option>Shirt</option>\n                <option>Shoe</option>\n              </select>\n              <div class=\"input-group\">\n                <input type=\"text\" class=\"form-control\" id=\"txtSearchProduct\" placeholder=\"Search Product\" />\n                <div class=\"input-group-addon\">\n                  <i class=\"glyphicon glyphicon-search\"></i>\n                </div>\n                <div class=\"input-group-addon\">\n                  <i class=\"glyphicon glyphicon-plus\"></i>\n                </div>\n              </div>\n\n            </div>\n          </form>\n        </div>\n        <div class=\"col-md-6\">\n          <ul class=\"pagination pull-right\" style=\"margin-top:-2px\">\n            <li>\n              <a href=\"#\">\n                <span aria-hidden=\"true\">&laquo;</span>\n                <span class=\"sr-only\">Previous</span>\n              </a>\n            </li>\n            <li>\n              <a href=\"#\">1</a>\n            </li>\n            <li>\n              <a href=\"#\">2</a>\n            </li>\n            <li>\n              <a href=\"#\">3</a>\n            </li>\n            <li>\n              <a href=\"#\">4</a>\n            </li>\n            <li>\n              <a href=\"#\">5</a>\n            </li>\n            <li>\n              <a href=\"#\">\n                <span aria-hidden=\"true\">&raquo;</span>\n                <span class=\"sr-only\">Next</span>\n              </a>\n            </li>\n          </ul>\n        </div>\n      </div>\n      <div id=\"bookList\" class=\"row\">\n      </div>\n    </div>\n  </div> -->\n  <nav class=\"navbar navbar-inverse navbar-fixed-top\" style=\"padding-left: 10px;padding-right: 10px;\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <img class=\"navbar-brand\" id=\"imgbrand\" src=\"http://www.iconsplace.com/icons/preview/purple/twitter-64.png\" class=\"rounded\" alt=\"Cinque Terre\">\n      <a class=\"navbar-brand\" href=\"#\">Bootstap</a>\n    </div>\n    <div id=\"navbar\" class=\"navbar-collapse collapse\">\n        <form class=\"navbar-form navbar-right\">\n          <span class=\"glyphicon glyphicon-globe\" style=\"color:white\" aria-hidden=\"true\"></span>\n          <div class=\"btn-group\">\n            <button type=\"button\" class=\"btn btn-default\">TH</button>\n            <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n              <span class=\"caret\"></span>\n              <span class=\"sr-only\">Toggle Dropdown</span>\n            </button>\n            <ul class=\"dropdown-menu\">\n              <li><a href=\"#\">ENG</a></li>\n              <li role=\"separator\" class=\"divider\"></li>\n              <li><a href=\"#\">TH</a></li>\n            </ul>\n          </div>\n          <div class=\"input-group\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"Search\" name=\"search\">\n            <div class=\"input-group-btn\">\n              <button class=\"btn btn-default\" type=\"submit\">\n                <i class=\"glyphicon glyphicon-search\"></i>\n              </button>\n            </div>\n          </div>\n          <button type=\"submit\" class=\"btn btn-success\">Sign in</button>\n        </form>\n      </div>\n</nav>\n<div class=\"jumbotron\" style=\"background-color:white;margin-bottom:0px;padding-bottom:0\">\n<div>\n      <div class=\"container-fluid\">\n              <div class=\"navbar-header\">\n                <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\n                  <span class=\"icon-bar\"></span>\n                  <span class=\"icon-bar\"></span>\n                  <span class=\"icon-bar\"></span>                        \n                </button>\n                \n              </div>\n              <div class=\"collapse navbar-collapse\" id=\"myNavbar\">\n                <ul class=\"nav navbar-nav\">\n                  <li class=\"active\"><a href=\"#\">Home</a></li>\n                 <li><a href=\"#\">Products</a></li>\n                  <li><a href=\"#\">Projects</a></li>\n                  <li><a href=\"#\">DashBoard</a></li>\n                </ul>\n                <ul class=\"nav navbar-nav navbar-right\">\n                      <li class=\"dropdown\">\n                              <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">My Account <span class=\"caret\"></span></a>\n                              <ul class=\"dropdown-menu\">\n                                <li><a href=\"#\">My Profile</a></li>\n                                <li><a href=\"#\">Bought History</a></li>\n                                <li><a href=\"#\">My Gallery</a></li>\n\n                                      <li class=\"divider\"></li>\n                                      <li><a href=\"#\"><i class=\"glyphicon glyphicon-off\"></i>Log Out</a></li>\n                              </ul>\n                            </li>\n                          </ul>\n                      </div>\n                  </div>\n              </div>\n          </div>\n<div style=\"margin-top:0px back; border: 2px solid rgb(17, 163, 248);\">\n  <div class=\"row \"style=\"background-color:rgb(17, 163, 248);\">\n    <div class=\"col-sm-8\" style=\"text-align:left;padding-left:2%;color:white;font-size:25px\">Products</div>\n    <div class=\"col-sm-4\" style=\"text-align:right;padding-right:2%;\">\n      <button type=\"button\" class=\"btn btn-warning\" >\n        <span class=\"glyphicon glyphicon-shopping-cart\" style=\"color:white\"></span> Your Oder  \n        <span class=\"badge\"style=\"color:blue\">5</span>\n      </button>\n    </div>\n  </div>       \n  </div>\n <div class=\"container-fluid\" style=\"display:flow-root;margin-top:10px;\">\n  <div class=\"pull-left\">\n      <form class=\"form-inline\">\n          <div class=\"form-group\" >\n            <label>Product Category</label>\n            <select class=\"form-control\">\n                <option>Book</option>\n                <option>2</option>\n                <option>3</option>\n                <option>4</option>\n                <option>5</option>\n              </select>\n              <div class=\"input-group\">\n                  <input type=\"text\" class=\"form-control\" placeholder=\"Search\" name=\"search\">\n                  <div class=\"input-group-btn\">\n                    <button class=\"btn btn-default\" >\n                      <i class=\"glyphicon glyphicon-search\"></i>\n                    </button>\n                  </div>\n                  <div class=\"input-group-btn\">\n                    <button class=\"btn btn-default\" id=\"btnadd\"  type=\"button\" onclick=\"addclick()\" data-toggle=\"modal\" data-target=\"#myModal\">\n                      <i class=\"glyphicon glyphicon-plus\"></i>\n                    </button>\n                  </div>\n                </div>               \n          </div>\n        </form>\n  </div>\n  <div class=\"pull-right\">\n      <ul class=\"pagination pagination\" id=\"pi\" >\n          <li><a href=\"#\"><<</a></li>\n          <li><a href=\"#\">1</a></li>\n          <li><a href=\"#\">2</a></li>\n          <li><a href=\"#\">3</a></li>\n          <li><a href=\"#\">4</a></li>\n          <li><a href=\"#\">5</a></li>\n          <li><a href=\"#\">>></a></li>\n        </ul>\n  </div>\n</div>\n<div class=\"row\" id=\"bookList\" id=\"rowcard\">\n  <label hidden id=\"hidlbl\"></label>\n</div>\n\n      <div class=\"modal fade\" id=\"myModal\" role=\"dialog\" aria-hidden=\"true\">\n        <div class=\"modal-dialog modal-lg\">\n          <div class=\"modal-content\">\n            <div class=\"modal-header\">\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n              <h4 class=\"modal-title\" id=\"modaltitle\"></h4>\n            </div>\n            <div class=\"modal-body\">\n              <form id=\"myForm\">\n                <div class=\"form-group\">\n                  <label for=\"inputBookId\">Book ID</label>\n                  <input class=\"form-control input-sm\" id=\"inputBookId\" type=\"text\">\n                </div>\n                 <div class=\"form-group\">\n                  <label for=\"inpuTitle\">Title</label>\n                  <input class=\"form-control\" id=\"inpuTitle\" type=\"text\">\n                </div>\n                <div class=\"form-group\">\n                  <label for=\"inputSalePrice\">Sale Price</label>\n                  <input class=\"form-control input-sm\" id=\"inputSalePrice\" type=\"text\">\n                </div>\n                <div class=\"form-group\">\n                  <label for=\"inputPromotionDate\">Promotion Date</label>\n                  <input class=\"form-control input-sm\" id=\"inputPromotionDate\" type=\"text\">\n                </div>\n                <div class=\"form-group\">\n                  <label for=\"inputImage\">Image</label>\n                  <input class=\"form-control input-sm\" id=\"inputImage\" type=\"text\">\n                </div>\n                <button type=\"button\" id=\"btnsave\"class=\"btn btn-primary\" onclick=\"btnasveclick()\"  >Save</button>\n              </form>\n            </div>\n            <div class=\"modal-footer\">\n              <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n            </div>\n          </div>\n        </div>\n      </div> ";

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"col-sm-3\" id= {{isbn}}>\n<div class=\"csscard Card\" id= {{cardid}} >\n  <p hidden><label id=\"Bookid\"> {{boookid}} </label></p>\n<p><h1 id= {{cardTitleisbn}} > {{title}} </h1></p>\n  <img class=\"card-img-top\" id= {{inputimg_isbn}} src= {{imageUrl}} alt=\"Card image cap\">\n  <div class=\"card-body\">\n      <p hidden><label for=\"PromotionDate\" id= {{PromotionDate_isbn}} style=\"padding-right:5px\">January 24, 2018 11:13:00</label>          \n  <p>Price :<label for=\"price\" id= {{price_isbn}} style=\"padding-right:5px\">{{price}}</label>$\n    <button type=\"button\" name=\"btnedit\" onclick= {{editisbn}} data-id=\"1\" class=\"btn btn-success \"   data-toggle=\"modal\" data-target=\"#myModal\" >\n       Edit\n       <span class=\"glyphicon glyphicon-wrench\" style=\"color:white\"></span>\n    </button>\n          <button type=\"button\" name=\"btndelete\" onclick= {{deletecardisbn}}  data-id=\"1\" class=\"btn btn-danger btndelete\" >\n       Delete\n       <span class=\"glyphicon glyphicon-trash\" style=\"color:white\"></span>\n    </button>\n    </p>  \n  </div>\n</div>\n</div>";

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateBinder = __webpack_require__(10);

Object.defineProperty(exports, 'templateBinder', {
  enumerable: true,
  get: function get() {
    return _templateBinder.templateBinder;
  }
});

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var templateBinder = exports.templateBinder = function () {
  function templateBinder() {
    _classCallCheck(this, templateBinder);
  }

  _createClass(templateBinder, null, [{
    key: 'bind',
    value: function bind(template, data) {
      var templates = [];
      data.forEach(function (a) {
        var aTemplate = template;
        Object.keys(a).forEach(function (aKey) {
          aTemplate = aTemplate.replace('{{' + aKey + '}}', a[aKey]);
        });
        templates.push(aTemplate);
      });
      return templates.join('');
    }
  }]);

  return templateBinder;
}();

/***/ })
/******/ ]);