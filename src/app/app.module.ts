import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './core/material.module';
import { NgModule } from '@angular/core';

import { ComponentsModule } from './components/components.module';
import { CoreModule } from './core/core.module';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    AppRoutingModule,
    ComponentsModule,
    CoreModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
