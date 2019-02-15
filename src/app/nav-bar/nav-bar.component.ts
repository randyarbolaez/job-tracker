import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  userDetails;
  constructor(private userService: UserService, private route: Router) {}

  ngOnInit() {
    if (this.userService.isLoggedIn()) {
      this.userService.getUserProfile().subscribe(
        res => {
          this.userDetails = res['user'];
        },
        err => {}
      );
    }
  }

  onLogout() {
    this.userService.deleteToken();
    location.reload(true);
    this.route.navigateByUrl('/');
  }
}
