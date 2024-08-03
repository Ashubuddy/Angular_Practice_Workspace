import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackToLastPage } from 'src/app/directives/backtolastpage/back-to-last-page.directive';
@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [CommonModule, BackToLastPage],
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css'],
})
export class PageNotFoundComponent {}
