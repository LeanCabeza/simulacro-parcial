import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { authGuard } from './guards/auth.guard';
import { RepartidorDetalleComponent } from './components/repartidor-detalle/repartidor-detalle.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'altaRepartidor',
    canActivate: [authGuard],
    loadChildren: () => import('./modules/alta-repartidor/alta-repartidor-routing.module').then((m) => m.AltaRepartidorRoutingModule)
  },
  { path: 'repartidorDetalle', component: RepartidorDetalleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
