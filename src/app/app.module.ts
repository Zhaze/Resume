import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { CollapseModule } from 'ngx-bootstrap/collapse';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { ExperienceComponent } from './experience/experience.component';
import { ContactComponent } from './contact/contact.component';
import { ReferencesComponent } from './references/references.component';
import { NavigationComponent } from './navigation/navigation.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { PhoneNumberPipe } from './phone-number.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    SkillsComponent,
    ExperienceComponent,
    ContactComponent,
    ReferencesComponent,
    NavigationComponent,
    JumbotronComponent,
    PhoneNumberPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CollapseModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
