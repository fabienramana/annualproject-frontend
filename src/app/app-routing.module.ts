import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompagnyLoginComponent } from './compagny/compagny-login/compagny-login.component';
import { CompagnyCreateComponent } from './compagny/compagny-create/compagny-create.component';
import { NotFoundComponent } from './compagny/errors/not-found/not-found.component';
import { HomepageComponent } from './homepage/homepage.component';


const routes: Routes = [
  { path: '', component: CompagnyLoginComponent},
  { path: 'login', component: CompagnyLoginComponent},
  { path: 'create', component: CompagnyCreateComponent},
  { path: 'homepage', component: HomepageComponent},
  { path: 'not-found', component: NotFoundComponent},
  { path: '**', redirectTo: 'not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
