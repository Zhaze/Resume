import { Component, OnInit } from '@angular/core';
import { Experience } from './experienceClass';
import { EXPERIENCE } from './experience';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  experience: Experience[] = EXPERIENCE;
  shadow = new Array(this.experience.length);
  toggleShadow(i): void {
    this.shadow[i] ? this.shadow.splice(i, 1, false) : this.shadow[i] = !this.shadow[i];
  };

  constructor() {

  };

  ngOnInit() {
  };

};
