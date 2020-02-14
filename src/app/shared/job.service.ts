import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Job } from "./job.model";

import { environment } from "../../environments/environment";
@Injectable({
  providedIn: "root"
})
export class JobService {
  listedJob: Job = {
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

  jobs: Job[];
  constructor(private http: HttpClient) {}

  getJobList() {
    return this.http.get(
      `https://job-tracker-api-0.herokuapp.com/api/job/joblist`
    );
  }

  remove(id: string) {
    return this.http.delete(
      `https://job-tracker-api-0.herokuapp.com/api/job/delete/${id}`
    );
  }

  create(job: Job) {
    return this.http.post(
      `https://job-tracker-api-0.herokuapp.com/api/job/create`,
      job
    );
  }
}
