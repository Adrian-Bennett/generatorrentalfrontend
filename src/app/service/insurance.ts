import{Observable} from 'rxjs'
import {Injectable} from '@angular/core'
import {HttpClient, HttpClientModule} from '@angular/common/http'
import { Insurance } from '../interface/insurance';


@Injectable({
    providedIn: 'root'

})
export class InsuranceService{
    private apiServiceUrl ='';

    constructor(private http: HttpClient){}

    public getInsurance(): Observable<Insurance[]>{
        return this.http.get<Insurance[]>('${this.apiServerUrl}/insurance/getAll');
    }

    public addInsurance(Insurance: Insurance): Observable<Insurance> {
        return this.http.post<Insurance>('${this.apiServerUrl}/insurance/create', Insurance);
    }

    public updateInsurance(Insurance: Insurance): Observable<Insurance> {
        return this.http.put<Insurance>('${this.apiServerUrl}/insurance/update', Insurance);
    }

    public deleteInsurance(insuranceId: number): Observable<void> {
        return this.http.delete<void>('${this.apiServerUrl}/insurance/delete/${insuranceId}');
    }


}