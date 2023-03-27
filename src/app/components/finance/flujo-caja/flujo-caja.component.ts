import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { DataCategory2Service } from 'src/app/services/data-category2.service';


@Component({
  selector: 'app-flujo-caja',
  templateUrl: './flujo-caja.component.html',
  styleUrls: ['./flujo-caja.component.css']
})
export class FlujoCajaComponent implements OnInit {
  catEgreso: any;
  subEgreso: any;
  subSubEgreso: any;
  indEgreso: any;

  catIngreso:any;
  subIngreso:any;
  subSubIngreso:any;
  indIngreso:any;

  vars = [
    {
      name: 'Saldo Anterior Caja Anterior',
      mount: 101230000,
      date: '2021-01-01',
      link: 'flujo-caja'
    },
    {
      name: 'Ingresos Menos Costos y Gastos',
      mount: 41231412,
      date: '2021-01-01',
      link: 'flujo-caja'
    },
    {
      name: 'Total Ingresos',
      mount: 1412312,
      date: '2021-01-01',
      link: 'flujo-caja'
    },
    {
      name: 'Total Costos y Gastos',
      mount: 1412312,
      date: '2021-01-01',
      link: 'flujo-caja'
    },
    {
      name: 'Total Costos de Explotación',
      mount: 4123123,
      date: '2021-01-01',
      link: 'flujo-caja'
    },
    {
      name: 'Total Gastos',
      mount: 1431231212,
      date: '2021-01-01',
      link: 'flujo-caja'
    },
    {
      name: 'Saldo Final Caja',
      mount: 100005543500,
      date: '2021-01-01',
      link: 'flujo-caja'
    }
  ]

  constructor(public data: DataCategory2Service) { }

  ngOnInit(): void {
    const myChart = new Chart('myChart', {
      type: 'bar',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
          label: 'Saldos Caja',
          data: [65, 59, 80, 81, 56, 55, 40],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

    //chart 2
    const myChart2 = new Chart('myChart2', {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
          label: 'Gasto Mensual',
          data: [14, 12, 13, 11, 12, 13, 14],
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: true
      }
    });

    //Egresos
    this.data.getCategoryEgresoValor().subscribe((data) => {
      //categoria
      const { categoria } = data;
      const cat = [categoria];
      cat.map((categoria: { cod: any; nombre_cod: any; valor: any; }) => ({
        cod: categoria.cod,
        nombre_cod: categoria.nombre_cod,
        valor: categoria.valor
      })
      );
      this.catEgreso = cat;
      console.log(this.catEgreso);

      //subcategoria activos
      const { sub_categoria } = categoria;
      const sub = sub_categoria;
      console.log(sub);
      sub.filter((sub_categoria: { cod: any; nombre_cod: any; valor: any; index_sub: any; }) => ({
        cod: sub_categoria.cod,
        nombre_cod: sub_categoria.nombre_cod,
        valor: sub_categoria.valor,
        index_sub: sub_categoria.index_sub
      })
      );
      this.subEgreso = sub;
      console.log(this.subEgreso);

      //indicadores activos
      const dataIndicadores = sub_categoria.flatMap(function (sub_categoria: { cod: any; nombre_cod: any; index_sub: any; }) {
        return sub_categoria.index_sub.map(function (subCategoria: { cod: any; nombre_cod: any; indicador: any }) {
          return subCategoria.indicador.map(function (indicador: { cod: any; nombre_cod: any; valor: any; }) {
            let cod_indicadores = indicador.cod
            let name_indicadores = indicador.nombre_cod
            let valor_indicadores = indicador.valor
            return {
              cod: cod_indicadores,
              nombre_cod: name_indicadores,
              valor: valor_indicadores,
            }
          });
        });
      });;
      this.indEgreso = dataIndicadores.flat();


      //sub indicadores activos
      const dataSubIndex = sub_categoria.flatMap(function (sub_categoria: { cod: any; nombre_cod: any; valor: any; index_sub: any; }) {
        return sub_categoria.index_sub.map(function (subCategoria: { cod: any; nombre_cod: any; valor: any; indicador: any }) {
          let cod_indicadores = subCategoria.cod
          let name_indicadores = subCategoria.nombre_cod
          let valor_indicadores = subCategoria.valor
          return {
            cod: cod_indicadores,
            nombre_cod: name_indicadores,
            valor: valor_indicadores,
          }
        });
      });
      console.log(dataSubIndex);
      this.subSubEgreso = dataSubIndex;
    });

    //Ingresos
    this.data.getCategoryIngresoValor().subscribe((data) => {
      //categoria
      const { categoria } = data;
      const cat = [categoria];
      cat.map((categoria: { cod: any; nombre_cod: any; valor: any; }) => ({
        cod: categoria.cod,
        nombre_cod: categoria.nombre_cod,
        valor: categoria.valor
      })
      );
      this.catIngreso = cat;
      console.log(this.catIngreso);

      //subcategoria activos
      const { sub_categoria } = categoria;
      const sub = sub_categoria;
      console.log(sub);
      sub.filter((sub_categoria: { cod: any; nombre_cod: any; valor: any; index_sub: any; }) => ({
        cod: sub_categoria.cod,
        nombre_cod: sub_categoria.nombre_cod,
        valor: sub_categoria.valor,
        index_sub: sub_categoria.index_sub
      })
      );
      this.subIngreso = sub;
      console.log(this.subIngreso);

      //indicadores activos
      const dataIndicadores = sub_categoria.flatMap(function (sub_categoria: { cod: any; nombre_cod: any; index_sub: any; }) {
        return sub_categoria.index_sub.map(function (subCategoria: { cod: any; nombre_cod: any; indicador: any }) {
          return subCategoria.indicador.map(function (indicador: { cod: any; nombre_cod: any; valor: any; }) {
            let cod_indicadores = indicador.cod
            let name_indicadores = indicador.nombre_cod
            let valor_indicadores = indicador.valor
            return {
              cod: cod_indicadores,
              nombre_cod: name_indicadores,
              valor: valor_indicadores,
            }
          });
        });
      });;
      this.indIngreso = dataIndicadores.flat();


      //sub indicadores activos
      const dataSubIndex = sub_categoria.flatMap(function (sub_categoria: { cod: any; nombre_cod: any; valor: any; index_sub: any; }) {
        return sub_categoria.index_sub.map(function (subCategoria: { cod: any; nombre_cod: any; valor: any; indicador: any }) {
          let cod_indicadores = subCategoria.cod
          let name_indicadores = subCategoria.nombre_cod
          let valor_indicadores = subCategoria.valor
          return {
            cod: cod_indicadores,
            nombre_cod: name_indicadores,
            valor: valor_indicadores,
          }
        });
      });
      console.log(dataSubIndex);
      this.subSubIngreso = dataSubIndex;
    });
    

  }

}
