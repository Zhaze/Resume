import { Component, OnInit } from '@angular/core';

import {
  trigger,
  style,
  animate,
  transition
} from '@angular/animations';

import { About } from '../../data/aboutClass';
import { ABOUT } from '../../data/about';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [
    trigger('slideInFromRight', [
      transition(':enter', [
        style({
          transform: 'translateX(-100%)',
          opacity: '0'
        }),
        animate('0.3s 0.7s ease-out')
      ])
    ]),
    trigger('fadeIn', [
      transition(':enter', [
        style({
          opacity: '0'
        }),
        animate('.5s 0s ease-out')
      ])
    ])
  ]
})
export class AboutComponent implements OnInit {
  about: About = ABOUT;

  constructor() { }

  ngOnInit() {
  }

}
