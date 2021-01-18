import { NgModule } from '@angular/core';
import { CommonService } from './common/common.service';
import { NotificationService } from './notifications';

@NgModule({
  imports: [],
  declarations: [],
  providers: [
    CommonService,
    NotificationService
  ],
  exports: []
})
export class ServicesModule {
  constructor() { }
}
