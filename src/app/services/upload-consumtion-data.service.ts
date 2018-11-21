import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConsumptionPerformanceData } from '../model/consumption-performance-data';
import { ConsumptionPPSData } from '../model/consumption-ppsdata';
import { CalculatePnPData } from '../model/calculate-pn-pdata';
import { environment } from '../../environments/environment.prod';
import { Headers } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class UploadConsumtionDataService {
    baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getConsumptionPerformanceData(txnid: number) {

    return this.http.get<Array<ConsumptionPerformanceData>>(
      this.baseUrl + 'GetConsumptionPPSFunction?txn=' + txnid
    ).subscribe(
      res => {
        console.log('success ' , res);
        return res;
      },
      err => {
        console.log('Error occured',
        err);
      }
    );

  }

  getConsumptionAssessedData(txnid: number) {
    return this.http.get<Array<ConsumptionPPSData>>(
      this.baseUrl + 'GetConsumptionPerformanceFunction?txn=' + txnid
    ).subscribe(
      res => {
        console.log('success ' , res);
        return res;
      },
      err => {
        console.log('Error occured');
      }
    );

  }

  getCalculatePnPTxn(txnid: number) {
    return this.http.get<CalculatePnPData>(
      this.baseUrl + 'GetCalculatePnPTxnFunction?txn=' + txnid
    ).subscribe(
      res => {
        console.log('success ' , res);
        return res;
      },
      err => {
        console.log('Error occured', err);
      }
    );

  }



}
