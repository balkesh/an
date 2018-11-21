import * as _ from 'lodash';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dataFilter'
})
export class DataFilterPipe implements PipeTransform {

  transform(array: any[], query: string): any {
    if (query) {
      return _.filter(array, row => row.Pool.toLowerCase().indexOf(query.toLowerCase()) > -1
      || row.Start.toLowerCase().indexOf(query.toLowerCase()) > -1
      || row.End.toLowerCase().indexOf(query.toLocaleLowerCase()) > -1
      || row.Desc.toLowerCase().indexOf(query.toLowerCase()) > -1 ||
      row.StatusString.toLowerCase().indexOf(query.toLowerCase()) > -1 );
    }
    return array;
  }
}
