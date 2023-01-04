import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { LanguesComponent  } from './langues/langues.component';
import { LoisirsComponent  } from './loisirs/loisirs.component';
import {  CompetenceComponent   } from './competence/competence.component';
const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
 

  {
    path: 'education',
    component: EducationComponent,
  },
  {
    path: 'experience',
    component: ExperienceComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'langues',
    component: LanguesComponent,
  },
  {
    path: 'loisirs',
    component: LoisirsComponent,
  },
  {
    path: 'competence',
    component:  CompetenceComponent ,
  }
  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}