import{Observable} from 'rxjs'
import { Product } from '../interface/product';
import {Injectable} from '@angular/core'
import {HttpClient, HttpClientModule} from '@angular/common/http'


@Injectable({
    providedIn: 'root'

})
export class ProductService{
    private apiServiceUrl ='';

    constructor(private http: HttpClient){}

    public getProduct(): Observable<Product[]>{
        return this.http.get<Product[]>('${this.apiServerUrl}/product/getAll');
    }

    public addProduct(product: Product): Observable<Product> {
        return this.http.post<Product>('${this.apiServerUrl}/product/create', product);
    }

    public updateProduct(product: Product): Observable<Product> {
        return this.http.put<Product>('${this.apiServerUrl}/product/update', product);
    }

    public deleteProduct(productId: number): Observable<void> {
        return this.http.delete<void>('${this.apiServerUrl}/product/delete/${productId}');
    }


}