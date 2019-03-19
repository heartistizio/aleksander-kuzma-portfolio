import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SliderComponent} from './components/slider/slider.component';
import {AboutComponent} from './components/about/about.component';
import {ContactComponent} from './components/contact/contact.component';
import {PortfolioComponent} from './components/portfolio/portfolio.component';


const routes: Routes = [
  {path: '', component: SliderComponent},
  {path: 'about', component: AboutComponent},
  {path: 'portfolio', component: PortfolioComponent},
  {path: 'contact', component: ContactComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
