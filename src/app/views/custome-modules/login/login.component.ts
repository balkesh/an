import {Component, SecurityContext} from '@angular/core';
// required for pop up
import { PopoversComponent } from '../../base/popovers.component';
import {DomSanitizer} from '@angular/platform-browser';
import { PopoverModule } from 'ngx-bootstrap';
import {FontAwesomeComponent} from '../../icons/font-awesome.component';
import { HeaderComponent } from '../../custome-shared-components/header/header.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  // defined for pop up
  title: string = ' Admin Contact Info';
  content: string = '';
  html: string = `<a href="tel:+496170961709"><i class="icon-call-end icons font-2xl d-block mt-4"></i></a><a href="mailto:gsfakianaki@scorpiogroup.net"><i class="icon-envelope-open icons font-2xl d-block mt-4"></i></a>`;
  constructor(sanitizer: DomSanitizer) {
    // required for pop up
    this.html = sanitizer.sanitize(SecurityContext.HTML, this.html);
  }
}
