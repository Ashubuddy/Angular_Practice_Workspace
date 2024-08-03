import { Component } from '@angular/core';
import { BackToLastPage } from 'src/app/directives/backtolastpage/back-to-last-page.directive';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css'],
  standalone: true,
  imports: [BackToLastPage],
})
export class WorkComponent {
  constructor() {}
}
