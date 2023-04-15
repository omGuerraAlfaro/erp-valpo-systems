import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { VtigerService } from 'src/app/services/vtiger.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private router: Router, private auth: AuthService, private data: VtigerService){}

  countVtiger: any;
  ngOnInit(): void {
    this.data.getCompanyInfo().subscribe((data: any) => {
      this.countVtiger = data.length;
      console.log(this.countVtiger);
    });
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
        this.auth.logout();
        location.reload();
      } else if (result.dismiss === Swal.DismissReason.cancel) {
      }
    });


    
  }



}
