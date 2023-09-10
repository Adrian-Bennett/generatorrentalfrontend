import { calloutServices } from "./calloutServices";
import { Customer } from "./customer";
import { Employee } from "./employee";
import { Insurance } from "./insurance";
import { Product } from "./product";

export interface sales{

    salesId: number;
    totalCost: number;
    date: Date;
    product: Product
    insuranceId: Insurance;
    customerId: Customer;
    serviceId: calloutServices;
    employeeId: Employee;


}