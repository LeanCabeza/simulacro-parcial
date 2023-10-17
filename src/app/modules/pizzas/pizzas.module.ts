import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PizzasRoutingModule } from './pizzas-routing.module';
import { PizzasComponent } from 'src/app/components/pizzas/pizzas.component';
import { BorrarPizzaComponent } from 'src/app/components/pizzas/borrar-pizza/borrar-pizza.component';
import { ListaPizzasComponent } from 'src/app/components/pizzas/lista-pizzas/lista-pizzas.component';
import { ModificarPizzaComponent } from 'src/app/components/pizzas/modificar-pizza/modificar-pizza.component';
import { CrearPizzaComponent } from 'src/app/components/pizzas/crear-pizza/crear-pizza.component';


@NgModule({
  declarations: [
    PizzasComponent,
    BorrarPizzaComponent,
    ListaPizzasComponent,
    ModificarPizzaComponent,
    CrearPizzaComponent
  ],
  imports: [
    CommonModule,
    PizzasRoutingModule
  ]
})
export class PizzasModule { }
