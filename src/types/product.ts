export interface IProduct {
    productId: string;
    title: string;
    titleSin: string;
    sellPrice: number;
    price: number | null;
    image: string;
    cType: string;
    stockQty: number;
}
