import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { BackToLastPage } from 'src/app/directives/backtolastpage/back-to-last-page.directive';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  standalone: true,
  imports: [BackToLastPage, RouterModule, RouterOutlet],
})
export class ProfileComponent {
  constructor(private router: Router) {}

  public onClick() {
    this.router.navigateByUrl('user-Info');
  }
}
