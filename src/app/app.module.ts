import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ListPageComponent } from './list-page/list-page.component';
import { SummaryPageComponent } from './summary-page/summary-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CardComponent } from './card/card.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ListPageComponent,
    SummaryPageComponent,
    PageNotFoundComponent,
    CardComponent,

  ],

  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: '',  component: SummaryPageComponent},
      {path: 'navigator', component: ListPageComponent},
      {path: '**', component: PageNotFoundComponent}
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
