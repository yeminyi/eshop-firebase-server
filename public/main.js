(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<div class=\"container\">\r\n    <div class=\"row\"> \r\n        <div class=\"col-md-3\">\r\n            <app-search></app-search>           \r\n        </div>\r\n        <div class=\"col-md-9\">\r\n            <router-outlet></router-outlet>    \r\n        </div>\r\n    </div>\r\n</div>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/carousel/carousel.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/carousel/carousel.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "   <div id=\"carouselExampleIndicators\" class=\"carousel slide\" data-ride=\"carousel\">\r\n      <ol class=\"carousel-indicators\">\r\n        <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"0\" class=\"active\"></li>\r\n        <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"1\"></li>\r\n        <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"2\"></li>\r\n      </ol>\r\n      <div class=\"carousel-inner carousel-size\">\r\n        <div class=\"carousel-item active\">\r\n            <img src=\"./assets/img/img(11).jpg\" alt=\"\" class=\"img-fluid\" >\r\n        </div>\r\n        <div class=\"carousel-item\">\r\n            <img src=\"./assets/img/img(1).jpg\" alt=\"\" class=\"img-fluid\" >\r\n        </div>\r\n        <div class=\"carousel-item\">\r\n            <img src=\"./assets/img/img(10).jpg\" alt=\"\" class=\"img-fluid\" >\r\n        </div>\r\n      </div>\r\n      <a class=\"carousel-control-prev\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"prev\">\r\n        <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\r\n        <span class=\"sr-only\">Previous</span>\r\n      </a>\r\n      <a class=\"carousel-control-next\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"next\">\r\n        <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\r\n        <span class=\"sr-only\">Next</span>\r\n      </a>\r\n    </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/footer/footer.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/footer/footer.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<hr>\n<footer class=\"main-footer\">\n\n  <!-- Default to the left -->\n  <strong>Copyright &copy; 2018 <a href=\"#\"></a>.</strong> All rights reserved.\n</footer>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row carousel-container\" >\r\n    <app-carousel></app-carousel>\r\n</div>   \r\n<div class=\"row\">\r\n    <app-product></app-product>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/navbar/navbar.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/navbar/navbar.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-sm navbar-dark bg-dark fixed-top\">\n    <a class=\"navbar-brand\" href=\"#\">Eshop Demo</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsCollapse\" aria-controls=\"navbarsExample03\" aria-expanded=\"true\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <div class=\"navbar-collapse collapse show\" id=\"navbarsCollapse\" >\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item \">\n          <a class=\"nav-link\" href=\"#\">About Us</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\">Contact Us</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\">Website Map</a>\n        </li>\n      </ul>\n    </div>\n</nav>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/product-detail/product-detail.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/product-detail/product-detail.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card card-block\">\n  <img class=\"card-img-top\"[src]='product?.imgurl' alt=\"Card image cap\">\n  <div class=\"card-body\">\n    <h5 class=\"card-title\">\n       {{product?.title}}\n    </h5>\n    <h5 class=\"card-title pull-right\">\n      ${{product?.price}}\n    </h5>   \n    <p class=\"card-text\">{{product?.desc}}\n    <p class=\"card-text\">\n          <app-stars-rating  [rate]='product?.rating' [readonly]=\"true\"></app-stars-rating>\n    </p>\n    <p class=\"card-text\"><small class=\"text-muted\">Last updated 3 mins ago</small></p>\n  </div>\n</div>\n<!-- <div class=\"card card-block\">\n  <div class=\"card-body\">\n    <button class=\"btn btn-defaut btn-lg pull-right\"\n      [class.active]=\"isWatched\"\n      (click)=\"watchProduct()\">\n      {{isWatched?'Not Watching':'Watching'}}\n    </button>\n    <label for=\"LastestPrice\">Lastest Price:${{currentBid |number : '.2-2'}}</label>\n  </div>\n</div> -->\n<div class=\"comments\">\n  <div>\n        <button class=\"btn btn-primary\" (click)=\"isHiddenComment=!isHiddenComment\">Add A Comment</button>\n  </div>\n  <div [hidden]=\"isHiddenComment\">\n    <br>\n    <div>\n      <app-stars-rating  [(rate)]=\"newRating\" [readonly]=\"false\"></app-stars-rating>\n    </div>\n    <div>\n      <textarea [(ngModel)]=\"newComment\" class=\"form-control\" rows=\"3\" ></textarea>\n    </div>\n    <br>\n    <div>\n      <button class=\"btn btn-primary\" (click)=\"addComment()\">Submit</button>\n    </div>\n  </div>\n  <br> \n  <div class=\"row\" *ngFor=\"let comment of comments\" >\n    <hr>\n    <div class=\"col-md-12\">\n      <app-stars-rating [(rate)]='comment.rating'  [readonly]=\"true\"></app-stars-rating>\n      <p>{{comment.user}}</p>\n      <span class=\"pull-right\">{{comment.timestamp |   date:\"dd/MM/yyyy HH:mm:ss\"}}</span>\n      <p></p>\n      <p>{{comment.content}}</p>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/product/product.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/product/product.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "    <!-- <div class=\"container\">\r\n        <div class=\"row equal\">\r\n            <div class=\"col-sm-4 d-flex pb-3\" *ngFor=\"let product of products |async\" >\r\n                <div class=\"card card-block\">\r\n                    <img class=\"card-img-top\" [src]=\"imgUrl\" alt=\"Card image cap\">\r\n                    <div class=\"card-body\">\r\n                      <h5 class=\"card-title\">\r\n                         <a [routerLink]=\"['/product',product.id]\">{{product.title}}</a>\r\n                      </h5>\r\n                      <p class=\"card-text \">${{product.price}}</p>\r\n                      <p class=\"card-text\">{{product.desc}}\r\n                      <p class=\"card-text\">\r\n                            <app-stars [rating]='product.rating'></app-stars>\r\n                      </p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            \r\n        </div>\r\n    </div> -->\r\n    <div class=\"row mb-5\">\r\n        <!-- Grid column -->\r\n        <div class=\"col-lg-4 col-md-12 mb-lg-0 mb-4 pb-3\" *ngFor=\"let product of products |async\" >\r\n          <!-- Card -->\r\n          <div class=\"card card-cascade wider card-ecommerce\">\r\n            <!-- Card image -->\r\n            <div class=\"view view-cascade overlay\">\r\n              <img [src]='product.imgurl' class=\"card-img-top\" alt=\"sample photo\">\r\n              <a [routerLink]=\"['/product',product.id]\">\r\n                <div class=\"mask rgba-white-slight waves-effect waves-light\"></div>\r\n              </a>\r\n            </div>\r\n            <!-- Card image -->\r\n            <!-- Card content -->\r\n            <div class=\"card-body card-body-cascade text-center\">\r\n              <!-- Category & Title -->\r\n              <a [routerLink]=\"['/product',product.id]\" class=\"text-muted\">\r\n                <h5>{{product.categories}}</h5>\r\n              </a>\r\n              <h4 class=\"card-title\">\r\n                <strong>\r\n                    <a [routerLink]=\"['/product',product.id]\">{{product.title}}</a>\r\n                </strong>\r\n              </h4>\r\n              <!-- Description -->\r\n              <p class=\"card-text\">\r\n                    <app-stars-rating [rate]='product.rating' [readonly]=\"true\"></app-stars-rating>\r\n              </p>\r\n              <p class=\"card-text\">{{product.desc}}</p>\r\n              <!-- Card footer -->\r\n              <div class=\"card-footer px-1\">\r\n                <span class=\"float-left font-weight-bold\">\r\n                  <strong>{{product.price}}$</strong>\r\n                </span>\r\n                \r\n              </div>\r\n            </div>\r\n            <!-- Card content -->\r\n          </div>\r\n          <!-- Card -->\r\n        </div>\r\n        <!-- Grid column -->\r\n      </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/search/search.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/search/search.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"formModel\" (ngSubmit)=\"onSearch()\" >\r\n  <div class=\"form-group\">\r\n    <label for=\"productTitle\">Product Name</label>\r\n    <input type=\"text\" formControlName=\"title\" id=\"title\" placeholder=\"Product Name\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted &&  f.title.errors }\">\r\n    <!-- <span class=\"help-block\" [class.hidden]=\"!formModel.hasError('minlength','title')\">At least three letters </span> -->\r\n    <div *ngIf=\"f.title.errors\" class=\"invalid-feedback\">\r\n      <div *ngIf=\"f.title.errors.minlength\">At least three letters </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group\" >\r\n      <label for=\"productPrice\">Product Price</label>\r\n      <input type=\"text\" id=\"productPrice\" formControlName=\"price\" placeholder=\"Product Price\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted &&  f.price.errors }\">\r\n      <!-- <span class=\"help-block\" [class.hidden]=\"!formModel.hasError('positiveNumber','price')\">Price must be positive </span> -->\r\n      <div *ngIf=\"f.price.errors\" class=\"invalid-feedback\">\r\n        <div *ngIf=\"f.price.errors\">Price must be positive numbers </div>\r\n      </div>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label for=\"productCategory\">Product Category</label>\r\n    <select formControlName=\"category\" name=\"productCategory\" class=\"form-control\" id=\"productCategory\">\r\n      <option value=\"-1\">All Category</option>\r\n      <option *ngFor=\"let category of categories\"  [value]=\"category\">{{category}}</option> \r\n   </select>\r\n   \r\n    <!-- <div class=\"dropdown\">\r\n      <button class=\"btn btn-secondary dropdown-toggle form-control\" type=\"button\" \r\n      name=\"productCategory\"  id=\"productCategory\"\r\n       data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n       {{selectCategory}}\r\n      </button>\r\n      <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\r\n        <button  type=\"button\" class=\"dropdown-item\" *ngFor=\"let category of categories\" (click)=\"selectBtn(category)\">{{category}}</button>\r\n      </div>\r\n    </div> -->\r\n\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <button type=\"submit\" class=\"btn btn-primary btn-block\">Search</button>\r\n  </div>\r\n</form>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/stars-rating/stars-rating.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/stars-rating/stars-rating.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n<ng-template #t let-fill=\"fill\">\n  <span class=\"star\" [class.full]=\"fill === 100\">\n    <span class=\"half\" [style.width.%]=\"fill\"><span  class=\"fa fa-star\"></span></span><span  class=\"fa fa-star\"></span>\n  </span>\n</ng-template>\n\n<ng-template ngFor [ngForOf]=\"contexts\" let-index=\"index\">\n  <span class=\"sr-only\">({{ index < nextRate ? '*' : ' ' }})</span>\n  <span (mouseenter)=\"enter(index + 1)\" (click)=\"handleClick(index + 1)\" [style.cursor]=\"readonly || disabled ? 'default' : 'pointer'\">\n    <ng-template [ngTemplateOutlet]=\"starTemplate || starTemplateFromContent || t\" [ngTemplateOutletContext]=\"contexts[index]\">\n    </ng-template>\n  </span>\n</ng-template>\n\n<span> {{rate|number:'1.0-1'}} stars</span>"

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _stars_rating_stars_rating_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stars-rating/stars-rating.component */ "./src/app/stars-rating/stars-rating.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./search/search.component */ "./src/app/search/search.component.ts");
/* harmony import */ var _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./carousel/carousel.component */ "./src/app/carousel/carousel.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./product/product.component */ "./src/app/product/product.component.ts");
/* harmony import */ var _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./product-detail/product-detail.component */ "./src/app/product-detail/product-detail.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_product_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./service/product.service */ "./src/app/service/product.service.ts");
/* harmony import */ var _pipe_filter_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pipe/filter.pipe */ "./src/app/pipe/filter.pipe.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _service_web_socket_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./service/web-socket.service */ "./src/app/service/web-socket.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var routeConfig = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"] },
    { path: 'product/:productId', component: _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_9__["ProductDetailComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"],
                _search_search_component__WEBPACK_IMPORTED_MODULE_5__["SearchComponent"],
                _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_6__["CarouselComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
                _product_product_component__WEBPACK_IMPORTED_MODULE_8__["ProductComponent"],
                _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_9__["ProductDetailComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
                _pipe_filter_pipe__WEBPACK_IMPORTED_MODULE_13__["FilterPipe"],
                _stars_rating_stars_rating_component__WEBPACK_IMPORTED_MODULE_3__["StarsRatingComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"].forRoot(routeConfig),
                _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"]
            ],
            providers: [_service_product_service__WEBPACK_IMPORTED_MODULE_12__["ProductService"], _service_web_socket_service__WEBPACK_IMPORTED_MODULE_16__["WebSocketService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/carousel/carousel.component.css":
/*!*************************************************!*\
  !*** ./src/app/carousel/carousel.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".carousel-size{\r\n    display: block;\r\n    width: 100%;\r\n    height: 15em;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2Fyb3VzZWwvY2Fyb3VzZWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCxXQUFXO0lBQ1gsWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2Nhcm91c2VsL2Nhcm91c2VsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2Fyb3VzZWwtc2l6ZXtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDE1ZW07XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/carousel/carousel.component.ts":
/*!************************************************!*\
  !*** ./src/app/carousel/carousel.component.ts ***!
  \************************************************/
/*! exports provided: CarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselComponent", function() { return CarouselComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CarouselComponent = /** @class */ (function () {
    function CarouselComponent() {
    }
    CarouselComponent.prototype.ngOnInit = function () {
    };
    CarouselComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-carousel',
            template: __webpack_require__(/*! raw-loader!./carousel.component.html */ "./node_modules/raw-loader/index.js!./src/app/carousel/carousel.component.html"),
            styles: [__webpack_require__(/*! ./carousel.component.css */ "./src/app/carousel/carousel.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CarouselComponent);
    return CarouselComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".carousel-container{\r\n    margin-bottom: 15px;\r\n    margin-right: 0px;\r\n    margin-left: 0px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcm91c2VsLWNvbnRhaW5lcntcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/index.js!./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/pipe/filter.pipe.ts":
/*!*************************************!*\
  !*** ./src/app/pipe/filter.pipe.ts ***!
  \*************************************/
/*! exports provided: FilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterPipe = /** @class */ (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (list, filterField, keyword) {
        if (!filterField || !keyword) {
            return list;
        }
        return list.filter(function (item) {
            var fieldValue = item[filterField];
            return fieldValue.indexOf(keyword) >= 0;
        });
    };
    FilterPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'filter'
        })
    ], FilterPipe);
    return FilterPipe;
}());



/***/ }),

/***/ "./src/app/product-detail/product-detail.component.css":
/*!*************************************************************!*\
  !*** ./src/app/product-detail/product-detail.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".comments\r\n{\r\n    margin-top: 1rem;\r\n    padding: 2rem 1rem;\r\n    margin-bottom: 2rem;\r\n    background-color: #e9ecef;\r\n    border-radius: 0.3rem;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdC1kZXRhaWwvcHJvZHVjdC1kZXRhaWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIscUJBQXFCO0FBQ3pCIiwiZmlsZSI6InNyYy9hcHAvcHJvZHVjdC1kZXRhaWwvcHJvZHVjdC1kZXRhaWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb21tZW50c1xyXG57XHJcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgcGFkZGluZzogMnJlbSAxcmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlOWVjZWY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjNyZW07XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/product-detail/product-detail.component.ts":
/*!************************************************************!*\
  !*** ./src/app/product-detail/product-detail.component.ts ***!
  \************************************************************/
/*! exports provided: ProductDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailComponent", function() { return ProductDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/product.service */ "./src/app/service/product.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { WebSocketService } from '../service/web-socket.service';
// import { Subscription } from '../../../node_modules/rxjs';
var ProductDetailComponent = /** @class */ (function () {
    // isWatched:boolean=false;
    // currentBid:number;
    // subscrption:Subscription;
    function ProductDetailComponent(routeInfo, productService) {
        this.routeInfo = routeInfo;
        this.productService = productService;
        this.newRating = 5;
        this.newComment = "";
        this.isHiddenComment = true;
    }
    ProductDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        var productId = this.routeInfo.snapshot.params["productId"];
        this.productService.getProduct(productId).subscribe(function (product) {
            _this.product = product;
            // this.currentBid=product.price;
        });
        this.productService.getCommentForProductID(productId).subscribe(function (comments) { return _this.comments = comments; });
    };
    ProductDetailComponent.prototype.addComment = function () {
        var comment = new _service_product_service__WEBPACK_IMPORTED_MODULE_2__["Comment"](0, this.product.id, new Date().toISOString(), 'userTest', this.newRating, this.newComment);
        this.comments.unshift(comment);
        var sum = this.comments.reduce(function (sum, comment) { return sum + comment.rating; }, 0);
        this.product.rating = sum / this.comments.length;
        this.newComment = null;
        this.isHiddenComment = true;
    };
    ProductDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-detail',
            template: __webpack_require__(/*! raw-loader!./product-detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/product-detail/product-detail.component.html"),
            styles: [__webpack_require__(/*! ./product-detail.component.css */ "./src/app/product-detail/product-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _service_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]])
    ], ProductDetailComponent);
    return ProductDetailComponent;
}());



