import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http'; 


import { MyApp } from './app.component';
import { BasePage } from '../pages/base/base';
import { HomePage } from '../pages/home/home';
import { RestProvider } from '../providers/rest/rest';
import { AddProductPage } from '../pages/add-product/add-product';

3005707074

@NgModule({
  declarations: [
    MyApp,
    BasePage,
    HomePage,
    AddProductPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    BasePage,
    HomePage,
    AddProductPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    RestProvider
  ]
})
export class AppModule {}
