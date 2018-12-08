import { Component, OnInit } from '@angular/core';
import { ABOUT } from './about';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  about: string = ABOUT;

  constructor() { }

  ngOnInit() {
  }

}
