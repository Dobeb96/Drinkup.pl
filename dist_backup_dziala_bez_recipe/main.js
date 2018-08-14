(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

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

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='heading1'><p>Aplikacja do drinków</p></div>\n\n  <div class=\"row\"> \n      \n    <div class=\"columnla\"> <!-- kolumna lewa  -->\n\n          <div class='heading2'><p>Autorzy</p></div>\n\n            <div class='author'> <!-- jedna osoba  -->\n\n              <div class='space'><img class=\"cats\" id=\"cat3\"></div> \n              <div class='space'><br></div>              \n              <div class='space'>Ewa Bąk<br><a class=\"linkedin\" href=\"https://www.linkedin.com/in/ewa-b%C4%85k-950132144/\">LinkedIn</a></div> \n\n            </div>\n      \n            <div class='author'>\n\n              <div class='space'><img class=\"cats\" id=\"cat2\"></div>\n              <div class='space'><br></div>                    \n              <div class='space'>Kamila Chwastowska<br><a class=\"linkedin\" href=\"https://www.linkedin.com/in/kamila-chwastowska-6610b6118/\">LinkedIn</a></div>      \n\n            </div>\n      \n            <div class='author'>\n\n                <div class='space'><img class=\"cats\" id=\"cat4\"></div>\n                <div class='space'><br></div>                    \n                <div class='space'>Maciej Dobosz<br><a class=\"linkedin\" href=\"https://www.linkedin.com/in/maciej-dobosz-072851135/\">LinkedIn</a> </div>         \n              \n            </div>\n      \n            <div class='author'>\n\n                  <div class='space'><img class=\"cats\" id=\"cat1\"></div>\n                  <div class='space'><br></div>                   \n                  <div class='space'>Dominika Smolarek<br><a class=\"linkedin\" href=\"https://www.linkedin.com/in/dominika-smolarek-a25aa8145/\">LinkedIn</a>\t </div>    \n\n            </div>\n    </div>\n\n    <div class=\"columnspace\"></div> <!-- kolumna będąca przerwą pomiędzy dwoma kolumnami  -->\n\n    <div class=\"column2a\"> <!-- kolumna prawa  -->\n      \n      <div class='author'> \n              <div class='heading2'><p>Drink Up!<br>Przepisy na drinki<br></p></div>\n      </div>\n              <div class='space'>Drinkup.pl to wyjątkowa aplikacja do drinków, na której znajdziesz przepisy na drinki, szoty, czy też napoje bezalkoholowe.\n\t\t\t\t\t\t\t\tWystarczy tylko wybrać składnik lub rodzaj cocktailu, a następnie cieszyć się z pysznego napoju. \n\t\t\t\t\t\t\t\tDrink Up zawiera setki przepisów, daje możliwość wybrania ulubionego trunka oraz dodania o nim opinii. Spróbuj sam już dziś!\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\tDrink Up powstało na potrzeby projektu zaliczeniowego z przedmiotu Programowanie Aplikacji Webowych SPA</div><br>         \n\n      <div class='author'>\n              <div class='heading2'><p>Technologie</p></div>\n      </div>\n      <div class='space'>\n\t\t\t\t<ul>\n\t\t\t\t\t<li>Angular 5</li>\n\t\t\t\t\t<li>AJAX</li>\n\t\t\t\t\t<li><a href=\"https://www.thecocktaildb.com/api.php\">API TheCocktailDB</a></li>\n\t\t\t\t</ul>\n\t\t\t</div>    \n\n    </div>\n    \n  </div> \n  \n"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ../app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./homepage/homepage.component */ "./src/app/homepage/homepage.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _favourites_favourites_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./favourites/favourites.component */ "./src/app/favourites/favourites.component.ts");
/* harmony import */ var _recipe_recipe_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./recipe/recipe.component */ "./src/app/recipe/recipe.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: '', redirectTo: 'homepage', pathMatch: 'full' },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: 'homepage', component: _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_4__["HomepageComponent"] },
    { path: 'profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_3__["ProfileComponent"] },
    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_5__["AboutComponent"] },
    { path: 'profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_3__["ProfileComponent"] },
    { path: 'favourites', component: _favourites_favourites_component__WEBPACK_IMPORTED_MODULE_6__["FavouritesComponent"] },
    { path: 'recipe/:id', component: _recipe_recipe_component__WEBPACK_IMPORTED_MODULE_7__["RecipeComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* NAV_BAR */\nnav * {\n    margin-top: 0;\n    padding-top: .3em;\n    margin-bottom: .3em;\n    padding-bottom: .3em;\n}\nnav {\n    padding: 0 1%;\n    line-height: 1em;\n    color: white;\n    font-weight: bold;\n    display: flex;\n    align-items: flex-end;\n    justify-content: space-between;\n}\nnav h1.logo {\n    font-size: 2.5em;\n    padding-right: .5em;\n    border-right: 1px solid #074265;\n    \n}\nnav div {\n    align-self: center;\n    display: inline-flex;\n}\nnav div p {\n    cursor: pointer;\n    padding: 0 1em;\n}\nnav .to_left {\n    font-size: 1.3em;\n    flex-grow: 1;\n    padding-left: 1.5em;\n}\nnav .to_right {\n    font-size: 1.0em;\n}\nnav .to_right p {\n    padding-top: .3em;\n    padding-bottom: .5em;\n}\nnav .to_right p:first-child {\n    border-left: 1px solid black;\n}\n@media only screen and (max-width: 1364px) {\n    nav {\n        align-items: center;\n        flex-direction: column;\n    } nav h1.logo {\n        margin-top: 1.5%;\n        border: 0;\n        padding-right: 0;\n    } nav .to_right p:first-child {\n        border: 0;\n    } nav .to_left {\n        padding-left: 0;\n    }\n}\n/* END OF NAV_BAR*/\n/* CONTAINER */\n#container {\n    background-color: #074265;\n    border-radius: 5px;\n    height: 88vh;\n    box-shadow: 10px 10px 12px -15px rgba(0,0,0,0.75);\n}\n#containerBox {\n        background-color: #074265;\n        border-radius: 5px;\n}\n@media only screen and (max-width:1364px) {\n    #container {\n        height: 70vh;\n        border-radius: 0;\n    } #container #logo {\n        display: none;\n    }\n}\n#container #content_wrapper {\n    margin-top: 2%;\n    margin-left: 15%;\n    width: 70%;\n    min-width: 320px;\n    float: left;\n    word-wrap: break-word;\n}\n#containerBox .gradient_wrapper {\n    width: 100%;\n    background: linear-gradient(to bottom right, #ffcc00, #fb2d84);\n    box-shadow: 10px 10px 48px -15px rgba(0,0,0,0.75);\n    border-radius: 8px;\n    display: inline-block;\n    padding: 4px;\n    text-decoration: none;\n}\n#containerBox #content {\n    background: #074265;\n    padding: 1em 3em;\n    border-radius: 6px;\n}\n@media only screen and (max-width:1364px) {\n    #container #content_wrapper {\n        margin-left: .1%;\n        width: 99%;\n    } #container #ad {\n        display: none;\n    }\n}\n/* END OF CONTAINER */\n/* POSITION */\n.author {\n    display: flex;\n    justify-content: flex-start;\n    word-wrap: break-word;\n    word-break: break-all;\n  }\n.space {\n    margin-left: 10px;\n  }\n.row {\n    display: flex;\n}\n.column1 {\n    flex: 50%;\n}\n.columnspace {\n    flex: 10%;\n}\n.column2 {\n    flex: 40%;\n}\n.column {\n    display: flex;\n\n}\n.center {\n    text-align: center;\n}\ntextarea {\n    border: none;\n}\nselect {\n    padding-left: 1em;\n    border: none;\n}\noption {\n    font-size: 20px;\n}\nselect::-webkit-scrollbar {\n    display: none;\n}\n/* END OF POSITION */\n/* ADDITIONAL */\n#photo {\n    width: 100%;\n    height: auto;\n    transition: all .2s;\n    position: relative;\n    -o-object-fit: cover;\n       object-fit: cover;\n}\n#photo:hover {\n    z-index: 10;\n    height: 100%;\n    width: 200%;\n}\n/* END OF ADDITIONAL */\n/* HIDDEN AVATARS */\ndiv.column2a{\n\tflex: 40%;\n\ttext-align: justify;\n}\n.linkedin{\n\ttext-decoration: underline;\n\tfont-size: 13px;\n}\n.cats{\n    display: inline-block;\n\twidth: 90px;\n\theight: 90px;\n\ttransition: background .2s;\n}\n.cats#cat4{\n\tbackground: url(\"/assets/maciej.jpg\");\n}\n.cats#cat4:hover{\n\tbackground: url(\"/assets/cat4.jpg\");\n}\n.cats#cat3{\n\tbackground: url(\"/assets/ewa.jpg\");\n}\n.cats#cat3:hover{\n\tbackground: url(\"/assets/cat3.jpg\");\n}\n.cats#cat2{\n\tbackground: url(\"/assets/kamila.jpg\");\n}\n.cats#cat2:hover{\n\tbackground: url(\"/assets/cat2.jpg\");\n}\n.cats#cat1{\n\tbackground: url(\"/assets/dominika.jpg\");\n}\n.cats#cat1:hover{\n\tbackground: url(\"/assets/cat1.jpg\");\n}\n.column1 .space {\n    white-space: nowrap;\n    word-wrap: normal;\n}\n.space a {\n    text-decoration: underline;\n    font-size: 0.75em;\n}\nul {\n    margin-top: 0;\n    padding-top: 0;\n}\n.space {\n    padding-right: 2px;\n}\n.author .space {\n    overflow: hidden; \n    text-overflow: ellipsis;\n    white-space: nowrap;\n}\n/* END OF ABOUT AND HIDDEN AVATARS */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav>\n  <img src=\"assets/logotyp.png\" height=\"45\" routerLink=\"/homepage\" style=\"cursor: pointer;\"/>\n\n  <div class='to_left'>\n    <p routerLink=\"homepage\">drinki</p>\n    <p routerLink=\"profile\">profil</p>\n    <p routerLink=\"favourites\">top drinki</p>\n  </div>\n  \n  <div class='to_right'>\n    <p id=\"sign-in\" routerLink=\"login\"></p>\n    <p routerLink=\"about\">o DrinkUp!</p>\n  </div>\n</nav>\n\n<div id='container'>\n    <div id='logo'></div>\n\n    <div id='content_wrapper'>\n        <div id='containerBox'>\n            <div id='content_wrapper'>\n              <div class='gradient_wrapper'>\n                <section id='content'>\n                  <router-outlet></router-outlet>\n                </section>\n              </div>\n            </div>\n        </div>\n    </div>\n</div>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(authService) {
        this.authService = authService;
        this.title = 'Drinkup.pl';
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        document.getElementById('sign-in').addEventListener('click', function () {
            var signIn = document.getElementById('sign-in');
            if (signIn.innerHTML == 'wyloguj się' || signIn.innerHTML == 'logout') {
                _this.authService.logout();
            }
        });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./homepage/homepage.component */ "./src/app/homepage/homepage.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _favourites_favourites_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./favourites/favourites.component */ "./src/app/favourites/favourites.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _recipe_recipe_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./recipe/recipe.component */ "./src/app/recipe/recipe.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var _environments_firebase_config__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../environments/firebase.config */ "./src/environments/firebase.config.ts");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/esm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"],
                _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_2__["HomepageComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"],
                _favourites_favourites_component__WEBPACK_IMPORTED_MODULE_5__["FavouritesComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_6__["AboutComponent"],
                _recipe_recipe_component__WEBPACK_IMPORTED_MODULE_7__["RecipeComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_0__["AppRoutingModule"],
                angularfire2__WEBPACK_IMPORTED_MODULE_12__["AngularFireModule"].initializeApp(_environments_firebase_config__WEBPACK_IMPORTED_MODULE_13__["FirebaseConfig"].firebase),
                angularfire2_firestore__WEBPACK_IMPORTED_MODULE_14__["AngularFirestoreModule"],
                angularfire2_auth__WEBPACK_IMPORTED_MODULE_15__["AngularFireAuthModule"],
                angularfire2_database__WEBPACK_IMPORTED_MODULE_16__["AngularFireDatabaseModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClientModule"]
            ],
            providers: [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth.service.ts":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/index.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs_add_operator_switchMap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/switchMap */ "./node_modules/rxjs/_esm5/add/operator/switchMap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthService = /** @class */ (function () {
    function AuthService(afAuth, router) {
        this.afAuth = afAuth;
        this.router = router;
    }
    AuthService.prototype.login = function (email, password) {
        var _this = this;
        this.afAuth.auth.signInWithEmailAndPassword(email, password)
            .then(function (value) {
            console.log('Nice, it worked!');
            _this.router.navigateByUrl('/profile');
        })
            .catch(function (err) {
            console.log('Something went wrong: ', err.message);
        });
    };
    AuthService.prototype.emailSignup = function (email, password) {
        var _this = this;
        this.afAuth.auth.createUserWithEmailAndPassword(email, password)
            .then(function (value) {
            console.log('Sucess', value);
            _this.router.navigateByUrl('/profile');
        })
            .catch(function (error) {
            console.log('Something went wrong: ', error);
        });
    };
    AuthService.prototype.googleLogin = function () {
        var _this = this;
        var provider = new firebase_app__WEBPACK_IMPORTED_MODULE_3__["auth"].GoogleAuthProvider();
        return this.oAuthLogin(provider)
            .then(function (value) {
            console.log('Sucess', value),
                console.log('The given name is ' + value.additionalUserInfo.profile.given_name),
                _this.router.navigateByUrl('/profile');
        })
            .catch(function (error) {
            console.log('Something went wrong: ', error);
        });
    };
    AuthService.prototype.logout = function () {
        var _this = this;
        this.afAuth.auth.signOut().then(function () {
            _this.router.navigate(['/']);
        });
    };
    AuthService.prototype.oAuthLogin = function (provider) {
        return this.afAuth.auth.signInWithPopup(provider);
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/favourites/favourites.component.css":
/*!*****************************************************!*\
  !*** ./src/app/favourites/favourites.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\n    text-align: center;\n}\n\ninput {\n    color: black;\n}\n\ninput {\n    width: 30vmax;\n    padding-left: 1em;\n    margin-bottom: 1em;\n    line-height: 2em;\n    font-size: 16px;\n}\n\ndiv .center {\n    text-align: center;\n}\n\nbutton {\n    margin-bottom: 2em;\n    color: black;\n    line-height: 3em;\n    background-color: white;\n    width: 30vmax;\n}"

/***/ }),

/***/ "./src/app/favourites/favourites.component.html":
/*!******************************************************!*\
  !*** ./src/app/favourites/favourites.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"logged\" class=\"logged\">\n<div class=\"center\">\n  <h1>Pokaż innym swój ulubiony przepis na drink</h1>\n  <input type=\"text\" id=\"drinkID\" maxlength=\"5\" placeholder=\"ID of the drink\">\n</div>\n<div class=\"center\">\n  <input type=\"text\" id=\"drinkDesc\" maxlength=\"50\" placeholder=\"Short description\">\n</div>\n<div class=\"center\">\n  <button (click)=\"addFavourite()\">Wyślij</button>\n</div>\n</div>\n<div id=\"anonymous\" class=\"anonymous hidden\">\n  <h2>Zaloguj się aby dodać ulubione drinki do kolekcji</h2>\n</div>\n\n<h1>Najlepsze drinki wybrane przez społeczność DrinkUp!</h1>\n<div id=\"drinks_list_top\">\n  <!-- Drinks from Firebase are rendered here  -->\n</div>"

/***/ }),

/***/ "./src/app/favourites/favourites.component.ts":
/*!****************************************************!*\
  !*** ./src/app/favourites/favourites.component.ts ***!
  \****************************************************/
/*! exports provided: FavouritesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavouritesComponent", function() { return FavouritesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





;
var FavouritesComponent = /** @class */ (function () {
    function FavouritesComponent(http, afAuth, db, router) {
        var _this = this;
        this.http = http;
        this.afAuth = afAuth;
        this.router = router;
        this.scope = this;
        this.drinksArray = [];
        this.afAuth.authState.subscribe(function (user) {
            if (user) {
            }
            else {
                document.getElementById('logged').classList.add('hidden');
                document.getElementById("anonymous").classList.remove('hidden');
            }
        });
        this.drinks = db.collection('/items').valueChanges();
        this._db = db;
        db.collection('/items').valueChanges().subscribe(function (val) {
            for (var i = 0; i < val.length; i++) {
                _this.drinksArray.push(val[i]);
            }
            _this.printDrinksToView(_this.drinksArray);
        });
    }
    FavouritesComponent.prototype.printDrinksToView = function (drinksArray) {
        var _this = this;
        drinksArray.forEach(function (drink) {
            var outputDrinks = document.getElementById('drinks_list_top');
            var APIDrink = _this.http.get('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=' + drink.drinkID).subscribe(function (val) {
                for (var i = 0; i < val['drinks'].length; i++) {
                    var outputHTML = "<a href=\"recipe/" + val['drinks'][i]['idDrink'] + "\"><div class=\"drink\">\n                              <img src=\"" + val['drinks'][i]['strDrinkThumb'] + "\">\n                              <div>\n                                <h1>" + val['drinks'][i]['strDrink'] + "</h1>\n                                <p>" + drink.notes + "</p>\n                              </div>\n                            </div></a>";
                    outputDrinks.innerHTML += outputHTML;
                }
            });
        });
    };
    FavouritesComponent.prototype.addFavourite = function () {
        var _drinkID = parseInt(document.getElementById('drinkID').value);
        var _notes = document.getElementById('drinkDesc').value;
        var drinksCollection = this._db.collection('items');
        drinksCollection.add({ drinkID: _drinkID, notes: _notes });
        document.getElementById('drinks_list_top').innerHTML = '';
    };
    FavouritesComponent.prototype.ngOnInit = function () {
    };
    FavouritesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-favourites',
            template: __webpack_require__(/*! ./favourites.component.html */ "./src/app/favourites/favourites.component.html"),
            styles: [__webpack_require__(/*! ./favourites.component.css */ "./src/app/favourites/favourites.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"],
            angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], FavouritesComponent);
    return FavouritesComponent;
}());



/***/ }),

/***/ "./src/app/homepage/homepage.component.css":
/*!*************************************************!*\
  !*** ./src/app/homepage/homepage.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2 {\n    font-weight: normal;\n    font-size: 20px;\n}\n\ninput[type=\"text\"] {\n    color: black;\n    width: 30vmax;\n    padding-left: 9px;\n    line-height: 3em;\n}\n\ndiv.search_by{\n\tline-height: 2em;\n}\n\ndiv#alcohols {\n    margin-top: 5%;\n    flex-wrap: wrap;\n    display: flex;\n    justify-content: center;\n}\n\ndiv#alcohols div {\n    padding: 0 1em;\n}\n\ndiv#other_filters {\n    margin-top: 5%;\n    flex-wrap: wrap;\n    display: flex;\n    justify-content: space-evenly;\n}\n\ndiv#other_filters div {\n    /* margin-top: 2%; */\n    margin-bottom: 3%;\n    text-align: center;\n}\n\ndiv#other_filters div div:last-child {\n    padding-bottom: 2%;\n    margin-bottom: 5%;\n}\n\nimg#search_by_name {\n    left: 10px;\n    background: white;\n    border: 1px solid white;\n    cursor: pointer;\n    padding: 0.25em;\n    height: 2.5em;\n}\n\nimg#search_custom {\n    margin: .25em 0;\n    height: 2.5em;\n}\n\n#search_custom_button {\n    cursor: pointer;\n    text-align: center;\n    width: 30vmax;\n    outline-style: outset;\n    border: 1px solid white;\n    background-color: white;\n}\n\nimg#back_button {\n    cursor: pointer;\n    -o-object-fit: none;\n       object-fit: none;\n    height: 2.5em;\n}\n\n#inputs .search1 inputs {\n    float: left;\n}\n\ndiv#header_text {\n    margin-top: 8%;\n    text-align: center;\n}\n\ndiv#main_search {\n    display: flex;\n    justify-content: center;\n}\n\ndiv#main_search input {\n    border: 1px solid white;\n}"