/***/ }),

/***/ "./src/app/product/product.component.css":
/*!***********************************************!*\
  !*** ./src/app/product/product.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input-margin{ \r\n   margin-bottom: 40px\r\n} \r\n\r\n\r\n.card.card-cascade.wider {\r\n    box-shadow: none;\r\n    background-color: transparent;\r\n} \r\n\r\n\r\n.card.card-cascade.wider .view.view-cascade {\r\n   z-index: 2;\r\n} \r\n\r\n\r\n.view.view-cascade {\r\n   box-shadow: 0 5px 11px 0 rgba(0,0,0,.18), 0 4px 15px 0 rgba(0,0,0,.15);\r\n   border-radius: .25rem;\r\n} \r\n\r\n\r\n.view img, .view video {\r\n   position: relative;\r\n   display: block;\r\n} \r\n\r\n\r\n.card-img-top {\r\n   width: 100%;\r\n   border-top-left-radius: calc(.25rem - 1px);\r\n   border-top-right-radius: calc(.25rem - 1px);\r\n} \r\n\r\n\r\nimg {\r\n   vertical-align: middle;\r\n   border-style: none;\r\n} \r\n\r\n\r\n.overlay .mask {\r\n   opacity: 0;\r\n   transition: all .4s ease-in-out;\r\n} \r\n\r\n\r\n.view .mask {\r\n   position: absolute;\r\n   top: 0;\r\n   left: 0;\r\n   right: 0;\r\n   bottom: 0;\r\n   overflow: hidden;\r\n   width: 100%;\r\n   height: 100%;\r\n   background-attachment: fixed;\r\n} \r\n\r\n\r\n.waves-effect {\r\n   position: relative;\r\n   cursor: pointer;\r\n   overflow: hidden;\r\n   -webkit-user-select: none;\r\n   -moz-user-select: none;\r\n   -ms-user-select: none;\r\n   user-select: none;\r\n   -webkit-tap-highlight-color: transparent;\r\n} \r\n\r\n\r\n.rgba-white-slight, .rgba-white-slight:after {\r\n   background-color: rgba(255,255,255,.1);\r\n} \r\n\r\n\r\n.card.card-cascade.wider .card-body.card-body-cascade {\r\n   box-shadow: 0 2px 5px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12);\r\n   margin-left: 4%;\r\n   margin-right: 4%;\r\n   background: #fff;\r\n   z-index: 1;\r\n   border-radius: 0 0 .25rem .25rem;\r\n} \r\n\r\n\r\n.card {\r\n   box-shadow: 0 2px 5px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12);\r\n   border: 0;\r\n   font-weight: 400;\r\n} \r\n\r\n\r\n.card-body {\r\n   line-height: 1.7;\r\n   color: #626262;\r\n   font-size: 0.9rem;\r\n   font-weight: 300;\r\n} \r\n\r\n\r\n.card-body {\r\n   padding-top: 1.5rem;\r\n   padding-bottom: 1.5rem;\r\n   border-radius: 0!important;\r\n} \r\n\r\n\r\n.text-center {\r\n   text-align: center!important;\r\n} \r\n\r\n\r\n.card-body {\r\n   flex: 1 1 auto;\r\n   padding: 1.25rem;\r\n} \r\n\r\n\r\n.text-muted {\r\n   color: #6c757d!important;\r\n} \r\n\r\n\r\na {\r\n   cursor: pointer;\r\n   text-decoration: none;\r\n   color: #007bff;\r\n   transition: all .2s ease-in-out;\r\n} \r\n\r\n\r\n.card-text {\r\n   color: #747373;\r\n   font-size: .9rem;\r\n   font-weight: 400;\r\n} \r\n\r\n\r\n.cascade.wider .card-body.card-body-cascade .card-footer {\r\n   margin-left: -1.25rem;\r\n   margin-right: -1.25rem;\r\n} \r\n\r\n\r\n.card.card-ecommerce .card-footer {\r\n   background-color: transparent;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdC9wcm9kdWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7R0FDRztBQUNIOzs7QUFHQTtJQUNJLGdCQUFnQjtJQUNoQiw2QkFBNkI7QUFDakM7OztBQUNBO0dBQ0csVUFBVTtBQUNiOzs7QUFDQTtHQUNHLHNFQUFzRTtHQUN0RSxxQkFBcUI7QUFDeEI7OztBQUVBO0dBQ0csa0JBQWtCO0dBQ2xCLGNBQWM7QUFDakI7OztBQUNBO0dBQ0csV0FBVztHQUNYLDBDQUEwQztHQUMxQywyQ0FBMkM7QUFDOUM7OztBQUNBO0dBQ0csc0JBQXNCO0dBQ3RCLGtCQUFrQjtBQUNyQjs7O0FBQ0E7R0FDRyxVQUFVO0dBQ1YsK0JBQStCO0FBQ2xDOzs7QUFDQTtHQUNHLGtCQUFrQjtHQUNsQixNQUFNO0dBQ04sT0FBTztHQUNQLFFBQVE7R0FDUixTQUFTO0dBQ1QsZ0JBQWdCO0dBQ2hCLFdBQVc7R0FDWCxZQUFZO0dBQ1osNEJBQTRCO0FBQy9COzs7QUFDQTtHQUNHLGtCQUFrQjtHQUNsQixlQUFlO0dBQ2YsZ0JBQWdCO0dBQ2hCLHlCQUF5QjtHQUN6QixzQkFBc0I7R0FDdEIscUJBQXFCO0dBQ3JCLGlCQUFpQjtHQUNqQix3Q0FBd0M7QUFDM0M7OztBQUNBO0dBQ0csc0NBQXNDO0FBQ3pDOzs7QUFDQTtHQUNHLHFFQUFxRTtHQUNyRSxlQUFlO0dBQ2YsZ0JBQWdCO0dBQ2hCLGdCQUFnQjtHQUNoQixVQUFVO0dBQ1YsZ0NBQWdDO0FBQ25DOzs7QUFDQTtHQUNHLHFFQUFxRTtHQUNyRSxTQUFTO0dBQ1QsZ0JBQWdCO0FBQ25COzs7QUFDQTtHQUNHLGdCQUFnQjtHQUNoQixjQUFjO0dBQ2QsaUJBQWlCO0dBQ2pCLGdCQUFnQjtBQUNuQjs7O0FBQ0E7R0FDRyxtQkFBbUI7R0FDbkIsc0JBQXNCO0dBRXRCLDBCQUEwQjtBQUM3Qjs7O0FBQ0E7R0FDRyw0QkFBNEI7QUFDL0I7OztBQUNBO0dBRUcsY0FBYztHQUNkLGdCQUFnQjtBQUNuQjs7O0FBQ0E7R0FDRyx3QkFBd0I7QUFDM0I7OztBQUVBO0dBQ0csZUFBZTtHQUNmLHFCQUFxQjtHQUNyQixjQUFjO0dBQ2QsK0JBQStCO0FBQ2xDOzs7QUFDQTtHQUNHLGNBQWM7R0FDZCxnQkFBZ0I7R0FDaEIsZ0JBQWdCO0FBQ25COzs7QUFDQTtHQUNHLHFCQUFxQjtHQUNyQixzQkFBc0I7QUFDekI7OztBQUVBO0dBQ0csNkJBQTZCO0FBQ2hDIiwiZmlsZSI6InNyYy9hcHAvcHJvZHVjdC9wcm9kdWN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5wdXQtbWFyZ2lueyBcclxuICAgbWFyZ2luLWJvdHRvbTogNDBweFxyXG59IFxyXG5cclxuXHJcbi5jYXJkLmNhcmQtY2FzY2FkZS53aWRlciB7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuLmNhcmQuY2FyZC1jYXNjYWRlLndpZGVyIC52aWV3LnZpZXctY2FzY2FkZSB7XHJcbiAgIHotaW5kZXg6IDI7XHJcbn1cclxuLnZpZXcudmlldy1jYXNjYWRlIHtcclxuICAgYm94LXNoYWRvdzogMCA1cHggMTFweCAwIHJnYmEoMCwwLDAsLjE4KSwgMCA0cHggMTVweCAwIHJnYmEoMCwwLDAsLjE1KTtcclxuICAgYm9yZGVyLXJhZGl1czogLjI1cmVtO1xyXG59XHJcblxyXG4udmlldyBpbWcsIC52aWV3IHZpZGVvIHtcclxuICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4uY2FyZC1pbWctdG9wIHtcclxuICAgd2lkdGg6IDEwMCU7XHJcbiAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IGNhbGMoLjI1cmVtIC0gMXB4KTtcclxuICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IGNhbGMoLjI1cmVtIC0gMXB4KTtcclxufVxyXG5pbWcge1xyXG4gICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICBib3JkZXItc3R5bGU6IG5vbmU7XHJcbn1cclxuLm92ZXJsYXkgLm1hc2sge1xyXG4gICBvcGFjaXR5OiAwO1xyXG4gICB0cmFuc2l0aW9uOiBhbGwgLjRzIGVhc2UtaW4tb3V0O1xyXG59XHJcbi52aWV3IC5tYXNrIHtcclxuICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICB0b3A6IDA7XHJcbiAgIGxlZnQ6IDA7XHJcbiAgIHJpZ2h0OiAwO1xyXG4gICBib3R0b206IDA7XHJcbiAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgIHdpZHRoOiAxMDAlO1xyXG4gICBoZWlnaHQ6IDEwMCU7XHJcbiAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbn1cclxuLndhdmVzLWVmZmVjdCB7XHJcbiAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcbi5yZ2JhLXdoaXRlLXNsaWdodCwgLnJnYmEtd2hpdGUtc2xpZ2h0OmFmdGVyIHtcclxuICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwuMSk7XHJcbn1cclxuLmNhcmQuY2FyZC1jYXNjYWRlLndpZGVyIC5jYXJkLWJvZHkuY2FyZC1ib2R5LWNhc2NhZGUge1xyXG4gICBib3gtc2hhZG93OiAwIDJweCA1cHggMCByZ2JhKDAsMCwwLC4xNiksIDAgMnB4IDEwcHggMCByZ2JhKDAsMCwwLC4xMik7XHJcbiAgIG1hcmdpbi1sZWZ0OiA0JTtcclxuICAgbWFyZ2luLXJpZ2h0OiA0JTtcclxuICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgei1pbmRleDogMTtcclxuICAgYm9yZGVyLXJhZGl1czogMCAwIC4yNXJlbSAuMjVyZW07XHJcbn1cclxuLmNhcmQge1xyXG4gICBib3gtc2hhZG93OiAwIDJweCA1cHggMCByZ2JhKDAsMCwwLC4xNiksIDAgMnB4IDEwcHggMCByZ2JhKDAsMCwwLC4xMik7XHJcbiAgIGJvcmRlcjogMDtcclxuICAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG4uY2FyZC1ib2R5IHtcclxuICAgbGluZS1oZWlnaHQ6IDEuNztcclxuICAgY29sb3I6ICM2MjYyNjI7XHJcbiAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICBmb250LXdlaWdodDogMzAwO1xyXG59XHJcbi5jYXJkLWJvZHkge1xyXG4gICBwYWRkaW5nLXRvcDogMS41cmVtO1xyXG4gICBwYWRkaW5nLWJvdHRvbTogMS41cmVtO1xyXG4gICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDAhaW1wb3J0YW50O1xyXG4gICBib3JkZXItcmFkaXVzOiAwIWltcG9ydGFudDtcclxufVxyXG4udGV4dC1jZW50ZXIge1xyXG4gICB0ZXh0LWFsaWduOiBjZW50ZXIhaW1wb3J0YW50O1xyXG59XHJcbi5jYXJkLWJvZHkge1xyXG4gICAtbXMtZmxleDogMSAxIGF1dG87XHJcbiAgIGZsZXg6IDEgMSBhdXRvO1xyXG4gICBwYWRkaW5nOiAxLjI1cmVtO1xyXG59XHJcbi50ZXh0LW11dGVkIHtcclxuICAgY29sb3I6ICM2Yzc1N2QhaW1wb3J0YW50O1xyXG59XHJcblxyXG5hIHtcclxuICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgIGNvbG9yOiAjMDA3YmZmO1xyXG4gICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2UtaW4tb3V0O1xyXG59XHJcbi5jYXJkLXRleHQge1xyXG4gICBjb2xvcjogIzc0NzM3MztcclxuICAgZm9udC1zaXplOiAuOXJlbTtcclxuICAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG4uY2FzY2FkZS53aWRlciAuY2FyZC1ib2R5LmNhcmQtYm9keS1jYXNjYWRlIC5jYXJkLWZvb3RlciB7XHJcbiAgIG1hcmdpbi1sZWZ0OiAtMS4yNXJlbTtcclxuICAgbWFyZ2luLXJpZ2h0OiAtMS4yNXJlbTtcclxufVxyXG5cclxuLmNhcmQuY2FyZC1lY29tbWVyY2UgLmNhcmQtZm9vdGVyIHtcclxuICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/product/product.component.ts":
/*!**********************************************!*\
  !*** ./src/app/product/product.component.ts ***!
  \**********************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/product.service */ "./src/app/service/product.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductComponent = /** @class */ (function () {
    // private keyword: string;
    // private titleFilter: FormControl= new FormControl();
    function ProductComponent(produceService) {
        this.produceService = produceService;
        // this.titleFilter.valueChanges
        // .pipe(debounceTime(500))
        // .subscribe(
        //   value => this.keyword =  value
        // );
    }
    ProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.products = this.produceService.getProducts();
        this.produceService.searchEvent.subscribe(function (params) { return _this.products = _this.produceService.search(params); });
    };
    ProductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product',
            template: __webpack_require__(/*! raw-loader!./product.component.html */ "./node_modules/raw-loader/index.js!./src/app/product/product.component.html"),
            styles: [__webpack_require__(/*! ./product.component.css */ "./src/app/product/product.component.css")]
        }),
        __metadata("design:paramtypes", [_service_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"]])
    ], ProductComponent);
    return ProductComponent;
}());



