import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { JobService } from '../job.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  job:any;

  constructor(private jobService: JobService, private router: Router) {

    this.loadAllJobs();
  }

  loadAllJobs(){
      this.jobService.getAllJobs().subscribe(jobs =>{
        this.job = jobs
        console.log(this.job);
        
      })
  }
  
  viewJobInfo(job){
    this.jobService.getOne(job);
    //this.router.navigate(["/job-info"]);
    
    this.router.navigateByUrl('/job-info', { state: job});
    
  
  }

}
