import { Component, OnInit } from '@angular/core';
import { JobService } from '../shared/job.service';
import { Router } from '@angular/router';
import { Job } from '../shared/job.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css'],
})
export class JobListComponent implements OnInit {
  // jobs;
  constructor(private jobService: JobService, private router: Router) {}

  ngOnInit() {
    this.allJobs();
  }

  allJobs() {
    this.jobService.getJobList().subscribe(res => {
      this.jobService.jobs = res as Job[];
    });
  }

  deleteJob(id) {
    this.jobService.remove(id).subscribe(res => {
      this.allJobs();
    });
  }
}
