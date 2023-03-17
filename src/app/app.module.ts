import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import 'bootstrap';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/template/home/home.component';
import { LoginComponent } from './components/template/login/login.component';
import { ContentComponent } from './components/template/content/content.component';
import { ClientComponent } from './components/client/client.component';
import { FacturaComponent } from './components/factura/factura.component';
import { OrdenCompraComponent } from './components/orden-compra/orden-compra.component';
import { FlujoCajaComponent } from './components/flujo-caja/flujo-caja.component';
import { FlujoEfectivoComponent } from './components/flujo-efectivo/flujo-efectivo.component';
import { PreEfectivoComponent } from './components/pre-efectivo/pre-efectivo.component';
import { LibroBancoComponent } from './components/libro-banco/libro-banco.component';
import { Sidebar2Component } from './components/sidebar2/sidebar2.component';
import { PasivosComponent } from './components/pasivos/pasivos.component';
import { ActivosComponent } from './components/activos/activos.component';
import { PatrimonioComponent } from './components/patrimonio/patrimonio.component';
import { IngresosComponent } from './components/ingresos/ingresos.component';
import { EgresosComponent } from './components/egresos/egresos.component';

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
    EgresosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
