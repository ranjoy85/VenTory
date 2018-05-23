import { Component } from '@angular/core';
import { IonicPage} from 'ionic-angular';
import { NavController, NavParams, ActionSheetController, AlertController, LoadingController } from 'ionic-angular';

import { RestProvider } from '../../providers/rest/rest';
import * as Constants from '../../shared/constants';
import { ProductMaker } from '../../model/product/product.model';
import { Utils } from '../../shared/utils';

/**
 * Generated class for the AddProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-product',
  templateUrl: 'add-product.html',
})
export class AddProductPage
{
  	_productModel = new ProductMaker
  	(
		{
			id 				: '',
			name			: '',
			originalPrice	: 0,
			sellingPrice	: 0,
			shippingCost	: 0,
			discount		: 0,
			couponCode		: Utils.getRandonCouponPercentage(10,20),
			picture			: '',
			sold			: false,
			soldOn			: ''
  		}
	);

  	constructor
  	(
		public navParams		: NavParams, 
        public navCtrl          : NavController, 
        private restProvider    : RestProvider,
        public actionSheetCtrl  : ActionSheetController,
        public alertCtrl        : AlertController,
        public loadingCtrl      : LoadingController
	) 
	{
		if(navParams.data.data)
		{
			this._productModel = navParams.data.data;
		}
	
		console.log(this._productModel);
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
	
	saveProduct() 
  	{
		if(this.navParams.data.operation == 'new')
		{
			this.createProduct();
		}
		else{
			this.updateProduct();
		}
	}
	
	updateProduct() 
  	{
		let _loading = this.loading('Updating your product ... please wait');
        _loading.present();
		this
			.restProvider
			.updateData
			(
				Constants.ApiEndPoint.PRODUCTS_ENSPOINT+"/"+this._productModel.id,
				this._productModel
			)
			.then
			(
				data => 
				{
					let alert = this.alertCtrl.create
					(
						{
							title: 'Kuhak!',
							subTitle: 'Product updated!',
							buttons: ['OK']
						}
					);
					alert.present();
					_loading.dismiss();
					this.navCtrl.pop();
				}
			);
    }

	createProduct()
	{
		this
			.restProvider
			.postData
			(
				Constants.ApiEndPoint.PRODUCTS_ENSPOINT,
				this._productModel
			)
			.then
			(
				data => 
				{
					let alert = this.alertCtrl.create
					(
						{
							title: 'Kuhak!',
							subTitle: 'Product created!',
							buttons: ['OK']
						}
					);
					alert.present();
					this.navCtrl.pop();
				},
				(err) => 
				{
					console.log(err);
				}
			);
  	}
	ionViewDidLoad() 
	{
    	console.log('ionViewDidLoad AddProductPage');
  	}
}	
