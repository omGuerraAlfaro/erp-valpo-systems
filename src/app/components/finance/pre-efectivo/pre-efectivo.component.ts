import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pre-efectivo',
  templateUrl: './pre-efectivo.component.html',
  styleUrls: ['./pre-efectivo.component.css']
})
export class PreEfectivoComponent implements OnInit {


  vars = [
    {
      name: 'Total Gastos Presupuestados',
      mount: 1000000,
      date: '2021-01-01'
    },
    {
      name: 'EBITDA',
      mount: 1000000,
      date: '2021-01-01'
    }
  ]
  
  constructor() { }

  ngOnInit(): void {
  }

}
