import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { ToastrModule } from 'ngx-toastr';
import { appReducers } from '../../../../redux/app.state';
import { metaReducers } from '../../../../redux/redux.module';
import { AtAttackPanelComponent } from './at-attack-panel.component';

describe('AtAttackPanelComponent', () => {
  let component: AtAttackPanelComponent;
  let fixture: ComponentFixture<AtAttackPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot(appReducers, { metaReducers }),
        FormsModule,
        ToastrModule.forRoot(),
        ReactiveFormsModule
      ],
      declarations: [AtAttackPanelComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtAttackPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
