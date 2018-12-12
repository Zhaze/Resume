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
  @Output() themeToggle = new EventEmitter<boolean>();
  toggle(): void {
    this.themeToggle.emit();
  }
  info: Info = INFO;
  isSmallScreen: boolean;
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
