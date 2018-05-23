webpackJsonp([1],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddProductPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_constants__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model_product_product_model__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_utils__ = __webpack_require__(283);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the AddProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddProductPage = /** @class */ (function () {
    function AddProductPage(navParams, navCtrl, restProvider, actionSheetCtrl, alertCtrl, loadingCtrl) {
        this.navParams = navParams;
        this.navCtrl = navCtrl;
        this.restProvider = restProvider;
        this.actionSheetCtrl = actionSheetCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this._productModel = new __WEBPACK_IMPORTED_MODULE_4__model_product_product_model__["a" /* ProductMaker */]({
            id: '',
            name: '',
            originalPrice: 0,
            sellingPrice: 0,
            shippingCost: 0,
            discount: 0,
            couponCode: __WEBPACK_IMPORTED_MODULE_5__shared_utils__["a" /* Utils */].getRandonCouponPercentage(10, 20),
            picture: '',
            sold: false,
            soldOn: ''
        });
        if (navParams.data.data) {
            this._productModel = navParams.data.data;
        }
        console.log(this._productModel);
    }
    AddProductPage.prototype.loading = function (loadingText) {
        var loading = this.loadingCtrl.create({
            content: loadingText
        });
        return loading;
    };
    AddProductPage.prototype.saveProduct = function () {
        if (this.navParams.data.operation == 'new') {
            this.createProduct();
        }
        else {
            this.updateProduct();
        }
    };
    AddProductPage.prototype.updateProduct = function () {
        var _this = this;
        var _loading = this.loading('Updating your product ... please wait');
        _loading.present();
        this
            .restProvider
            .updateData(__WEBPACK_IMPORTED_MODULE_3__shared_constants__["a" /* ApiEndPoint */].PRODUCTS_ENSPOINT + "/" + this._productModel.id, this._productModel)
            .then(function (data) {
            var alert = _this.alertCtrl.create({
                title: 'Kuhak!',
                subTitle: 'Product updated!',
                buttons: ['OK']
            });
            alert.present();
            _loading.dismiss();
            _this.navCtrl.pop();
        });
    };
    AddProductPage.prototype.createProduct = function () {
        var _this = this;
        this
            .restProvider
            .postData(__WEBPACK_IMPORTED_MODULE_3__shared_constants__["a" /* ApiEndPoint */].PRODUCTS_ENSPOINT, this._productModel)
            .then(function (data) {
            var alert = _this.alertCtrl.create({
                title: 'Kuhak!',
                subTitle: 'Product created!',
                buttons: ['OK']
            });
            alert.present();
            _this.navCtrl.pop();
        }, function (err) {
            console.log(err);
        });
    };
    AddProductPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddProductPage');
    };
    AddProductPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-product',template:/*ion-inline-start:"/Users/ranjoysen/Documents/Node Drive/VenTory/web app/src/pages/add-product/add-product.html"*/'<ion-header>\n  <ion-navbar>\n  <ion-title>\n  Add/Edit Product\n  </ion-title>\n  </ion-navbar>\n </ion-header>\n \n <ion-content padding>\n    <form (ngSubmit)="saveProduct()">\n  <ion-list>\n  <ion-item>\n  <ion-label floating>Product Name</ion-label>\n  <ion-input type="text" name="name" [(ngModel)]="_productModel.name"></ion-input>\n  </ion-item>\n<ion-item>\n  <ion-label floating>Original Price</ion-label>\n  <ion-input type="text" name="originalPrice" [(ngModel)]="_productModel.originalPrice"></ion-input>\n</ion-item>\n<ion-item>\n  <ion-label floating>Selling Price</ion-label>\n  <ion-input type="text" name="sellingPrice" [(ngModel)]="_productModel.sellingPrice"></ion-input>\n</ion-item>\n<ion-item>\n  <ion-label floating>Shipping Cost</ion-label>\n  <ion-input type="text" name="shippingCost" [(ngModel)]="_productModel.shippingCost"></ion-input>\n</ion-item>\n<ion-item>\n  <ion-label floating>Discount</ion-label>\n  <ion-input type="text" name="discount" [(ngModel)]="_productModel.discount"></ion-input>\n</ion-item>\n<ion-item>\n  <ion-label floating>Coupon Code</ion-label>\n  <ion-input type="text" name="couponCode" [(ngModel)]="_productModel.couponCode"></ion-input>\n</ion-item>\n<ion-item>\n  <ion-label floating>Picture</ion-label>\n  <ion-input type="text" name="picture" [(ngModel)]="_productModel.picture"></ion-input>\n</ion-item>\n<ion-item>\n    <ion-label floating>Sold on</ion-label>\n    <ion-datetime displayFormat="YYYY-MM-DD" name="soldOn" [(ngModel)]="_productModel.soldOn"></ion-datetime>\n  </ion-item>\n  <ion-item>\n  <ion-label>Sold</ion-label>\n  <ion-toggle name="sold" [(ngModel)]="_productModel.sold"></ion-toggle>\n  <!-- <ion-input type="text" name="sold" [(ngModel)]="_productModel.sold"></ion-input> -->\n  </ion-item>\n  <button ion-button type="submit" block>Save Product</button>\n  </ion-list>\n</form>\n  <!-- <ion-card>\n		<ion-card-header>\n			Response\n		</ion-card-header>\n\n		<ion-card-content>\n			<b>{{data.response}}</b>\n		</ion-card-content>\n	</ion-card> -->\n</ion-content>\n'/*ion-inline-end:"/Users/ranjoysen/Documents/Node Drive/VenTory/web app/src/pages/add-product/add-product.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]) === "function" && _f || Object])
    ], AddProductPage);
    return AddProductPage;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=add-product.js.map

