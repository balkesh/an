import { Injectable, ViewChild, OnInit } from '@angular/core';
import { NgxStepperComponent , StepperOptions } from 'ngx-stepper';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class StepperService implements OnInit {
  @ViewChild('stepperDemo')
  public steppers: NgxStepperComponent;
  public options: StepperOptions = {
    enableSvgIcon: true
  };

  public selectCampaign(): void {
    this.steppers.showFeedback('Checking, please wait ...');
    this.steppers.next();
  }

  public stepBack(): void {
    this.steppers.back();
  }
  constructor(private _iconRegistry: MatIconRegistry, private _sanitizer: DomSanitizer) { }

  public ngOnInit(): void {
    this._iconRegistry
      .addSvgIcon('step-done', this._sanitizer.bypassSecurityTrustResourceUrl('YOUR_ICON_URL'));
    this._iconRegistry
      .addSvgIcon('step-warning', this._sanitizer.bypassSecurityTrustResourceUrl('YOUR_ICON_URL'));
  }
}
