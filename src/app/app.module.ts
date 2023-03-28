import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import 'bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { SidebarComponent } from './components/template/sidebar/sidebar.component';
import { HeaderComponent } from './components/template/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ContentComponent } from './components/template/content/content.component';

//Clientes
import { ClientComponent } from './components/client/client.component';

//Finanzas
import { FacturaComponent } from './components/finance/factura/factura.component';
import { OrdenCompraComponent } from './components/finance/orden-compra/orden-compra.component';
import { FlujoCajaComponent } from './components/finance/flujo-caja/flujo-caja.component';
import { FlujoEfectivoComponent } from './components/finance/flujo-efectivo/flujo-efectivo.component';
import { PreEfectivoComponent } from './components/finance/pre-efectivo/pre-efectivo.component';

//Libro de banco
import { LibroBancoComponent } from './components/finance/LIBRO/libro-banco/libro-banco.component';
import { Sidebar2Component } from './components/template/sidebar2/sidebar2.component';
import { PasivosComponent } from './components/finance/LIBRO//pasivos/pasivos.component';
import { ActivosComponent } from './components/finance/LIBRO/activos/activos.component';
import { PatrimonioComponent } from './components/finance/LIBRO//patrimonio/patrimonio.component';
import { IngresosComponent } from './components/finance/LIBRO//ingresos/ingresos.component';
import { EgresosComponent } from './components/finance/LIBRO//egresos/egresos.component';
import { MantenedorCategoriaComponent } from './components/finance/mantenedor-categoria/mantenedor-categoria.component';
import { CategoryFacturaComponent } from './components/finance/category-factura/category-factura.component';
import { RemuneracionesComponent } from './components/rrhh/remuneraciones/remuneraciones.component';
import { ColaboradoresComponent } from './components/rrhh/colaboradores/colaboradores.component';
import { MountPipe } from './pipes/mount.pipe';
import { ResumenMesComponent } from './components/finance/LIBRO/resumen-mes/resumen-mes.component';

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
    ResumenMesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