/***/ }),

/***/ 113:
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
webpackEmptyAsyncContext.id = 113;

/***/ }),

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/add-product/add-product.module": [
		281,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 155;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductMaker; });
var ProductMaker = /** @class */ (function () {
    function ProductMaker(event) {
        return {
            id: event.id,
            name: event.name,
            originalPrice: event.originalPrice,
            sellingPrice: event.sellingPrice,
            shippingCost: event.shippingCost,
            discount: event.discount,
            couponCode: event.couponCode,
            picture: event.picture,
            sold: event.sold,
            soldOn: event.soldOn
        };
    }
    return ProductMaker;
}());

//# sourceMappingURL=product.model.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_constants__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__add_product_add_product__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__model_product_product_model__ = __webpack_require__(157);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, restProvider, actionSheetCtrl, alertCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.restProvider = restProvider;
        this.actionSheetCtrl = actionSheetCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.products = [];
        this.addProductPage = __WEBPACK_IMPORTED_MODULE_4__add_product_add_product__["a" /* AddProductPage */];
        //
    }
    HomePage.prototype.loading = function (loadingText) {
        var loading = this.loadingCtrl.create({
            content: loadingText
        });
        return loading;
    };
    HomePage.prototype.getProducts = function () {
        var _this = this;
        var _loading = this.loading('Getting your products ... please wait');
        _loading.present();
        this
            .restProvider
            .getData(__WEBPACK_IMPORTED_MODULE_3__shared_constants__["a" /* ApiEndPoint */].PRODUCTS_ENSPOINT)
            .then(function (data) {
            _this.products = data;
            console.log(_this.products);
            _loading.dismiss();
        }, function (err) {
            _loading.dismiss();
            console.log(err);
        });
    };
    HomePage.prototype.itemTapped = function (product) {
        var _productModel = new __WEBPACK_IMPORTED_MODULE_5__model_product_product_model__["a" /* ProductMaker */]({
            id: product._id,
            name: product.name,
            originalPrice: product.originalPrice,
            sellingPrice: product.sellingPrice,
            shippingCost: product.shippingCost,
            discount: product.discount,
            couponCode: product.couponCode,
            picture: product.picture,
            sold: product.sold,
            soldOn: product.soldOn
        });
        this.presentActionSheet(_productModel);
    };
    HomePage.prototype.presentActionSheet = function (_productModel) {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Modify your product',
            buttons: [
                {
                    text: 'Update Product',
                    handler: function () {
                        _this
                            .navCtrl
                            .push(__WEBPACK_IMPORTED_MODULE_4__add_product_add_product__["a" /* AddProductPage */], {
                            data: _productModel,
                            operation: 'edit',
                        });
                    }
                },
                {
                    text: 'Delete Product',
                    handler: function () {
                        _this.deleteProduct(_productModel);
                    }
                },
                {
                    text: 'View Product',
                    handler: function () {
                        console.log('Destructive clicked');
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Destructive clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    HomePage.prototype.createNewProduct = function () {
        this
            .navCtrl
            .push(__WEBPACK_IMPORTED_MODULE_4__add_product_add_product__["a" /* AddProductPage */], {
            operation: 'new',
        });
    };
    HomePage.prototype.deleteProduct = function (_productModel) {
        var _this = this;
        this
            .restProvider
            .deleteData(__WEBPACK_IMPORTED_MODULE_3__shared_constants__["a" /* ApiEndPoint */].PRODUCTS_ENSPOINT + "/" + _productModel.id)
            .then(function (data) {
            var alert = _this.alertCtrl.create({
                title: 'Kuhak!',
                subTitle: 'Product deleted!',
                buttons: ['OK']
            });
            alert.present();
            _this.getProducts();
        });
    };
    HomePage.prototype.ionViewDidLoad = function () {
        //
    };
    HomePage.prototype.ionViewWillEnter = function () {
        this.getProducts();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/ranjoysen/Documents/Node Drive/VenTory/web app/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Products</ion-title>\n    <ion-buttons end>\n        <button (click)="createNewProduct()">\n            <ion-icon name="add"></ion-icon>\n      </button>\n      </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n    \n  <ion-list>\n    <button ion-item *ngFor="let product of products" (click)="itemTapped(product)">\n      <ion-icon [name]="product.picture" item-start></ion-icon>\n      {{product.name}}\n      <div class="item-note" item-end>\n        {{product.sellingPrice}}\n      </div>\n    </button>\n  </ion-list>\n  <!-- <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div> -->\n</ion-content>\n\n\n<!-- <ion-header>\n  <ion-navbar>\n  <ion-title>\n  Products\n  </ion-title>\n  </ion-navbar>\n </ion-header>\n \n <ion-content>\n  <ion-list inset>\n    <ion-item *ngFor="let product of products">\n      <h2>{{product.name}}</h2>\n      <p>{{product.sellingPrice}}</p>\n    </ion-item>\n  </ion-list>\n</ion-content> -->\n'/*ion-inline-end:"/Users/ranjoysen/Documents/Node Drive/VenTory/web app/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]) === "function" && _e || Object])
    ], HomePage);
    return HomePage;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(223);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_rest_rest__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_add_product_add_product__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










3005707074;
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_add_product_add_product__["a" /* AddProductPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/add-product/add-product.module#AddProductPageModule', name: 'AddProductPage', segment: 'add-product', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_add_product_add_product__["a" /* AddProductPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_8__providers_rest_rest__["a" /* RestProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(201);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/ranjoysen/Documents/Node Drive/VenTory/web app/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/ranjoysen/Documents/Node Drive/VenTory/web app/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiEndPoint; });
var ApiEndPoint;
(function (ApiEndPoint) {
    //HOST_ENSPOINT = 'http://localhost:3000',
    ApiEndPoint["HOST_ENSPOINT"] = "https://kuhak-lxdbqwsalt.now.sh";
    ApiEndPoint["PRODUCTS_ENSPOINT"] = "products";
})(ApiEndPoint || (ApiEndPoint = {}));
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Utils; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Utils = /** @class */ (function () {
    function Utils() {
        // this.timestamp = +new Date;
    }
    Utils.getRandonCouponPercentage = function (min, max) {
        var _randomRumber = Math.floor(Math.random() * (max - min + 1)) + min;
        return 'COUPON-CODE-' + _randomRumber;
    };
    Utils = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], Utils);
    return Utils;
}());

//# sourceMappingURL=utils.js.map

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_constants__ = __webpack_require__(282);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var RestProvider = /** @class */ (function () {
    function RestProvider(http) {
        this.http = http;
        console.log('Hello RestProvider Provider');
    }
    RestProvider.prototype.getData = function (_apiUrl) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_2__shared_constants__["a" /* ApiEndPoint */].HOST_ENSPOINT + '/' + _apiUrl).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    RestProvider.prototype.postData = function (_apiUrl, data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(__WEBPACK_IMPORTED_MODULE_2__shared_constants__["a" /* ApiEndPoint */].HOST_ENSPOINT + '/' + _apiUrl, data)
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    RestProvider.prototype.updateData = function (_apiUrl, data) {
        var _this = this;
        console.log(_apiUrl);
        return new Promise(function (resolve) {
            _this.http.put(__WEBPACK_IMPORTED_MODULE_2__shared_constants__["a" /* ApiEndPoint */].HOST_ENSPOINT + '/' + _apiUrl, data).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    RestProvider.prototype.deleteData = function (_apiUrl) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.delete(__WEBPACK_IMPORTED_MODULE_2__shared_constants__["a" /* ApiEndPoint */].HOST_ENSPOINT + '/' + _apiUrl).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    RestProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
    ], RestProvider);
    return RestProvider;
    var _a;
}());

//# sourceMappingURL=rest.js.map

/***/ })

},[202]);
//# sourceMappingURL=main.js.map