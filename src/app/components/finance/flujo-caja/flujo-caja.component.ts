import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flujo-caja',
  templateUrl: './flujo-caja.component.html',
  styleUrls: ['./flujo-caja.component.css']
})
export class FlujoCajaComponent implements OnInit {

  vars = [
    {
      name: 'Saldo Anterior Caja Anterior',
      mount: 1000000,
      date: '2021-01-01',
      link: 'flujo-caja'
    },
    {
      name: 'Ingresos Menos Costos y Gastos', 
      mount: 1000000,
      date: '2021-01-01',
      link: 'flujo-caja'
    },
    {
      name: 'Total Costos y Gastos',
      mount: 1000000,
      date: '2021-01-01',
      link: 'flujo-caja'
    },
    {
      name: 'Total Costos de Explotación',
      mount: 1000000,
      date: '2021-01-01',
      link: 'flujo-caja'
    },
    {
      name: 'Total Gastos',
      mount: 1000000,
      date: '2021-01-01',
      link: 'flujo-caja'
    },
    {
      name: 'Saldo Final Caja',
      mount: 1000000,
      date: '2021-01-01',
      link: 'flujo-caja'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
