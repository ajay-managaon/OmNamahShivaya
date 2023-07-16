import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { NavComponent } from './components/nav/nav.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { AboutComponent } from './components/about/about.component';
import { GuruparamparaComponent } from './components/guruparampara/guruparampara.component';
import { CoursesComponent } from './components/courses/courses.component';
import { TeerthakshethraComponent } from './components/teerthakshethra/teerthakshethra.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { AccountModule } from './modules/account/account.module';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AboutComponent,
    GuruparamparaComponent,
    CoursesComponent,
    TeerthakshethraComponent,
    ArticlesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    AccountModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
