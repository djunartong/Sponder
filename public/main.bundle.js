webpackJsonp([1,4],{

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.name == undefined || user.email == undefined || user.username == undefined || user.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    ValidateService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], ValidateService);
    return ValidateService;
}());
//# sourceMappingURL=C:/Users/User/Desktop/Sponder/angular-src/src/validate.service.js.map

/***/ }),

/***/ 388:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 388;


/***/ }),

/***/ 389:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(476);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(507);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/Users/User/Desktop/Sponder/angular-src/src/main.js.map

/***/ }),

/***/ 506:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(681),
            styles: [__webpack_require__(674)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=C:/Users/User/Desktop/Sponder/angular-src/src/app.component.js.map

/***/ }),

/***/ 507:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(506);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component__ = __webpack_require__(511);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__ = __webpack_require__(510);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_register_register_component__ = __webpack_require__(513);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__ = __webpack_require__(509);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_dashboard_dashboard_component__ = __webpack_require__(508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_profile_profile_component__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_validate_service__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_auth_service__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angular2_flash_messages__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__guards_auth_guard__ = __webpack_require__(514);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
















var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_8__components_register_register_component__["a" /* RegisterComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_10__components_dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_15__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_11__components_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_15__guards_auth_guard__["a" /* AuthGuard */]] }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_profile_profile_component__["a" /* ProfileComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_14_angular2_flash_messages__["FlashMessagesModule"]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_12__services_validate_service__["a" /* ValidateService */], __WEBPACK_IMPORTED_MODULE_13__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_15__guards_auth_guard__["a" /* AuthGuard */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=C:/Users/User/Desktop/Sponder/angular-src/src/app.module.js.map

/***/ }),

/***/ 508:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(682),
            styles: [__webpack_require__(675)]
        }), 
        __metadata('design:paramtypes', [])
    ], DashboardComponent);
    return DashboardComponent;
}());
//# sourceMappingURL=C:/Users/User/Desktop/Sponder/angular-src/src/dashboard.component.js.map

/***/ }),

/***/ 509:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(683),
            styles: [__webpack_require__(676)]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
//# sourceMappingURL=C:/Users/User/Desktop/Sponder/angular-src/src/home.component.js.map

/***/ }),

/***/ 510:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password
        };
        this.authService.authenticateUser(user).subscribe(function (data) {
            if (data.success) {
                _this.authService.storeUserData(data.token, data.user);
                _this.flashMessage.show('You are now logged in', {
                    cssClass: 'alert-success',
                    timeout: 5000 });
                _this.router.navigate(['dashboard']);
            }
            else {
                _this.flashMessage.show(data.msg, {
                    cssClass: 'alert-danger',
                    timeout: 5000 });
                _this.router.navigate(['login']);
            }
        });
    };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(684),
            styles: [__webpack_require__(677)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _c) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/User/Desktop/Sponder/angular-src/src/login.component.js.map

/***/ }),

/***/ 511:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = (function () {
    function NavbarComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.flashMessage.show('You are logged out', {
            cssClass: 'alert-success',
            timeout: 3000
        });
        this.router.navigate(['/login']);
        return false;
    };
    NavbarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(685),
            styles: [__webpack_require__(678)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _c) || Object])
    ], NavbarComponent);
    return NavbarComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/User/Desktop/Sponder/angular-src/src/navbar.component.js.map

/***/ }),

/***/ 512:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(78);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = (function () {
    function ProfileComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    ProfileComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(686),
            styles: [__webpack_require__(679)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], ProfileComponent);
    return ProfileComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/User/Desktop/Sponder/angular-src/src/profile.component.js.map

/***/ }),

