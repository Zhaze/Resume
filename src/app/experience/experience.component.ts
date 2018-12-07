import { Component, OnInit } from '@angular/core';
import { EXPERIENCE } from '../experience';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  experience = EXPERIENCE;
  constructor() {
  }

  ngOnInit() {
  }

}
