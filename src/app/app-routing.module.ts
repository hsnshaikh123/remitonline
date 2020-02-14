import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { HeaderComponent } from './pages/header/header.component';
import { TopHeaderComponent } from './pages/top-header/top-header.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
const routes: Routes = [
  { path: 'header', component: HeaderComponent },
  { path: 'home', component: HeaderComponent },
  { path: 'contact', component: ContactPageComponent },
  { path: 'topheader', component: TopHeaderComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'signin', component: SignInComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
