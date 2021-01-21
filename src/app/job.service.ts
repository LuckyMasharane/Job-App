import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor(private http:HttpClient) { }

  getAllJobs(){
    return this.http.get(`https://us-central1-mlab-challenge.cloudfunctions.net/jobs`);
  }

  getOne(id){
    return this.http.get(`https://us-central1-mlab-challenge.cloudfunctions.net/job?id=${id}`)
  }
}
