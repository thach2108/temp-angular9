import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ToastrModule } from 'ngx-toastr';
import { appReducers } from '../../../../redux/app.state';
import { metaReducers } from '../../../../redux/redux.module';
import { AtRunningAttackComponent } from './at-running-attack.component';

describe('AtRunningAttackComponent', () => {
  let component: AtRunningAttackComponent;
  let fixture: ComponentFixture<AtRunningAttackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot(appReducers, { metaReducers }),
        ToastrModule.forRoot(),
        ModalModule.forRoot()
      ],
      declarations: [AtRunningAttackComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtRunningAttackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
