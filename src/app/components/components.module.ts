import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigatorComponent } from './navigator/navigator.component';
import { HomeComponent } from './home/home.component';
import { ResultsComponent } from './results/results.component';
import {RouterModule} from "@angular/router";
import {FlexModule} from "@angular/flex-layout";
import {MaterialModule} from "../core/material.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    NavigatorComponent,
    HomeComponent,
    ResultsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    ResultsComponent
  ]
})
export class ComponentsModule { }
