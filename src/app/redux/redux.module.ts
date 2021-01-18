import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { appReducers } from './app.state';
import { AppEffects } from './app.effects';
import { EffectsModule } from '@ngrx/effects';

export const metaReducers = [];

@NgModule({
  imports: [
    // redux
    StoreModule.forRoot(appReducers, { metaReducers }),
    EffectsModule.forRoot(AppEffects),
  ],
  declarations: [],
  exports: [
    // redux
    StoreModule
  ]
})
export class ReduxModule { }
