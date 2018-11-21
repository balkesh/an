import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PremiumAndPenaltyHomeComponent } from './premium-and-penalty-home.component';
import { TitlePnpHomeComponent } from './title-pnp-home/title-pnp-home.component';
import { TransactionsTableComponent } from './transactions-table/transactions-table.component';
import { SharedModule } from '../../../shared.module';
import {DataTableModule} from 'angular2-datatable';
import {DatatableRoutingModule} from '../../../views/tables/datatable/datatable-routing.module';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    DataTableModule,
    DatatableRoutingModule,
    FormsModule
  ],
  declarations: [
    PremiumAndPenaltyHomeComponent,
    TitlePnpHomeComponent,
    TransactionsTableComponent
  ]
})
export class PremiumAndPenaltyHomeModule { }