/***/ }),

/***/ "./src/app/search/search.component.css":
/*!*********************************************!*\
  !*** ./src/app/search/search.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlYXJjaC9zZWFyY2guY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/search/search.component.ts":
/*!********************************************!*\
  !*** ./src/app/search/search.component.ts ***!
  \********************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _service_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/product.service */ "./src/app/service/product.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchComponent = /** @class */ (function () {
    function SearchComponent(productService, formBuilder) {
        this.productService = productService;
        this.formBuilder = formBuilder;
        this.submitted = false;
        this.formModel = this.formBuilder.group({
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3)],
            // price:[null,this.positiveNumberValidator],
            price: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[0-9]+(.[0-9]{2})?$')],
            category: ['-1']
        });
    }
    SearchComponent.prototype.ngOnInit = function () {
        this.categories = this.productService.getAllCategories();
    };
    Object.defineProperty(SearchComponent.prototype, "f", {
        get: function () {
            return this.formModel.controls;
        },
        enumerable: true,
        configurable: true
    });
    // positiveNumberValidator(control:FormControl):any{
    //   console.log(control.value);
    //   if (!control.value){
    //     return null;
    //   }
    //   let price =parseInt(control.value);
    //   console.log(price);
    //   if(price >0){
    //     return null;
    //   }else{
    //     return {
    //       positiveNumber:true
    //     }
    //   }
    // }
    SearchComponent.prototype.onSearch = function () {
        this.submitted = true;
        // stop here if form is invalid
        if (this.formModel.invalid) {
            console.log(this.formModel.invalid);
            console.log(this.formModel.controls);
            console.log(this.formModel.value);
            return;
        }
        // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.formModel.value))
        console.log(this.formModel.value);
        this.productService.searchEvent.emit(this.formModel.value);
    };
    SearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! raw-loader!./search.component.html */ "./node_modules/raw-loader/index.js!./src/app/search/search.component.html"),
            styles: [__webpack_require__(/*! ./search.component.css */ "./src/app/search/search.component.css")]
        }),
        __metadata("design:paramtypes", [_service_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/service/product.service.ts":
/*!********************************************!*\
  !*** ./src/app/service/product.service.ts ***!
  \********************************************/
/*! exports provided: ProductService, ProductSearchParams, Product, Comment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductSearchParams", function() { return ProductSearchParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Product", function() { return Product; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Comment", function() { return Comment; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductService = /** @class */ (function () {
    function ProductService(http) {
        this.http = http;
        this.searchEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ProductService.prototype.getAllCategories = function () {
        return ["Computers", "Tablets", "Cameras", "Phones"];
    };
    ProductService.prototype.getProducts = function () {
        return this.http.get("/api/products")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getProducts', [])));
    };
    /**TODO: GET product by id. Will 404 if id not found */
    ProductService.prototype.getProduct = function (id) {
        var url = "/api/product" + "/" + id;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("getProduct id=" + id)));
    };
    ProductService.prototype.getCommentForProductID = function (id) {
        return this.http.get("/api/product/" + id + "/comments")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getCommentForProductID', [])));
    };
    ProductService.prototype.search = function (params) {
        var search = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        search = this.encodeParams(params);
        return this.http.get("/api/products", { params: search })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getProducts', [])));
    };
    ProductService.prototype.encodeParams = function (params) {
        return Object.keys(params)
            .filter(function (key) { return params[key]; })
            .reduce(function (sum, key) {
            // pls be careful here, because HttpParams is immutable, when you use append() it returns a new instance of HttpParams
            // if use URLSearchParams here //* sum.append(key,params[key]);*// 
            sum = sum.append(key, params[key]);
            return sum;
        }, new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]());
    };
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    ProductService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result);
        };
    };
    ProductService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ProductService);
    return ProductService;
}());

