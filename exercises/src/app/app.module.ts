import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './http.service';
import { AppRoutingModule } from './app-routing.module';
import { WeatherapiComponent } from './weatherapi/weatherapi.component';
import { SeattleWeatherComponent } from './weatherapi/seattle-weather/seattle-weather.component';
import { CityweatherComponent } from './weatherapi/cityweather/cityweather.component';
import { ShintocoinComponent } from './shintocoin/shintocoin.component';
import { HomeComponent } from './shintocoin/home/home.component';
import { MineComponent } from './shintocoin/mine/mine.component';
import { BuyComponent } from './shintocoin/buy/buy.component';
import { SellComponent } from './shintocoin/sell/sell.component';
import { LedgerComponent } from './shintocoin/ledger/ledger.component';
import { TransactionComponent } from './shintocoin/transaction/transaction.component';
import { ProductsComponent } from './products/products.component';
import { ListComponent } from './products/list/list.component';
import { NewComponent } from './products/new/new.component';
import { EditComponent } from './products/edit/edit.component';
import { ProducthomeComponent } from './products/producthome/producthome.component';
import { ProductsService } from './products.service';


@NgModule({
  declarations: [
    AppComponent,
    WeatherapiComponent,
    SeattleWeatherComponent,
    CityweatherComponent,
    ShintocoinComponent,
    HomeComponent,
    MineComponent,
    BuyComponent,
    SellComponent,
    LedgerComponent,
    TransactionComponent,
    ProductsComponent,
    ListComponent,
    NewComponent,
    EditComponent,
    ProducthomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpService, ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
