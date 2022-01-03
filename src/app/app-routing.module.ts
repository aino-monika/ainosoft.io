import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientPageComponent } from './client-page/client-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { HomepageComponent } from './homepage/homepage.component';
import { InnovationPageComponent } from './innovation-page/innovation-page.component';
import { ServicePageComponent } from './service-page/service-page.component';


const routes: Routes = [ 
  { path:'', component:HomepageComponent},
  { path:'home-page', component:HomepageComponent},
  { path:'innovation-page',component:InnovationPageComponent},
  { path:'service-page', component:ServicePageComponent},
  { path:'client-page', component:ClientPageComponent},
  { path:'contact-page', component:ContactPageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
