import { Component } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  title: string = 'Resume';
  theme: string = 'light';
  toggleTheme(x): void {
    this.overlayContainer.getContainerElement().classList.remove(this.theme + '-theme');
    this.theme = x.theme;
    this.overlayContainer.getContainerElement().classList.add(this.theme + '-theme');
  }
  constructor(public overlayContainer: OverlayContainer) {
    overlayContainer.getContainerElement().classList.add(this.theme + '-theme');
  }
}