/***/ 513:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(78);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = (function () {
    function RegisterComponent(validateService, flashMessage, authService, router) {
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var user = {
            name: this.name,
            email: this.email,
            username: this.username,
            password: this.password
        };
        // Required Fields
        if (!this.validateService.validateRegister(user)) {
            this.flashMessage.show('Please fill in all fields', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        // Valdidate Email
        if (!this.validateService.validateEmail(user.email)) {
            this.flashMessage.show('Please use a valid email', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        // Register User
        this.authService.registerUser(user).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show('You are now registered and can log in', { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/login']);
            }
            else {
                _this.flashMessage.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['/register']);
            }
        });
    };
    RegisterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(687),
            styles: [__webpack_require__(680)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === 'function' && _d) || Object])
    ], RegisterComponent);
    return RegisterComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=C:/Users/User/Desktop/Sponder/angular-src/src/register.component.js.map

/***/ }),

/***/ 514:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(80);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], AuthGuard);
    return AuthGuard;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/User/Desktop/Sponder/angular-src/src/auth.guard.js.map

/***/ }),

/***/ 515:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=C:/Users/User/Desktop/Sponder/angular-src/src/environment.js.map

/***/ }),

/***/ 674:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 675:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 676:
/***/ (function(module, exports) {

module.exports = "html, body {\r\n  margin: 0;\r\n  background-color:#353535;\r\n}\r\n\r\nh1, h2, a {\r\n  font-family: 'Oswald', sans-serif;\r\n  text-transform: uppercase;\r\n}\r\n\r\np, form {\r\n  font-family: 'Oswald', sans-serif; \r\n}\r\n\r\n.container {\r\n  max-width: 940px;\r\n  margin: 0 auto;\r\n}\r\n\r\n/* Main */\r\n.main {\r\n  text-align: center;\r\n  background: url(\"https://s3.amazonaws.com/codecademy-content/projects/move/bg.jpg\") no-repeat center center;\r\n  background-size: cover;\r\n  height: 600px;\r\n}\r\n\r\n.main .container {\r\n  position: relative;\r\n  top: 100px;\r\n}\r\n\r\n.main h1 {\r\n  color: #fff;\r\n  margin: 0;\r\n  font-size: 125px;\r\n}\r\n\r\n.main h2{\r\n  color: #fff;\r\n  margin: 0;\r\n  font-size: 75px;\r\n}\t\r\n\r\n.main p {\r\n  color: #fff;\r\n  margin: 0 0 20px 0;\r\n  font-size: 30px;\r\n}\r\n\r\n.main form {\r\n  text-align: Left;\r\n  color: #fff;\r\n  margin: 0 0 20px 0;\r\n  font-size: 18px;\r\n}\t\r\n\r\n.main .btn {\r\n  background-color: #353535;\r\n  color: #fff;\r\n  font-size: 18px;\r\n  padding: 8px 30px;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n}\r\n\r\n/* Supporting */\r\n.supporting {\r\n  background-color: #353535;\r\n  padding: 10px 0 30px 50px;\r\n  text-align: center;\r\n}\r\n\r\n.supporting .col {\r\n  float: left;\r\n  padding: 20px 20px;\r\n  width: 28%;\r\n}\r\n\r\n.supporting h2 {\r\n  color: #ffa800;\r\n  font-size: 30px;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.clearfix {\r\n  clear: both;\r\n}\r\n\r\n.supporting p {\r\n  color: #efefef;\r\n  font-size: 20px;\r\n  line-height: 20px;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.supporting .btn {\r\n  background-color: #eee;\r\n  color: #353535;\r\n  font-size: 18px;\r\n  padding: 8px 30px;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n}\r\n\r\n/* Feature */\r\n.feature {\r\n  background: url(\"https://s3.amazonaws.com/codecademy-content/projects/move/feature.jpg\") no-repeat center center;\r\n  background-size: cover;\r\n  height: 600px;\r\n  text-align: center;\r\n}\r\n\r\n.feature .container {\r\n  position: relative;\r\n  top: 200px;\r\n}\r\n\r\n.feature h2 {\r\n  color: #fff;\r\n  font-size: 40px;\r\n  margin:0;\r\n  padding:50px 0 0;\r\n}\r\n\r\n.feature p {\r\n  color: #fff;\r\n  margin: 20px 100px 20px 100px;\r\n  font-size: 18px;\r\n}\r\n\r\n/* Footer */\r\n.footer {\r\n  background: url(\"https://s3.amazonaws.com/codecademy-content/projects/move/footer.jpg\") no-repeat center center;\r\n  background-size: cover;\r\n  height: 600px;\r\n  text-align: center;\r\n}\r\n\r\n.footer .container {\r\n  position: relative;\r\n  top: 200px;\r\n}\r\n\r\n.footer h2 {\r\n  color: #fff;\r\n  font-size: 40px;\r\n  margin: 0 0 20px 0;\r\n  padding:50px 0 0;\r\n}\r\n\r\n.footer p {\r\n  color: #fff;\r\n  font-size: 18px;\r\n  margin: 0 0 20px 0;\r\n}\r\n\r\n.footer .btn {\r\n  background-color: #353535;\r\n  color: #fff;\r\n  font-size: 18px;\r\n  padding: 8px 30px;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n}\r\n\r\na.btn:hover {\r\n  background:#ffa800;\r\n  color:#000;\r\n}\r\n\r\n/* Login */\r\n.login {\r\n  text-align: center;\r\n  //background: url(\"https://s3.amazonaws.com/codecademy-content/projects/move/bg.jpg\") no-repeat center center;\r\n  background-size: cover;\r\n  height: 600px;\r\n}\r\n\r\n.login .container {\r\n  position: relative;\r\n  top: 100px;\r\n}\r\n\r\n.login img{\r\n  //border: 1px solid #fff;\r\n  //size:\r\n\t\r\n}\r\n\r\n.login h2{\r\n  //border: 1px solid #fff;\r\n  color: #fff;\r\n  margin: 0;\r\n  font-size: 50px;\r\n  margin-bottom: 30px;\r\n  \r\n}\t\r\n\r\n.login h3{\r\n  font-family: 'Oswald', sans-serif;\r\n  color: #fff;\r\n  margin: 0;\r\n  font-size: 30px;\r\n  margin-bottom: 40px;\r\n}\r\n\r\n.main p {\r\n  color: #fff;\r\n  margin: 0 0 20px 0;\r\n  font-size: 30px;\r\n}\r\n\r\n.login form {\r\n  text-align: Left;\r\n  color: #fff;\r\n  margin: 0 0 20px 0;\r\n  font-size: 18px;\r\n}\t\r\n\r\n.login .btn {\r\n  background-color: #353535;\r\n  color: #fff;\r\n  font-size: 18px;\r\n  padding: 8px 30px;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n}\r\n\r\ninput[type=email], input[type=password], input[type=text], input[type=date]{\r\n    width: 100%;\r\n    padding: 12px 20px;\r\n    margin: 8px 0;\r\n    display: inline-block;\r\n    border: 1px solid #ccc;\r\n    border-radius: 4px;\r\n    box-sizing: border-box;\r\n}\r\n\r\ninput[type=submit] {\r\n    width: 25%;\r\n    background-color: #fff;\r\n\tfont-family:'Oswald', sans-serif;\r\n\tfont-size:20px;\r\n    color: black;\r\n    padding: 5px 5px;\r\n\tmargin: 10px 350px;\r\n    border: none;\r\n    border-radius: 4px;\r\n    cursor: pointer;\r\n}\r\n\r\ninput[type=submit]:hover {\r\n    background-color: #ffa800;\r\n}\r\n\r\nh3 {\r\n   width: 100%; \r\n   text-align: center; \r\n   border-bottom: 3px solid #fff; \r\n   line-height: 0.1em;\r\n   margin: 10px 0 20px; \r\n} \r\n\r\nh3 span { \r\n    background:#353535; \r\n    padding:0 10px; \r\n}\r\n\r\n/*Documentation*/\r\n.end {\r\n  background-color: #353535;\r\n  color: #fff;\r\n  padding: 20px 0;\r\n}\r\n\r\n.end p {\r\n  font-family: 'Oswald', sans-serif;\r\n  text-transform: uppercase;\r\n  font-size: 11px;\r\n  text-align: right;\r\n}"

/***/ }),

