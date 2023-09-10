import { Address } from "./address";
import { Job } from "./job";
import { User } from "./user";

export interface Employee{
    employeeId: number;
    firstName: string;
    lastName: string;
    contactNo: string;
    user: User;
    addressId: Address;
    jobId: Job;
}