import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { authGuard } from './guards/auth.guard';
import { RepartidorDetalleComponent } from './components/repartidor-detalle/repartidor-detalle.component';
import { PizzasComponent } from './components/pizzas/pizzas.component';
import { adminGuard } from './guards/admin.guard';
import { BadAccessComponent } from './components/bad-access/bad-access.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'badAccess', component: BadAccessComponent },
  {
    path: 'altaRepartidor',
    canActivate: [authGuard],
    loadChildren: () => import('./modules/alta-repartidor/alta-repartidor-routing.module').then((m) => m.AltaRepartidorRoutingModule)
  },
  {
    path: 'repartidorDetalle',
    canActivate: [authGuard],
    loadChildren: () => import('./modules/repartidor-detalle/repartidor-detalle-routing.module').then((m) => m.RepartidorDetalleRoutingModule)
  },
  {
    path: 'pizzas',
    canActivate: [authGuard,adminGuard],
    loadChildren: () => import('./modules/pizzas/pizzas-routing.module').then((m) => m.PizzasRoutingModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
