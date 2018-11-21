import { Component, OnInit } from '@angular/core';
import { AppFooterComponent } from '@coreui/angular/lib/footer/app-footer.component';

@Component({
  selector: 'app-custom-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }
  ngOnInit() {
  }

}
