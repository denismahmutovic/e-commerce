export interface ITS {
  price: number;
  name: string;
  imgUrl: string;
  currency: string;
  onClick?: () => any;
}
export interface Context {
  children: any;
}

export interface Product {
  id: number;
  imgUrl: string;
  name: string;
  currency: string;
  price: number;
}

export interface CartProduct extends Product {
  quantity: number;
}
