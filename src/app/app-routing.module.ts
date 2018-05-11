import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {ProfileComponent} from './profile/profile.component';
import {SignupComponent} from './signup/signup.component';
import {HomepageComponent} from './homepage/homepage.component';
import {AboutComponent} from './about/about.component';
import {FavouritesComponent} from './favourites/favourites.component';
import {RecipeComponent} from './recipe/recipe.component';


const routes: Routes = [
  {path: '', redirectTo: 'homepage', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'homepage', component: HomepageComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'about', component: AboutComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'favourites', component: FavouritesComponent},
  {path: 'recipe/:id', component: RecipeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}