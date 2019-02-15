import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { JobListComponent } from './job-list/job-list.component';
import { JobCreateComponent } from './job-create/job-create.component';

import { AuthGuard } from './auth/auth.guard';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'signup',
    component: UserComponent,
    children: [{ path: '', component: SignUpComponent }],
  },
  {
    path: 'login',
    component: UserComponent,
    children: [{ path: '', component: SignInComponent }],
  },
  {
    path: 'userprofile',
    component: UserProfileComponent,
    canActivate: [AuthGuard],
  },
  { path: 'jobs', component: JobListComponent, canActivate: [AuthGuard] },
  { path: 'create', component: JobCreateComponent, canActivate: [AuthGuard] },
  { path: '**', component: PageNotFoundComponent },
];
