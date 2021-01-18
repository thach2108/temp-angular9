import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { IAppState } from '../../redux/app.state';
import { select as selectErrors, IState } from '../../redux/errors';
import settings from '../../../settings';

@Component({
  selector: 'app-errors',
  templateUrl: './errors.component.html',
  styleUrls: ['./errors.component.css']
})
export class ErrorsComponent {
  error$: Observable<IState>;

  constructor(
    private _store: Store<IAppState>,
    private _toastr: ToastrService
  ) {
    this.error$ = this._store.pipe(select(selectErrors));
    this.error$.subscribe((err: HttpErrorResponse) => {
      if (!err) return;
      this._toastr.error(
        err.message,
        `${err.status}: ${err.name}`,
        settings.toastr
      );
    });
  }
}
