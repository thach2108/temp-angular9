import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AttackPanelComponent } from './attack-panel.component';

const routes: Routes = [
  {
    path: '',
    component: AttackPanelComponent,
    data: {
      title: 'Attack Panel'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AttackPanelRoutingModule {}
