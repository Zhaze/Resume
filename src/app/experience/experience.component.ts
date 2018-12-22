import { Component, OnInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';

import { Experience } from '../../data/experienceClass';
import { EXPERIENCE } from '../../data/experience';


@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  experience: Experience[] = EXPERIENCE;

  step: number = -1;

  setStep(index: number): void {
    this.step = index;
  }

  nextStep(): void {
    this.step++;
  }

  prevStep(): void {
    this.step--;
  }

  isSmallScreen: boolean;

  constructor(private breakpointObserver: BreakpointObserver) { }
  ngOnInit() {
    this.breakpointObserver.observe(['(max-width: 959px)']).subscribe((x): void => {
      this.isSmallScreen = x.matches;
    })
  }
};
