import { Component } from '@angular/core';

import { MatDialog } from '@angular/material';

import { Info } from '../../data/infoClass'
import { INFO } from '../../data/info'

@Component({
  selector: 'references-side-nav',
  templateUrl: './references.component.side-nav.html',
  styleUrls: ['./references.component.scss']
})
export class ReferencesSideNav {
  constructor(public referencesDialog: MatDialog) {}

  openReferences(): void {
    this.referencesDialog.open(ReferencesDialog, {
      width: '250px'
    });
  }
}

@Component({
  selector: 'references-top-nav',
  templateUrl: './references.component.top-nav.html',
  styleUrls: ['./references.component.scss']
})
export class ReferencesTopNav {
  constructor(public referencesDialog: MatDialog) {}

  openReferences(): void {
    this.referencesDialog.open(ReferencesDialog, {
      width: '250px'
    });
  }
}

@Component({
  selector: 'app-references-dialog',
  templateUrl: './references.component.dialog.html',
  styleUrls: ['./references.component.scss']
})
export class ReferencesDialog {
  info: Info = INFO;
  constructor() {}
}
