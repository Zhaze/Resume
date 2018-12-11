import { Component } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';

import { Info } from '../../data/infoClass'
import { INFO } from '../../data/info';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  info: Info = INFO;
  isSmallScreen: boolean;

  constructor(private breakpointObserver: BreakpointObserver) { }
  ngOnInit() {
    this.breakpointObserver.observe(['(max-width: 959px)']).subscribe((x): void => {
      this.isSmallScreen = x.matches;
    })
  }
}
