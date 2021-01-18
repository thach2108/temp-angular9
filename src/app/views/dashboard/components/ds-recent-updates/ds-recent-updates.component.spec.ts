import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DsRecentUpdatesComponent } from './ds-recent-updates.component';
import { StoreModule } from '@ngrx/store';
import { appReducers } from '../../../../redux/app.state';
import { metaReducers } from '../../../../redux/redux.module'


describe('DsRecentUpdatesComponent', () => {
  let component: DsRecentUpdatesComponent;
  let fixture: ComponentFixture<DsRecentUpdatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot(appReducers, { metaReducers }),
      ],
      declarations: [DsRecentUpdatesComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DsRecentUpdatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
