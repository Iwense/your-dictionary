import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import { RegFormComponent } from './components/reg-form/reg-form.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { HomeComponent } from './pages/home/home.component';
import { RepeatComponent } from './pages/repeat/repeat.component';
import { WorkbookComponent } from './pages/workbook/workbook.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { TextTranslationComponent } from './pages/text-translation/text-translation.component';



@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    RegFormComponent,
    SignInComponent,
    SignUpComponent,
    HomeComponent,
    RepeatComponent,
    WorkbookComponent,
    TextTranslationComponent,
    NotFoundComponent,
    SidebarComponent,
    SettingsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
