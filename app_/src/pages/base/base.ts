import { Component } from '@angular/core';
import { NavController, NavParams, ActionSheetController, AlertController, LoadingController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';

import * as Constants from '../../utily/constants';

@Component
(
    {
        selector: 'page-base',
        templateUrl: 'base.html'
    }
)

export class BasePage
{
    _loading : any;
    _constant : any;

    constructor
    (
        public navParams		    : NavParams, 
        public navCtrl          : NavController, 
        private restProvider    : RestProvider,
        public actionSheetCtrl  : ActionSheetController,
        public alertCtrl        : AlertController,
        public loadingCtrl      : LoadingController
    ) 
    {
      this._constant = Constants;      
    }

    loading(loadingText:string):any
    {
        this._loading = this.loadingCtrl.create
        (
            {
                content: loadingText
            }
        );
        return this._loading;
    }
    ionViewDidLoad() 
	  {
        //
    }
    
    ionViewWillEnter()
    {
        //this.getProducts();
    }
 
}