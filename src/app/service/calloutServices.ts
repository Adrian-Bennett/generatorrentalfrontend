import{Observable} from 'rxjs'
import {Injectable} from '@angular/core'
import {HttpClient, HttpClientModule} from '@angular/common/http'
import { calloutServices } from '../interface/calloutServices';


@Injectable({
    providedIn: 'root'

})
export class InsuranceService{
    private apiServiceUrl ='';

    constructor(private http: HttpClient){}

    public getCalloutServices(): Observable<calloutServices[]>{
        return this.http.get<calloutServices[]>('${this.apiServerUrl}/calloutservice/getAll');
    }

    public addCalloutServices(calloutServices: calloutServices): Observable<calloutServices> {
        return this.http.post<calloutServices>('${this.apiServerUrl}/calloutservice/create', calloutServices);
    }

    public updateCalloutServices(calloutServices: calloutServices): Observable<calloutServices> {
        return this.http.put<calloutServices>('${this.apiServerUrl}/calloutservice/update', calloutServices);
    }

    public deleteCalloutServices(calloutServicesId: number): Observable<void> {
        return this.http.delete<void>('${this.apiServerUrl}/calloutservice/delete/${calloutServicesId}');
    }

}