import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

import { AppComponent } from './app.component';

// Import containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { TxnserviceService} from './services/txnservice.service';

const APP_CONTAINERS = [
  DefaultLayoutComponent
];

import {
  AppAsideModule,
  AppBreadcrumbModule,
  AppHeaderModule,
  AppFooterModule,
  AppSidebarModule,
} from '@coreui/angular';

// Import routing module
import { AppRoutingModule } from './app.routing';

// Import 3rd party components
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { DashboardModule } from './views/custome-modules/dashboard/dashboard.module';
import { PremiumAndPenaltyHomeModule } from './views/custome-modules/premium-and-penalty-home/premium-and-penalty-home.module';
import { LoginModule } from './views/custome-modules/login/login.module';
import { PremiumAndPenaltyUploadModule } from './views/custome-modules/premium-and-penalty-upload/premium-and-penalty-upload.module';
import { PremiumAndPenaltyXlsxPageModule } from './views/custome-modules/premium-and-penalty-xlsx-page/premium-and-penalty-xlsx-page.module';
import {SharedModule} from './shared.module';
import { UploadConsumtionDataService } from './services/upload-consumtion-data.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CacheInterceptorService } from './services/cache-interceptor.service';
import { NgxStepperModule } from 'ngx-stepper';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppAsideModule,
    AppBreadcrumbModule.forRoot(),
    AppFooterModule,
    AppHeaderModule,
    AppSidebarModule,
    PerfectScrollbarModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule,
    DashboardModule,
    LoginModule,
    PremiumAndPenaltyHomeModule,
    PremiumAndPenaltyUploadModule,
    PremiumAndPenaltyXlsxPageModule,
    PerfectScrollbarModule,
    SharedModule,
    HttpClientModule,
    NgxStepperModule
  ],
  declarations: [
    AppComponent,
    ...APP_CONTAINERS,
    P404Component,
    P500Component
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy,
  },
   {
      provide: PERFECT_SCROLLBAR_CONFIG,
     useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    },
    { provide: HTTP_INTERCEPTORS, useClass: CacheInterceptorService, multi: true },
    UploadConsumtionDataService,
    TxnserviceService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
