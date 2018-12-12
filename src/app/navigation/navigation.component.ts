import { Component, EventEmitter, Output } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';

import { ReferencesService } from '../references/references.service';

import { Info } from '../../data/infoClass'
import { INFO } from '../../data/info';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  theme: string = 'light';
  info: Info = INFO;
  isSmallScreen: boolean;
  @Output() themeToggle = new EventEmitter<any>();
  toggle(): void {
    this.theme === "light" ? this.theme = 'dark' :  this.theme = 'light';
    this.themeToggle.emit({theme: this.theme});
  }
  getReferences(): void {
    this.referencesService.openReferences();
  }
  constructor(private breakpointObserver: BreakpointObserver,
              private referencesService: ReferencesService) {}
  ngOnInit() {
    this.breakpointObserver.observe(['(max-width: 959px)']).subscribe((x): void => {
      this.isSmallScreen = x.matches;
    })
  }
}
