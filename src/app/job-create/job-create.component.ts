import { Component, OnInit } from "@angular/core";
import { JobService } from "../shared/job.service";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-job-create",
  templateUrl: "./job-create.component.html",
  styleUrls: ["./job-create.component.css"]
})
export class JobCreateComponent implements OnInit {
  constructor(public jobService: JobService, private router: Router) {}
  serverErrorMessage;
  ngOnInit() {}

  onSubmit(form: NgForm) {
    this.jobService.create(form.value).subscribe(
      res => {
        // this.jobService.listedJob = {
        // ...listedJob
        // };
        this.jobService.listedJob = {
          jobListingUrl: "",
          companyName: "",
          companyNameUrl: "",
          jobPosting: "",
          notes: "",
          location: "",
          personOfContact: "",
          personOfContactUrl: "",
          mailToLink: ""
        };
        this.router.navigateByUrl("/jobs");
      },
      err => {
        if (err) {
          this.serverErrorMessage = `Error!`;
        }
      }
    );
  }
}
