import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/compat/firestore";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Pizza } from '../interfaces/pizza';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class PizzasService {

  myDate = new Date();
  pizzaColleccion!: AngularFirestoreCollection<Pizza>;
  pizzas!: Observable<Pizza[]>;
  pizza!: Observable<Pizza>;

  constructor(private db: AngularFirestore) { 
    this.pizzaColleccion = db.collection('pizzas',ref => ref);
  }
  

  getPizzas(): Observable<Pizza[]>{
    this.pizzas = this.pizzaColleccion.snapshotChanges().pipe(
      map(cambios =>{
        return cambios.map(accion =>{
          const datos = accion.payload.doc.data() as Pizza;
          datos.nombre = accion.payload.doc.id;
          return datos;
        })
      })
    );
    return this.pizzas;
  }


  agregarPizza(pizza: Pizza) {
    console.log("Llego al servicio");
    return this.db.collection('pizzas').doc(pizza.nombre).set({ ...pizza })
               .catch(error => {
                  console.error('Error al dar de alta', error);
                  throw error; 
               });
  }

  modificarPizza(pizza: Pizza) {
    this.pizzaColleccion.doc(pizza.nombre).update({ ...pizza })
      .then(() => {
        Swal.fire({
          icon: 'success',
          title: 'Modificado correctamente!',
          showConfirmButton: false,
          timer: 1500
        })
      })
      .catch(error => {
        Swal.fire({
          icon: 'error',
          title: 'Error al modificar la pizza!',
          showConfirmButton: false,
          timer: 1500
        })
      });
  }

  borrarPizza(pizza: any) {
    return this.pizzaColleccion.doc(pizza.nombre).delete()
      .then(() => {
        Swal.fire({
          icon: 'success',
          title: 'Pizza eliminada correctamente!',
          showConfirmButton: false,
          timer: 1500
        });
      })
      .catch(error => {
        Swal.fire({
          icon: 'error',
          title: 'Error al eliminar la pizza!',
          showConfirmButton: false,
          timer: 1500
        });
      });
  }

}