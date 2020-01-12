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
import { CreateSiteComponent } from './site-folder/create-site/create-site.component';
import { SiteComponent } from './site-folder/site/site.component';
import { SiteViewComponent } from './site-folder/site-view/site-view.component';
import { ModifySiteComponent } from './site-folder/modify-site/modify-site.component';
import { CreateArticleComponent } from './article-folder/create-article/create-article.component';
import { ModifyArticleComponent } from './article-folder/modify-article/modify-article.component';
import { DeleteArticleComponent } from './article-folder/delete-article/delete-article.component';
import { ArticleComponent } from './article-folder/article/article.component';
import { ArticleViewComponent } from './article-folder/article-view/article-view.component';

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
    CreateSiteComponent,
    SiteComponent,
    SiteViewComponent,
    ModifySiteComponent,
    CreateArticleComponent,
    ModifyArticleComponent,
    DeleteArticleComponent,
    ArticleComponent,
    ArticleViewComponent,
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
