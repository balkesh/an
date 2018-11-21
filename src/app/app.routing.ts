import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/custome-modules/login/login.component';
import { DashboardComponent } from './views/custome-modules/dashboard/dashboard.component';
import { PremiumAndPenaltyHomeComponent } from './views/custome-modules/premium-and-penalty-home/premium-and-penalty-home.component';
import { PremiumAndPenaltyUploadComponent } from './views/custome-modules/premium-and-penalty-upload/premium-and-penalty-upload.component';
import { PremiumAndPenaltyXlsxPageComponent } from './views/custome-modules/premium-and-penalty-xlsx-page/premium-and-penalty-xlsx-page.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: '404',
    component: P404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: P500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    data: {
      title: 'Dashboard'
    }
  },
  {
    path: 'premium-and-penalty-home',
    component: PremiumAndPenaltyHomeComponent,
    data: {
      title: 'Home'
    }
  },
  {
    path: 'premium-and-penalty-upload',
    component: PremiumAndPenaltyUploadComponent,
    data: {
      title: 'Upload Form'
    }
  },
  {
    path: 'premium-and-penalty-xlsx',
    component: PremiumAndPenaltyXlsxPageComponent,
    data: {
      title: 'View'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
