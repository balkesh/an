import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PremiumAndPenaltyUploadComponent } from './premium-and-penalty-upload.component';
import { TitlePnpUploadComponent } from './title-pnp-upload/title-pnp-upload.component';
import { UploadFormComponent } from './upload-form/upload-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../../shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FileDropModule } from 'ngx-file-drop';
import { MatStepperModule } from '@angular/material';
import { BrowserAnimationsModule , NoopAnimationsModule} from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material';
import {MatInputModule} from '@angular/material';
import { MatSelectModule } from '@angular/material';

import { MatButtonModule, MatIconModule, MatProgressBarModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    FileDropModule,
    MatStepperModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatProgressBarModule
  ],
  providers: [
  ],
  declarations: [
    PremiumAndPenaltyUploadComponent,
    TitlePnpUploadComponent,
    UploadFormComponent
  ]
})
export class PremiumAndPenaltyUploadModule { }
