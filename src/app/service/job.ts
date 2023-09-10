import{Observable} from 'rxjs'
import { Job } from '../interface/job';
import {Injectable} from '@angular/core'
import {HttpClient, HttpClientModule} from '@angular/common/http'


@Injectable({
    providedIn: 'root'

})
export class JobService{
    private apiServiceUrl ='';

    constructor(private http: HttpClient){}

    public getJob(): Observable<Job[]>{
        return this.http.get<Job[]>('${this.apiServerUrl}/job/getAll');
    }

    public addJob(job: Job): Observable<Job> {
        return this.http.post<Job>('${this.apiServerUrl}/job/create', job);
    }

    public updateJob(job: Job): Observable<Job> {
        return this.http.put<Job>('${this.apiServerUrl}/job/update',job );
    }

    public deleteJob(jobId: number): Observable<void> {
        return this.http.delete<void>('${this.apiServerUrl}/job/delete/${jobId}');
    }
}