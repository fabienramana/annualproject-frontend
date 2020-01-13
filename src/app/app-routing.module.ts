import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompagnyLoginComponent } from './compagny/compagny-login/compagny-login.component';
import { CompagnyCreateComponent } from './compagny/compagny-create/compagny-create.component';
import { NotFoundComponent } from './compagny/errors/not-found/not-found.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CreateComponentModelComponent } from './component-model-folder/create-component-model/create-component-model.component';
import { ComponentModelViewComponent } from './component-model-folder/component-model-view/component-model-view.component';
import { ModifyComponentModelComponent } from './component-model-folder/modify-component-model/modify-component-model.component';
import { DeleteComponentModelComponent } from './component-model-folder/delete-component-model/delete-component-model.component';
import { CreateSiteComponent } from './site-folder/create-site/create-site.component';
import { SiteViewComponent } from './site-folder/site-view/site-view.component';
import { ModifySiteComponent } from './site-folder/modify-site/modify-site.component';
import { CreateArticleComponent } from './article-folder/create-article/create-article.component';
import { ModifyArticleComponent } from './article-folder/modify-article/modify-article.component';
import { DeleteArticleComponent } from './article-folder/delete-article/delete-article.component';
import { ArticleViewComponent } from './article-folder/article-view/article-view.component';
import { DisconnectComponent } from './disconnect/disconnect.component';


const routes: Routes = [
  { path: '', component: CompagnyLoginComponent},
  { path: 'login', component: CompagnyLoginComponent},
  { path: 'disconnect', component: DisconnectComponent },
  { path: 'create-company', component: CompagnyCreateComponent},
  { path: 'create-site', component: CreateSiteComponent },
  { path: 'sites', component: SiteViewComponent },
  { path: 'sites/modify/:id', component: ModifySiteComponent },
  { path: 'sites/:siteId/articles', component: ArticleViewComponent },
  { path: 'sites/:siteId/articles/create', component: CreateArticleComponent },
  { path: 'sites/:siteId/articles/modify/:articleId', component: ModifyArticleComponent },
  { path: 'sites/:siteId/articles/delete/:articleId', component: DeleteArticleComponent },
  { path: 'create-component-model', component: CreateComponentModelComponent },
  { path: 'component-models', component: ComponentModelViewComponent },
  { path: 'component-models/modify/:id', component: ModifyComponentModelComponent },
  { path: 'component-models/delete/:id', component: DeleteComponentModelComponent },
  { path: 'homepage', component: HomepageComponent},
  { path: 'not-found', component: NotFoundComponent},
  { path: '**', redirectTo: 'not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
