import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {error} from 'selenium-webdriver';
import ElementNotVisibleError = error.ElementNotVisibleError;
import {environment} from '../../environments/environment';
import {Pool} from '../model/Pool';



@Injectable({
  providedIn: 'root'
})
export class TxnserviceService {

  baseUrl: string = environment.baseUrl;
  constructor(private http: HttpClient) { }

  getPool(){
    return this.http.get(this.baseUrl + "PoolInfo")
      .map(this.extractData)
      .catch(this.handleErrorObservable);

  }

  getBooksWithPromise(): Promise<Pool[]> {
    return this.http.get(this.baseUrl + "PoolInfo").toPromise()
      .then(this.extractData)
      .catch(this.handleErrorPromise);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body;
  }
  private handleErrorObservable (error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.message || error);
  }
  private handleErrorPromise (error: Response | any) {
    console.error(error.message || error);
    return Promise.reject(error.message || error);
  }

  fetchPool() {
   let  pools:  [
      {
        poolName: 'Ultramax-Bulkers',
        poolId: '1',
        rules: [
          'rule1', 'rule2' , 'rule3', 'rule4'
        ]
      },
      {
        poolName: 'Panamax-Bulkers',
        poolId: '1',
        rules: [
          'rul1', 'rul2' , 'rul3', 'rul4'
        ]
      }
    ];


    return  pools;
  }
}
