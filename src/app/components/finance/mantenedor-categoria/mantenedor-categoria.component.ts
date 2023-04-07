import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef, ViewEncapsulation } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';


@Component({
  selector: 'app-mantenedor-categoria',
  templateUrl: './mantenedor-categoria.component.html',
  styleUrls: ['./mantenedor-categoria.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class MantenedorCategoriaComponent implements OnInit {
  
  vars = [
    {
      name: 'Saldo Final del Banco Mes Anterior',
      mount: 1000000,
      date: '2021-01-01',
      link: 'flujo-efectivo'
    },
    {
      name: 'Total Ingresos',
      mount: 1000000,
      date: '2021-01-01',
      link: 'flujo-efectivo'
    },
    {
      name: 'Total Costos y Gastos',
      mount: 1000000,
      date: '2021-01-01',
      link: 'flujo-efectivo'
    },
    {
      name: 'Total Costos de Explotación',
      mount: 1000000,
      date: '2021-01-01',
      link: 'flujo-efectivo'
    },
    {
      name: 'Total Gastos',
      mount: 1000000,
      date: '2021-01-01',
      link: 'flujo-efectivo'
    },
    {
      name: 'Aumento y Disminución de Activos',
      mount: 1000000,
      date: '2021-01-01',
      link: 'flujo-efectivo'
    },
    {
      name: 'Aumento y Disminución de Pasivos',
      mount: 1000000,
      date: '2021-01-01',
      link: 'flujo-efectivo'
    },
    {
      name: 'Saldo Final del Banco',
      mount: 1000000,
      date: '2021-01-01',
      link: 'flujo-efectivo'
    }
  ]

  catEgreso: any;
  subEgreso: any;
  subSubEgreso: any;
  indEgreso: any;

  catIngreso: any;
  subIngreso: any;
  subSubIngreso: any;
  indIngreso: any;

  catActivo: any;
  subCatActivo: any;
  indActivo: any;
  subIndActivo: any;

  catPasivo: any;
  subPasivo: any;
  subSubPasivo: any;
  indPasivo: any;

  catPatri: any;
  subPatri: any;
  subSubPatri: any;
  indPatri: any;

  constructor(private data: CategoryService) {
  }

  ngOnInit(): void {

    this.data.getCategory().subscribe((data: any) => {
      this.catActivo = data;
    });

    this.data.getSubCategoria().subscribe((data: any) => {
      this.subCatActivo = data;
    });

    this.data.getIndicadores().subscribe((data: any) => {
      this.indActivo = data;
    });

    this.data.getSubIndicadores().subscribe((data: any) => {
      this.subIndActivo = data;
    });
  }

  
  click(any: any) {
    console.log(any);    
  }

  cerrarMes(){
    console.log('cerrar mes');
  }

  addCategory() {
  }

  editCategory() {
  }

  removeCategory() {
  }


  


}






