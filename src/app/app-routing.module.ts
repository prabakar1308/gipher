import { BookmarkedGiphysComponent } from './components/bookmarked-giphys/bookmarked-giphys.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent, LoginComponent, GiphysComponent } from './components';
import { AuthGuard } from './guards';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'giphys',
    component: GiphysComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'favourites',
    component: BookmarkedGiphysComponent,
    canActivate: [AuthGuard]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
