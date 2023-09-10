import { Address } from "./address";

export interface Customer{
    customerId: number;
    firstName: string;
    lastName: string;
    contactNo: string;
    email: string;
    addressId: Address;
    
}