import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  title: string = 'Resume';
  theme: string = 'light';
  toggleTheme(): void {
    this.theme === 'light' ? this.theme = 'dark' : this.theme = 'light';
  }
}
