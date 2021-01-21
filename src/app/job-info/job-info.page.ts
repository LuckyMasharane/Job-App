import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-job-info',
  templateUrl: './job-info.page.html',
  styleUrls: ['./job-info.page.scss'],
})
export class JobInfoPage implements OnInit {

  job:any;

  constructor(private router: Router) { 
    this.router.getCurrentNavigation().extras.state
    this.job = history.state
  }

  ngOnInit() {
  }

  ViewProduct(job){
    this.router.navigateByUrl('/job-info', { state: job});
  }

}
