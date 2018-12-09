import { Component, OnInit } from '@angular/core';

import { Experience } from '../../data/experienceClass';
import { EXPERIENCE } from '../../data/experience';


@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  experience: Experience[] = EXPERIENCE;

  step = -1;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  constructor() {

  };

  ngOnInit() {
  };

};
