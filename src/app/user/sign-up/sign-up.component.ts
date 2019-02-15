import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { UserService } from '../../shared/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  serverErrorMessage: string;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {}

  resetForm(form: NgForm) {
    this.userService.selectedUser = {
      username: '',
      password: '',
    };
    form.resetForm();
  }

  onSubmit(form: NgForm) {
    this.userService.postUser(form.value).subscribe(
      res => {
        this.resetForm(form);
        this.router.navigateByUrl('/login');
      },
      err => {
        if (err) {
          this.serverErrorMessage = `Username is taken!`;
        }
      }
    );
  }
}
