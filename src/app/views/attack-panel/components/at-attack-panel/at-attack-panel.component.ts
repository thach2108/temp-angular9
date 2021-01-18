import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { IAppState } from '../../../../redux/app.state';
import { Attack, GetRunningAttack, selectAttackPanel } from '../../../../redux/attack-panel';
import settings from '../../../../../settings';

@Component({
  selector: 'app-at-attack-panel',
  templateUrl: './at-attack-panel.component.html',
  styleUrls: ['./at-attack-panel.component.css']
})
export class AtAttackPanelComponent implements OnInit {
  model$: Observable<any[]>;
  model: any[];
  validateForm: FormGroup;
  currentGroup: string = '';

  constructor(
    private _store: Store<IAppState>,
    private _fb: FormBuilder,
    private _toastr: ToastrService
  ) {
    this.model$ = this._store.pipe(select(selectAttackPanel));
    this.model$.subscribe(res => {
      if (!res) return;
      this.model = res;
    });
  }

  ngOnInit(): void {
    this.validateForm = this._fb.group({
      method: ['']
    });
  }

  handleChangeMethod(event: any): void {
    const group = this.findGroup(event);
    if (group === 'Layer 4 Methods') {
      this.validateForm.addControl('url', new FormControl(null, Validators.required));
      this.validateForm.addControl('attacktime', new FormControl(null, Validators.required));
      this.validateForm.addControl('port', new FormControl(null, Validators.required));
    } else if (group === 'Layer 7 Methods') {
      this.validateForm.removeControl('port');
      this.validateForm.addControl('url', new FormControl(null, Validators.required));
      this.validateForm.addControl('attacktime', new FormControl(null, Validators.required));
    }
    this.currentGroup = group;
  }

  submitForm(): void {
    if (this.validateForm.invalid) {
      for (const i in this.validateForm.controls) {
        this.validateForm.controls[i].markAsDirty();
        this.validateForm.controls[i].updateValueAndValidity();
      }
      return;
    }
    const { value } = this.validateForm;
    this._store.dispatch(new Attack({ ...value }, res => {
      if (res.status === 'success') {
        this._toastr.success(
          `Successful attack`,
          'Success',
          settings.toastr
        );
        this._store.dispatch(new GetRunningAttack({}));
      }
    }));
  }

  findGroup(elm): string {
    let groupName = '';
    this.model.forEach(el => {
      const group = el.select.find(element => element.value === elm);
      if (group) groupName = el.groupLabel;
    });
    return groupName;
  }
}