/***/ }),

/***/ "./src/app/homepage/homepage.component.html":
/*!**************************************************!*\
  !*** ./src/app/homepage/homepage.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <div>\n    <img src='./assets/u80.png' id=\"back_button\" (click)=\"backButtonClicked()\" class=\"hidden\">\n\n    <div id =\"main_search\" class=\"search1\">\n      <input type=\"text\" name=\"search_by_name\" #search1 placeholder=\"Wyszukaj po nazwie\"/>\n      <img (click)=\"searchByName(search1.value, $event)\" id=\"search_by_name\" src=\"./assets/u254.png\" alt=\"search\">\n    </div>\n\n    <div id=\"header_text\">\n      <h1>Stwórz swój własny drink</h1>\n    </div>\n    <div id=\"alcohols\" class=\"search2\">\n        <div><label for=\"gin\">Gin</label><input id=\"gin\" type=\"radio\" class=\"filter\" name=\"alcohol\"/></div>\n        <div><label for=\"vodka\">Wódka</label><input id=\"vodka\" type=\"radio\" class=\"filter\" name=\"alcohol\"/></div>\n        <div><label for=\"whiskey\">Whisky</label><input id=\"whiskey\" type=\"radio\" class=\"filter\" name=\"alcohol\"/></div>\n        <div><label for=\"rum\">Rum</label><input id=\"rum\" type=\"radio\" class=\"filter\" name=\"alcohol\"/></div>\n        <div><label for=\"wine\">Wino</label><input id=\"wine\" type=\"radio\" class=\"filter\" name=\"alcohol\"/></div>\n        <div><label for=\"ale\">Ale</label><input id=\"ale\" type=\"radio\" class=\"filter\" name=\"alcohol\"/></div>\n        <div><label for=\"beer\">Piwo</label><input id=\"beer\" type=\"radio\" class=\"filter\" name=\"alcohol\"/></div>\n        <div><label for=\"amaretto\">Amaretto</label><input id=\"amaretto\" type=\"radio\" class=\"filter\" name=\"alcohol\"/></div>\n        <div><label for=\"campari\">Campari</label><input id=\"campari\" type=\"radio\" class=\"filter\" name=\"alcohol\"/></div>\n        <div><label for=\"sambuca\">Sambuca</label><input id=\"sambuca\" type=\"radio\" class=\"filter\" name=\"alcohol\"/></div>\n        <div><label for=\"grenadine\">Grenadine</label><input id=\"grenadine\" type=\"radio\" class=\"filter\" name=\"alcohol\"/></div>\n    </div>\n\n    <div id=\"other_filters\" class=\"search2\">\n      <div>\n        <h2><b>Wybierz rodzaj</b><br><br></h2>\n        <div><label for=\"Ordinary%20Drink\">Drink</label><input id=\"Ordinary%20Drink\" type=\"radio\" class=\"filter\" name=\"alcohol\"/></div>\n        <div><label for=\"Shot\">Shot</label><input id=\"Shot\" type=\"radio\" class=\"filter\" name=\"alcohol\"/></div>\n        <div><label for=\"Cocktail\">Cocktail</label><input id=\"Cocktail\" type=\"radio\" class=\"filter\" name=\"alcohol\"/></div>\n        <div><label for=\"Cocoa\">Cocoa</label><input id=\"Cocoa\" type=\"radio\" class=\"filter\" name=\"alcohol\"/></div>\n        <div><label for=\"Homemade%20Liqueur\">Domowy likier</label><input id=\"Homemade%20Liqueur\" type=\"radio\" class=\"filter\" name=\"alcohol\"/></div>\n      </div>\n      <div>\n        <h2><b>Wybierz typ</b><br><br></h2>\n        <div><label for=\"Alcoholic\">Alkoholowy</label><input id=\"Alcoholic\" type=\"radio\" class=\"filter\" name=\"alcohol\"/></div>\n        <div><label for=\"Non_Alcoholic\">Bezalkoholowy</label><input id=\"Non_Alcoholic\" type=\"radio\" class=\"filter\" name=\"alcohol\"/></div>\n      </div>\n\n      <button id=\"search_custom_button\" (click)=\"searchByFilters()\">\n        <img id=\"search_custom\" src=\"./assets/u254.png\">\n      </button>\n    </div>\n\n    <div id=\"drinks_list\">\n      <!-- drinks from API are placed here -->\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/homepage/homepage.component.ts":
/*!************************************************!*\
  !*** ./src/app/homepage/homepage.component.ts ***!
  \************************************************/
