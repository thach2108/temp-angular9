import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardCustomizeComponent } from './card-customize/card-customize.component';



@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    CardCustomizeComponent,
  ],
  declarations: [CardCustomizeComponent]
})
export class ComponentsModule { }
