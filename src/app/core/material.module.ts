import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatInputModule,
  MatToolbarModule,
  MatCardModule,
  MatProgressBarModule,
  MatChipsModule,
  MatSnackBarModule,
  MatDialogModule,
  MatTooltipModule,
  MatIconModule,
  MatSelectModule
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatInputModule,
    MatToolbarModule,
    MatCardModule,
    MatProgressBarModule,
    MatChipsModule,
    MatSnackBarModule,
    MatDialogModule,
    MatTooltipModule,
    MatIconModule,
    MatSelectModule
  ],
  exports: [
    MatButtonModule,
    MatInputModule,
    MatToolbarModule,
    MatCardModule,
    MatProgressBarModule,
    MatChipsModule,
    MatSnackBarModule,
    MatDialogModule,
    MatTooltipModule,
    MatIconModule,
    MatSelectModule
  ]
})
export class MaterialModule { }
