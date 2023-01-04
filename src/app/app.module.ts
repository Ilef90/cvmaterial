import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { LanguesComponent } from './langues/langues.component';
import { LoisirsComponent } from './loisirs/loisirs.component';
import {  CompetenceComponent   } from './competence/competence.component';
import { MatCardModule } from '@angular/material/card';
import {MatLineModule} from '@angular/material/core';
import {MatListModule} from '@angular/material/list';





@NgModule({
  declarations: [AppComponent, HomeComponent, ContactComponent, ExperienceComponent, EducationComponent ,LanguesComponent, LoisirsComponent ,CompetenceComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatProgressBarModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatCardModule,
    MatLineModule,
    MatListModule
    
    
  
  ],

  
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}