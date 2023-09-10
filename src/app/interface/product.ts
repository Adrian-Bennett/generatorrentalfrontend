import { supplier } from "./supplier";

export interface Product{
    productId: number;
    serialNumber: string;
    costPerDay: number;
    available: Boolean;
    supplierId: supplier

}