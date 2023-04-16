import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import 'bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MountPipe } from './pipes/mount.pipe';

import { SidebarComponent } from './components/template/sidebar/sidebar.component';
import { Sidebar2Component } from './components/template/sidebar2/sidebar2.component';
import { HeaderComponent } from './components/template/header/header.component';
import { ContentComponent } from './components/template/content/content.component';

//formato de fecha
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import { LOCALE_ID } from '@angular/core';
registerLocaleData(localeEs, 'es');

//components
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
//Clientes
import { ClientComponent } from './components/clientes-proveedores/client/client.component';
//Finanzas
import { FacturaComponent } from './components/finance/factura/factura.component';
import { OrdenCompraComponent } from './components/finance/orden-compra/orden-compra.component';
import { FlujoCajaComponent } from './components/finance/flujo-caja/flujo-caja.component';
import { FlujoEfectivoComponent } from './components/finance/flujo-efectivo/flujo-efectivo.component';
import { PreEfectivoComponent } from './components/finance/pre-efectivo/pre-efectivo.component';
import { CategoryFacturaComponent } from './components/finance/category-factura/category-factura.component';
//Libro de banco
import { LibroBancoComponent } from './components/finance/LIBRO/libro-banco/libro-banco.component';
import { PasivosComponent } from './components/finance/LIBRO//pasivos/pasivos.component';
import { ActivosComponent } from './components/finance/LIBRO/activos/activos.component';
import { PatrimonioComponent } from './components/finance/LIBRO//patrimonio/patrimonio.component';
import { IngresosComponent } from './components/finance/LIBRO//ingresos/ingresos.component';
import { EgresosComponent } from './components/finance/LIBRO//egresos/egresos.component';
import { MantenedorCategoriaComponent } from './components/finance/mantenedor-categoria/mantenedor-categoria.component';
//rrhh
import { ColaboradoresComponent } from './components/rrhh/colaboradores/colaboradores.component';
import { RemuneracionesComponent } from './components/rrhh/remuneraciones/remuneraciones.component';
import { ResumenLibroComponent } from './components/finance/LIBRO/resumen-libro/resumen-libro.component';
import { ProveedorComponent } from './components/clientes-proveedores/proveedor/proveedor.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    ContentComponent,
    ClientComponent,
    FacturaComponent,
    OrdenCompraComponent,
    FlujoCajaComponent,
    FlujoEfectivoComponent,
    PreEfectivoComponent,
    LibroBancoComponent,
    Sidebar2Component,
    PasivosComponent,
    ActivosComponent,
    PatrimonioComponent,
    IngresosComponent,
    EgresosComponent,
    MantenedorCategoriaComponent,
    CategoryFacturaComponent,
    RemuneracionesComponent,
    ColaboradoresComponent,
    MountPipe,
    ResumenLibroComponent,
    ProveedorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'es' },],
  bootstrap: [AppComponent]
})
export class AppModule { }
