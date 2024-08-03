import { Directive, HostListener, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Directive({
  selector: '[backTo]',
  standalone: true,
})
export class BackToLastPage {
  private previousUrl: string;
  private currentUrl: string;
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    this.previousUrl = '';
    this.currentUrl = '';

    // this.previousUrl = this.router.split('?')[0].split('/').pop() || '';

    console.log(this.previousUrl);
  }

  @Input() routeUrl: string = 'work';

  @HostListener('click')
  clicked() {
    this.router.navigateByUrl(this.previousUrl);

    console.log('button clicked', this.activatedRoute.snapshot);
  }
}