var ProductSearchParams = /** @class */ (function () {
    function ProductSearchParams(title, price, category) {
        this.title = title;
        this.price = price;
        this.category = category;
    }
    return ProductSearchParams;
}());

var Product = /** @class */ (function () {
    function Product(id, title, price, rating, desc, categories) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.rating = rating;
        this.desc = desc;
        this.categories = categories;
    }
    return Product;
}());

var Comment = /** @class */ (function () {
    function Comment(id, productId, timestamp, user, rating, content) {
        this.id = id;
        this.productId = productId;
        this.timestamp = timestamp;
        this.user = user;
        this.rating = rating;
        this.content = content;
    }
    return Comment;
}());



/***/ }),

/***/ "./src/app/service/web-socket.service.ts":
/*!***********************************************!*\
  !*** ./src/app/service/web-socket.service.ts ***!
  \***********************************************/
/*! exports provided: WebSocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebSocketService", function() { return WebSocketService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WebSocketService = /** @class */ (function () {
    function WebSocketService() {
    }
    WebSocketService.prototype.createObservableSocket = function (url, id) {
        var _this = this;
        this.ws = new WebSocket(url);
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            _this.ws.onmessage = function (event) { return observer.next(event.data); };
            _this.ws.onerror = function (event) { return observer.error(event); };
            _this.ws.onclose = function (event) { return observer.complete(); };
            _this.ws.onopen = function (event) { return _this.sendMessage({ productId: id }); };
            return function () { return _this.ws.close(); };
        });
    };
    WebSocketService.prototype.sendMessage = function (message) {
        this.ws.send(JSON.stringify(message));
    };
    WebSocketService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], WebSocketService);
    return WebSocketService;
}());



