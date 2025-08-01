import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnDestroy {
  currentRoute: string = '';
  private subscription: Subscription;

  constructor(private router: Router) {
    this.subscription = this.router.events.subscribe(() => {
      this.currentRoute = this.router.url;
    });
  }

  goTo(path: string): void {
    this.router.navigate([path]);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}