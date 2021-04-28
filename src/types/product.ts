/**
 * Product data type interface for transfer product data
 */
export interface IProduct {
    title: string;
    sellPrice: number;
    price: number | null;
    image: string;
    cType: string;
    stockQty: number;
}

export interface ICategory {
    title: string;
    image: string;
}

export interface ICartedItem {
    product: IProduct;    //The Product Id
    cQty:number;    //Customer carted quantity
}
