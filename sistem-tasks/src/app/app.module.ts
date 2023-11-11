import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ListTasksComponent } from './components/features/list-tasks/list-tasks.component';
import { AddEditTasksComponent } from './components/features/add-edit-tasks/add-edit-tasks.component';

import { NgFor, NgIf } from '@angular/common';
import { HeaderComponent } from './components/layout-base/header/header.component';
import { FooterComponent } from './components/layout-base/footer/footer.component';

@NgModule({
  declarations: [AppComponent, ListTasksComponent, AddEditTasksComponent, HeaderComponent, FooterComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgFor,
    NgIf
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
