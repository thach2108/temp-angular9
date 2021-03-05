import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { ServerUsageAndStatusComponent } from './components/server-usage-and-status/server-usage-and-status.component';
import { CommonModule } from '@angular/common';
import { DsRecentUpdatesComponent } from './components/ds-recent-updates/ds-recent-updates.component';
import { DsApisUsageComponent } from './components/ds-apis-usage/ds-apis-usage.component';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { ComponentsModule } from '../../components/components.module';
import { DirectivesModule } from '../../directives/directives.module';

@NgModule({
  imports: [
    DashboardRoutingModule,
    ChartsModule,
    BsDropdownModule,
    CollapseModule.forRoot(),
    ProgressbarModule.forRoot(),
    CommonModule,
    ComponentsModule,
    DirectivesModule
  ],
  declarations: [ DashboardComponent, ServerUsageAndStatusComponent, DsRecentUpdatesComponent, DsApisUsageComponent ]
})
export class DashboardModule { }
