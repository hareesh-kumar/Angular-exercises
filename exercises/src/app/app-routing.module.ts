import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
import { ProducthomeComponent } from './products/producthome/producthome.component';
import { ListComponent } from './products/list/list.component';
import { EditComponent } from './products/edit/edit.component';
import { NewComponent } from './products/new/new.component';

const routes: Routes = [
  {path: 'weather' , component : WeatherapiComponent, children : [
    { path: 'seattle' , component : SeattleWeatherComponent },
    { path: 'san jose,us' , component : CityweatherComponent },
    { path: 'burbank' , component : CityweatherComponent },
    { path: 'dallas' , component : CityweatherComponent },
    { path: 'washington dc.,us' , component : CityweatherComponent },
    { path: 'chicago' , component : CityweatherComponent }
  ]},
  { path: 'shintocoin', component : ShintocoinComponent, children : [
      { path: '' , component: HomeComponent },
      { path: 'mine' , component: MineComponent },
      { path: 'buy' , component: BuyComponent },
      { path: 'sell' , component: SellComponent },
      { path: 'ledger' , component: LedgerComponent },
      { path: 'transaction/:id' , component: TransactionComponent },
/*       { path: '' , pathMatch: 'full' , redirectTo: '/shintocoin'}, */
      { path: '**', redirectTo: '/shintocoin' }
  ]},
  { path: 'products', component : ProductsComponent, children : [
      { path: '' , component: ProducthomeComponent },
      { path: 'products' , component: ListComponent },
      { path: 'products/edit/:id' , component: EditComponent },
      { path: 'new' , component: NewComponent },
      { path: '**', redirectTo: '/products'}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
