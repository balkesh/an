import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
// required for sidebar , header & footer to work
import { AppSidebarModule } from '@coreui/angular';
import { AppHeaderModule } from '@coreui/angular';
import { AppFooterModule } from '@coreui/angular';
import { AppBreadcrumbModule } from '@coreui/angular';
// required for popover
import { PopoversComponent } from '../../base/popovers.component';
import { PopoverModule } from 'ngx-bootstrap';
import {FontAwesomeComponent} from '../../icons/font-awesome.component';
import {SharedModule} from '../../../shared.module';
import {BaseModule} from '../../base/base.module';

@NgModule({
  imports: [
    CommonModule,
    AppBreadcrumbModule.forRoot(),
    AppHeaderModule,
    AppFooterModule,
    AppSidebarModule,
    PopoverModule.forRoot(),
    SharedModule,
    BaseModule
  ],
  declarations: [LoginComponent],
  bootstrap: [ LoginComponent ]
})
export class LoginModule { }