/***/ 677:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 678:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 679:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 680:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 681:
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container\">\n\t<flash-messages></flash-messages>\n\t<router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ 682:
/***/ (function(module, exports) {

module.exports = "<!-- Extract from tryw3css_templates_social.html, with modifications -->\n\n<!DOCTYPE html>\n<html>\n<title>Sponder - Home</title>\n<meta charset=\"UTF-8\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n<link rel=\"stylesheet\" href=\"css/style.css\">\n<link rel=\"stylesheet\" href=\"css/theme.css\">\n<link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/css?family=Oswald:400,700\">\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n<style>\nhtml,body,h1,h2,h3,h4,h5 {font-family: 'Oswald', sans-serif}\n</style>\n<body class=\"w3-theme-l5\">\n\n<!-- Navbar -->\n<div class=\"w3-top\">\n <div class=\"w3-bar w3-theme-d2 w3-left-align w3-large\">\n    <a class=\"w3-bar-item w3-button w3-hide-medium w3-hide-large w3-right w3-padding-large w3-hover-white w3-large w3-theme-d2\" href=\"javascript:void(0);\" onclick=\"openNav()\"><i class=\"fa fa-bars\"></i></a>\n    <a href=\"#\" class=\"w3-bar-item w3-button w3-padding-large w3-theme-d4\" title=\"Home\"><img src=\"Logo.png\" alt=\"Logo\" id=\"logo\"/></a>\n    <a href=\"#\" class=\"w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white\" title=\"Account Settings\"><i class=\"fa fa-user\"></i></a>\n    <a href=\"#\" class=\"w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white\" title=\"Messages\"><i class=\"fa fa-envelope\"></i></a>\n    <div class=\"w3-dropdown-hover w3-hide-small\">\n      <button class=\"w3-button w3-padding-large\" title=\"Notifications\"><i class=\"fa fa-bell\"></i><span class=\"w3-badge w3-right w3-small w3-amber\">3</span></button>     \n      <div class=\"w3-dropdown-content w3-card-4 w3-bar-block\" style=\"width:300px\">\n        <a href=\"#\" class=\"w3-bar-item w3-button\">One new friend request</a>\n        <a href=\"#\" class=\"w3-bar-item w3-button\">John Doe posted on your wall</a>\n        <a href=\"#\" class=\"w3-bar-item w3-button\">Jane likes your post</a>\n      </div>\n    </div>\n  <a href=\"userprofile.html\" class=\"w3-bar-item w3-button w3-hide-small w3-right w3-padding-large w3-hover-white\" title=\"My Account\"><img src=\"avatar2.png\" class=\"w3-circle\" style=\"height:25px;width:25px\" alt=\"Avatar\"></a>\n </div>\n</div>\n\n<!-- Page Container -->\n<div class=\"w3-container w3-content\" style=\"max-width:1400px;margin-top:80px\">    \n  <!-- The Grid -->\n  <div class=\"w3-row\">\n    <!-- Left Column -->\n    <div class=\"w3-col m3\">\n      <!-- Profile -->\n      \n      \n      <!-- Accordion -->\n      <div class=\"w3-card-2 w3-round\">\n        <div class=\"w3-white\">\n          <button onclick=\"myFunction()\" class=\"w3-button w3-block w3-theme-l1 w3-left-align\"><i class=\"fa fa-users fa-fw w3-margin-right\"></i> My Friends</button> \n          <div id=\"Demo1\" class=\"w3-hide w3-container\">\n            <p>Some text..</p>\n          </div>\n          <button onclick=\"myFunction()\" class=\"w3-button w3-block w3-theme-l1 w3-left-align\"><i class=\"fa fa-circle-o-notch fa-fw w3-margin-right\"></i> My Groups</button>          \n          <div id=\"Demo2\" class=\"w3-hide w3-container\">\n            <p>Some other text..</p>\n          </div>\n          <button onclick=\"myFunction()\" class=\"w3-button w3-block w3-theme-l1 w3-left-align\"><i class=\"fa fa-calendar-check-o fa-fw w3-margin-right\"></i> My Events</button>\n          <div id=\"Demo3\" class=\"w3-hide w3-container\">\n         <div class=\"w3-row-padding\">\n         <br>\n         </div>\n          </div>\n        </div>      \n      </div>\n      <br>\n      \n      <!-- Interests --> \n      <!-- <div class=\"w3-card-2 w3-round w3-white w3-hide-small\">\n        <div class=\"w3-container\">\n          <p>Interests</p>\n          <p>\n            <span class=\"w3-tag w3-small w3-theme-d5\">Soccer</span>\n            <span class=\"w3-tag w3-small w3-theme-d4\">Rugby</span>\n            <span class=\"w3-tag w3-small w3-theme-d3\">Basketball</span>\n            <span class=\"w3-tag w3-small w3-theme-d2\">Frisbee</span>\n            <span class=\"w3-tag w3-small w3-theme-d1\">Dodgeball</span>\n            <span class=\"w3-tag w3-small w3-theme\">Badminton</span>\n            <span class=\"w3-tag w3-small w3-theme-l1\">Tennis</span>\n            <span class=\"w3-tag w3-small w3-theme-l2\">Baseball</span>\n            <span class=\"w3-tag w3-small w3-theme-l3\">Tchoukball</span>\n            <span class=\"w3-tag w3-small w3-theme-l4\">Table Tennis</span>\n            <span class=\"w3-tag w3-small w3-theme-l5\"></span>\n          </p>\n        </div>\n      </div>\n      <br> -->\n      \n      <!-- Alert Box -->\n      <!-- <div class=\"w3-container w3-display-container w3-round w3-theme-l4 w3-border w3-theme-border w3-margin-bottom w3-hide-small\">\n        <span onclick=\"this.parentElement.style.display='none'\" class=\"w3-button w3-theme-l3 w3-display-topright\">\n          <i class=\"fa fa-remove\"></i>\n        </span>\n        <p><strong>Hey!</strong></p>\n        <p>People are looking at your profile. Find out who.</p>\n      </div> -->\n    \n    <!-- End Left Column -->\n    </div>\n    \n    <!-- Middle Column -->\n    <div class=\"w3-col m7\">\n    \n      <div class=\"w3-row-padding\">\n        <div class=\"w3-col m12\">\n          <div class=\"w3-card-2 w3-round w3-white\">\n            <div class=\"w3-container w3-padding\">\n              <input type=\"text\" class=\"w3-input\" placeholder=\"Write something here...\" /><br>\n              <button type=\"button\" class=\"w3-button w3-theme\"><i class=\"fa fa-pencil\"></i>  Post</button> \n              <button type=\"button\" class=\"w3-button w3-theme\">Start a Game</button>\n            </div>\n          </div>\n        </div>\n      </div>\n      \n      <div class=\"w3-container w3-card-2 w3-white w3-round w3-margin\"><br>\n        <img src=\"avatar2.png\" alt=\"Avatar\" class=\"w3-left w3-circle w3-margin-right\" style=\"width:60px\">\n        <span class=\"w3-right w3-opacity\">1 min</span>\n        <h4>John Doe</h4><br>\n        <hr class=\"w3-clear\">\n        <p>John is starting a Basketball game at Stephen Riady Centre in 30 minutes!</p>\n        <button type=\"button\" class=\"w3-button w3-theme-d5 w3-margin-bottom\">Join</button>\n          <div class=\"w3-row-padding\" style=\"margin:0 -16px\">\n          </div>\n        <button type=\"button\" class=\"w3-button w3-theme-d1 w3-margin-bottom\"><i class=\"fa fa-thumbs-up\"></i>  Like</button> \n        <button type=\"button\" class=\"w3-button w3-theme-d2 w3-margin-bottom\"><i class=\"fa fa-comment\"></i>  Comment</button> \n      </div>\n      \n      <div class=\"w3-container w3-card-2 w3-white w3-round w3-margin\"><br>\n        <img src=\"avatar5.png\" alt=\"Avatar\" class=\"w3-left w3-circle w3-margin-right\" style=\"width:60px\">\n        <span class=\"w3-right w3-opacity\">16 min</span>\n        <h4>Jane Doe</h4><br>\n        <hr class=\"w3-clear\">\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>\n        <button type=\"button\" class=\"w3-button w3-theme-d1 w3-margin-bottom\"><i class=\"fa fa-thumbs-up\"></i>  Like</button> \n        <button type=\"button\" class=\"w3-button w3-theme-d2 w3-margin-bottom\"><i class=\"fa fa-comment\"></i>  Comment</button> \n      </div>  \n\n      <div class=\"w3-container w3-card-2 w3-white w3-round w3-margin\"><br>\n        <img src=\"avatar6.png\" alt=\"Avatar\" class=\"w3-left w3-circle w3-margin-right\" style=\"width:60px\">\n        <span class=\"w3-right w3-opacity\">32 min</span>\n        <h4>Angie Jane</h4><br>\n        <hr class=\"w3-clear\">\n        <p></p>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>\n        <button type=\"button\" class=\"w3-button w3-theme-d1 w3-margin-bottom\"><i class=\"fa fa-thumbs-up\"></i>  Like</button> \n        <button type=\"button\" class=\"w3-button w3-theme-d2 w3-margin-bottom\"><i class=\"fa fa-comment\"></i>  Comment</button> \n      </div> \n      \n    <!-- End Middle Column -->\n    </div>\n    \n    <!-- Right Column -->\n    <div class=\"w3-col m2\">\n      <div class=\"w3-card-2 w3-round w3-white w3-center\">\n        <div class=\"w3-container\">\n          <p>Upcoming Events:</p>\n          <p><strong>Basketball @MPSH1</strong></p>\n          <p>Friday 19:00</p>\n          <p><button class=\"w3-button w3-block w3-theme-l4\">Info</button></p>\n        </div>\n      </div>\n      <br>\n      \n      <div class=\"w3-card-2 w3-round w3-white w3-center\">\n        <div class=\"w3-container\">\n          <p>Friend Request</p>\n          <img src=\"avatar6.png\" alt=\"Avatar\" style=\"width:50%\"><br>\n          <span>Jane Doe</span>\n          <div class=\"w3-row w3-opacity\">\n            <div class=\"w3-half\">\n              <button class=\"w3-button w3-block w3-green w3-section\" title=\"Accept\"><i class=\"fa fa-check\"></i></button>\n            </div>\n            <div class=\"w3-half\">\n              <button class=\"w3-button w3-block w3-red w3-section\" title=\"Decline\"><i class=\"fa fa-remove\"></i></button>\n            </div>\n          </div>\n        </div>\n      </div>\n      <br>\n      \n      <div class=\"w3-card-2 w3-round w3-white w3-center\">\n        <div class=\"w3-container\">\n          <p>Group Invitation</p>\n          <img src=\"avatar6.png\" alt=\"Avatar\" style=\"width:50%\"><br>\n          <span>Friday Night Soccer</span>\n          <div class=\"w3-row w3-opacity\">\n            <div class=\"w3-half\">\n              <button class=\"w3-button w3-block w3-green w3-section\" title=\"Accept\"><i class=\"fa fa-check\"></i></button>\n            </div>\n            <div class=\"w3-half\">\n              <button class=\"w3-button w3-block w3-red w3-section\" title=\"Decline\"><i class=\"fa fa-remove\"></i></button>\n            </div>\n          </div>\n        </div>\n      </div>\n      <br>\n      \n      \n      \n    <!-- End Right Column -->\n    </div>\n    \n  <!-- End Grid -->\n  </div>\n  \n<!-- End Page Container -->\n</div>\n<br>\n\n<!-- Footer -->\n<footer class=\"w3-container w3-theme-d5\">\n  <p style=\"text-align: right\">&copy; SPONDER 2017</p>\n</footer>\n \n<script>\n// Accordion\n\n//function myFunction(id) {\n//    var x = document.getElementById(id);\n//    if (x.className.indexOf(\"w3-show\") == -1) {\n//        x.className += \" w3-show\";\n//        x.previousElementSibling.className += \" w3-theme-d1\";\n//    } else { \n//        x.className = x.className.replace(\"w3-show\", \"\");\n//        x.previousElementSibling.className = \n//       x.previousElementSibling.className.replace(\" w3-theme-d1\", \"\");\n//   }\n//}\n\n// Used to toggle the menu on smaller screens when clicking on the menu button\n//function openNav() {\n//    var x = document.getElementById(\"navDemo\");\n//    if (x.className.indexOf(\"w3-show\") == -1) {\n//        x.className += \" w3-show\";\n//    } else { \n//        x.className = x.className.replace(\" w3-show\", \"\");\n//    }\n//}\n</script>\n\n</body>\n</html> "

/***/ }),

