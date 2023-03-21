import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/interfaces/category';
import { DataCategoryService } from 'src/app/services/data-category.service';


@Component({
  selector: 'app-mantenedor-categoria',
  templateUrl: './mantenedor-categoria.component.html',
  styleUrls: ['./mantenedor-categoria.component.css']
})
export class MantenedorCategoriaComponent implements OnInit {


  infoCategorias: any[] = [];


  infoActivo: any;
  infoActivo2: any;
  infoActivo3: Array<any> = [];
  infoActivo4: any;
  info: any;
  info2: any;

  infoPasivo: any;
  infoPatrimonio: any;
  infoIngreso: any;
  infoEgreso: any;

  constructor(private data: DataCategoryService) { }

  ngOnInit(): void {
    this.data.getCategory().subscribe((data) => {
      // console.log(Object.entries(data));
      // console.log(Object.values(data));

      this.infoActivo = data.activo;
      // console.log(this.infoActivo);

      this.infoActivo.map((item: any) => {
        this.infoCategorias.push(item);
        this.infoCategorias.filter((item: any) => {
          console.log(item.activo_circulante);
          this.infoActivo2 = item.activo_circulante;
        });
        this.infoActivo2.flatMap((item: any) => {
          // console.log(item);
          const activos = Object.values(item);
          // console.log(activos);
          activos.map((item: any) => {
            // console.log(item);
            this.infoActivo3 = item
          });
          console.log(this.infoActivo3);

          this.infoActivo3.flatMap((item: any) => {
            // console.log(item);

            this.infoActivo4 = Object.values(item);
            console.log(this.infoActivo4);
          });

          // this.infoActivo3.map((item: any) => {
          //   console.log(item)
          //   this.info = Object.values(item);
          //   const [cod, nombre_cod] = this.info;
          //   this.info2 = [
          //     cod,
          //     nombre_cod
          //   ];
          // });


        });

      });
    });

  }
}
