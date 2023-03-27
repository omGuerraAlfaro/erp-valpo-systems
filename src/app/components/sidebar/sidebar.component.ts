import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private router: Router){}

  ngOnInit(): void {
  }


  logout() {
    Swal.fire({
      title: '¿Estás seguro?',
      text: '¿Deseas Cerrar Sesión?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, Cerrar Sesión',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.value) {
        this.router.navigate(['/login']);
        localStorage.removeItem('ingresado');
        location.reload();
      } else if (result.dismiss === Swal.DismissReason.cancel) {
      }
    });

  }



}
