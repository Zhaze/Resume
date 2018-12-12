import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ReferencesComponent } from './references.component'

@Injectable({
  providedIn: 'root'
})
export class ReferencesService {
  constructor(public referencesDialog: MatDialog) {}

  openReferences(): void {
    this.referencesDialog.open(ReferencesComponent, {
      restoreFocus: false,
      autoFocus: false
    });
  }
}
