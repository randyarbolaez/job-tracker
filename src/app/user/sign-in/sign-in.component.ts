import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from '../../shared/user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
  constructor(private userService: UserService, private router: Router) {}

  model = {
    username: '',
    password: '',
  };

  serverErrorMessages: string;

  ngOnInit() {}

  onSubmit(form: NgForm) {
    this.userService.login(form.value).subscribe(
      res => {
        this.userService.setToken(res['token']);
        location.reload(true);
        this.router.navigateByUrl('/');
      },
      err => {
        this.serverErrorMessages = err.error.message;
      }
    );
  }
}
