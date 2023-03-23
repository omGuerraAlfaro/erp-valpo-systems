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
      date: '2021-01-01'
    },
    {
      name: 'Ingresos Menos Costos y Gastos', 
      mount: 1000000,
      date: '2021-01-01'
    },
    {
      name: 'Total Costos y Gastos',
      mount: 1000000,
      date: '2021-01-01'
    },
    {
      name: 'Total Costos de Explotación',
      mount: 1000000,
      date: '2021-01-01'
    },
    {
      name: 'Total Gastos',
      mount: 1000000,
      date: '2021-01-01'
    },
    {
      name: 'Saldo Final Caja',
      mount: 1000000,
      date: '2021-01-01'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
