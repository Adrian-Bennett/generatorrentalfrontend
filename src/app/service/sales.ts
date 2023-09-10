import{Observable} from 'rxjs'
import {Injectable} from '@angular/core'
import {HttpClient, HttpClientModule} from '@angular/common/http'
import { sales } from '../interface/sales';


@Injectable({
    providedIn: 'root'

})
export class SalesService{
    private apiServiceUrl ='';

    constructor(private http: HttpClient){}

    public getSales(): Observable<sales[]>{
        return this.http.get<sales[]>('${this.apiServerUrl}/sales/getAll');
    }

    public addSales(sales: sales): Observable<sales> {
        return this.http.post<sales>('${this.apiServerUrl}/sales/create', sales);
    }

    public updateSales(sales: sales): Observable<sales> {
        return this.http.put<sales>('${this.apiServerUrl}/sales/update', sales);
    }

    public deleteSales(salesId: number): Observable<void> {
        return this.http.delete<void>('${this.apiServerUrl}/sales/delete/${salesId}');
    }


}