/*! exports provided: HomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageComponent", function() { return HomepageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomepageComponent = /** @class */ (function () {
    function HomepageComponent() {
    }
    HomepageComponent.prototype.ngOnInit = function () {
    };
    HomepageComponent.prototype.fetchDrinks = function (input) {
        var scope = this;
        var HTTPRequest = new XMLHttpRequest();
        HTTPRequest.open('GET', 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + input);
        HTTPRequest.onload = function () {
            var drinksArray = JSON.parse(HTTPRequest.responseText);
            scope.printDrinksToView(drinksArray);
        };
        HTTPRequest.send();
    };
    HomepageComponent.prototype.fetchDrinksByFilter = function (filters) {
        var scope = this;
        var HTTPRequest = new XMLHttpRequest();
        if (filters[0] == 'Alcoholic' || filters[0] == 'Non_Alcoholic') {
            HTTPRequest.open('GET', 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=' + filters[0]);
        }
        else if (filters[0] == 'Ordinary%20Drink' || filters[0] == 'Cocktail' || filters[0] == 'Shot' || filters[0] == 'Cocoa' || filters[0] == 'Homemade%20Liqueur') {
            HTTPRequest.open('GET', 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=' + filters[0]);
        }
        else {
            HTTPRequest.open('GET', 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=' + filters[0]);
        }
        HTTPRequest.onload = function () {
            var drinksArray = JSON.parse(HTTPRequest.responseText);
            scope.printDrinksToView(drinksArray);
        };
        HTTPRequest.send();
    };
    HomepageComponent.prototype.printDrinksToView = function (drinksArray) {
        var outputDrinks = document.getElementById('drinks_list');
        outputDrinks.innerHTML = '';
        if (Array.isArray(drinksArray['drinks'])) {
            drinksArray['drinks'].forEach(function (drink) {
                var strCategory = '';
                if (drink['strCategory'] !== undefined) {
                    strCategory = drink['strCategory'];
                }
                var outputHTML = '<a href="recipe/' + drink['idDrink'] + '"><div class="drink">' +
                    '<img class="thumb" src="' + drink['strDrinkThumb'] + '">' +
                    '<div>' +
                    '<h1>' +
                    drink['strDrink'] +
                    '</h1>' +
                    '<h2>' +
                    strCategory +
                    '</h2>' +
                    '</div>' +
                    '</div></a>';
                outputDrinks.innerHTML += outputHTML;
            });
        }
        else {
            outputDrinks.innerHTML = '<h1>Brak drinków do wyświetlenia!';
        }
    };
    HomepageComponent.prototype.searchByName = function (input, event) {
        var inactiveSearch = document.getElementsByClassName('search2');
        for (var i = 0; i < inactiveSearch.length; i++) {
            inactiveSearch[i].classList.add('hidden');
        }
        document.getElementById('back_button').classList.remove('hidden');
        this.fetchDrinks(input);
    };
    HomepageComponent.prototype.searchByFilters = function () {
        var inactiveSearch = document.getElementsByClassName('search1');
        for (var i = 0; i < inactiveSearch.length; i++) {
            inactiveSearch[i].classList.add('hidden');
        }
        var inactiveSearch = document.getElementsByClassName('search2');
        for (var i = 0; i < inactiveSearch.length; i++) {
            inactiveSearch[i].classList.add('hidden');
        }
        var filters = [];
        var filterRadio = document.getElementsByClassName('filter');
        for (var i = 0; i < filterRadio.length; i++) {
            var filterInput = filterRadio[i];
            if (filterInput.checked) {
                filters.push(filterRadio[i].id);
            }
        }
        document.getElementById('back_button').classList.remove('hidden');
        this.fetchDrinksByFilter(filters);
    };
    HomepageComponent.prototype.backButtonClicked = function () {
        document.getElementById('back_button').classList.add('hidden');
        document.getElementById('drinks_list').innerHTML = '';
        var searches1 = document.getElementsByClassName('search1');
        var searches2 = document.getElementsByClassName('search2');
        for (var i = 0; i < searches1.length; i++) {
            searches1[i].classList.remove('hidden');
        }
        for (var i = 0; i < searches2.length; i++) {
            searches2[i].classList.remove('hidden');
        }
    };
    HomepageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-homepage',
            template: __webpack_require__(/*! ./homepage.component.html */ "./src/app/homepage/homepage.component.html"),
            styles: [__webpack_require__(/*! ./homepage.component.css */ "./src/app/homepage/homepage.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomepageComponent);
    return HomepageComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='heading1'><p>Login</p></div>\n<div id=\"firebaseui-auth-container\"></div>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService) {
        this.authService = authService;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ../app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/*!***********************************************!*\
  !*** ./src/app/profile/profile.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#header {\n    text-align: center;\n}\n\n#profile_container {\n    display: flex;\n    justify-content: space-between;\n}\n\nimg#user_photo {\n    box-shadow: 10px 10px 48px -15px rgba(0,0,0,0.75);\n    vertical-align: top;\n    float: left;\n    width: 200px;\n    height: 200px;\n    -o-object-fit: cover;\n       object-fit: cover;\n}\n\n.description, #user_name, #user_email {\n    display: inline;\n}\n\n.description {\n    line-height: 2em;\n}\n\nh1.description, #user_name {\n    font-size: 20px;\n}\n\n#logout_container {\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n}\n\n.logout {\n    text-align: center;\n}\n\nbutton {\n    cursor: pointer;\n    font-size: 16px;\n    height: 3em;\n    color: black;\n    border: 1px solid white;\n    background-color: white;\n}\n\n#logged_out_text {\n    text-align: center;\n}"

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"account-details\"></div>\n\n<h1 id=\"header\">Twój profil</h1>\n\n<div id=\"main_container\">\n  <div id=\"profile_container\">\n  <img id=\"user_photo\" src=\"\">\n  <div>\n    <h1 class=\"description\"><br>Witaj! </h1> <h1 id=\"user_name\"></h1>\n    <p class=\"description\"><br>Podaj adres e-mail </p> <p id=\"user_email\"></p>\n  </div>\n  </div>\n\n  <div id=\"logout_container\">\n    <h1 class=\"logout\">Chcesz się wylogować?</h1>\n    <button (click)=\"signOut()\">Wyloguj</button>\n  </div>\n</div>\n\n<p id=\"logged_out_text\" class=\"hidden\">Zaloguj się aby kontynuować</p>"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(authService) {
        this.authService = authService;
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent.prototype.signOut = function () {
        this.authService.logout();
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/recipe/recipe.component.html":
/*!**********************************************!*\
  !*** ./src/app/recipe/recipe.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"center\">\n  <div class=\"row\"> \n    <div class=\"column\" style=\"flex: 20%\">\n      <p onclick=\"window.history.back()\"><input type=\"image\" src=\"./assets/u80.png\" style=\"object-fit: none\"></p>\n    </div>  \n\n    <div class=\"column\" style=\"flex: 70%\">\n      <div class=\"heading1\"><p style=\"text-align:center; color: white;\" id=\"name\" ></p></div>\n    </div>\n  </div>\n\n  <br>\n  <div class=\"row\"> \n    <div class=\"column\" style=\"flex: 30%\">\n      <div><img id=\"photo\"></div>\n    </div>\n\n    <div class=\"column\" style=\"flex: 70%\">\n      <div>\n          <select size=\"6\" style=\"background-color: #094466; width:30vmax; height:100%; z-index: -1\">\n            <option id =\"ingr1\"></option>\n            <option id =\"ingr2\"></option>\n            <option id =\"ingr3\"></option>\n            <option id =\"ingr4\"></option>\n            <option id =\"ingr5\"></option>\n            <option id =\"ingr6\"></option>\n            <option id =\"ingr7\"></option>\n            <option id =\"ingr8\"></option>\n            <option id =\"ingr9\"></option>\n            <option id =\"ingr10\"></option>\n            <option id =\"ingr11\"></option>\n            <option id =\"ingr12\"></option>\n            <option id =\"ingr13\"></option>\n            <option id =\"ingr14\"></option>\n            <option id =\"ingr15\"></option>  \n          </select>\n        </div>\n    </div>\n  </div>\n    \n  <br>\n  <div class=\"row\">   \n    <div class=\"column\" style=\"flex: 100%\">\n      <p style=\"background-color: #094466; width:100%; height: 10em; font-size: 18px; text-align: justify\" id=\"recipe\">przepis</p>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/recipe/recipe.component.ts":
/*!********************************************!*\
  !*** ./src/app/recipe/recipe.component.ts ***!
  \********************************************/
/*! exports provided: RecipeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeComponent", function() { return RecipeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RecipeComponent = /** @class */ (function () {
    function RecipeComponent(route) {
        this.drinkID = route.snapshot.params['id'];
        this.fetchDrinkID();
    }
    RecipeComponent.prototype.ngOnInit = function () {
    };
    RecipeComponent.prototype.fetchDrinkID = function () {
        var scope = this;
        var HTTPRequest = new XMLHttpRequest();
        HTTPRequest.open('GET', ' https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=' + this.drinkID);
        HTTPRequest.onload = function () {
            var drinks = JSON.parse(HTTPRequest.responseText);
            scope.printToView(drinks);
            console.log(drinks);
        };
        HTTPRequest.send();
    };
    RecipeComponent.prototype.printToView = function (drinks) {
        document.getElementById('name').innerHTML = drinks['drinks'][0]['strDrink'];
        document.getElementById('recipe').innerHTML = drinks['drinks'][0]['strInstructions'];
        document.getElementById('photo').setAttribute("src", drinks['drinks'][0]["strDrinkThumb"]);
        document.getElementById('ingr1').innerHTML = drinks['drinks'][0]['strMeasure1'] + " " + drinks['drinks'][0]['strIngredient1'];
        document.getElementById('ingr2').innerHTML = drinks['drinks'][0]['strMeasure2'] + " " + drinks['drinks'][0]['strIngredient2'];
        document.getElementById('ingr3').innerHTML = drinks['drinks'][0]['strMeasure3'] + " " + drinks['drinks'][0]['strIngredient3'];
        document.getElementById('ingr4').innerHTML = drinks['drinks'][0]['strMeasure4'] + " " + drinks['drinks'][0]['strIngredient4'];
        document.getElementById('ingr5').innerHTML = drinks['drinks'][0]['strMeasure5'] + " " + drinks['drinks'][0]['strIngredient5'];
        document.getElementById('ingr6').innerHTML = drinks['drinks'][0]['strMeasure6'] + " " + drinks['drinks'][0]['strIngredient6'];
        document.getElementById('ingr7').innerHTML = drinks['drinks'][0]['strMeasure7'] + " " + drinks['drinks'][0]['strIngredient7'];
        document.getElementById('ingr8').innerHTML = drinks['drinks'][0]['strMeasure8'] + " " + drinks['drinks'][0]['strIngredient8'];
        document.getElementById('ingr9').innerHTML = drinks['drinks'][0]['strMeasure9'] + " " + drinks['drinks'][0]['strIngredient9'];
        document.getElementById('ingr10').innerHTML = drinks['drinks'][0]['strMeasure10'] + " " + drinks['drinks'][0]['strIngredient10'];
        document.getElementById('ingr11').innerHTML = drinks['drinks'][0]['strMeasure11'] + " " + drinks['drinks'][0]['strIngredient11'];
        document.getElementById('ingr12').innerHTML = drinks['drinks'][0]['strMeasure12'] + " " + drinks['drinks'][0]['strIngredient12'];
        document.getElementById('ingr13').innerHTML = drinks['drinks'][0]['strMeasure13'] + " " + drinks['drinks'][0]['strIngredient13'];
        document.getElementById('ingr14').innerHTML = drinks['drinks'][0]['strMeasure14'] + " " + drinks['drinks'][0]['strIngredient14'];
        document.getElementById('ingr15').innerHTML = drinks['drinks'][0]['strMeasure15'] + " " + drinks['drinks'][0]['strIngredient15'];
    };
    RecipeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-recipe',
            template: __webpack_require__(/*! ./recipe.component.html */ "./src/app/recipe/recipe.component.html"),
            styles: [__webpack_require__(/*! ../app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], RecipeComponent);
    return RecipeComponent;
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
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/environments/firebase.config.ts":
/*!*********************************************!*\
  !*** ./src/environments/firebase.config.ts ***!
  \*********************************************/
/*! exports provided: FirebaseConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirebaseConfig", function() { return FirebaseConfig; });
var FirebaseConfig = {
    firebase: {
        apiKey: "AIzaSyAWEdrQOJ8hp1H-_IUyfrXlas32aUo065I",
        authDomain: "drink-up-1524767130276.firebaseapp.com",
        databaseURL: "https://drink-up-1524767130276.firebaseio.com",
        projectId: "drink-up-1524767130276",
        storageBucket: "drink-up-1524767130276.appspot.com",
        messagingSenderId: "861899942727"
    }
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
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

module.exports = __webpack_require__(/*! /home/maciej/Templates/Drinkup.pl/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map