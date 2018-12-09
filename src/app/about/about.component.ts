import { Component, OnInit } from '@angular/core';
import { About } from '../../data/aboutClass';
import { ABOUT } from '../../data/about';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  about: About = ABOUT;
  constructor() { }

  ngOnInit() {
  }

}
