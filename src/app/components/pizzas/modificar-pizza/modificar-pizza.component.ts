import { Component, OnInit, Input } from '@angular/core';
import { Pizza } from 'src/app/interfaces/pizza';
import { PizzasService } from 'src/app/services/pizzas.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modificar-pizza',
  templateUrl: './modificar-pizza.component.html',
  styleUrls: ['./modificar-pizza.component.css']
})
export class ModificarPizzaComponent implements OnInit {

  @Input() pizza: Pizza | null;


  constructor(private pizzaService: PizzasService) { }

  ngOnInit() {
  }

  modificarPizza() {
    if(this.pizza != null){
      this.pizzaService.modificarPizza(this.pizza);
      this.pizza = null;
    }else{
      Swal.fire({
        icon: 'error',
        title: '❌ No seleccionaste una pizza!',
        showConfirmButton: false,
        timer: 1500
      })
    }
  }

}
