import { NgModule} from '@angular/core';
import {HeaderComponent} from './views/custome-shared-components/header/header.component';
import { FooterComponent } from './views/custome-shared-components/footer/footer.component';
import {SidebarComponent} from './views/custome-shared-components/sidebar/sidebar.component';
import { CommonModule } from '@angular/common';
import { AppHeaderModule } from '@coreui/angular';
import { AppFooterModule } from '@coreui/angular';
import { AppSidebarModule } from '@coreui/angular';
import {LoginHeaderComponent} from './views/custome-shared-components/login-header/login-header.component';
import { DataFilterPipe } from './views/tables/datatable/datafilterpipe';
import { AppBreadcrumbModule } from '@coreui/angular';
import { Pipe, PipeTransform } from '@angular/core';
import { DataTableComponent } from './views/tables/datatable/datatable.component';
import {DatatableRoutingModule} from './views/tables/datatable/datatable-routing.module';
import {DataTableModule} from 'angular2-datatable';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';


@NgModule(
  {
    imports: [
      CommonModule ,
       AppHeaderModule ,
       AppFooterModule ,
       AppSidebarModule,
       AppBreadcrumbModule,
       DatatableRoutingModule,
       DataTableModule,
       FormsModule,
       HttpClientModule
      ],
    declarations: [
      HeaderComponent ,
      FooterComponent ,
      SidebarComponent ,
      LoginHeaderComponent ,
      DataFilterPipe,
      DataTableComponent
    ],
    exports: [
      HeaderComponent ,
      FooterComponent ,
      SidebarComponent ,
      LoginHeaderComponent ,
      DataFilterPipe,
      DataTableComponent
    ]
  }
)
export class SharedModule {
}
