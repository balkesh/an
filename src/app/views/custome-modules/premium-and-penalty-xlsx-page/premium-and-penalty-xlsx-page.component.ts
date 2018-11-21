import { Component, OnInit } from '@angular/core';
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

import { TabsModule } from 'ngx-bootstrap/tabs';

@Component({
  selector: 'app-premium-and-penalty-xlsx-page',
  templateUrl: './premium-and-penalty-xlsx-page.component.html',
  styleUrls: ['./premium-and-penalty-xlsx-page.component.scss']
})
export class PremiumAndPenaltyXlsxPageComponent implements OnInit {
  public navItems = navItems;
  public sidebarMinimized = true;
  private changes: MutationObserver;
  public element: HTMLElement = document.body;
  public data;
  public filterQuery = '';

  public btnValue = 'No action';


  tabs = [
    {
      label: 'Premium and Penalty Data',
      /* content: this.getNumbers()*/
      index: 0
    },
    {
      label: 'History Data',
      index: 1
    },
    {
      label: 'Performance Data',
      index: 2
    }
  ];
  constructor() {
    this.data = [{
      'Pool': 'Panamax',
      'Start': '12/3/2018 09:00 AM',
      'End': '12/3/2018 09:00 AM',
      'Desc': 'Panamax PnP S1 2018',
      'Status': 15,
      'StatusString': 'Incomplete',
      'Steps': [
        {
          'By': 'GF',
          'At': '12/3/2018 12:30 PM'
        },
        {
          'By': 'GF',
          'At': '12/3/2018 12:30 PM'
        },
        {
          'By': 'GF',
          'At': '12/3/2018 12:30 PM'
        },
        {
          'By': 'GF',
          'At': '12/3/2018 12:30 PM'
        }
      ],
      'TxnId': 123,
      'RulesSet': 'rules1'
    },
    {
      'Pool': 'Handymax',
      'Start': '12/3/2018 09:00 AM',
      'End': '12/3/2018 09:00 AM',
      'Desc': 'Handymax PnP S1 2018',
      'Status': 3,
      'StatusString': 'Incomplete',
      'Steps': [
        {
          'By': 'GF',
          'At': '12/3/2018 12:30 PM'
        },
        {
          'By': 'GF',
          'At': '12/3/2018 12:30 PM'
        },
        {
          'By': 'GF',
          'At': '12/3/2018 12:30 PM'
        },
        {
          'By': 'GF',
          'At': '12/3/2018 12:30 PM'
        }
      ],
      'TxnId': 123,
      'RulesSet': 'rules1'
    },
    {
      'Pool': 'Aframax',
      'Start': '12/3/2018 09:00 AM',
      'End': '12/3/2018 09:00 AM',
      'Desc': 'Aframax PnP S1 2018 Recalculation',
      'Status': 31,
      'StatusString': 'Pending',
      'Steps': [
        {
          'By': 'GF',
          'At': '12/3/2018 12:30 PM'
        },
        {
          'By': 'GF',
          'At': '12/3/2018 12:30 PM'
        },
        {
          'By': 'GF',
          'At': '12/3/2018 12:30 PM'
        },
        {
          'By': 'GF',
          'At': '12/3/2018 12:30 PM'
        }
      ],
      'TxnId': 123,
      'RulesSet': 'rules1'
    },
    {
      'Pool': 'Aframax',
      'Start': '12/3/2018 09:00 AM',
      'End': '12/3/2018 09:00 AM',
      'Desc': 'Aframax PnP S1 2018',
      'Status': 63,
      'StatusString': 'Complete',
      'Steps': [
        {
          'By': 'GF',
          'At': '12/3/2018 12:30 PM'
        },
        {
          'By': 'GF',
          'At': '12/3/2018 12:30 PM'
        },
        {
          'By': 'GF',
          'At': '12/3/2018 12:30 PM'
        },
        {
          'By': 'GF',
          'At': '12/3/2018 12:30 PM'
        }
      ],
      'TxnId': 123,
      'RulesSet': 'rules1'
    },
    {
      'Pool': 'Mid Range',
      'Start': '12/3/2018 09:00 AM',
      'End': '12/3/2018 09:00 AM',
      'Desc': 'Mid Range PnP S1 2018',
      'Status': 31,
      'StatusString': 'Pending',
      'Steps': [
        {
          'By': 'GF',
          'At': '12/3/2018 12:30 PM'
        },
        {
          'By': 'GF',
          'At': '12/3/2018 12:30 PM'
        },
        {
          'By': 'GF',
          'At': '12/3/2018 12:30 PM'
        },
        {
          'By': 'GF',
          'At': '12/3/2018 12:30 PM'
        }
      ],
      'TxnId': 123,
      'RulesSet': 'rules1'
    },
    {
      'Pool': 'Panamax Dry',
      'Start': '12/3/2018 09:00 AM',
      'End': '12/3/2018 09:00 AM',
      'Desc': 'Panamax Dry PnP S1 2018',
      'Status': 5,
      'StatusString': 'Incomplete',
      'Steps': [
        {
          'By': 'GF',
          'At': '12/3/2018 12:30 PM'
        },
        {
          'By': 'GF',
          'At': '12/3/2018 12:30 PM'
        },
        {
          'By': 'GF',
          'At': '12/3/2018 12:30 PM'
        },
        {
          'By': 'GF',
          'At': '12/3/2018 12:30 PM'
        }
      ],
      'TxnId': 123,
      'RulesSet': 'rules1'
    },
    {
      'Pool': 'Ultramax Dry',
      'Start': '12/3/2018 09:00 AM',
      'End': '12/3/2018 09:00 AM',
      'Desc': 'Ultramax Dry PnP S1 2018',
      'Status': 63,
      'StatusString': 'Complete',
      'Steps': [
        {
          'By': 'GF',
          'At': '12/3/2018 12:30 PM'
        },
        {
          'By': 'GF',
          'At': '12/3/2018 12:30 PM'
        },
        {
          'By': 'GF',
          'At': '12/3/2018 12:30 PM'
        },
        {
          'By': 'GF',
          'At': '12/3/2018 12:30 PM'
        }
      ],
      'TxnId': 123,
      'RulesSet': 'rules1'
    },
    {
      'Pool': 'Panamax',
      'Start': '12/3/2018 09:00 AM',
      'End': '12/3/2018 09:00 AM',
      'Desc': 'Panamax PnP S2 2017',
      'Status': 31,
      'StatusString': 'Pending',
      'Steps': [
        {
          'By': 'GF',
          'At': '12/3/2018 12:30 PM'
        },
        {
          'By': 'GF',
          'At': '12/3/2018 12:30 PM'
        },
        {
          'By': 'GF',
          'At': '12/3/2018 12:30 PM'
        },
        {
          'By': 'GF',
          'At': '12/3/2018 12:30 PM'
        }
      ],
      'TxnId': 123,
      'RulesSet': 'rules1'
    },
    {
      'Pool': 'Handymax',
      'Start': '12/3/2018 09:00 AM',
      'End': '12/3/2018 09:00 AM',
      'Desc': 'Handymax PnP S2 2017',
      'Status': 63,
      'StatusString': 'Complete',
      'Steps': [
        {
          'By': 'GF',
          'At': '12/3/2018 12:30 PM'
        },
        {
          'By': 'GF',
          'At': '12/3/2018 12:30 PM'
        },
        {
          'By': 'GF',
          'At': '12/3/2018 12:30 PM'
        },
        {
          'By': 'GF',
          'At': '12/3/2018 12:30 PM'
        }
      ],
      'TxnId': 123,
      'RulesSet': 'rules1'
    },
    {
      'Pool': 'Aframax',
      'Start': '12/3/2018 09:00 AM',
      'End': '12/3/2018 09:00 AM',
      'Desc': 'Aframax PnP S2 2017',
      'Status': 63,
      'StatusString': 'Complete',
      'Steps': [
        {
          'By': 'GF',
          'At': '12/3/2018 12:30 PM'
        },
        {
          'By': 'GF',
          'At': '12/3/2018 12:30 PM'
        },
        {
          'By': 'GF',
          'At': '12/3/2018 12:30 PM'
        },
        {
          'By': 'GF',
          'At': '12/3/2018 12:30 PM'
        }
      ],
      'TxnId': 123,
      'RulesSet': 'rules1'
    },
    {
      'Pool': 'Mid Range',
      'Start': '12/3/2018 09:00 AM',
      'End': '12/3/2018 09:00 AM',
      'Desc': 'Mid Range PnP S2 2017',
      'Status': 63,
      'StatusString': 'Complete',
      'Steps': [
        {
          'By': 'GF',
          'At': '12/3/2018 12:30 PM'
        },
        {
          'By': 'GF',
          'At': '12/3/2018 12:30 PM'
        },
        {
          'By': 'GF',
          'At': '12/3/2018 12:30 PM'
        },
        {
          'By': 'GF',
          'At': '12/3/2018 12:30 PM'
        }
      ],
      'TxnId': 123,
      'RulesSet': 'rules1'
    },
    {
      'Pool': 'Panamax Dry',
      'Start': '12/3/2018 09:00 AM',
      'End': '12/3/2018 09:00 AM',
      'Desc': 'Panamax Dry PnP S2 2017',
      'Status': 63,
      'StatusString': 'Complete',
      'Steps': [
        {
          'By': 'GF',
          'At': '12/3/2018 12:30 PM'
        },
        {
          'By': 'GF',
          'At': '12/3/2018 12:30 PM'
        },
        {
          'By': 'GF',
          'At': '12/3/2018 12:30 PM'
        },
        {
          'By': 'GF',
          'At': '12/3/2018 12:30 PM'
        }
      ],
      'TxnId': 123,
      'RulesSet': 'rules1'
    },
    {
      'Pool': 'Ultramax Dry',
      'Start': '12/3/2018 09:00 AM',
      'End': '12/3/2018 09:00 AM',
      'Desc': 'Ultramax Dry PnP S2 2017',
      'Status': 63,
      'StatusString': 'Complete',
      'Steps': [
        {
          'By': 'GF',
          'At': '12/3/2018 12:30 PM'
        },
        {
          'By': 'GF',
          'At': '12/3/2018 12:30 PM'
        },
        {
          'By': 'GF',
          'At': '12/3/2018 12:30 PM'
        },
        {
          'By': 'GF',
          'At': '12/3/2018 12:30 PM'
        }
      ],
      'TxnId': 123,
      'RulesSet': 'rules1'
    },
    {
      'Pool': 'Panamax',
      'Start': '12/3/2018 09:00 AM',
      'End': '12/3/2018 09:00 AM',
      'Desc': 'Panamax PnP S1 2017',
      'Status': 63,
      'StatusString': 'Complete',
      'Steps': [
        {
          'By': 'GF',
          'At': '12/3/2018 12:30 PM'
        },
        {
          'By': 'GF',
          'At': '12/3/2018 12:30 PM'
        },
        {
          'By': 'GF',
          'At': '12/3/2018 12:30 PM'
        },
        {
          'By': 'GF',
          'At': '12/3/2018 12:30 PM'
        }
      ],
      'TxnId': 123,
      'RulesSet': 'rules1'
    },
    {
      'Pool': 'Handymax',
      'Start': '12/3/2018 09:00 AM',
      'End': '12/3/2018 09:00 AM',
      'Desc': 'Handymax PnP S1 2017',
      'Status': 63,
      'StatusString': 'Complete',
      'Steps': [
        {
          'By': 'GF',
          'At': '12/3/2018 12:30 PM'
        },
        {
          'By': 'GF',
          'At': '12/3/2018 12:30 PM'
        },
        {
          'By': 'GF',
          'At': '12/3/2018 12:30 PM'
        },
        {
          'By': 'GF',
          'At': '12/3/2018 12:30 PM'
        }
      ],
      'TxnId': 123,
      'RulesSet': 'rules1'
    },
    {
      'Pool': 'Aframax',
      'Start': '12/3/2018 09:00 AM',
      'End': '12/3/2018 09:00 AM',
      'Desc': 'Aframax PnP S1 2017',
      'Status': 63,
      'StatusString': 'Complete',
      'Steps': [
        {
          'By': 'GF',
          'At': '12/3/2018 12:30 PM'
        },
        {
          'By': 'GF',
          'At': '12/3/2018 12:30 PM'
        },
        {
          'By': 'GF',
          'At': '12/3/2018 12:30 PM'
        },
        {
          'By': 'GF',
          'At': '12/3/2018 12:30 PM'
        }
      ],
      'TxnId': 123,
      'RulesSet': 'rules1'
    },
    {
      'Pool': 'Mid Range',
      'Start': '12/3/2018 09:00 AM',
      'End': '12/3/2018 09:00 AM',
      'Desc': 'Mid Range PnP S1 2017',
      'Status': 63,
      'StatusString': 'Complete',
      'Steps': [
        {
          'By': 'GF',
          'At': '12/3/2018 12:30 PM'
        },
        {
          'By': 'GF',
          'At': '12/3/2018 12:30 PM'
        },
        {
          'By': 'GF',
          'At': '12/3/2018 12:30 PM'
        },
        {
          'By': 'GF',
          'At': '12/3/2018 12:30 PM'
        }
      ],
      'TxnId': 123,
      'RulesSet': 'rules1'
    },
    {
      'Pool': 'Panamax Dry',
      'Start': '12/3/2018 09:00 AM',
      'End': '12/3/2018 09:00 AM',
      'Desc': 'Panamax Dry PnP S1 2017',
      'Status': 63,
      'StatusString': 'Complete',
      'Steps': [
        {
          'By': 'GF',
          'At': '12/3/2018 12:30 PM'
        },
        {
          'By': 'GF',
          'At': '12/3/2018 12:30 PM'
        },
        {
          'By': 'GF',
          'At': '12/3/2018 12:30 PM'
        },
        {
          'By': 'GF',
          'At': '12/3/2018 12:30 PM'
        }
      ],
      'TxnId': 123,
      'RulesSet': 'rules1'
    },
    {
      'Pool': 'Ultramax Dry',
      'Start': '12/3/2018 09:00 AM',
      'End': '12/3/2018 09:00 AM',
      'Desc': 'Ultramax Dry PnP S1 2017',
      'Status': 63,
      'StatusString': 'Complete',
      'Steps': [
        {
          'By': 'GF',
          'At': '12/3/2018 12:30 PM'
        },
        {
          'By': 'GF',
          'At': '12/3/2018 12:30 PM'
        },
        {
          'By': 'GF',
          'At': '12/3/2018 12:30 PM'
        },
        {
          'By': 'GF',
          'At': '12/3/2018 12:30 PM'
        }
      ],
      'TxnId': 123,
      'RulesSet': 'rules1'
    },
    {
      'Pool': 'Panamax',
      'Start': '12/3/2018 09:00 AM',
      'End': '12/3/2018 09:00 AM',
      'Desc': 'Panamax PnP S2 2016',
      'Status': 63,
      'StatusString': 'Complete',
      'Steps': [
        {
          'By': 'GF',
          'At': '12/3/2018 12:30 PM'
        },
        {
          'By': 'GF',
          'At': '12/3/2018 12:30 PM'
        },
        {
          'By': 'GF',
          'At': '12/3/2018 12:30 PM'
        },
        {
          'By': 'GF',
          'At': '12/3/2018 12:30 PM'
        }
      ],
      'TxnId': 123,
      'RulesSet': 'rules1'
    },
    {
      'Pool': 'Handymax',
      'Start': '12/3/2018 09:00 AM',
      'End': '12/3/2018 09:00 AM',
      'Desc': 'Handymax PnP S2 2016',
      'Status': 63,
      'StatusString': 'Complete',
      'Steps': [
        {
          'By': 'GF',
          'At': '12/3/2018 12:30 PM'
        },
        {
          'By': 'GF',
          'At': '12/3/2018 12:30 PM'
        },
        {
          'By': 'GF',
          'At': '12/3/2018 12:30 PM'
        },
        {
          'By': 'GF',
          'At': '12/3/2018 12:30 PM'
        }
      ],
      'TxnId': 123,
      'RulesSet': 'rules1'
    },
    {
      'Pool': 'Aframax',
      'Start': '12/3/2018 09:00 AM',
      'End': '12/3/2018 09:00 AM',
      'Desc': 'Aframax PnP S2 2016',
      'Status': 63,
      'StatusString': 'Complete',
      'Steps': [
        {
          'By': 'GF',
          'At': '12/3/2018 12:30 PM'
        },
        {
          'By': 'GF',
          'At': '12/3/2018 12:30 PM'
        },
        {
          'By': 'GF',
          'At': '12/3/2018 12:30 PM'
        },
        {
          'By': 'GF',
          'At': '12/3/2018 12:30 PM'
        }
      ],
      'TxnId': 123,
      'RulesSet': 'rules1'
    },
    {
      'Pool': 'Mid Range',
      'Start': '12/3/2018 09:00 AM',
      'End': '12/3/2018 09:00 AM',
      'Desc': 'Mid Range PnP S2 2016',
      'Status': 63,
      'StatusString': 'Complete',
      'Steps': [
        {
          'By': 'GF',
          'At': '12/3/2018 12:30 PM'
        },
        {
          'By': 'GF',
          'At': '12/3/2018 12:30 PM'
        },
        {
          'By': 'GF',
          'At': '12/3/2018 12:30 PM'
        },
        {
          'By': 'GF',
          'At': '12/3/2018 12:30 PM'
        }
      ],
      'TxnId': 123,
      'RulesSet': 'rules1'
    },
    {
      'Pool': 'Panamax Dry',
      'Start': '12/3/2018 09:00 AM',
      'End': '12/3/2018 09:00 AM',
      'Desc': 'Panamax Dry PnP S2 2016',
      'Status': 63,
      'StatusString': 'Complete',
      'Steps': [
        {
          'By': 'GF',
          'At': '12/3/2018 12:30 PM'
        },
        {
          'By': 'GF',
          'At': '12/3/2018 12:30 PM'
        },
        {
          'By': 'GF',
          'At': '12/3/2018 12:30 PM'
        },
        {
          'By': 'GF',
          'At': '12/3/2018 12:30 PM'
        }
      ],
      'TxnId': 123,
      'RulesSet': 'rules1'
    },
    {
      'Pool': 'Ultramax Dry',
      'Start': '12/3/2018 09:00 AM',
      'End': '12/3/2018 09:00 AM',
      'Desc': 'Ultramax Dry PnP S2 2016',
      'Status': 63,
      'StatusString': 'Complete',
      'Steps': [
        {
          'By': 'GF',
          'At': '12/3/2018 12:30 PM'
        },
        {
          'By': 'GF',
          'At': '12/3/2018 12:30 PM'
        },
        {
          'By': 'GF',
          'At': '12/3/2018 12:30 PM'
        },
        {
          'By': 'GF',
          'At': '12/3/2018 12:30 PM'
        }
      ],
      'TxnId': 123,
      'RulesSet': 'rules1'
    },
    {
      'Pool': 'Panamax',
      'Start': '12/3/2018 09:00 AM',
      'End': '12/3/2018 09:00 AM',
      'Desc': 'Panamax PnP S1 2016',
      'Status': 63,
      'StatusString': 'Complete',
      'Steps': [
        {
          'By': 'GF',
          'At': '12/3/2018 12:30 PM'
        },
        {
          'By': 'GF',
          'At': '12/3/2018 12:30 PM'
        },
        {
          'By': 'GF',
          'At': '12/3/2018 12:30 PM'
        },
        {
          'By': 'GF',
          'At': '12/3/2018 12:30 PM'
        }
      ],
      'TxnId': 123,
      'RulesSet': 'rules1'
    },
    {
      'Pool': 'Handymax',
      'Start': '12/3/2018 09:00 AM',
      'End': '12/3/2018 09:00 AM',
      'Desc': 'Handymax PnP S1 2016',
      'Status': 63,
      'StatusString': 'Complete',
      'Steps': [
        {
          'By': 'GF',
          'At': '12/3/2018 12:30 PM'
        },
        {
          'By': 'GF',
          'At': '12/3/2018 12:30 PM'
        },
        {
          'By': 'GF',
          'At': '12/3/2018 12:30 PM'
        },
        {
          'By': 'GF',
          'At': '12/3/2018 12:30 PM'
        }
      ],
      'TxnId': 123,
      'RulesSet': 'rules1'
    },
    {
      'Pool': 'Aframax',
      'Start': '12/3/2018 09:00 AM',
      'End': '12/3/2018 09:00 AM',
      'Desc': 'Aframax PnP S1 2016',
      'Status': 63,
      'StatusString': 'Complete',
      'Steps': [
        {
          'By': 'GF',
          'At': '12/3/2018 12:30 PM'
        },
        {
          'By': 'GF',
          'At': '12/3/2018 12:30 PM'
        },
        {
          'By': 'GF',
          'At': '12/3/2018 12:30 PM'
        },
        {
          'By': 'GF',
          'At': '12/3/2018 12:30 PM'
        }
      ],
      'TxnId': 123,
      'RulesSet': 'rules1'
    },
    {
      'Pool': 'Mid Range',
      'Start': '12/3/2018 09:00 AM',
      'End': '12/3/2018 09:00 AM',
      'Desc': 'Mid Range PnP S1 2016',
      'Status': 63,
      'StatusString': 'Complete',
      'Steps': [
        {
          'By': 'GF',
          'At': '12/3/2018 12:30 PM'
        },
        {
          'By': 'GF',
          'At': '12/3/2018 12:30 PM'
        },
        {
          'By': 'GF',
          'At': '12/3/2018 12:30 PM'
        },
        {
          'By': 'GF',
          'At': '12/3/2018 12:30 PM'
        }
      ],
      'TxnId': 123,
      'RulesSet': 'rules1'
    },
    {
      'Pool': 'Panamax Dry',
      'Start': '12/3/2018 09:00 AM',
      'End': '12/3/2018 09:00 AM',
      'Desc': 'Panamax Dry PnP S1 2016',
      'Status': 63,
      'StatusString': 'Complete',
      'Steps': [
        {
          'By': 'GF',
          'At': '12/3/2018 12:30 PM'
        },
        {
          'By': 'GF',
          'At': '12/3/2018 12:30 PM'
        },
        {
          'By': 'GF',
          'At': '12/3/2018 12:30 PM'
        },
        {
          'By': 'GF',
          'At': '12/3/2018 12:30 PM'
        }
      ],
      'TxnId': 123,
      'RulesSet': 'rules1'
    },
    {
      'Pool': 'Ultramax Dry',
      'Start': '12/3/2018 09:00 AM',
      'End': '12/3/2018 09:00 AM',
      'Desc': 'Ultramax Dry PnP S1 2016',
      'Status': 63,
      'StatusString': 'Complete',
      'Steps': [
        {
          'By': 'GF',
          'At': '12/3/2018 12:30 PM'
        },
        {
          'By': 'GF',
          'At': '12/3/2018 12:30 PM'
        },
        {
          'By': 'GF',
          'At': '12/3/2018 12:30 PM'
        },
        {
          'By': 'GF',
          'At': '12/3/2018 12:30 PM'
        }
      ],
      'TxnId': 123,
      'RulesSet': 'rules1'
    },
    {
      'Pool': 'Panamax',
      'Start': '12/3/2018 09:00 AM',
      'End': '12/3/2018 09:00 AM',
      'Desc': 'Panamax PnP S2 2015',
      'Status': 63,
      'StatusString': 'Complete',
      'Steps': [
        {
          'By': 'GF',
          'At': '12/3/2018 12:30 PM'
        },
        {
          'By': 'GF',
          'At': '12/3/2018 12:30 PM'
        },
        {
          'By': 'GF',
          'At': '12/3/2018 12:30 PM'
        },
        {
          'By': 'GF',
          'At': '12/3/2018 12:30 PM'
        }
      ],
      'TxnId': 123,
      'RulesSet': 'rules1'
    },
    {
      'Pool': 'Handymax',
      'Start': '12/3/2018 09:00 AM',
      'End': '12/3/2018 09:00 AM',
      'Desc': 'Handymax PnP S2 2015',
      'Status': 63,
      'StatusString': 'Complete',
      'Steps': [
        {
          'By': 'GF',
          'At': '12/3/2018 12:30 PM'
        },
        {
          'By': 'GF',
          'At': '12/3/2018 12:30 PM'
        },
        {
          'By': 'GF',
          'At': '12/3/2018 12:30 PM'
        },
        {
          'By': 'GF',
          'At': '12/3/2018 12:30 PM'
        }
      ],
      'TxnId': 123,
      'RulesSet': 'rules1'
    },
    {
      'Pool': 'Aframax',
      'Start': '12/3/2018 09:00 AM',
      'End': '15/3/2018 09:00 AM',
      'Desc': 'Aframax PnP S2 2015',
      'Status': 63,
      'StatusString': 'Complete',
      'Steps': [
        {
          'By': 'GF',
          'At': '12/3/2018 12:30 PM'
        },
        {
          'By': 'GF',
          'At': '12/3/2018 12:30 PM'
        },
        {
          'By': 'GF',
          'At': '12/3/2018 12:30 PM'
        },
        {
          'By': 'GF',
          'At': '12/3/2018 12:30 PM'
        }
      ],
      'TxnId': 123,
      'RulesSet': 'rules1'
    },
    {
      'Pool': 'Mid Range',
      'Start': '22/3/2018 09:00 AM',
      'End': '20/3/2018 09:00 AM',
      'Desc': 'Mid Range PnP S2 2015',
      'Status': 63,
      'StatusString': 'Complete',
      'Steps': [
        {
          'By': 'GF',
          'At': '12/3/2018 12:30 PM'
        },
        {
          'By': 'GF',
          'At': '12/3/2018 12:30 PM'
        },
        {
          'By': 'GF',
          'At': '12/3/2018 12:30 PM'
        },
        {
          'By': 'GF',
          'At': '12/3/2018 12:30 PM'
        }
      ],
      'TxnId': 123,
      'RulesSet': 'rules1'
    },
    {
      'Pool': 'Panamax Dry',
      'Start': '10/3/2018 09:00 AM',
      'End': '23/3/2018 09:00 AM',
      'Desc': 'Panamax Dry PnP S2 2015',
      'Status': 63,
      'StatusString': 'Complete',
      'Steps': [
        {
          'By': 'GF',
          'At': '12/3/2018 12:30 PM'
        },
        {
          'By': 'GF',
          'At': '12/3/2018 12:30 PM'
        },
        {
          'By': 'GF',
          'At': '12/3/2018 12:30 PM'
        },
        {
          'By': 'GF',
          'At': '12/3/2018 12:30 PM'
        }
      ],
      'TxnId': 123,
      'RulesSet': 'rules1'
    },
    {
      'Pool': 'Ultramax Dry',
      'Start': '14/3/2018 09:00 AM',
      'End': '21/3/2018 09:00 AM',
      'Desc': 'Ultramax Dry PnP S2 2015',
      'Status': 63,
      'StatusString': 'Complete',
      'Steps': [
        {
          'By': 'GF',
          'At': '12/3/2018 12:30 PM'
        },
        {
          'By': 'GF',
          'At': '12/3/2018 12:30 PM'
        },
        {
          'By': 'GF',
          'At': '12/3/2018 12:30 PM'
        },
        {
          'By': 'GF',
          'At': '12/3/2018 12:30 PM'
        }
      ],
      'TxnId': 123,
      'RulesSet': 'rules1'
    }
    ];

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

  public toInt(num: string) {
    return +num;
}

public sortByWordLength = (a: any) => {
    return a.name.length;
}

  ngOnInit() {
  }

}
