import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
  /* DATA SELECCIÓN MODAL CATEGORIZADOR */
  dataCat: any;

  subCatActivo: any;
  indActivo: any;
  subIndActivo: any;  
  
  subCatPasivo: any;
  indPasivo: any;
  subIndPasivo: any;
  
  subCatPatri: any;
  indPatri: any;  
  subIndPatri: any;
  
  subCatIngreso: any;
  indIngreso: any;
  subIndIngreso: any;
  
  subCatEgreso: any;
  indEgreso: any;
  subIndEgreso: any;

  tablasSecundarias = {
    activo: false,
    pasivo: false,
    patrimonio: false,
    ingreso: false,
    egreso: false
  };
  /* ********************* */
  
  dataVtiger: any;
  dataCategoriasSelect: any
  dataCategorizarSelect: any
  
  constructor(private router: Router, private datav: VtigerService, public data: CategoryService, private route: ActivatedRoute) { }
  currentRoute = this.route.snapshot.url[0].path;
  
  categorizarGroup = new FormGroup({
    id_categoria: new FormControl('', Validators.required),
    id_subcategoria: new FormControl(''),
    id_indicador: new FormControl(''),
    id_subindicador: new FormControl(''),
  });

  ngOnInit(): void {
    this.datav.getCompanyInfo().subscribe((data: any) => {
      this.dataVtiger = data;
      console.log(this.dataVtiger);
    });

    //data desde subcategoria... por categoria
    //categorias.
    this.data.getAllCategory().subscribe((data: any) => {
      this.dataCat = data;  
    });
    //Activos
    this.data.getCategorySubAct().subscribe((data: CategoryInterface[]) => {
      this.subCatActivo = data;
    });
    this.data.getCategoryIndAct().subscribe((data: CategoryInterface[]) => {
      this.indActivo = data;
    });
    this.data.getCategorySubIndAct().subscribe((data: CategoryInterface[]) => {
      this.subIndActivo = data;
    });

    /* *************************************************************************** */
    /* *************************************************************************** */
    //Pasivos
    this.data.getCategorySubPas().subscribe((data: CategoryInterface[]) => {
      this.subCatPasivo = data;
    });
    this.data.getCategoryIndPas().subscribe((data: CategoryInterface[]) => {
      this.indPasivo = data;
    });
    this.data.getCategorySubIndPas().subscribe((data: CategoryInterface[]) => {
      this.subIndPasivo = data;
    });
    /* *************************************************************************** */
    /* *************************************************************************** */
    //Patrimonio
    this.data.getCategorySubPat().subscribe((data: CategoryInterface[]) => {
      this.subCatPatri = data;
    });
    this.data.getCategoryIndPat().subscribe((data: CategoryInterface[]) => {
      this.indPatri = data;
    });
    this.data.getCategorySubIndPat().subscribe((data: CategoryInterface[]) => {
      this.subIndPatri = data;
    });
    /* *************************************************************************** */
    /* *************************************************************************** */
    //Ingresos
    this.data.getCategorySubIng().subscribe((data: CategoryInterface[]) => {
      this.subCatIngreso = data;
    });
    this.data.getCategoryIndIng().subscribe((data: CategoryInterface[]) => {
      this.indIngreso = data;
    });
    this.data.getCategorySubIndIng().subscribe((data: CategoryInterface[]) => {
      this.subIndIngreso = data;
    });
    /* *************************************************************************** */
    /* *************************************************************************** */
    //Egresos
    this.data.getCategorySubEgr().subscribe((data: CategoryInterface[]) => {
      this.subCatEgreso = data;
    }
    );
    this.data.getCategoryIndEgr().subscribe((data: CategoryInterface[]) => {
      this.indEgreso = data;
    });
    this.data.getCategorySubIndEgr().subscribe((data: CategoryInterface[]) => {
      this.subIndEgreso = data;
    });
  }

  dataCategorizar(data: any) {
    this.dataCategorizarSelect = {
      id: '',
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
  /* TERMINANDO SELECT CATEGORIA MODAL() => {
    FALTA TOTALIZAR... POR CATEGORIA. 
  }

  */
  categorizarInsert() {
    let estado = '';
    let codigoContable = 111111;
    let salidasLibro = 0;
    let entradasLibro = 0;
    let saldoLibro = 0;
    const { id, invoice_no, invoicedate, invoicestatus, userlabel, accountname, subject, total } = this.dataCategorizarSelect;
    this.dataCategoriasSelect = {
      categoriaSelect: this.categorizarGroup.value.id_categoria,
      subCategoriaSelect: this.categorizarGroup.value.id_subcategoria,
      indicadorSelect: this.categorizarGroup.value.id_indicador,
      subIndicadorSelect: this.categorizarGroup.value.id_subindicador,
    }
    this.data.addMovimiento(id, invoice_no, invoicedate, codigoContable, subject, accountname, total, entradasLibro, saldoLibro,
      this.dataCategoriasSelect.categoriaSelect,
      this.dataCategoriasSelect.subCategoriaSelect,
      this.dataCategoriasSelect.indicadorSelect,
      this.dataCategoriasSelect.subIndicadorSelect).subscribe((data: any) => {
        console.log("Movimiento insertado correctamente");
      });
  }


  //Habilitar Tablas para selección de categorias.
  actualizarTablasSecundarias() {
    const categoriaSeleccionada = this.categorizarGroup.value.id_categoria;
    switch (categoriaSeleccionada) {
      case '0':
        this.tablasSecundarias.activo = false;
        this.tablasSecundarias.pasivo = false;
        this.tablasSecundarias.patrimonio = false;
        this.tablasSecundarias.ingreso = false;
        this.tablasSecundarias.egreso = false;
        break;
      case '1':
        this.tablasSecundarias.activo = true;
        this.tablasSecundarias.pasivo = false;
        this.tablasSecundarias.patrimonio = false;
        this.tablasSecundarias.ingreso = false;
        this.tablasSecundarias.egreso = false;
        break;
      case '2':
        this.tablasSecundarias.activo = false;
        this.tablasSecundarias.pasivo = true;
        this.tablasSecundarias.patrimonio = false;
        this.tablasSecundarias.ingreso = false;
        this.tablasSecundarias.egreso = false;
        break;
      case '3':
        this.tablasSecundarias.activo = false;
        this.tablasSecundarias.pasivo = false;
        this.tablasSecundarias.patrimonio = true;
        this.tablasSecundarias.ingreso = false;
        this.tablasSecundarias.egreso = false;
        break;
      case '4':
        this.tablasSecundarias.activo = false;
        this.tablasSecundarias.pasivo = false;
        this.tablasSecundarias.patrimonio = false;
        this.tablasSecundarias.ingreso = true;
        this.tablasSecundarias.egreso = false;
        break;
      case '5':
        this.tablasSecundarias.activo = false;
        this.tablasSecundarias.pasivo = false;
        this.tablasSecundarias.patrimonio = false;
        this.tablasSecundarias.ingreso = false;
        this.tablasSecundarias.egreso = true;
        break;
      default:
        break;
    }
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
