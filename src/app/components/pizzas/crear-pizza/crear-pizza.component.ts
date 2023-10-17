import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Pizza } from 'src/app/interfaces/pizza';
import { PizzasService } from 'src/app/services/pizzas.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crear-pizza',
  templateUrl: './crear-pizza.component.html',
  styleUrls: ['./crear-pizza.component.css']
})
export class CrearPizzaComponent implements OnInit {

  pizza: Pizza = {};
  pizzaForm: FormGroup;


  constructor(private pizzasService: PizzasService,
    private fb: FormBuilder) {
    this.pizzaForm = this.fb.group({
      nombre: ['', Validators.required],
      ingredientes: ['', Validators.required],
      precio: ['', [Validators.required, Validators.min(0.01)]],
      peso: ['', [Validators.required, Validators.min(500), Validators.max(1000)]]
    });
  }

  ngOnInit() {
  }

  crearPizza() {
      this.pizzasService.agregarPizza(this.pizza)
        .then(() => {
          Swal.fire({
            icon: 'success',
            title: 'Dado de alta correctamente!',
            showConfirmButton: false,
            timer: 1500
          })
          this.pizza = {};
        })
        .catch(error => {
          Swal.fire({
            icon: 'error',
            title: 'Error en el alta',
            showConfirmButton: false,
            timer: 1500
          })
        });
    } 
}