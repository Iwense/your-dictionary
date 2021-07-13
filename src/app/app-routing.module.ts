import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { HomeComponent } from './pages/home/home.component';
import { RepeatComponent } from './pages/repeat/repeat.component';
import { WorkbookComponent } from './pages/workbook/workbook.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { TextTranslationComponent } from './pages/text-translation/text-translation.component';




const routes: Routes = [
  {
    path: 'sign',
    component: SignInComponent
  },
  {
    path: 'registration',
    component: SignUpComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'repeat',
    component: RepeatComponent
  },
  {
    path: 'workbook',
    component: WorkbookComponent
  },
  {
    path: 'text-translation',
    component: TextTranslationComponent
  },
  {
    path: 'settings',
    component: SettingsComponent,
  },
  {path: '**', component: NotFoundComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
