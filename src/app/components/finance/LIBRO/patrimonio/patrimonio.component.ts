import { Component, OnInit } from '@angular/core';
import { DataCategoryService } from 'src/app/services/data-category.service';

@Component({
  selector: 'app-patrimonio',
  templateUrl: './patrimonio.component.html',
  styleUrls: ['./patrimonio.component.css']
})
export class PatrimonioComponent implements OnInit {

  cat:any;
  sub:any;
  ind:any;
  constructor(public data: DataCategoryService) { }

  ngOnInit(): void {
    //activos
    this.data.getCategoryActivoValor().subscribe((data) => {
      const { categoria } = data;
      const { sub_categoria } = categoria;
      //categoria
      const dataCategoria = sub_categoria.map((categoria: { cod: any; nombre_cod: any; }) => ({
          cod: categoria.cod,
          nombre_cod: categoria.nombre_cod
        })
      );
      //subcategoria activos
      const dataSubCategoria = sub_categoria.flatMap(function (sub_categoria: { cod: any; nombre_cod: any; index_sub: any; }) {
        return sub_categoria.index_sub.map(function (subCategoria: { cod: any; nombre_cod: any; valor: any; indicador: any }) {
          let cod_subCategoria = subCategoria.cod
          let name_subCategoria = subCategoria.nombre_cod
          let valor_subCategoria = subCategoria.valor
          let index_indicador = subCategoria.indicador
          return {
            cod: cod_subCategoria,
            nombre_cod: name_subCategoria,
            valor: valor_subCategoria,
            indicador: index_indicador

          }
        });
      });
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
      });
      this.cat = dataCategoria;
      this.sub = dataSubCategoria
      this.ind = dataIndicadores.flat();
      console.log(this.cat);
      console.log(this.sub);
      
    });
  }

}
