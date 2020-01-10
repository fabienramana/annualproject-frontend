import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularEditorModule } from '@kolkov/angular-editor';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompagnyCreateComponent } from './compagny/compagny-create/compagny-create.component';
import { CompagnyLoginComponent } from './compagny/compagny-login/compagny-login.component';
import { NotFoundComponent } from './compagny/errors/not-found/not-found.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CreateComponentModelComponent } from './component-model-folder/create-component-model/create-component-model.component';
import { ComponentModelComponent } from './component-model-folder/component-model/component-model.component';
import { ComponentModelViewComponent } from './component-model-folder/component-model-view/component-model-view.component';
import { ModifyComponentModelComponent } from './component-model-folder/modify-component-model/modify-component-model.component';
import { DeleteComponentModelComponent } from './component-model-folder/delete-component-model/delete-component-model.component';

@NgModule({
  declarations: [
    AppComponent,
    CompagnyCreateComponent,
    CompagnyLoginComponent,
    NotFoundComponent,
    HomepageComponent,
    CreateComponentModelComponent,
    ComponentModelComponent,
    ComponentModelViewComponent,
    ModifyComponentModelComponent,
    DeleteComponentModelComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    AngularEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
