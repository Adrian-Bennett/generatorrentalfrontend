import{Observable} from 'rxjs'
import { User } from '../interface/user';
import {Injectable} from '@angular/core'
import {HttpClient, HttpClientModule} from '@angular/common/http'


@Injectable({
    providedIn: 'root'

})
export class UserService{
    private apiServiceUrl ='';

    constructor(private http: HttpClient){}

    public getUser(): Observable<User[]>{
        return this.http.get<User[]>('${this.apiServerUrl}/user/getAll');
    }

    public addUser(user: User): Observable<User> {
        return this.http.post<User>('${this.apiServerUrl}/user/create', user);
    }

    public updateUser(user: User): Observable<User> {
        return this.http.put<User>('${this.apiServerUrl}/user/update', user);
    }

    public deleteUser(userId: number): Observable<void> {
        return this.http.delete<void>('${this.apiServerUrl}/user/delete/${userId}');
    }


}