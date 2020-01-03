import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompagnyCreateComponent } from './compagny/compagny-create/compagny-create.component';
import { CompagnyLoginComponent } from './compagny/compagny-login/compagny-login.component';
import { NotFoundComponent } from './compagny/errors/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    CompagnyCreateComponent,
    CompagnyLoginComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
