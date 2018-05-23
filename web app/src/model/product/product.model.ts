export interface ProductModel {
  id : string;
  name: String;
  originalPrice: Number;
  sellingPrice: Number;
  shippingCost: Number;
  discount: Number;
  couponCode:String;
  picture: String;
  sold:Boolean;
  soldOn : String;
}

export class ProductMaker {
  constructor(event: ProductModel) {
    return { 
      id : event.id,
      name: event.name,
      originalPrice: event.originalPrice,
      sellingPrice: event.sellingPrice,
      shippingCost: event.shippingCost,
      discount: event.discount,
      couponCode:event.couponCode,
      picture: event.picture,
      sold:event.sold,
      soldOn : event.soldOn
    };
  }
}