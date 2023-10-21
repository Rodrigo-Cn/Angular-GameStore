import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from '../app-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { CardComponent } from './pages/card/card.component';
import { CardLabelComponent } from './pages/card/card-label/card-label.component';
import { CardPriceComponent } from './pages/card/card-price/card-price.component';
import { CardImageComponent } from './pages/card/card-image/card-image.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    CardComponent,
    CardLabelComponent,
    CardPriceComponent,
    CardImageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
