import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PremiumAndPenaltyXlsxPageComponent } from './premium-and-penalty-xlsx-page.component';
import { TitlePnpXlsxComponent } from './title-pnp-xlsx/title-pnp-xlsx.component';
import { PremiumAndPenaltyTableComponent } from './premium-and-penalty-table/premium-and-penalty-table.component';
import { SharedModule } from '../../../shared.module';
import {DataTableModule} from 'angular2-datatable';
import {DatatableRoutingModule} from '../../../views/tables/datatable/datatable-routing.module';
import {FormsModule} from '@angular/forms';
import { TabsModule } from 'ngx-bootstrap/tabs';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    DataTableModule,
    DatatableRoutingModule,
    FormsModule,
    TabsModule
  ],
  declarations: [PremiumAndPenaltyXlsxPageComponent, TitlePnpXlsxComponent, PremiumAndPenaltyTableComponent]
})
export class PremiumAndPenaltyXlsxPageModule { }