/***/ 683:
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html>\n  <head>\n\t<title>Sponder - Homepage</title>\n\t<link rel=\"icon\" href=\"http://i1378.photobucket.com/albums/ah89/JonColim/Logo%201_zpslcxnmq3e.png\">\n    <link href=\"https://fonts.googleapis.com/css?family=Oswald:400,700\" rel=\"stylesheet\">\n    <link href=\"style.css\" type=\"text/css\" rel=\"stylesheet\">\n  </head>\n  <body>\n\n    <div class=\"main\">\n      <div class=\"container\">\n\t\t<img src=\"http://i1378.photobucket.com/albums/ah89/JonColim/Logo%20Transparent%20Homepage_zpsp56owhda.png\" alt=\"Logo\" class=\"logo\"/>\n        <!--<h1>Sponder</h1>-->\n        <p>Play your sports with ease</p>\n        <a class=\"btn\" [routerLink]=\"['/register']\">Register</a>\n\t\t<a class=\"btn\" [routerLink]=\"['/login']\">Log In</a>\n      </div>\n    </div>\n\n    <div class=\"supporting\">\n      <div class=\"container\">\n        <div class=\"col\">\n          <h2>Connect</h2>\n          <p>Become more active by expanding your social circle.</p>\n        </div>\n        <div class=\"col\">\n          <h2>Arrange</h2>\n          <p>Create game without the hassle of finding friends.</p>\n        </div>\n        <div class=\"col\">\n          <h2>Play</h2>\n          <p>Enjoy your game with new players and make new friendship.</p>\n        </div>\n        <div class=\"clearfix\"></div>\n      </div>\n    </div>\n\n    <div class=\"feature\">\n      <div class=\"container\">\n        <h2>Create. Join. Play. Repeat.</h2>\n\t\t<p>Sponder is a one-stop solution where you can gather people with similar skill levels and interest,  as well as do a facility booking without the need for constant checking. With Sponder, playing any sport in campus will be made more convenient for everyone.</p>\n      </div>\n    </div>\n\n    <div class=\"supporting\">\n      <div class=\"container\">\n\t\t<div class=\"add\">\n\t\t\t<h2>Promote for more players</h2>\n\t\t\t<p>Send recommendations to your friends to level up your sporting experience.</p>\n\t\t\t<a class=\"btn\" href=\"#\">Learn More</a>\n\t\t</div>\n      </div>\n    </div>\n\n    <div class=\"footer\">\n      <div class=\"container\">\n        <h2>Stop scrolling. Sign up now!</h2>\n        <a class=\"btn\" [routerLink]=\"['/register']\">Register</a>\n      </div>\n    </div>\n\t\n\t<div class=\"end\">\n\t\t<div class=\"container\">\n\t\t\t<p>&copy; Sponder 2017</p>\n\t\t</div>\n\t</div>\n    \n  </body>\n</html>"

