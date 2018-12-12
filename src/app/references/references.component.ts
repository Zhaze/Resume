import { Component } from '@angular/core';

import { Info } from '../../data/infoClass'
import { INFO } from '../../data/info'

@Component({
  selector: 'app-references',
  templateUrl: './references.component.html',
  styleUrls: ['./references.component.scss']
})
export class ReferencesComponent {
  info: Info = INFO;
  constructor() {}
}
