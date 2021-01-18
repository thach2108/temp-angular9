import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { appReducers } from '../../../../redux/app.state';
import { metaReducers } from '../../../../redux/redux.module';
import { ServerUsageAndStatusComponent } from './server-usage-and-status.component';

describe('ServerUsageAndStatusComponent', () => {
  let component: ServerUsageAndStatusComponent;
  let fixture: ComponentFixture<ServerUsageAndStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot(appReducers, { metaReducers }),
      ],
      declarations: [ServerUsageAndStatusComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerUsageAndStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