/***/ }),

/***/ "./src/app/stars-rating/stars-rating.component.css":
/*!*********************************************************!*\
  !*** ./src/app/stars-rating/stars-rating.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".star {\r\n    position: relative;\r\n    display: inline-block;\r\n    font-size: 1rem;\r\n    color: #d3d3d3;\r\n}\r\n.full {\r\n    color: orange;\r\n}\r\n.half {\r\n    position: absolute;\r\n    display: inline-block;\r\n    overflow: hidden;\r\n    color: orange;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RhcnMtcmF0aW5nL3N0YXJzLXJhdGluZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsY0FBYztBQUNsQjtBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsYUFBYTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL3N0YXJzLXJhdGluZy9zdGFycy1yYXRpbmcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdGFyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIGNvbG9yOiAjZDNkM2QzO1xyXG59XHJcbi5mdWxsIHtcclxuICAgIGNvbG9yOiBvcmFuZ2U7XHJcbn1cclxuLmhhbGYge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGNvbG9yOiBvcmFuZ2U7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/stars-rating/stars-rating.component.ts":
/*!********************************************************!*\
  !*** ./src/app/stars-rating/stars-rating.component.ts ***!
  \********************************************************/
/*! exports provided: StarsRatingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarsRatingComponent", function() { return StarsRatingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NGB_RATING_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return StarsRatingComponent; }),
    multi: true
};
/**
 * A directive that helps visualising and interacting with a star rating bar.
 */
