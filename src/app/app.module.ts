import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/views/home/home.component';
import { CustomersComponent } from './components/feature/shared/customers/customers.component';
import { InfoComponent } from './components/feature/shared/info/info.component';
import { FooterComponent } from './components/feature/shared/footer/footer.component';
import { NavbarComponent } from './components/feature/shared/navbar/navbar.component';
import { ContentCardsComponent } from './components/feature/shared/content-cards/content-cards.component';
import { QuestionFormComponent } from './components/feature/shared/question-form/question-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CustomersComponent,
    InfoComponent,
    FooterComponent,
    NavbarComponent,
    ContentCardsComponent,
    QuestionFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
