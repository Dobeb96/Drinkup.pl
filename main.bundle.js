webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='heading1'><p>Informacje o projekcie</p></div>\n\n  <div class=\"row\"> \n      \n    <div class=\"column1\"> <!-- kolumna lewa  -->\n\n          <div class='heading2'><p>Autorzy:</p></div>\n\n            <div class='author'> <!-- jedna osoba  -->\n\n              <div class='space'><input type=\"image\" src=\"assets/u85.png\"/></div> \n              <div class='space'><br></div>              \n              <div class='space'>Ewa Bąk <br> xxxxxxxxxxx</div> \n\n            </div>\n      \n            <div class='author'>\n\n              <div class='space'><input type=\"image\" src=\"assets/u85.png\"/></div>\n              <div class='space'><br></div>                    \n              <div class='space'>Kamila Chwastowska <br> xxxxxxxxxxx</div>      \n\n            </div>\n      \n            <div class='author'>\n\n                <div class='space'><input type=\"image\" src=\"assets/u85.png\"/></div>\n                <div class='space'><br></div>                    \n                <div class='space'>Maciej Dobosz <br> xxxxxxxx xxxxxxxxxxxxxxxxx xxxxxxxxxx xxxxxxxx xxxxxxx xxxxxxxx xxxxxxxxxxx </div>         \n              \n            </div>\n      \n            <div class='author'>\n\n                  <div class='space'><input type=\"image\" src=\"assets/u85.png\"/></div>\n                  <div class='space'><br></div>                   \n                  <div class='space'>Dominika Smolarek <br> xxxxxxxxxxx</div>    \n\n            </div>\n    </div>\n\n    <div class=\"columnspace\"></div> <!-- kolumna będąca przerwą pomiędzy dwoma kolumnami  -->\n\n    <div class=\"column2\"> <!-- kolumna prawa  -->\n      \n      <div class='author'> \n              <div class='heading2'><p>drink up to</p></div>\n      </div>\n              <div class='space'>tutaj jakiś oposis dffsfsfsdfdsfsf</div>         \n\n      <div class='author'>\n              <div class='heading2'><p>Wykorzystane technologie:</p></div>\n      </div>\n              <div class='space'>fdfsfsfsfdsfdsfdsf dffsfsfsdfdsfsf</div>    \n\n    </div>\n    \n  </div> \n  \n"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
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

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-about',
            template: __webpack_require__("./src/app/about/about.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__profile_profile_component__ = __webpack_require__("./src/app/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__signup_signup_component__ = __webpack_require__("./src/app/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__homepage_homepage_component__ = __webpack_require__("./src/app/homepage/homepage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__about_about_component__ = __webpack_require__("./src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__favourites_favourites_component__ = __webpack_require__("./src/app/favourites/favourites.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__recipe_recipe_component__ = __webpack_require__("./src/app/recipe/recipe.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    { path: '', redirectTo: 'homepage', pathMatch: 'full' },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */] },
    { path: 'homepage', component: __WEBPACK_IMPORTED_MODULE_5__homepage_homepage_component__["a" /* HomepageComponent */] },
    { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_4__signup_signup_component__["a" /* SignupComponent */] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_3__profile_profile_component__["a" /* ProfileComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_6__about_about_component__["a" /* AboutComponent */] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_3__profile_profile_component__["a" /* ProfileComponent */] },
    { path: 'favourites', component: __WEBPACK_IMPORTED_MODULE_7__favourites_favourites_component__["a" /* FavouritesComponent */] },
    { path: 'recipe/:id', component: __WEBPACK_IMPORTED_MODULE_8__recipe_recipe_component__["a" /* RecipeComponent */] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "/* NAV_BAR */\nnav * {\n    margin-top: 0;\n    padding-top: .3em;\n    margin-bottom: .3em;\n    padding-bottom: .3em;\n}\nnav {\n    padding: 0 1%;\n    line-height: 1em;\n    color: white;\n    font-weight: bold;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: end;\n        -ms-flex-align: end;\n            align-items: flex-end;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n}\nnav h1.logo {\n    font-size: 2.5em;\n    padding-right: .5em;\n    border-right: 1px solid #074265;\n    \n}\nnav div {\n    -ms-flex-item-align: center;\n        align-self: center;\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n}\nnav div p {\n    cursor: pointer;\n    padding: 0 1em;\n}\nnav .to_left {\n    font-size: 1.3em;\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n    padding-left: 1.5em;\n}\nnav .to_right {\n    font-size: 1.0em;\n}\nnav .to_right p {\n    padding-top: .3em;\n    padding-bottom: .5em;\n}\nnav .to_right p:first-child {\n    border-left: 1px solid black;\n}\n@media only screen and (max-width: 1364px) {\n    nav {\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: column;\n                flex-direction: column;\n    } nav h1.logo {\n        margin-top: 1.5%;\n        border: 0;\n        padding-right: 0;\n    } nav .to_right p:first-child {\n        border: 0;\n    } nav .to_left {\n        padding-left: 0;\n    }\n}\n/* END OF NAV_BAR*/\n/* CONTAINER */\n#container {\n    background-color: #074265;\n    border-radius: 5px;\n    height: 88vh;\n    -webkit-box-shadow: 10px 10px 12px -15px rgba(0,0,0,0.75);\n            box-shadow: 10px 10px 12px -15px rgba(0,0,0,0.75);\n}\n#containerBox {\n        background-color: #074265;\n        border-radius: 5px;\n}\n@media only screen and (max-width:1364px) {\n    #container {\n        height: 70vh;\n        border-radius: 0;\n    } #container #logo {\n        display: none;\n    }\n}\n#container #content_wrapper {\n    margin-top: 2%;\n    margin-left: 15%;\n    width: 70%;\n    min-width: 320px;\n    float: left;\n    word-wrap: break-word;\n}\n#containerBox .gradient_wrapper {\n    width: 100%;\n    background: -webkit-gradient(linear, left top, right bottom, from(#ffcc00), to(#fb2d84));\n    background: linear-gradient(to bottom right, #ffcc00, #fb2d84);\n    -webkit-box-shadow: 10px 10px 48px -15px rgba(0,0,0,0.75);\n            box-shadow: 10px 10px 48px -15px rgba(0,0,0,0.75);\n    border-radius: 8px;\n    display: inline-block;\n    padding: 4px;\n    text-decoration: none;\n}\n#containerBox #content {\n    background: #074265;\n    padding: 1em 3em;\n    border-radius: 6px;\n}\n@media only screen and (max-width:1364px) {\n    #container #content_wrapper {\n        margin-left: .1%;\n        width: 99%;\n    } #container #ad {\n        display: none;\n    }\n}\n/* END OF CONTAINER */\n/* POSITION */\n.author {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start;\n    word-wrap: break-word;\n    word-break: break-all;\n  }\n.space {\n    margin-left: 10px;\n  }\n.row {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n}\n.column1 {\n    -webkit-box-flex: 60%;\n        -ms-flex: 60%;\n            flex: 60%;\n}\n.columnspace {\n    -webkit-box-flex: 10%;\n        -ms-flex: 10%;\n            flex: 10%;\n}\n.column2 {\n    -webkit-box-flex: 30%;\n        -ms-flex: 30%;\n            flex: 30%;\n}\n.column {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n\n}\n/* END OF POSITION */"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav>\n  <img src=\"assets/logotyp.png\" height=\"45\"/>\n\n  <div class='to_left'>\n    <p routerLink=\"homepage\">drinks</p>\n    <p routerLink=\"profile\">profile</p>\n    <p routerLink=\"favourites\">top picks</p>\n  </div>\n  \n  <div class='to_right'>\n    <p id=\"sign-in\" routerLink=\"login\"></p>\n    <p routerLink=\"about\">about</p>\n  </div>\n</nav>\n\n<div id='container'>\n    <div id='logo'></div>\n\n    <div id='content_wrapper'>\n        <div id='containerBox'>\n            <div id='content_wrapper'>\n              <div class='gradient_wrapper'>\n                <section id='content'>\n                  <router-outlet></router-outlet>\n                </section>\n              </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("./src/app/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("./src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__homepage_homepage_component__ = __webpack_require__("./src/app/homepage/homepage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__signup_signup_component__ = __webpack_require__("./src/app/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__profile_profile_component__ = __webpack_require__("./src/app/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__favourites_favourites_component__ = __webpack_require__("./src/app/favourites/favourites.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__about_about_component__ = __webpack_require__("./src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__recipe_recipe_component__ = __webpack_require__("./src/app/recipe/recipe.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angularfire2__ = __webpack_require__("./node_modules/angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__environments_firebase_config__ = __webpack_require__("./src/environments/firebase.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angularfire2_firestore__ = __webpack_require__("./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angularfire2_auth__ = __webpack_require__("./node_modules/angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_angularfire2_database__ = __webpack_require__("./node_modules/angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_angular_billboard__ = __webpack_require__("./node_modules/angular-billboard/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_10__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_2__homepage_homepage_component__["a" /* HomepageComponent */],
                __WEBPACK_IMPORTED_MODULE_3__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_4__signup_signup_component__["a" /* SignupComponent */],
                __WEBPACK_IMPORTED_MODULE_5__profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_6__favourites_favourites_component__["a" /* FavouritesComponent */],
                __WEBPACK_IMPORTED_MODULE_7__about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_8__recipe_recipe_component__["a" /* RecipeComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_0__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_13_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_14__environments_firebase_config__["a" /* FirebaseConfig */].firebase),
                __WEBPACK_IMPORTED_MODULE_15_angularfire2_firestore__["b" /* AngularFirestoreModule */],
                __WEBPACK_IMPORTED_MODULE_16_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_17_angularfire2_database__["a" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_18__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_19_angular_billboard__["a" /* AngularBillboardModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__("./node_modules/angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app__ = __webpack_require__("./node_modules/firebase/app/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/switchMap.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
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
        var provider = new __WEBPACK_IMPORTED_MODULE_3_firebase_app__["auth"].GoogleAuthProvider();
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/favourites/favourites.component.css":
/***/ (function(module, exports) {

module.exports = "h1 {\n    text-align: center;\n}"

/***/ }),

/***/ "./src/app/favourites/favourites.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Top drinks chosen by the authors:</h1>\n<div id=\"drinks_list\">\n  <!-- Drinks from Firebase are rendered here  -->\n</div>"

/***/ }),

/***/ "./src/app/favourites/favourites.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavouritesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__ = __webpack_require__("./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__("./node_modules/angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




;
var FavouritesComponent = /** @class */ (function () {
    function FavouritesComponent(http, afAuth, db) {
        var _this = this;
        this.http = http;
        this.afAuth = afAuth;
        this.drinksArray = [];
        this.drinks = db.collection('/items').valueChanges();
        // this._db = db;
        db.collection('/items').valueChanges().subscribe(function (val) {
            for (var i = 0; i < val.length; i++) {
                // console.log(val[i]);
                _this.drinksArray.push(val[i]);
            }
            // console.log(this.drinksArray);
            _this.printDrinksToView(_this.drinksArray);
        });
    }
    FavouritesComponent.prototype.printDrinksToView = function (drinksArray) {
        var _this = this;
        drinksArray.forEach(function (drink) {
            // console.log('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=' + drink.drinkID);
            // console.log(drink.notes);
            var outputDrinks = document.getElementById('drinks_list');
            var APIDrink = _this.http.get('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=' + drink.drinkID).subscribe(function (val) {
                for (var i = 0; i < val['drinks'].length; i++) {
                    // console.log(val['drinks'][i]);
                    var outputHTML = "<a href=\"/recipe/" + val['drinks'][i]['idDrink'] + "\"><div class=\"drink\">\n                              <img src=\"" + val['drinks'][i]['strDrinkThumb'] + "\">\n                              <div>\n                                <h1>" + val['drinks'][i]['strDrink'] + "</h1>\n                                <p>" + drink.notes + "</p>\n                              </div>\n                            </div></a>";
                    outputDrinks.innerHTML += outputHTML;
                }
            });
        });
    };
    FavouritesComponent.prototype.ngOnInit = function () {
    };
    FavouritesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-favourites',
            template: __webpack_require__("./src/app/favourites/favourites.component.html"),
            styles: [__webpack_require__("./src/app/favourites/favourites.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__["a" /* AngularFirestore */]])
    ], FavouritesComponent);
    return FavouritesComponent;
}());



/***/ }),

/***/ "./src/app/homepage/homepage.component.css":
/***/ (function(module, exports) {

module.exports = "h2 {\n    font-weight: normal;\n    font-size: 20px;\n}\n\ninput[type=\"text\"] {\n    color: black;\n    width: 30vmax;\n    padding-left: 9px;\n    line-height: 3em;\n}\n\ndiv.search_by{\n\tline-height: 2em;\n}\n\ndiv#alcohols {\n    margin-top: 5%;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n}\n\ndiv#alcohols div {\n    padding: 0 1em;\n}\n\ndiv#other_filters {\n    margin-top: 5%;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: space-evenly;\n        -ms-flex-pack: space-evenly;\n            justify-content: space-evenly;\n}\n\ndiv#other_filters div {\n    /* margin-top: 2%; */\n    margin-bottom: 3%;\n    text-align: center;\n}\n\ndiv#other_filters div div:last-child {\n    padding-bottom: 2%;\n    margin-bottom: 5%;\n}\n\nimg#search_by_name {\n    left: 10px;\n    background: white;\n    border: 1px solid white;\n    cursor: pointer;\n    padding: 0.25em;\n    height: 2.5em;\n}\n\nimg#search_custom {\n    margin: .25em 0;\n    height: 2.5em;\n}\n\n#search_custom_button {\n    cursor: pointer;\n    text-align: center;\n    width: 30vmax;\n    outline-style: outset;\n    border: 1px solid white;\n    background-color: white;\n}\n\nimg#back_button {\n    cursor: pointer;\n    height: 2.5em;\n}\n\n#inputs .search1 inputs {\n    float: left;\n}\n\ndiv#header_text {\n    margin-top: 8%;\n    text-align: center;\n}\n\ndiv#main_search {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n}\n\ndiv#main_search input {\n    border: 1px solid white;\n}"

/***/ }),

/***/ "./src/app/homepage/homepage.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <div>\n    <img src='../../assets/u80.png' id=\"back_button\" (click)=\"backButtonClicked()\" class=\"hidden\">\n\n    <div id =\"main_search\" class=\"search1\">\n      <input type=\"text\" name=\"search_by_name\" #search1 placeholder=\"Search drink by name\"/>\n      <img (click)=\"searchByName(search1.value, $event)\" id=\"search_by_name\" src=\"../../assets/u254.png\" alt=\"search\">\n    </div>\n\n    <div id=\"header_text\">\n      <h1>Create your own drink:</h1>\n    </div>\n    <div id=\"alcohols\" class=\"search2\">\n        <div><label for=\"gin\">Gin</label><input id=\"gin\" type=\"radio\" class=\"filter\" name=\"alcohol\"/></div>\n        <div><label for=\"vodka\">Vodka</label><input id=\"vodka\" type=\"radio\" class=\"filter\" name=\"alcohol\"/></div>\n        <div><label for=\"whiskey\">Whiskey</label><input id=\"whiskey\" type=\"radio\" class=\"filter\" name=\"alcohol\"/></div>\n        <div><label for=\"rum\">Rum</label><input id=\"rum\" type=\"radio\" class=\"filter\" name=\"alcohol\"/></div>\n        <div><label for=\"wine\">Wine</label><input id=\"wine\" type=\"radio\" class=\"filter\" name=\"alcohol\"/></div>\n        <div><label for=\"ale\">Ale</label><input id=\"ale\" type=\"radio\" class=\"filter\" name=\"alcohol\"/></div>\n        <div><label for=\"beer\">Beer</label><input id=\"beer\" type=\"radio\" class=\"filter\" name=\"alcohol\"/></div>\n        <div><label for=\"amaretto\">Amaretto</label><input id=\"amaretto\" type=\"radio\" class=\"filter\" name=\"alcohol\"/></div>\n        <div><label for=\"campari\">Campari</label><input id=\"campari\" type=\"radio\" class=\"filter\" name=\"alcohol\"/></div>\n        <div><label for=\"sambuca\">Sambuca</label><input id=\"sambuca\" type=\"radio\" class=\"filter\" name=\"alcohol\"/></div>\n        <div><label for=\"grenadine\">Grenadine</label><input id=\"grenadine\" type=\"radio\" class=\"filter\" name=\"alcohol\"/></div>\n    </div>\n\n    <div id=\"other_filters\" class=\"search2\">\n      <div>\n        <h2>By type of drink:<br><br></h2>\n        <div><label for=\"Ordinary%20Drink\">Ordinary drink</label><input id=\"Ordinary%20Drink\" type=\"radio\" class=\"filter\" name=\"alcohol\"/></div>\n        <div><label for=\"Shot\">Shot</label><input id=\"Shot\" type=\"radio\" class=\"filter\" name=\"alcohol\"/></div>\n        <div><label for=\"Cocktail\">Cocktail</label><input id=\"Cocktail\" type=\"radio\" class=\"filter\" name=\"alcohol\"/></div>\n        <div><label for=\"Cocoa\">Cocoa</label><input id=\"Cocoa\" type=\"radio\" class=\"filter\" name=\"alcohol\"/></div>\n        <div><label for=\"Homemade%20Liqueur\">Homemade liqueur</label><input id=\"Homemade%20Liqueur\" type=\"radio\" class=\"filter\" name=\"alcohol\"/></div>\n      </div>\n      <div>\n        <h2>By containment of alcohol:<br><br></h2>\n        <div><label for=\"Alcoholic\">Alcoholic</label><input id=\"Alcoholic\" type=\"radio\" class=\"filter\" name=\"alcohol\"/></div>\n        <div><label for=\"Non_Alcoholic\">Non-alcoholic</label><input id=\"Non_Alcoholic\" type=\"radio\" class=\"filter\" name=\"alcohol\"/></div>\n      </div>\n\n      <button id=\"search_custom_button\" (click)=\"searchByFilters()\">\n        <img id=\"search_custom\" src=\"../../assets/u254.png\">\n      </button>\n    </div>\n\n    <div id=\"drinks_list\">\n      <!-- drinks from API are placed here -->\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/homepage/homepage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomepageComponent; });
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
                var outputHTML = '<a href="/recipe/' + drink['idDrink'] + '"><div class="drink">' +
                    '<img src="' + drink['strDrinkThumb'] + '">' +
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-homepage',
            template: __webpack_require__("./src/app/homepage/homepage.component.html"),
            styles: [__webpack_require__("./src/app/homepage/homepage.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomepageComponent);
    return HomepageComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<!--\n<div>\n    <button (click)=\"loginGoogle()\" class=\"google\">Login with Google</button>\n    <button routerLink=\"/email-login\" class=\"email\">Email</button>\n    <a routerLink=\"/signup\" routerLinkActive=\"active\" class=\"create-account-txt\">No Account? <strong>Create one here</strong></a>\n  </div>\n-->\n\n<!-- <div id='containerBox'>\n  <div id='content_wrapper'>\n    <div class='gradient_wrapper'>\n      <section id='content'> -->\n            <div class='heading1'><p>Login</p></div>\n            <div id=\"firebaseui-auth-container\"></div>\n      <!-- </section>\n    </div>\n  </div>\n</div> -->"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("./src/app/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService) {
        this.authService = authService;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/login/login.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/***/ (function(module, exports) {

module.exports = "#header {\n    text-align: center;\n}\n\n#profile_container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n}\n\nimg#user_photo {\n    -webkit-box-shadow: 10px 10px 48px -15px rgba(0,0,0,0.75);\n            box-shadow: 10px 10px 48px -15px rgba(0,0,0,0.75);\n    vertical-align: top;\n    float: left;\n    width: 200px;\n    height: 200px;\n    -o-object-fit: cover;\n       object-fit: cover;\n}\n\n.description, #user_name, #user_email {\n    display: inline;\n}\n\n.description {\n    line-height: 2em;\n}\n\nh1.description, #user_name {\n    font-size: 20px;\n}\n\n#logout_container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n}\n\n.logout {\n    text-align: center;\n}\n\nbutton {\n    cursor: pointer;\n    font-size: 16px;\n    height: 3em;\n    color: black;\n    border: 1px solid white;\n    background-color: white;\n}\n\n#logged_out_text {\n    text-align: center;\n}"

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"account-details\"></div>\n\n<h1 id=\"header\">Profile</h1>\n\n<div id=\"main_container\">\n  <div id=\"profile_container\">\n  <img id=\"user_photo\" src=\"\">\n  <div>\n    <h1 class=\"description\"><br>Welcome: </h1> <h1 id=\"user_name\"></h1>\n    <p class=\"description\"><br>Your email is: </p> <p id=\"user_email\"></p>\n  </div>\n  </div>\n\n  <div id=\"logout_container\">\n    <h1 class=\"logout\">Would you like to logout?</h1>\n    <button (click)=\"signOut()\">Logout</button>\n  </div>\n</div>\n\n<p id=\"logged_out_text\" class=\"hidden\">Login to continue</p>"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("./src/app/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-profile',
            template: __webpack_require__("./src/app/profile/profile.component.html"),
            styles: [__webpack_require__("./src/app/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/recipe/recipe.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"row\"> \n\n  <div class=\"column\" style=\"flex: 20%\">\n\n    <input type=\"image\" src=\"assets/u80.png\" style=\"object-fit: none\">\n\n  </div>  \n\n  <div class=\"column\" style=\"flex: 70%\">\n\n    <p style=\"text-align:center; color: white;\" id=\"name\" ></p>\n\n  </div>  \n\n  <div class=\"column\" style=\"flex: 10%\">\n\n      <input type=\"image\" src=\"assets/u126.png\" style=\"object-fit: none\"/>\n\n  </div>  \n\n</div>\n<br>\n<div class=\"row\"> \n\n  <div class=\"column\" style=\"flex: 30%\">\n      \n    <input type=\"image\" style=\"size: 50%\" id=\"photo\"/>\n\n  </div>\n\n  <div class=\"column\" style=\"flex: 70%\">\n\n      <div>\n          <select size=\"2\" style=\"background-color: #094466; width:390px; height:100%\" id=\"ingr\">\n            <option value=\"składnik \">składnik </option>\n            <option value=\"składnik \">składnik </option>\n            <option value=\"składnik \">składnik </option>\n            <option value=\"składnik \">składnik </option>\n            <option value=\"składnik\">składnik</option>\n            <option value=\"składnik \">składnik </option>\n            <option value=\"składnik \">składnik </option>\n            <option value=\"składnik \">składnik </option>\n            <option value=\"składnik \">składnik </option>\n            <option value=\"składnik\">składnik</option>\n          </select>\n      </div>\n\n  </div>\n\n</div>\n\n<br>\n\n<div class=\"row\"> \n\n  <div class=\"column\" style=\"flex: 100%\">\n      <textarea style=\"background-color: #094466; width:550px; height: 200px\" id=\"recipe\">przepis</textarea>\n  </div>\n\n</div>\n\n<angular-billboard *ngFor=\"let chart of charts\" [chart]=\"chart\"></angular-billboard>"

/***/ }),

/***/ "./src/app/recipe/recipe.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecipeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular_billboard__ = __webpack_require__("./node_modules/angular-billboard/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RecipeComponent = /** @class */ (function () {
    function RecipeComponent(route, angularBillboardService) {
        this.angularBillboardService = angularBillboardService;
        this.drinkID = route.snapshot.params['id'];
        this.przykladowyMethod();
        this.fetchDrinkID(this.drinkID);
    }
    RecipeComponent.prototype.ngOnInit = function () {
        this.chartsOptions = [
            {
                data: {
                    columns: [
                        ["data1", 100],
                        ["data2", 300],
                        ["data3", 200]
                    ],
                    type: "pie"
                },
                tooltip: {
                    show: false
                },
                legend: {
                    position: "right",
                    contents: {
                        template: "<span style='color:#fff;background-color:#ccc'>{=TITLE}</span>"
                    }
                },
            }
        ];
        this.charts = (_a = this.angularBillboardService).generate.apply(_a, this.chartsOptions);
        var _a;
    };
    RecipeComponent.prototype.przykladowyMethod = function () {
        // w zmiennej this.drinkID będzie siedzieć ID drinka
        console.log(this.drinkID);
        // 
    };
    RecipeComponent.prototype.fetchDrinkID = function (input) {
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
        document.getElementById('name').innerHTML = drinks['strDrink'];
        document.getElementById('recipe').innerHTML = drinks['strInstructions'];
        // document.getElementById('photo').setAttribute("src", drinksArray["strDrinkThumb"]);
    };
    RecipeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-recipe',
            template: __webpack_require__("./src/app/recipe/recipe.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2_angular_billboard__["b" /* AngularBillboardService */]])
    ], RecipeComponent);
    return RecipeComponent;
}());



/***/ }),

/***/ "./src/app/signup/signup.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  signup works!\n</p>\n"

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
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

var SignupComponent = /** @class */ (function () {
    function SignupComponent() {
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-signup',
            template: __webpack_require__("./src/app/signup/signup.component.html"),
            styles: [__webpack_require__("./src/app/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/environments/firebase.config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirebaseConfig; });
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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map