import { Component, OnInit } from '@angular/core';
import { UploadConsumtionDataService } from '../../../../services/upload-consumtion-data.service';

@Component({
  selector: 'app-transactions-table',
  templateUrl: './transactions-table.component.html',
  styleUrls: ['./transactions-table.component.scss']
})
export class TransactionsTableComponent implements OnInit {
  public data;
  public filterQuery = '';

  public btnValue = 'No action';

  constructor(private uploadconsumptiondataservice: UploadConsumtionDataService) {

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
  }

  ngOnInit() {
  }

  public defineBtnValue(state: string) {
    switch (state) {
          case 'Incomplete': {
             // statements;
             this.btnValue = 'Complete';
             break;
          }
          case 'Pending': {
                this.btnValue = 'Calculate';
                break;
          }
          default: {
             // statements;
             this.btnValue = 'View Invoice';
             break;
          }
       }
}
}
