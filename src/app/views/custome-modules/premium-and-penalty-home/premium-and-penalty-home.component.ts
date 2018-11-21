import { Component, Input } from '@angular/core';
import { navItems } from '../../../_nav';
import { HttpClient } from '@angular/common/http';
import { Pipe, PipeTransform } from '@angular/core';
import { DataTableComponent } from '../../tables/datatable/datatable.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// DataTable
import { DataTableModule } from 'angular2-datatable';
import { DataFilterPipe } from '../../tables/datatable/datafilterpipe';
import { FormsModule } from '@angular/forms';

// Routing
import { DatatableRoutingModule } from '../../tables/datatable/datatable-routing.module';
import { HttpClientModule } from '@angular/common/http';


@Component({
      selector: 'app-premium-and-penalty-home',
      templateUrl: './premium-and-penalty-home.component.html',
      styleUrls: ['./premium-and-penalty-home.component.scss']
})
export class PremiumAndPenaltyHomeComponent {
      public navItems = navItems;
      public sidebarMinimized = true;
      private changes: MutationObserver;
      public element: HTMLElement = document.body;

      public toInt(num: string) {
            return +num;
      }

      public sortByWordLength = (a: any) => {
            return a.name.length;
      }

      constructor() {
            this.changes = new MutationObserver((mutations) => {
                  this.sidebarMinimized = document.body.classList.contains('sidebar-minimized');
            });

            this.changes.observe(<Element>this.element, {
                  attributes: true
            });

            /*http.get('assets/data.json')
              .subscribe((data) => {
                setTimeout(() => {
                  this.data = data;
                }, 2000);
              });*/
      }
}
