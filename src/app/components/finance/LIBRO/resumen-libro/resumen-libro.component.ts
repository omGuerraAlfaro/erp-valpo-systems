import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Route, Router } from '@angular/router';
import { TablaLibroInterface } from 'src/app/interfaces/tablaLibroInterface';
import { CategoryService } from 'src/app/services/category.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-resumen-libro',
  templateUrl: './resumen-libro.component.html',
  styleUrls: ['./resumen-libro.component.css']
})
export class ResumenLibroComponent implements OnInit {
  table:any
  
  currentRoute = this.route.snapshot.url[0].path;
  constructor(private router: Router, private data: CategoryService, private route: ActivatedRoute) { }
  
  ngOnInit(): void {
    this.data.getMovimientos().subscribe((data: TablaLibroInterface) => {
      this.table = data;    
    });
  }

  eliminar(id: any) {
    Swal.fire({
      title: '¿Estás seguro?',
      text: '¿Deseas eliminar el movimiento seleccionado?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, Eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.value) {
        this.data.deleteMovimiento(id).subscribe((data: any) => {
          console.log("Movimiento eliminado correctamente");
          const extras: NavigationExtras = {
            state: {
              url: this.currentRoute
            }
          };
          this.router.navigate(['/content'], extras);
        });
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
