import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ListTasksComponent } from './components/features/list-tasks/list-tasks.component';
import { AddEditTasksComponent } from './components/features/add-edit-tasks/add-edit-tasks.component';

import { NgFor, NgIf } from '@angular/common';
import { HeaderComponent } from './components/layout-base/header/header.component';
import { FooterComponent } from './components/layout-base/footer/footer.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CustomValidationComponent } from './components/custom-validation/custom-validation.component';

@NgModule({
  declarations: [
    AppComponent,

    ListTasksComponent,
    AddEditTasksComponent,
    HeaderComponent,
    FooterComponent,
    CustomValidationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgFor,
    NgIf,
    RouterLink,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
