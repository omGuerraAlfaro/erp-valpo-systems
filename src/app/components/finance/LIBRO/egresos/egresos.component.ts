import { Component, OnInit } from '@angular/core';
import { CategoryInterface } from 'src/app/interfaces/category';
import { DataCategory2Service } from 'src/app/services/data-category2.service';


@Component({
  selector: 'app-egresos',
  templateUrl: './egresos.component.html',
  styleUrls: ['./egresos.component.css']
})
export class EgresosComponent implements OnInit {
  
  catEgreso: any;
  subEgreso: any;
  subSubEgreso: any;
  indEgreso: any;

  constructor(public data: DataCategory2Service) { }

  ngOnInit(): void {
    //activos
    this.data.getCategoryEgresoValor().subscribe((data) => {
      //categoria
      const { categoria } = data;
      const cat = [categoria];
      cat.map((categoria: { cod: any; nombre_cod: any; valor: any;}) => ({
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
      sub.filter((sub_categoria: { cod: any; nombre_cod: any; valor: any; index_sub:any; }) => ({
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
      const dataSubIndex = sub_categoria.flatMap(function (sub_categoria: { cod: any; nombre_cod: any; valor:any; index_sub: any; }) {
        return sub_categoria.index_sub.map(function (subCategoria: { cod: any; nombre_cod: any; valor:any; indicador: any }) {
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

  }

}
