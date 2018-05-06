webpackJsonp(["print-jobs.module"],{

/***/ "./src/app/pages/print-jobs/licenses/licenses.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  licenses works!\n</p>\n"

/***/ }),

/***/ "./src/app/pages/print-jobs/licenses/licenses.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/print-jobs/licenses/licenses.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LicensesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LicensesComponent = /** @class */ (function () {
    function LicensesComponent() {
    }
    LicensesComponent.prototype.ngOnInit = function () {
    };
    LicensesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'licenses',
            template: __webpack_require__("./src/app/pages/print-jobs/licenses/licenses.component.html"),
            styles: [__webpack_require__("./src/app/pages/print-jobs/licenses/licenses.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LicensesComponent);
    return LicensesComponent;
}());



/***/ }),

/***/ "./src/app/pages/print-jobs/print-jobs-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrintJobsRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__print_jobs_component__ = __webpack_require__("./src/app/pages/print-jobs/print-jobs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__licenses_licenses_component__ = __webpack_require__("./src/app/pages/print-jobs/licenses/licenses.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [{
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__print_jobs_component__["a" /* PrintJobsComponent */],
        children: [
            {
                path: 'licenses',
                component: __WEBPACK_IMPORTED_MODULE_3__licenses_licenses_component__["a" /* LicensesComponent */],
            },
        ],
    }];
var PrintJobsRoutingModule = /** @class */ (function () {
    function PrintJobsRoutingModule() {
    }
    PrintJobsRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* RouterModule */]],
        })
    ], PrintJobsRoutingModule);
    return PrintJobsRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/print-jobs/print-jobs.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/pages/print-jobs/print-jobs.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/print-jobs/print-jobs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrintJobsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PrintJobsComponent = /** @class */ (function () {
    function PrintJobsComponent() {
    }
    PrintJobsComponent.prototype.ngOnInit = function () {
    };
    PrintJobsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'print-jobs',
            template: __webpack_require__("./src/app/pages/print-jobs/print-jobs.component.html"),
            styles: [__webpack_require__("./src/app/pages/print-jobs/print-jobs.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PrintJobsComponent);
    return PrintJobsComponent;
}());



/***/ }),

/***/ "./src/app/pages/print-jobs/print-jobs.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrintJobsModule", function() { return PrintJobsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__print_jobs_component__ = __webpack_require__("./src/app/pages/print-jobs/print-jobs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__print_jobs_routing_module__ = __webpack_require__("./src/app/pages/print-jobs/print-jobs-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__licenses_licenses_component__ = __webpack_require__("./src/app/pages/print-jobs/licenses/licenses.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var PrintJobsModule = /** @class */ (function () {
    function PrintJobsModule() {
    }
    PrintJobsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__print_jobs_routing_module__["a" /* PrintJobsRoutingModule */],
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__print_jobs_component__["a" /* PrintJobsComponent */], __WEBPACK_IMPORTED_MODULE_4__licenses_licenses_component__["a" /* LicensesComponent */]]
        })
    ], PrintJobsModule);
    return PrintJobsModule;
}());



/***/ })

});
//# sourceMappingURL=print-jobs.module.chunk.js.map