import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MemoirComponent } from './ui/memoir/memoir.component';
import { CreateMemoirComponent } from './ui/create-memoir/create-memoir.component';
import { MemoriesComponent } from './ui/memories/memories.component';
import { CommonModules } from './shared/common.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MAT_DATE_LOCALE } from '@angular/material/core';
const COMPONENTS = [
  AppComponent,
  MemoirComponent,
  CreateMemoirComponent,
  MemoriesComponent,
];

@NgModule({
  declarations: COMPONENTS,
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModules,
    BrowserAnimationsModule,
  ],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'en-GB' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
