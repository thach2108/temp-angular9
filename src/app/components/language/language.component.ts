import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { IAppState } from '../../redux/app.state';
import { select as selectLanguage, SetLanguage } from '../../redux/language';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css']
})
export class LanguageComponent implements OnInit {
  languge$: Observable<string>;

  constructor(
    private _store: Store<IAppState>,
    private _translate: TranslateService
  ) { }

  ngOnInit(): void {
    this.languge$ = this._store.pipe(select(selectLanguage));
    this.languge$.subscribe((res) => {
      // the lang to use, if the lang isn't available, it will use the current loader to get them
      this._translate.use(res);
    })
  }

  submitForm(value: string): void {
    this._store.dispatch(new SetLanguage(value));
  }

}
