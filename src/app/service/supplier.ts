import{Observable} from 'rxjs'
import { supplier } from '../interface/supplier';
import {Injectable} from '@angular/core'
import {HttpClient, HttpClientModule} from '@angular/common/http'


@Injectable({
    providedIn: 'root'

})
export class SupplierService{
    private apiServiceUrl ='';

    constructor(private http: HttpClient){}

    public getSupplier(): Observable<supplier[]>{
        return this.http.get<supplier[]>('${this.apiServerUrl}/supplier/getAll');
    }

    public addSupplier(supplier: supplier): Observable<supplier> {
        return this.http.post<supplier>('${this.apiServerUrl}/product/create', supplier);
    }

    public updateSupplier(supplier: supplier): Observable<supplier> {
        return this.http.put<supplier>('${this.apiServerUrl}/supplier/update', supplier);
    }

    public deleteSupplier(supplierId: number): Observable<void> {
        return this.http.delete<void>('${this.apiServerUrl}/supplier/delete/${supplierId}');
    }


}