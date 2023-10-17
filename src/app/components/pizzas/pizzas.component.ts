import { Component, Input, OnInit } from '@angular/core';
import { Pizza } from 'src/app/interfaces/pizza';

@Component({
  selector: 'app-pizzas',
  templateUrl: './pizzas.component.html',
  styleUrls: ['./pizzas.component.css']
})
export class PizzasComponent implements OnInit {
  
  @Input() pizza: Pizza;
  constructor() { }

  ngOnInit() {
  }

  recibirPizza(pizza: any){
    this.pizza = pizza;
  }

}