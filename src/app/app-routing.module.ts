import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompagnyLoginComponent } from './compagny/compagny-login/compagny-login.component';
import { CompagnyCreateComponent } from './compagny/compagny-create/compagny-create.component';
import { NotFoundComponent } from './compagny/errors/not-found/not-found.component';
import { CompagnyProfilComponent} from './compagny/compagny-profil/compagny-profil.component'


const routes: Routes = [
  { path: '', component: CompagnyLoginComponent},
  { path: 'login', component: CompagnyLoginComponent},
  { path: 'create', component: CompagnyCreateComponent},
  { path: 'not-found', component: NotFoundComponent},
  { path: 'Home', component: CompagnyProfilComponent},
  { path: '**', redirectTo: 'not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
