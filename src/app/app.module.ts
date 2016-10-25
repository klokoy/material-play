import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { RouterModule } from '@angular/router';

import { ModelsComponent } from './models/models.component';
import { ModelComponent } from './models/model.component';

import { AppComponent } from './app.component';

import appRoutes from './app.routes'; 


@NgModule({
  declarations: [
    AppComponent,
    ModelsComponent,
    ModelComponent
  ],
  imports: [
    MaterialModule.forRoot(),
    BrowserModule,
    appRoutes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
