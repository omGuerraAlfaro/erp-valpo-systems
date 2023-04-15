import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { CategoryInterface } from 'src/app/interfaces/category';
import { CategoryService } from 'src/app/services/category.service';
import { VtigerService } from 'src/app/services/vtiger.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-category-factura',
  templateUrl: './category-factura.component.html',
  styleUrls: ['./category-factura.component.css']
})
export class CategoryFacturaComponent implements OnInit {
  catActivo: any;
  subCatActivo: any;
  indActivo: any;
  subIndActivo: any;

  dataVtiger: any;
  dataCategoriasSelect:any
  dataCategorizarSelect: any

  constructor(private router: Router, private data: VtigerService, public dataCategorias: CategoryService, private route: ActivatedRoute) { }
  currentRoute = this.route.snapshot.url[0].path;

  categorizarGroup = new FormGroup({
    id_categoria: new FormControl(''),
    id_subcategoria: new FormControl(''),
    id_indicador: new FormControl(''),
    id_subindicador: new FormControl(''),
  });

  ngOnInit(): void {
    this.data.getCompanyInfo().subscribe((data: any) => {
      this.dataVtiger = data;
      console.log(this.dataVtiger);
    });

    //data de categorias por tipo.
    //Activos
    this.dataCategorias.getCategoryAct().subscribe((data: CategoryInterface[]) => {
      this.catActivo = data;
      console.log(this.catActivo);
    });
    this.dataCategorias.getCategorySubAct().subscribe((data: CategoryInterface[]) => {
      this.subCatActivo = data;
      console.log(this.subCatActivo);
    });
    this.dataCategorias.getCategoryIndAct().subscribe((data: CategoryInterface[]) => {
      this.indActivo = data;
      console.log(this.indActivo);
    });
    this.dataCategorias.getCategorySubIndAct().subscribe((data: CategoryInterface[]) => {
      this.subIndActivo = data;
      console.log(this.subIndActivo);
    });
  }

  dataCategorizar(data: any) {
    this.dataCategorizarSelect = {
      invoice_no: data.invoice_no,
      invoicedate: data.invoicedate,
      invoicestatus: data.invoicestatus,
      userlabel: data.userlabel,
      accountname: data.accountname,
      subject: data.subject,
      total: data.total
    }
    console.log(this.dataCategorizarSelect);
    return this.dataCategorizarSelect;
  }

  categorizarInsert() {
    const { invoice_no, invoicedate, invoicestatus, userlabel, accountname, subject, total } = this.dataCategorizarSelect;
    this.dataCategoriasSelect = {
      categoriaSelect: this.categorizarGroup.value.id_categoria,
      subCategoriaSelect: this.categorizarGroup.value.id_subcategoria,
      indicadorSelect: this.categorizarGroup.value.id_indicador,
      subIndicadorSelect: this.categorizarGroup.value.id_subindicador,
    }
    this.dataCategorias.addMovimiento(invoice_no, invoicedate, invoicestatus, userlabel, accountname, subject, total,
       this.dataCategoriasSelect.categoriaSelect,
       this.dataCategoriasSelect.subCategoriaSelect,
       this.dataCategoriasSelect.indicadorSelect,
       this.dataCategoriasSelect.subIndicadorSelect).subscribe((data: any) => {
      console.log(data);
      console.log("Movimiento insertado correctamente");
      /* ORDENAR INSERT */
    });
  }

  eliminar() {
    Swal.fire({
      title: '¿Estás seguro?',
      text: '¿Deseas eliminar el movimiento seleccionado?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, Eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.value) {
        this.router.navigate(['/resumen-libro']);
      } else if (result.dismiss === Swal.DismissReason.cancel) {
      }
    });
  }
  cerrarMes() {
    Swal.fire({
      title: '¿Estás seguro?',
      text: '¿Deseas cerrar el mes actual?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Sí, Cerrar Mes',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.value) {
        this.router.navigate(['/resumen-libro']);
      } else if (result.dismiss === Swal.DismissReason.cancel) {
      }
    });
  }

  closeModal() {
    const extras: NavigationExtras = {
      state: {
        url: this.currentRoute
      }
    };
    this.router.navigate(['/content'], extras);
  }
}
