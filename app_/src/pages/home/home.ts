import { Component } from '@angular/core';
import { NavController, NavParams, ActionSheetController, AlertController, LoadingController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';

import * as Constants from '../../utily/constants';
import { AddProductPage } from '../add-product/add-product';
import {ProductMaker} from '../../model/product/product.model';

@Component
(
    {
        selector: 'page-home',
        templateUrl: 'home.html'
    }
)

export class HomePage
{
    products:any = [];
    addProductPage = AddProductPage;
    
    constructor
    (
        public navCtrl          : NavController, 
        private restProvider    : RestProvider,
        public actionSheetCtrl  : ActionSheetController,
        public alertCtrl        : AlertController,
        public loadingCtrl      : LoadingController
    ) 
    {
        //
    }

    loading(loadingText:string):any
    {
        let loading = this.loadingCtrl.create
        (
            {
                content: loadingText
            }
        );
        return loading;
    }
    getProducts() : void
    {
        let _loading = this.loading('Getting your products ... please wait');
        _loading.present();

        this
            .restProvider
            .getData
            (
                Constants.ApiEndPoint.PRODUCTS_ENSPOINT
            )
            .then
            (
                data => 
                {
                    this.products = data;
                    console.log(this.products);
                    _loading.dismiss();
                },
				(err) => 
				{
                    _loading.dismiss();
					console.log(err);
				}
            );
    }

    itemTapped
    (
        product : any
    ) : void
    {
        let _productModel = new ProductMaker
        (
            {
                id              : product._id,
                name            : product.name,
                originalPrice   : product.originalPrice,
                sellingPrice    : product.sellingPrice,
                shippingCost    : product.shippingCost,
                discount        : product.discount,
                couponCode      :product.couponCode,
                picture         : product.picture,
                sold            :product.sold,
                soldOn          : product.soldOn
            }
        );

        this.presentActionSheet(_productModel)
        
    }

    presentActionSheet(_productModel : ProductMaker) 
    {
        let actionSheet = this.actionSheetCtrl.create
        (
            {
                title: 'Modify your product',
                buttons: 
                [
                    {
                        text: 'Update Product',
                        handler: () => 
                        {
                            this
                                .navCtrl
                                .push
                                (
                                    AddProductPage, 
                                    {
                                        data: _productModel,
                                        operation : 'edit',
                                    }
                                );
                        }
                    },
                    {
                        text: 'Delete Product',
                        handler: () => 
                        {
                            this.deleteProduct(_productModel);
                        }
                    },
                    {
                        text: 'View Product',
                        handler: () => 
                        {
                            console.log('Destructive clicked');
                        }
                    },
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: () => 
                        {
                            console.log('Destructive clicked');
                        }
                    }
                ]
            }
        );
        actionSheet.present();
    }

    createNewProduct():void
    {
        this
            .navCtrl
            .push
            (
                AddProductPage, 
                {
                    operation : 'new',
                }
            );   
    }

    deleteProduct
    (
        _productModel : ProductMaker
    ) :void
    {
        this
            .restProvider
            .deleteData
            (
                Constants.ApiEndPoint.PRODUCTS_ENSPOINT+"/"+_productModel.id, 
            )
            .then
            (
                data => 
                {
                    let alert = this.alertCtrl.create
                    (
                        {
                            title: 'Kuhak!',
                            subTitle: 'Product deleted!',
                            buttons: ['OK']
                        }
                    );
                    alert.present();
                    this.getProducts();
                }
            );
    }

    ionViewDidLoad() 
	{
        //
    }
    
    ionViewWillEnter()
    {
        this.getProducts();
    }
 
}