import { Component, ViewChild } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';

import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Event, NavigationEnd, Router } from '@angular/router'
import { filter } from 'rxjs';
@UntilDestroy()

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls:  ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  opened=false;

  constructor(private observer: BreakpointObserver ,private router: Router) {}

  ngAfterViewInit() {
    this.observer
      .observe(['(max-width: 800px)'])
      .subscribe((res) => {
        if (res.matches) {
          this.sidenav.mode = 'over';
          this.sidenav.close();
        } else {
          this.sidenav.mode = 'side';
          this.sidenav.open();
        }
      });
      this.router.events

      .pipe(
        untilDestroyed(this),
        filter((event: Event) => event instanceof NavigationEnd))

    
      .subscribe(() => {
        if (this.sidenav.mode === 'over') {
          this.sidenav.close();
        }
      });
  }
}
    
  
