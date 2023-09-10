import{Observable} from 'rxjs'
import {Injectable} from '@angular/core'
import {HttpClient, HttpClientModule} from '@angular/common/http'
import { Customer } from '../interface/customer';


@Injectable({
    providedIn: 'root'

})
export class CustomerService{
    private apiServiceUrl ='';

    constructor(private http: HttpClient){}

    public getCustomers(): Observable<Customer[]>{
        return this.http.get<Customer[]>('${this.apiServerUrl}/customer/getAll');
    }

    public addCustomer(Customer: Customer): Observable<Customer> {
        return this.http.post<Customer>('${this.apiServerUrl}/customer/create', Customer);
    }

    public updateCustomer(Customer: Customer): Observable<Customer> {
        return this.http.put<Customer>('${this.apiServerUrl}/customer/update', Customer);
    }

    public deleteCustomer(customerId: number): Observable<void> {
        return this.http.delete<void>('${this.apiServerUrl}/customer/delete/${customerId}');
    }


}