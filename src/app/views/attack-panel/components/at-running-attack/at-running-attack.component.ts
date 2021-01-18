import { Component, TemplateRef } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { IAppState } from '../../../../redux/app.state';
import { GetRunningAttack, selectRunningAttack, StopAttack } from '../../../../redux/attack-panel';
import settings from '../../../../../settings';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-at-running-attack',
  templateUrl: './at-running-attack.component.html',
  styleUrls: ['./at-running-attack.component.css']
})
export class AtRunningAttackComponent {
  model$: Observable<any[]>;
  modalRef: BsModalRef;
  currentModule: string = 'ALL';
  intervalHandle = null;
  handleData = [];

  constructor(
    private _store: Store<IAppState>,
    private _toastr: ToastrService,
    private _modalService: BsModalService
  ) {
    this.model$ = this._store.pipe(select(selectRunningAttack));
    this.model$.subscribe(data => {
      data && this.refreshData(data);
    });
    // this._store.dispatch(new GetRunningAttack({}));
  }

  refreshData(data: any[] = []): void {
    this.handleData = [];
    data.forEach(res => {
      this.handleData.push(res.time);
    });
    this.intervalHandle && this.clearInterval();
    // this.intervalHandle = setInterval(() => {
    //   if (!this.handleData.length) this.clearInterval();
    //   for (let index = 0; index < this.handleData.length; index++) {
    //     (--this.handleData[index] < 1) && this._store.dispatch(new GetRunningAttack({}));
    //   }
    // }, 1000);
  }

  clearInterval() {
    clearInterval(this.intervalHandle);
    this.intervalHandle = null;
  }

  stopAttack(): void {
    const module = this.currentModule;
    this._store.dispatch(new StopAttack({ module, method: 'STOP' }, res => {
      if (res.status === 'success') {
        this._toastr.success(
          `Successfully stopped attacking`,
          'Success',
          settings.toastr
        );
        this._store.dispatch(new GetRunningAttack({}));
      }
    }));
    this.modalRef.hide();
  }

  openConfirm(template: TemplateRef<any>, module: string) {
    this.modalRef = this._modalService.show(template, { class: 'modal-sm' });
    this.currentModule = module;
  }

  decline(): void {
    this.modalRef.hide();
  }
}
