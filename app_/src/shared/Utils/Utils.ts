import {Injectable} from '@angular/core';

@Injectable()

export class Utils {

  constructor()
  {
   // this.timestamp = +new Date;
  }

  static getRandonCouponPercentage(min:number, max:number)
  {
    let _randomRumber = Math.floor( Math.random() * ( max - min + 1 ) ) + min;
    return 'COUPON-CODE-'+_randomRumber;
  }
}