import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { GetProfileAuth, IState, select as selectAuth } from '../../redux/auth';
import { navItems } from '../../_nav';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent {
  public sidebarMinimized = false;
  public navItems = navItems;
  auth$: Observable<IState>;

  constructor(private _store: Store<any>) {
    this._store.dispatch(new GetProfileAuth({ id: 1 }));

    this.auth$ = this._store.pipe(select(selectAuth));
  }

  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }
}
