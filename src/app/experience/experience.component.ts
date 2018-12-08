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
  selectedJobs = new Array(this.experience.length);
  toggleSelectedJobs(i): void {
    this.selectedJobs[i] ? this.selectedJobs.splice(i, 1, false) : this.selectedJobs[i] = !this.selectedJobs[i];
  };

  constructor() {

  };

  ngOnInit() {
  };

};