/***/ }),

/***/ 684:
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Login</h2>\n<form (submit)=\"onLoginSubmit()\">\n\t<div class=\"form-group\">\n\t\t<label>Username</label>\n\t\t<input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control\">\n\t</div>\n\t<div class=\"form-group\">\n\t\t<label>Password</label>\n\t\t<input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\">\n\t</div>\n\t<input type=\"submit\" class=\"btn btn-primary\" value=\"Login\">\n</form>\n"

/***/ }),

/***/ 685:
/***/ (function(module, exports) {

module.exports = "    <nav class=\"navbar navbar-default\">\n      <div class=\"container\">\n        <div class=\"navbar-header\">\n          <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n            <span class=\"sr-only\">Toggle navigation</span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n          </button>\n          <!--<a class=\"navbar-left\" href=\"#\"></a>-->\n          <a class=\"navbar-brand\" href=\"#\"><img src=\"http://i1378.photobucket.com/albums/ah89/JonColim/Logo%201_zpslcxnmq3e.png\" alt=\"Logo\" style=\"float: left;\">Sponder</a>\n        </div>\n        <div id=\"navbar\" class=\"collapse navbar-collapse\">\n          <ul class=\"nav navbar-nav navbar-left\">\n            <li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['/']\">Home</a></li>\n          </ul>\n\n          <ul class=\"nav navbar-nav navbar-right\">\n            <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['/dashboard']\">Dashboard</a></li>\n            <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['/profile']\">Profile</a></li>\n\n            <li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['/login']\">Login</a></li>\n            <li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['/register']\">Register</a></li>            \n            <li *ngIf=\"authService.loggedIn()\"><a (click)=\"onLogoutClick()\" href=\"#\">Logout</a></li>            \n          </ul>\n\n        </div><!--/.nav-collapse -->\n      </div>\n    </nav>\n\n\n\n    "

/***/ }),

