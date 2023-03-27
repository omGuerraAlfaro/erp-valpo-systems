import { Component, OnInit } from '@angular/core';

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


  constructor() { 
  }

  ngOnInit(): void {    
  }
  

}
