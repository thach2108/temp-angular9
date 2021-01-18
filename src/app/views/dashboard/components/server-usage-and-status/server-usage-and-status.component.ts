import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IAppState } from '../../../../redux/app.state';
import { selectServerUsageAndStatus } from '../../../../redux/dashboard';

@Component({
  selector: 'app-server-usage-and-status',
  templateUrl: './server-usage-and-status.component.html',
  styleUrls: ['./server-usage-and-status.component.css']
})
export class ServerUsageAndStatusComponent implements OnInit {
  model$: Observable<any[]>;

  constructor(private _store: Store<IAppState>) {
    this.model$ = this._store.pipe(
      select(selectServerUsageAndStatus)
    );
  }

  ngOnInit(): void {
  }

}
