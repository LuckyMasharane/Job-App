import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JobService } from '../job.service';

@Component({
  selector: 'app-job-info',
  templateUrl: './job-info.page.html',
  styleUrls: ['./job-info.page.scss'],
})
export class JobInfoPage implements OnInit {

  job:any;

  constructor(private router: Router, private jobService : JobService) { 
    this.router.getCurrentNavigation().extras.state
    this.job = history.state
    //this.view();
  }

  ngOnInit() {
  }

  // view(){
  //   this.jobService.getOne(this.job)
  // }


}
