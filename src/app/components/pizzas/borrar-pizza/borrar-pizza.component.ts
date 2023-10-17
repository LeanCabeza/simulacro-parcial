import { Component, OnInit, Input } from '@angular/core';
import { Pizza } from 'src/app/interfaces/pizza';
import { PizzasService } from 'src/app/services/pizzas.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-borrar-pizza',
  templateUrl: './borrar-pizza.component.html',
  styleUrls: ['./borrar-pizza.component.css']
})
export class BorrarPizzaComponent implements OnInit {

  @Input() pizza: Pizza | null;

  constructor(private pizzaService:PizzasService) { }

  ngOnInit() {
  }

  borrarPizza(){
    Swal.fire({
      title: 'Estas seguro?',
      text: "Mira que no hay vuelta atras eh!",
      icon: 'warning',
      showCancelButton: false,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, borralo nomas!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.pizzaService.borrarPizza(this.pizza);
        this.pizza = null;
      }
    })
  }

}
