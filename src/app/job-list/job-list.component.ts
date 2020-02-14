import { Component, OnInit } from "@angular/core";
import { JobService } from "../shared/job.service";
import { Router } from "@angular/router";
import { Job } from "../shared/job.model";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-job-list",
  templateUrl: "./job-list.component.html",
  styleUrls: ["./job-list.component.css"]
})
export class JobListComponent implements OnInit {
  p;
  constructor(public jobService: JobService, private router: Router) {}

  ngOnInit() {
    this.myJobs();
  }

  myJobs() {
    this.jobService.getJobList().subscribe(({ allJobs }) => {
      this.jobService.jobs = allJobs as Job[];
    });
  }

  deleteJob(id) {
    this.jobService.remove(id).subscribe(res => {
      this.myJobs();
    });
  }
}