/***/ 686:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\">\n\t<h2 class=\"page-header\">{{user.name}}</h2>\n\t<ul class=\"list-group\">\n\t\t<li class=\"list-group-item\">Username: {{user.username}}</li>\n\t\t<li class=\"list-group-item\">Email: {{user.email}}</li>\n\t</ul>\n</div>"

/***/ }),

/***/ 687:
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Register</h2>\n<form (submit)=\"onRegisterSubmit()\">\n\t<div class=\"form-group\">\n\t\t<label>Name</label>\n\t\t<input type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"form-control\">\n\t</div>\n\t<div class=\"form-group\">\n\t\t<label>Username</label>\n\t\t<input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control\">\n\t</div>\n\t<div class=\"form-group\">\n\t\t<label>Email</label>\n\t\t<input type=\"text\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\">\n\t</div>\n\t<div class=\"form-group\">\n\t\t<label>Password</label>\n\t\t<input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\">\n\t</div>\n\t<input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\n</form>"

/***/ }),

/***/ 711:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(389);


/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(693);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__(520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        //return this.http.post('http://localhost:3000/users/register', user, {headers: headers})
        //.map(res => res.json());
        return this.http.post('users/register', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        //return this.http.post('http://localhost:3000/users/authenticate', user, {headers: headers})
        //.map(res => res.json());
        return this.http.post('users/authenticate', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getProfile = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        //return this.http.get('http://localhost:3000/users/profile', {headers: headers})
        //.map(res => res.json());
        return this.http.get('users/profile', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    AuthService.prototype.loggedIn = function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])('id_token');
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object])
    ], AuthService);
    return AuthService;
    var _a;
}());
//# sourceMappingURL=C:/Users/User/Desktop/Sponder/angular-src/src/auth.service.js.map

/***/ })

},[711]);
//# sourceMappingURL=main.bundle.map