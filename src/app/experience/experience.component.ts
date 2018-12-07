import { Component, OnInit } from '@angular/core';
import {NgbAccordionConfig} from '@ng-bootstrap/ng-bootstrap';
import { EXPERIENCE } from '../experience';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
  providers: [NgbAccordionConfig]
})
export class ExperienceComponent implements OnInit {
  experience = EXPERIENCE;
  constructor(config: NgbAccordionConfig) {
    config.closeOthers = false;
    config.type = 'dark';
  }

  ngOnInit() {
  }

}