var StarsRatingComponent = /** @class */ (function () {
    function StarsRatingComponent(_changeDetectorRef) {
        this._changeDetectorRef = _changeDetectorRef;
        this.contexts = [];
        this.disabled = false;
        /**
         * An event emitted when the user is hovering over a given rating.
         *
         * Event payload equals to the rating being hovered over.
         */
        this.hover = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * An event emitted when the user stops hovering over a given rating.
         *
         * Event payload equals to the rating of the last item being hovered over.
         */
        this.leave = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * An event emitted when the user selects a new rating.
         *
         * Event payload equals to the newly selected rating.
         */
        this.rateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](true);
        this.onChange = function (_) { };
        this.onTouched = function () { };
        this.max = 5;
        this.readonly = false;
    }
    StarsRatingComponent.prototype.ariaValueText = function () { return this.nextRate + " out of " + this.max; };
    StarsRatingComponent.prototype.getValueInRange = function (value, max, min) {
        if (min === void 0) { min = 0; }
        return Math.max(Math.min(value, max), min);
    };
    StarsRatingComponent.prototype.enter = function (value) {
        if (!this.readonly && !this.disabled) {
            this._updateState(value);
        }
        this.hover.emit(value);
    };
    StarsRatingComponent.prototype.handleBlur = function () { this.onTouched(); };
    StarsRatingComponent.prototype.handleClick = function (value) { this.update(this.resettable && this.rate === value ? 0 : value); };
    StarsRatingComponent.prototype.ngOnChanges = function (changes) {
        if (changes['rate']) {
            this.update(this.rate);
        }
    };
    StarsRatingComponent.prototype.ngOnInit = function () {
        this.contexts = Array.from({ length: this.max }, function (v, k) { return ({ fill: 0, index: k }); });
        this._updateState(this.rate);
    };
    StarsRatingComponent.prototype.registerOnChange = function (fn) { this.onChange = fn; };
    StarsRatingComponent.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    StarsRatingComponent.prototype.reset = function () {
        this.leave.emit(this.nextRate);
        this._updateState(this.rate);
    };
    StarsRatingComponent.prototype.setDisabledState = function (isDisabled) { this.disabled = isDisabled; };
    StarsRatingComponent.prototype.update = function (value, internalChange) {
        if (internalChange === void 0) { internalChange = true; }
        var newRate = this.getValueInRange(value, this.max, 0);
        if (!this.readonly && !this.disabled && this.rate !== newRate) {
            this.rate = newRate;
            this.rateChange.emit(this.rate);
        }
        if (internalChange) {
            this.onChange(this.rate);
            this.onTouched();
        }
        this._updateState(this.rate);
    };
    StarsRatingComponent.prototype.writeValue = function (value) {
        this.update(value, false);
        this._changeDetectorRef.markForCheck();
    };
    StarsRatingComponent.prototype._getFillValue = function (index) {
        var diff = this.nextRate - index;
        if (diff >= 1) {
            return 100;
        }
        if (diff < 1 && diff > 0) {
            return parseInt((diff * 100).toFixed(2), 10);
        }
        return 0;
    };
    StarsRatingComponent.prototype._updateState = function (nextValue) {
        var _this = this;
        this.nextRate = nextValue;
        this.contexts.forEach(function (context, index) { return context.fill = _this._getFillValue(index); });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], StarsRatingComponent.prototype, "max", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], StarsRatingComponent.prototype, "rate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], StarsRatingComponent.prototype, "readonly", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], StarsRatingComponent.prototype, "resettable", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], StarsRatingComponent.prototype, "starTemplate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], { static: false }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], StarsRatingComponent.prototype, "starTemplateFromContent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], StarsRatingComponent.prototype, "hover", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], StarsRatingComponent.prototype, "leave", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], StarsRatingComponent.prototype, "rateChange", void 0);
    StarsRatingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-stars-rating',
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            host: {
                'class': 'd-inline-flex',
                'tabindex': '0',
                'role': 'slider',
                'aria-valuemin': '0',
                '[attr.aria-valuemax]': 'max',
                '[attr.aria-valuenow]': 'nextRate',
                '[attr.aria-valuetext]': 'ariaValueText()',
                '[attr.aria-disabled]': 'readonly ? true : null',
                '(blur)': 'handleBlur()',
                '(mouseleave)': 'reset()'
            },
            template: __webpack_require__(/*! raw-loader!./stars-rating.component.html */ "./node_modules/raw-loader/index.js!./src/app/stars-rating/stars-rating.component.html"),
            providers: [NGB_RATING_VALUE_ACCESSOR],
            styles: [__webpack_require__(/*! ./stars-rating.component.css */ "./src/app/stars-rating/stars-rating.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], StarsRatingComponent);
    return StarsRatingComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\myProjects\onlineauction\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map