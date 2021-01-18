import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { DsApisUsageComponent } from './ds-apis-usage.component';
import { appReducers } from '../../../../redux/app.state';
import { metaReducers } from '../../../../redux/redux.module'

describe('DsApisUsageComponent', () => {
  let component: DsApisUsageComponent;
  let fixture: ComponentFixture<DsApisUsageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot(appReducers, { metaReducers }),
      ],
      declarations: [DsApisUsageComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DsApisUsageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
