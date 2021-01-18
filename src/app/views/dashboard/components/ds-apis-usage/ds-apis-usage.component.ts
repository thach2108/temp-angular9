import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IAppState } from '../../../../redux/app.state';
import { selectAPIsUsageAndStatus } from '../../../../redux/dashboard';

@Component({
  selector: 'app-ds-apis-usage',
  templateUrl: './ds-apis-usage.component.html',
  styleUrls: ['./ds-apis-usage.component.css']
})
export class DsApisUsageComponent implements OnInit {
  model$: Observable<any[]>;

  constructor(private _store: Store<IAppState>) {
    this.model$ = this._store.pipe(select(selectAPIsUsageAndStatus));
  }

  ngOnInit(): void {
  }

}
