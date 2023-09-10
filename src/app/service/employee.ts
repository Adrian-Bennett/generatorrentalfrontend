import{Observable} from 'rxjs'
import {Injectable} from '@angular/core'
import {HttpClient, HttpClientModule} from '@angular/common/http'
import { Employee } from '../interface/employee';


@Injectable({
    providedIn: 'root'

})
export class SalesService{
    private apiServiceUrl ='';

    constructor(private http: HttpClient){}

    public getEmployee(): Observable<Employee[]>{
        return this.http.get<Employee[]>('${this.apiServerUrl}/employee/getAll');
    }

    public addEmployee(employee: Employee): Observable<Employee> {
        return this.http.post<Employee>('${this.apiServerUrl}/employee/create', employee);
    }

    public updateEmployee(employee: Employee): Observable<Employee> {
        return this.http.put<Employee>('${this.apiServerUrl}/employee/update', employee);
    }

    public deleteEmployee(employeeId: number): Observable<void> {
        return this.http.delete<void>('${this.apiServerUrl}/employee/delete/${employeeId}');
    }


}