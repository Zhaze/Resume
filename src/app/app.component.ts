import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  title: string = 'Resume';
  theme: string = 'light';
  toggleTheme(x): void {
    console.log(x.theme);
    this.theme = x.theme;
  }
}
