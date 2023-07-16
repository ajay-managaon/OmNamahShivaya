import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { GuruparamparaComponent } from './components/guruparampara/guruparampara.component';
import { CoursesComponent } from './components/courses/courses.component';
import { TeerthakshethraComponent } from './components/teerthakshethra/teerthakshethra.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { LoginComponent } from './modules/account/login/login.component';
import { RegisterComponent } from './modules/account/register/register.component';

const routes: Routes = [
  {
    path: '',
    component: AboutComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'guruparampara',
    component: GuruparamparaComponent,
  },
  {
    path: 'courses',
    component: CoursesComponent,
  },
  {
    path: 'teerthakshethra',
    component: TeerthakshethraComponent,
  },
  {
    path: 'articles',
    component: ArticlesComponent,
  },
  {
    path : 'account',
    children : [
      {
        path : 'login',
        component : LoginComponent
      },
      {
        path : 'register',
        component : RegisterComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
