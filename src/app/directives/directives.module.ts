import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StopPropagationDirective } from './stop-propagation.directive';
import { PreventDefaultDirective } from './prevent-default.directive';



@NgModule({
  declarations: [StopPropagationDirective, PreventDefaultDirective],
  exports: [StopPropagationDirective, PreventDefaultDirective],
  imports: [
    CommonModule
  ]
})
export class DirectivesModule { }
