import { Route, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { NgModule } from '@angular/core';

const routes: Route[] = [
  {
    path: '',
    component: ProfileComponent,
  },
  {
    path: 'user-info',
    component: UserInfoComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [ProfileRouting],
})
export class ProfileRouting {}
