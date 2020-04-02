import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { allReducers, metaReducers } from './state/reducers';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TaskCardComponent } from './components/task-card/task-card.component';
import { TasksLaneComponent } from './components/tasks-lane/tasks-lane.component';
import { CanbanBoardComponent } from './components/canban-board/canban-board.component';
import { MatGridListModule } from '@angular/material';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './state/effects/app.effects'

@NgModule({
  declarations: [
    AppComponent,
    TaskCardComponent,
    TasksLaneComponent,
    CanbanBoardComponent,
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(allReducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
    MatGridListModule,
    BrowserAnimationsModule,
    EffectsModule.forRoot([AppEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
