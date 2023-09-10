import { Employee } from "./employee";

export interface User{
    userId: number;
    userName: string;
    password: string;
    employee: Employee;
}