import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as Constants from '../../utily/constants';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {

  constructor(public http: HttpClient) {
    console.log('Hello RestProvider Provider');
  }

  getData(_apiUrl) {
    return new Promise(resolve => {
      this.http.get(Constants.ApiEndPoint.HOST_ENSPOINT+'/'+_apiUrl).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  postData(_apiUrl, data) {
    return new Promise((resolve, reject) => {
      this.http.post(Constants.ApiEndPoint.HOST_ENSPOINT+'/'+_apiUrl, data)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  updateData(_apiUrl, data) {
    console.log(_apiUrl);
    return new Promise(resolve => {
      this.http.put(Constants.ApiEndPoint.HOST_ENSPOINT+'/'+_apiUrl, data).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  deleteData(_apiUrl) {
    return new Promise(resolve => {
      this.http.delete(Constants.ApiEndPoint.HOST_ENSPOINT+'/'+_apiUrl).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

}
