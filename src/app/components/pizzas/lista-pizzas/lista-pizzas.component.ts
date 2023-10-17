import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Pizza } from 'src/app/interfaces/pizza';
import { PizzasService } from 'src/app/services/pizzas.service';

@Component({
  selector: 'app-lista-pizzas',
  templateUrl: './lista-pizzas.component.html',
  styleUrls: ['./lista-pizzas.component.css']
})
export class ListaPizzasComponent implements OnInit {
  
  pizzas: Pizza[] = [];
  @Output() selectedPizzaOutput = new EventEmitter<object>();

  constructor(private pizzasService: PizzasService) { }

  ngOnInit() {
    this.pizzasService.getPizzas().subscribe((pizzas) => {
      this.pizzas = pizzas;
    });
  }

  seleccionarPizza(pizza: any){
    console.log("Pizza emitido desde la lista",pizza)
    this.selectedPizzaOutput.emit(pizza)
  }

}
