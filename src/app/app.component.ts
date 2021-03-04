import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import settings from '../settings';

@Component({
  // tslint:disable-next-line
  selector: 'body',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  languge: Observable<string>;

  constructor(
    private _router: Router,
    private _translate: TranslateService,
  ) {
    // this language will be used as a fallback when a translation isn't found in the current language
    this._translate.setDefaultLang(settings.lang);
  }

  ngOnInit() {
    this._router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }
}
