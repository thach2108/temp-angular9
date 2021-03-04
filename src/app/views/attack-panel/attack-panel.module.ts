import { NgModule } from '@angular/core';
import { AttackPanelComponent } from './attack-panel.component';
import { AttackPanelRoutingModule } from './attack-panel-routing.module';
import { CommonModule } from '@angular/common';
import { AtAttackPanelComponent } from './components/at-attack-panel/at-attack-panel.component';
import { AtRunningAttackComponent } from './components/at-running-attack/at-running-attack.component';
import { ComponentsModule } from '../../components/components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    AttackPanelRoutingModule,
    CommonModule,
    ComponentsModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    TranslateModule
  ],
  declarations: [AttackPanelComponent, AtAttackPanelComponent, AtRunningAttackComponent]
})
export class AttackPanelModule { }
