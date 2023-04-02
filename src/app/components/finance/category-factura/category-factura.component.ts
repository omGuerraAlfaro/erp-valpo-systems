import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-category-factura',
  templateUrl: './category-factura.component.html',
  styleUrls: ['./category-factura.component.css']
})
export class CategoryFacturaComponent implements OnInit {

  table = [
    { id: 13243245, dateEmit: '2023-03-01', state: 'Emitida', emitFor: 'Omar Guerra', detail: 'Insumos Informaticos' },
    { id: 13243245, dateEmit: '2023-03-01', state: 'Emitida', emitFor: 'Omar Guerra', detail: 'Insumos Informaticos' },
    { id: 13243245, dateEmit: '2023-03-01', state: 'Emitida', emitFor: 'Omar Guerra', detail: 'Insumos Informaticos' },
    { id: 13243245, dateEmit: '2023-03-01', state: 'Emitida', emitFor: 'Omar Guerra', detail: 'Insumos Informaticos' },
    { id: 13243245, dateEmit: '2023-03-01', state: 'Emitida', emitFor: 'Omar Guerra', detail: 'Insumos Informaticos' },
    { id: 13243245, dateEmit: '2023-03-01', state: 'Emitida', emitFor: 'Omar Guerra', detail: 'Insumos Informaticos' },
    { id: 13243245, dateEmit: '2023-03-01', state: 'Emitida', emitFor: 'Omar Guerra', detail: 'Insumos Informaticos' },
    { id: 13243245, dateEmit: '2023-03-01', state: 'Emitida', emitFor: 'Omar Guerra', detail: 'Insumos Informaticos' },
    { id: 13243245, dateEmit: '2023-03-01', state: 'Emitida', emitFor: 'Omar Guerra', detail: 'Insumos Informaticos' },
  ]


  constructor(private router: Router) { 
  }

  ngOnInit(): void {    
  }
  
  eliminar() {
    Swal.fire({
      title: '¿Estás seguro?',
      text: '¿Deseas eliminar el movimiento seleccionado?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, Eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.value) {
        this.router.navigate(['/resumen-libro']);
      } else if (result.dismiss === Swal.DismissReason.cancel) {
      }
    });
  }
  cerrarMes() {
    Swal.fire({
      title: '¿Estás seguro?',
      text: '¿Deseas cerrar el mes actual?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Sí, Cerrar Mes',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.value) {
        this.router.navigate(['/resumen-libro']);
      } else if (result.dismiss === Swal.DismissReason.cancel) {
      }
    });
  }

}
