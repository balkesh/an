import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleDashboardComponent } from './title-dashboard/title-dashboard.component';
import { TasksPendingComponent } from './tasks-pending/tasks-pending.component';
import { DashboardComponent } from './dashboard.component';
import { DescriptionDashboardComponent } from './description-dashboard/description-dashboard.component';
import { SharedModule } from '../../../shared.module';


@NgModule({
  imports: [
    CommonModule,
    CommonModule,
    SharedModule
  ],
  declarations: [
    TitleDashboardComponent,
    TasksPendingComponent,
    DashboardComponent,
    DescriptionDashboardComponent
  ]
})
export class DashboardModule { }
