import{Observable} from 'rxjs'
import { Product } from '../interface/product';
import {Injectable} from '@angular/core'
import {HttpClient, HttpClientModule} from '@angular/common/http'
import { Address } from '../interface/address';

@Injectable({
    providedIn: 'root'

})
export class AddressService{
    private apiServiceUrl ='';

    constructor(private http: HttpClient){}

    public getAddress(): Observable<Address[]>{
        return this.http.get<Address[]>('${this.apiServerUrl}/address/getAll');
    }

    public addAddress(address: Address): Observable<Address> {
        return this.http.post<Address>('${this.apiServerUrl}/address/create', address);
    }

    public updateAddress(address: Address): Observable<Address> {
        return this.http.put<Address>('${this.apiServerUrl}/address/update', address);
    }

    public deleteAddress(addressId: number): Observable<void> {
        return this.http.delete<void>('${this.apiServerUrl}/address/delete/${addressId}');
    }


}
